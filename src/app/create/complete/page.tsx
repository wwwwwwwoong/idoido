"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import StoryFlowLayout from "@/components/layout/StoryFlowLayout";
import Helper from "@/components/create/Helper";
// import { useAuth } from "@/lib/auth"; 
import BookViewer from "@/components/story/BookViewer";
import { ArrowRight, RefreshCw, Wand2, ChevronLeft } from "lucide-react";
import { GeneratedStory } from "@/lib/storyGenerator";
import { createClient } from "@/lib/supabase/client";
import ReadAloudButton from "@/components/story/ReadAloudButton";

export default function CreateCompletePage() {
    const router = useRouter();
    const [story, setStory] = useState<GeneratedStory | null>(null);
    const [character, setCharacter] = useState<any>(null); // Load character data
    const [isLoading, setIsLoading] = useState(true);
    const [signedUrls, setSignedUrls] = useState<Record<string, string>>({});
    const supabase = createClient();

    useEffect(() => {
        // Load data from storage
        const savedStory = localStorage.getItem("create_story");
        const savedCharacter = localStorage.getItem("create_character");

        if (savedStory) {
            setStory(JSON.parse(savedStory));
            setIsLoading(false);
        } else {
            // 정보가 없으면 레시피로 이동
            router.push("/create/recipe");
        }

        if (savedCharacter) setCharacter(JSON.parse(savedCharacter));
    }, [router]);

    // 2. Signed URL 생성 (이미지 로딩 권한 문제 해결)
    useEffect(() => {
        if (!story) return;

        const loadSignedUrls = async () => {
            const urls: Record<string, string> = {};
            const pathsToSign: string[] = [];

            // 수집: 표지, 페이지 이미지, 캐릭터 이미지
            if (story.coverImageUrl && !story.coverImageUrl.startsWith("http") && !story.coverImageUrl.startsWith("data:")) {
                pathsToSign.push(story.coverImageUrl);
            }
            story.pages.forEach(p => {
                if (p.imageUrl && !p.imageUrl.startsWith("http") && !p.imageUrl.startsWith("data:")) {
                    pathsToSign.push(p.imageUrl);
                }
            });
            if (character?.transformedImageUrl && !character.transformedImageUrl.startsWith("http") && !character.transformedImageUrl.startsWith("data:")) {
                pathsToSign.push(character.transformedImageUrl);
            } else if (character?.imageUrl && !character.imageUrl.startsWith("http") && !character.imageUrl.startsWith("data:")) {
                pathsToSign.push(character.imageUrl);
            }

            // 병렬 변환 (Proxy API 사용)
            await Promise.all(pathsToSign.map(async (path) => {
                try {
                    // Use server-side signing via API to bypass RLS issues
                    const res = await fetch("/api/storage/sign", {
                        method: "POST",
                        body: JSON.stringify({ path }),
                        headers: { "Content-Type": "application/json" }
                    });

                    if (res.ok) {
                        const data = await res.json();
                        if (data.signedUrl) {
                            urls[path] = data.signedUrl;
                        }
                    } else {
                        console.warn("Failed to sign url via API", path);
                    }
                } catch (e) {
                    console.error("Failed to sign url for", path, e);
                }
            }));

            setSignedUrls(urls);
        };

        loadSignedUrls();
    }, [story, character]); // supabase는 외부 변수이므로 의존성 제외 가능

    const handleNext = () => {
        // Navigate to Learning/Reward Page
        router.push("/create/learning");
    };

    // Helper: Signed URL이 있으면 쓰고, 없으면 Public URL 시도
    const getImageUrl = (path: string | undefined) => {
        if (!path) return "";
        if (path.startsWith("http") || path.startsWith("data:")) return path;
        return signedUrls[path] || supabase.storage.from("doodles").getPublicUrl(path).data.publicUrl;
    };

    if (isLoading || !story) {
        return (
            <StoryFlowLayout
                currentStep={4}
                title="동화책 완성"
                helper={
                    <Helper
                        character="droplet"
                        message="잠시만 기다려줘! 책을 엮고 있어..."
                        position="right"
                        style={{ marginBottom: 0 }}
                    />
                }
            >
                <div className="flex flex-col items-center justify-center h-[50vh]">
                    <Wand2 className="w-12 h-12 text-purple-500 animate-spin mb-4" />
                    <p className="text-gray-500 font-medium">이야기 책을 가져오고 있어요...</p>
                </div>
            </StoryFlowLayout>
        );
    }

    // Convert GeneratedStory to Book structure for viewer
    const bookData = {
        id: "preview-book",
        title: story.title,
        coverPath: getImageUrl(story.coverImageUrl) || story.coverColor, // 표지 이미지 적용
        coverColor: story.coverColor,
        scenes: story.pages.map((page, index) => ({
            id: `page-${index}`,
            order: index,
            storyText: page.content,
            sceneImagePath: getImageUrl(page.imageUrl),
            backgroundId: page.suggestedBackground || "forest",
            resultChoice: "SUCCESS",
            itemId: "none",
            verbId: "none"
        })),
        character: character ? {
            ...character,
            renderPath: getImageUrl(character.transformedImageUrl || character.imageUrl)
        } : undefined
    };

    return (
        <StoryFlowLayout
            currentStep={4}
            title="동화책 완성!"
            subtitle="세상에 하나뿐인 나만의 동화책이 완성되었어요."
            backHref="/create/story" // 스토리 미리보기로 돌아가기
            helper={
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <div style={{ marginTop: "40px" }}>
                        <ReadAloudButton
                            text={story?.pages?.map((p: any) => p.content).filter(Boolean).join(". ") || ""}
                            label="🔊 동화책 전체 듣기"
                        />
                    </div>
                    <Helper
                        character="whirlwind"
                        message="우와! 정말 멋진 동화책이야! 친구들에게 자랑해볼까?"
                        position="right"
                        style={{ marginBottom: 0 }}
                    />
                </div>
            }
            contentMaxWidth="1200px"
        >
            <div className="w-full flex flex-col items-center gap-8 py-4">

                {/* Book Viewer Container - 1536x1024 (3:2) Aspect Ratio */}
                <div className="relative w-full aspect-[3/2] shadow-2xl rounded-2xl overflow-hidden border-4 border-white bg-white/50 backdrop-blur-sm">
                    <BookViewer
                        book={bookData as any}
                        characterImageUrl={character?.transformedImageUrl || character?.imageUrl}
                    />
                </div>

                {/* Bottom Actions */}
                <div className="flex gap-4 w-full max-w-4xl justify-center mt-4 items-center">
                    <Button
                        size="lg"
                        variant="outline"
                        className="h-14 px-6 text-lg rounded-full border-2 border-gray-200 hover:bg-gray-50 text-gray-600"
                        onClick={() => router.push("/create/recipe")}
                    >
                        <RefreshCw className="mr-2 h-5 w-5" />
                        새로 만들기
                    </Button>

                    <div className="flex-1" /> {/* Spacer */}

                    <Button
                        size="lg"
                        variant="ghost"
                        className="h-14 px-6 text-lg rounded-full border border-gray-200 hover:bg-gray-50 text-gray-600"
                        onClick={() => router.push("/create/story")}
                    >
                        <ChevronLeft className="mr-2 h-5 w-5" />
                        이전 단계
                    </Button>

                    <Button
                        size="lg"
                        className="h-14 px-10 text-lg rounded-full shadow-xl shadow-purple-200 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white border-0"
                        onClick={handleNext}
                    >
                        학습하러 가기 <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </StoryFlowLayout>
    );
}
