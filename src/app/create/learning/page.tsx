"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import * as Icons from "lucide-react";
import { LibraryCard, StoryRecipe } from "@/lib/types/library";
import { personalityCards, roleCards, placeCards, eventCards, moodCards, learningTopicCards, learningCards } from "@/lib/libraryCards";
import { allItems } from "../scene/data";
import { RefreshCw } from "lucide-react";

import StoryFlowLayout from "@/components/layout/StoryFlowLayout";
import Helper from "@/components/create/Helper";
import { createClient } from "@/lib/supabase/client";

function base64ToBlob(base64: string) {
    const parts = base64.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
}

export default function CreateLearningPage() {
    const router = useRouter();
    const [recipe, setRecipe] = useState<StoryRecipe | null>(null);
    const [earnedCards, setEarnedCards] = useState<LibraryCard[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // 1. Load Recipe & Story from LocalStorage
        const savedRecipe = localStorage.getItem("create_recipe");
        const savedStory = localStorage.getItem("create_story");

        if (!savedRecipe || !savedStory) {
            router.push("/create/recipe");
            return;
        }

        const parsedRecipe: StoryRecipe = JSON.parse(savedRecipe);
        setRecipe(parsedRecipe);

        // 2. Determine Earned Cards
        const newEarnedCards: LibraryCard[] = [];

        if (parsedRecipe.learningTopic) {
            const topicVal = parsedRecipe.learningTopic as any;
            const topicId = typeof topicVal === 'string' ? topicVal : topicVal.id;
            const topicCard = learningTopicCards.find(c => c.id === topicId);
            if (topicCard) newEarnedCards.push(topicCard);
        }

        if (parsedRecipe.learningCards && parsedRecipe.learningCards.length > 0) {
            parsedRecipe.learningCards.forEach((cardId: string) => {
                const lCard = learningCards.find(c => c.id === cardId);
                if (lCard) newEarnedCards.push(lCard);
            });
        }

        if (parsedRecipe.role) {
            const roleVal = parsedRecipe.role as any;
            const roleId = typeof roleVal === 'string' ? roleVal : roleVal.id;
            const roleCard = roleCards.find(c => c.id === roleId);
            if (roleCard) newEarnedCards.push(roleCard);
        }
        if (parsedRecipe.place) {
            const placeVal = parsedRecipe.place as any;
            const placeId = typeof placeVal === 'string' ? placeVal : placeVal.id;
            const placeCard = placeCards.find(c => c.id === placeId);
            if (placeCard) newEarnedCards.push(placeCard);
        }
        if (parsedRecipe.personality) {
            const persVal = parsedRecipe.personality as any;
            const persId = typeof persVal === 'string' ? persVal : persVal.id;
            const persCard = personalityCards.find(c => c.id === persId);
            if (persCard) newEarnedCards.push(persCard);
        }
        if (parsedRecipe.event) {
            const eventVal = parsedRecipe.event as any;
            const eventId = typeof eventVal === 'string' ? eventVal : eventVal.id;
            const eventCard = eventCards.find(c => c.id === eventId);
            if (eventCard) newEarnedCards.push(eventCard);
        }
        if (parsedRecipe.mood) {
            const moodVal = parsedRecipe.mood as any;
            const moodId = typeof moodVal === 'string' ? moodVal : moodVal.id;
            const moodCard = moodCards.find(c => c.id === moodId);
            if (moodCard) newEarnedCards.push(moodCard);
        }

        // 씬에서 배치한 아이템 카드 추가
        const savedScene = localStorage.getItem("create_scene");
        if (savedScene) {
            try {
                const parsedScene = JSON.parse(savedScene);
                if (parsedScene.placedItemIds && Array.isArray(parsedScene.placedItemIds)) {
                    parsedScene.placedItemIds.forEach((itemNameOrId: string) => {
                        // ID나 이름으로 매칭
                        const item = allItems.find(i => i.id === itemNameOrId || i.name === itemNameOrId);
                        if (item) {
                            // 중복 체크
                            if (!newEarnedCards.find(c => c.name === item.name)) {
                                newEarnedCards.push({
                                    id: item.id,
                                    category: "object",
                                    name: item.name,
                                    description: "이야기 속 소중한 물건",
                                    icon: "Star",
                                    color: item.color,
                                    bgColor: `${item.color}20`,
                                    imagePath: item.imagePath,
                                });
                            }
                        }
                    });
                }
            } catch (e) {
                console.error("Failed to load scene items", e);
            }
        }

        const writerCard: LibraryCard = {
            id: "bonus_writer",
            category: "role",
            name: "꼬마 작가",
            description: "나만의 멋진 동화책을 완성했어요!",
            icon: "PenTool",
            color: "#8B5CF6",
            bgColor: "#EDE9FE",
            imagePath: "/images/cards/bonus-writer.webp",
        };
        newEarnedCards.push(writerCard);

        setEarnedCards(newEarnedCards);

    }, [router]);

    const handleComplete = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const savedRecipe = localStorage.getItem("create_recipe");
            const savedStory = localStorage.getItem("create_story");
            const savedScene = localStorage.getItem("create_scene"); // 단수형 사용
            const savedCharacter = localStorage.getItem("create_character");

            if (!savedRecipe || !savedStory) {
                throw new Error("필수 데이터가 누락되었습니다.");
            }

            const parsedRecipe = JSON.parse(savedRecipe);
            const parsedStory = JSON.parse(savedStory);
            const parsedScene = savedScene ? JSON.parse(savedScene) : null;
            const parsedCharacter = savedCharacter ? JSON.parse(savedCharacter) : null;

            // learningTopic이 객체일 수도 있고 문자열일 수도 있음
            const topicIdValue = typeof parsedRecipe.learningTopic === 'object'
                ? parsedRecipe.learningTopic?.id
                : parsedRecipe.learningTopic;

            const supabase = createClient();

            // 1. 표지 이미지 업로드 (Base64 -> Supabase)
            let coverPath = parsedStory.coverImageUrl || parsedStory.coverImage; // 필드명 호환성 (coverImageUrl이 맞음)
            if (coverPath && coverPath.startsWith("data:")) {
                try {
                    const blob = base64ToBlob(coverPath);
                    const fileExt = blob.type.split('/')[1] || 'png';
                    const fileName = `covers/${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
                    const { data, error } = await supabase.storage.from("doodles").upload(fileName, blob);
                    if (!error && data) coverPath = data.path;
                } catch (e) {
                    console.error("Cover upload failed", e);
                }
            }

            // 2. 스토리의 각 페이지를 씬으로 변환 (이미지 업로드 포함)
            let storyScenes: any[] = [];

            if (parsedStory.pages && Array.isArray(parsedStory.pages)) {
                storyScenes = await Promise.all(parsedStory.pages.map(async (page: any, index: number) => {
                    let imageUrl = page.imageUrl;
                    if (imageUrl && imageUrl.startsWith("data:")) {
                        try {
                            const blob = base64ToBlob(imageUrl);
                            const fileExt = blob.type.split('/')[1] || 'png';
                            const fileName = `scenes/${Date.now()}_${index}_${Math.random().toString(36).substring(7)}.${fileExt}`;
                            const { data, error } = await supabase.storage.from("doodles").upload(fileName, blob);
                            if (!error && data) imageUrl = data.path;
                        } catch (e) {
                            console.error("Scene image upload failed", e);
                        }
                    }

                    return {
                        order: page.pageNumber || index + 1,
                        storyText: page.content,
                        sceneImagePath: imageUrl, // Fixed: API expects sceneImagePath, not imageUrl
                        backgroundId: parsedScene?.backgroundId || (typeof parsedRecipe.place === 'object' ? parsedRecipe.place?.id : parsedRecipe.place) || page.suggestedBackground,
                        objects: index === 0 ? parsedScene?.objects : null,
                        characterId: parsedCharacter?.id,
                        learningTags: page.learningHighlight ? [page.learningHighlight] : null,
                    };
                }));
            } else if (parsedStory.paragraphs && Array.isArray(parsedStory.paragraphs)) {
                storyScenes = parsedStory.paragraphs.map((paragraph: string, index: number) => ({
                    order: index + 1,
                    storyText: paragraph,
                    backgroundId: parsedScene?.backgroundId || (typeof parsedRecipe.place === 'object' ? parsedRecipe.place?.id : parsedRecipe.place),
                    objects: index === 0 ? parsedScene?.objects : null,
                    characterId: parsedCharacter?.id,
                }));
            }

            const payload = {
                title: parsedStory.title || "나만의 동화책",
                coverPath: coverPath, // 업로드된 경로 사용
                pageLength: parsedRecipe.setup?.pageLength || 8,
                language: parsedRecipe.setup?.language || "ko",
                ageRange: parsedRecipe.setup?.ageRange || "4-7",
                topicId: topicIdValue,
                scenes: storyScenes,
                // 중복 카드 제거 (name 기준)
                cards: Array.from(
                    new Map(
                        earnedCards.map(card => [card.name, {
                            type: card.category || "unknown",
                            name: card.name,
                            desc: card.description,
                            color: card.color,
                            imagePath: card.imagePath,
                        }])
                    ).values()
                )
            };

            const response = await fetch("/api/books", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errData = await response.json();
                console.error("API Error Response:", errData);
                // Validation 에러일 경우 자세한 내용 표시
                if (errData.issues && errData.issues.length > 0) {
                    const issueMessages = errData.issues.map((i: any) => `${i.path}: ${i.message}`).join(", ");
                    throw new Error(`${errData.error}: ${issueMessages}`);
                }
                throw new Error(errData.error || "저장에 실패했습니다.");
            }

            localStorage.removeItem("create_recipe");
            localStorage.removeItem("create_story");
            localStorage.removeItem("create_scenes");
            // localStorage.removeItem("create_character");

            router.push("/my");

        } catch (err: any) {
            console.error("Save Error:", err);
            setError(err.message || "알 수 없는 오류가 발생했습니다.");
            setIsLoading(false);
        }
    };

    if (!recipe) return null;

    return (
        <StoryFlowLayout
            currentStep={5}
            title="참 잘했어요!"
            subtitle="동화책을 완성한 선물로 특별한 카드를 줄게요."
            backHref="/create/complete"
            helper={
                <Helper
                    character="pebble"
                    message="우와! 정말 대단해! 멋진 꼬마 작가님 탄생이야!"
                    position="right"
                    style={{ marginBottom: 0 }}
                />
            }
            contentMaxWidth="1000px"
        >
            <div className="w-full flex flex-col items-center">

                {/* Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full">
                    {earnedCards.map((card, index) => {
                        const IconComponent = (Icons as any)[card.icon || "Star"];
                        return (
                            <div
                                key={index}
                                className="transform transition-all duration-500 hover:scale-105 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <Card className="h-full border-2 overflow-hidden relative group flex flex-col hover:border-indigo-400 transition-colors" padding="none">
                                    <div
                                        className="aspect-square w-full flex items-center justify-center relative p-4"
                                        style={{ backgroundColor: `${card.color}15` || "#f3f4f6" }}
                                    >
                                        {card.imagePath ? (
                                            <div className="relative w-full h-full z-10 transition-opacity duration-300">
                                                <Image
                                                    src={card.imagePath}
                                                    alt={card.name}
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                    onError={(e) => {
                                                        e.currentTarget.style.opacity = '0';
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <IconComponent
                                                size={48}
                                                color={card.color || "#6b7280"}
                                                className="drop-shadow-sm"
                                            />
                                        )}
                                    </div>
                                    <div className="p-3 text-center flex-1 flex flex-col gap-1">
                                        <div
                                            className="text-xs font-bold uppercase tracking-wider"
                                            style={{ color: card.color }}
                                        >
                                            {card.category === 'personality' ? '성격' :
                                                card.category === 'role' ? '역할' :
                                                    card.category === 'place' ? '장소' :
                                                        card.category === 'event' ? '사건' :
                                                            card.category === 'mood' ? '분위기' :
                                                                card.category?.startsWith('learning') ? '학습' : '카드'}
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm break-keep">{card.name}</h3>
                                        <p className="text-xs text-gray-500 break-keep mt-1 leading-relaxed">{card.description}</p>
                                    </div>
                                </Card>
                            </div>
                        );
                    })}
                </div>

                {error && (
                    <div className="mb-4 text-red-500 font-medium bg-red-50 px-4 py-2 rounded-lg w-full text-center">
                        ⚠️ {error}
                    </div>
                )}

                {/* Bottom Buttons */}
                <div className="flex gap-4 w-full max-w-2xl justify-center">
                    <Button
                        size="lg"
                        variant="ghost"
                        className="h-14 px-8 text-lg rounded-full border border-gray-200 hover:bg-gray-50"
                        onClick={() => router.push("/create/complete")}
                    >
                        <Icons.ChevronLeft className="mr-2 h-5 w-5" />
                        이전으로
                    </Button>

                    <Button
                        size="lg"
                        className="flex-1 max-w-sm text-lg h-14 rounded-full shadow-lg shadow-indigo-200 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 border-0"
                        onClick={handleComplete}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                                보관함에 담는 중...
                            </>
                        ) : (
                            "보관함에 저장하고 마치기"
                        )}
                    </Button>
                </div>
            </div>
        </StoryFlowLayout>
    );
}
