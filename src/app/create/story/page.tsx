"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, RefreshCw, Sparkles, Wand2, Star, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import StoryFlowLayout from "@/components/layout/StoryFlowLayout";
import Helper from "@/components/create/Helper";
import { generateStory, type GeneratedStory } from "@/lib/storyGenerator";
import type { LibraryCard } from "@/lib/types/library";
import Image from "next/image";
import { backgrounds, allItems } from "../scene/data"; // Shared data
import { createClient } from "@/lib/supabase/client";
import { toPng } from "html-to-image";

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

// Scene Object Interface from create/scene/page.tsx
interface SceneObject {
    id: string;
    type: "character" | "item";
    itemId?: string;
    x: number;
    y: number;
    scale: number;
    rotation?: number;
}

export default function CreateStoryPage() {
    const router = useRouter();
    const sceneRef = useRef<HTMLDivElement>(null); // Ref for scene capture
    const [stories, setStories] = useState<GeneratedStory[]>([]);
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [isGenerating, setIsGenerating] = useState(true);
    const [recipe, setRecipe] = useState<{
        personality: LibraryCard | null;
        role: LibraryCard | null;
        place: LibraryCard | null;
        event: LibraryCard | null;
        mood: LibraryCard | null;
        learningTopic?: LibraryCard | null;
    } | null>(null);

    // Updated Scene Data Structure
    const [sceneData, setSceneData] = useState<{
        backgroundId?: string;
        placedItemIds?: string[];
        objects?: SceneObject[]; // Added objects for rendering
    } | null>(null);

    const [character, setCharacter] = useState<{
        name: string;
        transformedImageUrl?: string;
        imageUrl?: string;
        description?: string;
        styleId?: string;
    } | null>(null);

    // 이미지 생성 진행 상황
    const [imageProgress, setImageProgress] = useState<{ current: number; total: number; status: string } | null>(null);

    const [loadingStep, setLoadingStep] = useState(0);
    const loadingMessages = [
        `${character?.name || "주인공"}의 성격을 생각하고 있어...`,
        `${recipe?.place?.name || "장소"}에 어울리는 사건을 만드는 중이야...`,
        "재미있는 제목을 짓고 있어!",
        "거의 다 됐어!",
        "이야기의 문을 열고 있어...",
    ];

    useEffect(() => {
        const recipeData = localStorage.getItem("create_recipe");
        const charData = localStorage.getItem("create_character");

        if (charData) {
            setCharacter(JSON.parse(charData));
        }

        if (recipeData) {
            const parsed = JSON.parse(recipeData);
            setRecipe(parsed);

            // 장면 데이터 로드
            const sceneDataStr = localStorage.getItem("create_scene");
            let sceneInfo = null;
            if (sceneDataStr) {
                sceneInfo = JSON.parse(sceneDataStr);
                setSceneData(sceneInfo);
            }

            // 캐릭터 정보 로드 후 스토리 생성 호출
            if (charData) {
                const char = JSON.parse(charData);
                loadStories(parsed, char.name || "주인공", sceneInfo);
            } else {
                loadStories(parsed, "주인공", sceneInfo);
            }
        } else {
            router.push("/create/recipe");
        }
    }, [router]);

    // 로딩 메시지 롤링
    useEffect(() => {
        if (isGenerating) {
            const interval = setInterval(() => {
                setLoadingStep((prev) => (prev + 1) % loadingMessages.length);
            }, 1200);
            return () => clearInterval(interval);
        } else {
            setLoadingStep(0);
        }
    }, [isGenerating]);

    const loadStories = async (
        recipeData: typeof recipe,
        charName: string,
        sceneInfo?: typeof sceneData
    ) => {
        if (!recipeData?.personality || !recipeData?.role || !recipeData?.place || !recipeData?.event || !recipeData?.mood) {
            return;
        }

        // 캐시된 스토리가 있으면 그걸 보여줌
        const cached = sessionStorage.getItem("cached_story");
        if (cached) {
            try {
                const parsedCache = JSON.parse(cached);
                if (parsedCache && parsedCache.length > 0) {
                    setStories(parsedCache);
                    setIsGenerating(false);
                    return;
                }
            } catch (e) {
                sessionStorage.removeItem("cached_story");
            }
        }

        // 버튼 클릭으로 진입했는지 확인 (새로고침/뒤로가기 방지)
        const shouldGenerate = sessionStorage.getItem("should_generate_story");
        if (!shouldGenerate) {
            // 플래그가 없으면 AI 호출하지 않음 (새로고침/뒤로가기)
            setIsGenerating(false);
            return;
        }

        // 플래그 사용 후 삭제 (다음 새로고침에서 재호출 방지)
        sessionStorage.removeItem("should_generate_story");

        setIsGenerating(true);
        setLoadingStep(0);

        try {
            // 1. 스토리 생성 (AI - 텍스트 및 프롬프트만 생성, 이미지 미생성)
            const generated = await generateStory({
                personality: recipeData.personality,
                role: recipeData.role,
                place: recipeData.place,
                event: recipeData.event,
                mood: recipeData.mood,
                characterName: charName,
                placedItems: sceneInfo?.placedItemIds || [],
                learningTopic: recipeData.learningTopic || undefined,
                visualDescription: character?.description,
            });

            if (generated.length > 0) {
                const story = generated[0];
                setStories([story]);
                try {
                    sessionStorage.setItem("cached_story", JSON.stringify([story]));
                } catch (e) {
                    console.error("Session storage full", e);
                }
            } else {
                setStories([]);
            }

        } catch (error) {
            console.error("Failed to generate stories:", error);
        } finally {
            setIsGenerating(false);
        }
    };

    useEffect(() => {
        if (stories.length > 0) {
            setSelectedIdx(0);
        }
    }, [stories]);

    const selectedStory = stories[0] || null;
    const currentBg = sceneData?.backgroundId ? backgrounds.find(b => b.id === sceneData.backgroundId) : null;

    const handleRegenerate = () => {
        if (recipe && character) {
            setSelectedIdx(null);
            setStories([]);
            sessionStorage.removeItem("cached_story");
            loadStories(recipe, character.name, sceneData);
        }
    };

    // 단일 이미지 생성 (재시도 + 타임아웃 포함)
    const generateSingleImage = async (
        payload: any,
        maxRetries = 2,
        timeoutMs = 60000
    ): Promise<any> => {
        for (let attempt = 0; attempt <= maxRetries; attempt++) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

                const res = await fetch("/api/story/generate-single-image", {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: { "Content-Type": "application/json" },
                    signal: controller.signal
                });

                clearTimeout(timeoutId);

                if (res.ok) {
                    return await res.json();
                }

                console.warn(`Image generation attempt ${attempt + 1} failed with status ${res.status}`);
            } catch (err: any) {
                if (err.name === "AbortError") {
                    console.warn(`Image generation timed out (attempt ${attempt + 1})`);
                } else {
                    console.error(`Image generation error (attempt ${attempt + 1}):`, err);
                }

                if (attempt < maxRetries) {
                    // 재시도 전 짧은 대기
                    await new Promise(r => setTimeout(r, 1000));
                }
            }
        }
        return null;
    };

    const handleNext = async () => {
        if (!selectedStory) return;

        setIsGenerating(true);

        // Capture Scene
        let referenceImage = null;
        if (sceneRef.current) {
            try {
                const dataUrl = await toPng(sceneRef.current, { cacheBust: true });
                // Remove prefix to get clean base64
                referenceImage = dataUrl.replace(/^data:image\/png;base64,/, "");
            } catch (err) {
                console.error("Failed to capture scene:", err);
            }
        }

        const contextData = {
            characterName: character?.name || "주인공",
            characterDescription: character?.description || recipe?.role?.name || "character",
            styleId: character?.styleId || "storybook",
            background: currentBg?.name || recipe?.place?.name || "fantasy world",
            items: sceneData?.placedItemIds || [],
            objects: sceneData?.objects || [], // 위치 정보를 포함한 전체 오브젝트 데이터 전달
            referenceImage: referenceImage, // High fidelity reference (Scene Sketch)
            characterImage: character?.transformedImageUrl || character?.imageUrl // Character Visual Reference
        };

        const totalImages = selectedStory.pages.length + 1; // pages + cover
        let finalPages = [...selectedStory.pages];
        let finalCoverImageUrl = selectedStory.coverImageUrl;
        let completedCount = 0;

        try {
            // 병렬 처리: 2개씩 배치로 처리 (API Rate Limit 고려)
            const BATCH_SIZE = 2;
            const pages = selectedStory.pages;

            for (let batchStart = 0; batchStart < pages.length; batchStart += BATCH_SIZE) {
                const batchEnd = Math.min(batchStart + BATCH_SIZE, pages.length);
                const batch = pages.slice(batchStart, batchEnd);

                // 현재 배치 진행 상황 표시
                setImageProgress({
                    current: batchStart + 1,
                    total: totalImages,
                    status: `${batchStart + 1}~${batchEnd}번째 삽화 그리는 중...`
                });

                // 배치 내에서 병렬 처리
                const batchResults = await Promise.all(
                    batch.map((page, idx) =>
                        generateSingleImage({
                            page,
                            context: contextData,
                            type: "page"
                        }).then(result => ({
                            index: batchStart + idx,
                            result
                        }))
                    )
                );

                // 결과 적용
                batchResults.forEach(({ index, result }) => {
                    if (result?.page && !result.skipped) {
                        finalPages[index] = result.page;
                    }
                    completedCount++;
                });
            }

            // 표지 이미지 생성
            if (selectedStory.coverImagePrompt) {
                setImageProgress({
                    current: totalImages,
                    total: totalImages,
                    status: "표지 그리는 중..."
                });

                const coverResult = await generateSingleImage({
                    coverImagePrompt: selectedStory.coverImagePrompt,
                    context: contextData,
                    type: "cover"
                });

                if (coverResult?.coverImageUrl) {
                    finalCoverImageUrl = coverResult.coverImageUrl;
                }
            }

            const storyToSave = {
                ...selectedStory,
                pages: finalPages,
                coverImageUrl: finalCoverImageUrl
            };

            // DB 저장은 learning 단계에서 최종적으로 진행 (중복 저장 방지)
            localStorage.setItem("create_story", JSON.stringify(storyToSave));
            router.push("/create/complete");

        } catch (e) {
            console.error("Completion process failed:", e);
            alert("처리 중 오류가 발생했습니다.");
            setIsGenerating(false);
            setImageProgress(null);
        }
    };

    const heroDescription = character?.name || (recipe?.personality && recipe?.role
        ? `${recipe.personality.name} ${recipe.role.name}`
        : "주인공");

    const helperMessage = isGenerating
        ? `${heroDescription}의 소중한 이야기를 만들고 있어...`
        : selectedStory
            ? `와! '${selectedStory.title}'! 정말 멋진 이야기야!`
            : "이야기를 만들지 못했어. 다시 시도해볼까?";

    const showLoading = isGenerating || (stories.length === 0 && !selectedStory);

    if (showLoading) {
        return (
            <StoryFlowLayout
                currentStep={3}
                title="이야기의 문을 여는 중"
                subtitle="마법의 잉크로 쓰는 중..."
                backHref="/create/recipe"
                helper={
                    // Loading state helper
                    <Helper
                        character="flame"
                        message="조금만 기다려! 엄청난 이야기가 나올 거야!"
                        position="right"
                        style={{ marginBottom: 0 }}
                    />
                }
                contentMaxWidth="1200px"
            >
                <div style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 1rem",
                    marginTop: "-2rem",
                    width: "100%",
                }}>
                    <Wand2 size={48} color="#8B5CF6" style={{ marginBottom: "1.5rem" }} className="animate-pulse" />

                    {/* 이미지 생성 진행 상황 표시 */}
                    {imageProgress ? (
                        <div style={{ textAlign: "center" }}>
                            <p style={{
                                color: "#7C3AED",
                                fontSize: "1.2rem",
                                fontWeight: 600,
                                marginBottom: "0.5rem"
                            }}>
                                🎨 {imageProgress.status}
                            </p>
                            <p style={{
                                color: "#6B7280",
                                fontSize: "0.9rem",
                            }}>
                                {imageProgress.current} / {imageProgress.total} 완료
                            </p>
                            {/* 실제 진행률 바 */}
                            <div style={{
                                width: "280px",
                                height: "8px",
                                backgroundColor: "#E5E7EB",
                                borderRadius: "4px",
                                marginTop: "1rem",
                                overflow: "hidden"
                            }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(imageProgress.current / imageProgress.total) * 100}%` }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    style={{
                                        height: "100%",
                                        backgroundColor: "#8B5CF6",
                                        borderRadius: "4px"
                                    }}
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div style={{ height: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={loadingStep}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        style={{
                                            color: "#4B5563",
                                            fontSize: "1.1rem",
                                            fontWeight: 500,
                                            textAlign: "center",
                                        }}
                                    >
                                        {loadingMessages[loadingStep]}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                            <div style={{ width: "200px", height: "4px", backgroundColor: "#E5E7EB", borderRadius: "2px", marginTop: "1.5rem", overflow: "hidden" }}>
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    style={{ width: "100%", height: "100%", backgroundColor: "#8B5CF6" }}
                                />
                            </div>
                        </>
                    )}
                </div>
            </StoryFlowLayout>
        );
    }

    return (
        <StoryFlowLayout
            currentStep={3}
            title="이야기 미리보기"
            subtitle="우리가 만든 장면으로 이야기가 탄생했어!"
            backHref="/create/recipe"
            helper={null}
            contentMaxWidth="100%"
        >
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 1rem",
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        backgroundColor: "white",
                        borderRadius: "24px",
                        padding: "2rem",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem"
                    }}
                >
                    {/* 상단: 헬퍼 메시지 */}
                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                        <Helper
                            character="flame"
                            message={helperMessage}
                            position="right"
                            style={{ marginBottom: 0 }}
                        />
                    </div>

                    {/* 메인 컨텐츠 영역: 장면(왼쪽) + 스토리(오른쪽) */}
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* 1. Scene Preview (Left/Top) */}
                        <div style={{ flex: 1.2 }}>
                            <div
                                ref={sceneRef}
                                style={{
                                    width: "100%",
                                    aspectRatio: "16 / 9",
                                    backgroundColor: "#F3F4F6",
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    border: "4px solid #F3F4F6",
                                    position: "relative",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                                }}>
                                {/* Background */}
                                {currentBg ? (
                                    <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                                        <img
                                            src={currentBg.imagePath}
                                            alt={currentBg.name}
                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement!.style.background = currentBg.bgImage;
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#9CA3AF" }}>
                                        <ImageIcon size={48} />
                                    </div>
                                )}

                                {/* Objects */}
                                {sceneData?.objects?.map(obj => {
                                    const item = obj.type === "item" ? allItems.find(i => i.id === obj.itemId) : null;
                                    return (
                                        <div
                                            key={obj.id}
                                            style={{
                                                position: "absolute",
                                                left: `${obj.x}%`,
                                                top: `${obj.y}%`,
                                                width: obj.type === "character" ? "20%" : "13%",
                                                aspectRatio: "1/1",
                                                transform: `translate(-50%, -50%) scale(${obj.scale}) rotate(${obj.rotation || 0}deg)`,
                                                zIndex: 10,
                                                pointerEvents: "none",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: obj.type === "character" ? "8px" : "12px",
                                            }}
                                        >
                                            {obj.type === "character" && (character?.transformedImageUrl || character?.imageUrl) && (
                                                <Image
                                                    src={character.transformedImageUrl || character.imageUrl || ''}
                                                    alt="Character"
                                                    fill
                                                    style={{ objectFit: "contain" }}
                                                    unoptimized
                                                />
                                            )}
                                            {obj.type === "item" && item && (
                                                <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <Image
                                                        src={item.imagePath}
                                                        alt={item.name}
                                                        fill
                                                        style={{ objectFit: "contain" }}
                                                        unoptimized
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                            <div style={{ marginTop: "1rem", textAlign: "center", color: "#6B7280", fontSize: "0.9rem", fontWeight: 500 }}>
                                우리가 함께 꾸민 장면이야!
                            </div>
                        </div>

                        {/* 2. Story Text (Right/Bottom) */}
                        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {selectedStory && (
                                <>
                                    <div style={{
                                        padding: "1.5rem",
                                        backgroundColor: "#FEF3C7",
                                        borderRadius: "16px",
                                        border: "1px dashed #F59E0B"
                                    }}>
                                        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#92400E", marginBottom: "0.5rem" }}>
                                            {selectedStory.title}
                                        </h2>
                                        <p style={{ fontSize: "1rem", color: "#92400E", lineHeight: 1.5 }}>
                                            {selectedStory.summary}
                                        </p>
                                    </div>
                                    <div style={{
                                        flex: 1,
                                        overflowY: "auto",
                                        maxHeight: "400px",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1rem",
                                        paddingRight: "0.5rem"
                                    }} className="hide-scrollbar">
                                        {selectedStory.pages.map((page, idx) => (
                                            <div key={idx} style={{
                                                padding: "1.2rem",
                                                backgroundColor: "#F9FAFB",
                                                borderRadius: "16px",
                                                border: "1px solid #E5E7EB",
                                                display: "flex",
                                                gap: "1rem"
                                            }}>
                                                <div style={{
                                                    width: "32px",
                                                    height: "32px",
                                                    borderRadius: "50%",
                                                    backgroundColor: "#8B5CF6",
                                                    color: "white",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontWeight: "bold",
                                                    flexShrink: 0
                                                }}>
                                                    {idx + 1}
                                                </div>
                                                <p style={{ color: "#374151", lineHeight: 1.6, fontSize: "1.05rem" }}>
                                                    {page.content}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>


                    {/* 하단 버튼 영역 */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "800px", margin: "0 auto", width: "100%" }}>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            <Button
                                variant="outline"
                                onClick={handleRegenerate}
                                disabled={isGenerating}
                                style={{
                                    flex: 1,
                                    height: "60px",
                                    borderRadius: "16px",
                                    fontSize: "1.1rem",
                                    border: "2px solid #E5E7EB",
                                    fontWeight: 600
                                }}
                            >
                                <RefreshCw size={20} className={`mr-2 ${isGenerating ? "animate-spin" : ""}`} />
                                {isGenerating ? "다시 쓰는 중..." : "다른 이야기 만들기"}
                            </Button>

                            <Button
                                variant="primary"
                                onClick={handleNext}
                                disabled={isGenerating || !selectedStory}
                                style={{
                                    flex: 1.5,
                                    height: "60px",
                                    borderRadius: "16px",
                                    fontSize: "1.2rem",
                                    fontWeight: 700,
                                    background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                                    boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)"
                                }}
                            >
                                <Sparkles size={24} className={`mr-2 ${!isGenerating ? "animate-pulse" : ""}`} />
                                동화책 완성하기!
                                <ChevronRight size={24} className="ml-1" />
                            </Button>
                        </div>

                        <Button
                            variant="ghost"
                            onClick={() => router.back()}
                            style={{ color: "#9CA3AF" }}
                        >
                            <ChevronLeft size={20} className="mr-1" />
                            뒤로 가기
                        </Button>
                    </div>
                </motion.div>
            </div>
        </StoryFlowLayout>
    );
}
