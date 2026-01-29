"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Eraser, RotateCcw, Pencil, Sparkles, Wand2, User, Plus, Loader2, Trash2, Palette } from "lucide-react";
import { Button, Input } from "@/components";
import StoryFlowLayout from "@/components/layout/StoryFlowLayout";
import Helper from "@/components/create/Helper";
import { ART_STYLES, type ArtStyleId } from "@/lib/characterStyles";
import { removeBackgroundFromImage } from "@/lib/imageUtils";

interface Character {
    id: string;
    name: string;
    imageUrl?: string;
    personality?: string;
    role?: string;
}

const colors = [
    "#2D2D2D", "#E53935", "#FB8C00", "#FDD835",
    "#43A047", "#1E88E5", "#8E24AA", "#6D4C41",
    "#F48FB1", "#4DD0E1", "#FF7043", "#9CCC65"
];
const brushSizes = [6, 12, 18, 24];

type InnerStep = "select" | "draw" | "style" | "transform" | "result";

export default function CreateDrawPage() {
    const router = useRouter();
    const [innerStep, setInnerStep] = useState<InnerStep>("select");
    const [characterName, setCharacterName] = useState("");
    const [recipe, setRecipe] = useState<{ personality?: { name: string }; role?: { name: string } } | null>(null);

    // 기존 캐릭터 관련
    const [existingCharacters, setExistingCharacters] = useState<Character[]>([]);
    const [isLoadingCharacters, setIsLoadingCharacters] = useState(true);
    const [selectedExisting, setSelectedExisting] = useState<Character | null>(null);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState("#2D2D2D");
    const [brushSize, setBrushSize] = useState(12);
    const [hasDrawn, setHasDrawn] = useState(false);
    const [history, setHistory] = useState<ImageData[]>([]);
    const [isEraserMode, setIsEraserMode] = useState(false);
    const [transformedImageUrl, setTransformedImageUrl] = useState<string | null>(null);
    const [savedCanvasBlob, setSavedCanvasBlob] = useState<Blob | null>(null);
    const [selectedStyle, setSelectedStyle] = useState<ArtStyleId>("storybook");
    const [transformError, setTransformError] = useState<string | null>(null);
    const [characterPrompt, setCharacterPrompt] = useState<string | null>(null);

    useEffect(() => {
        const recipeData = localStorage.getItem("create_recipe");
        if (recipeData) {
            setRecipe(JSON.parse(recipeData));
        }
        loadExistingCharacters();
    }, []);

    const loadExistingCharacters = async () => {
        try {
            const res = await fetch("/api/characters");
            if (res.ok) {
                const data = await res.json();
                setExistingCharacters(data.characters || []);
            }
        } catch (error) {
            console.error("Failed to load characters:", error);
        } finally {
            setIsLoadingCharacters(false);
        }
    };

    const heroDescription = recipe?.personality && recipe?.role
        ? `${recipe.personality.name} ${recipe.role.name}`
        : "주인공";

    const helperMessages: Record<string, string> = {
        select: existingCharacters.length > 0
            ? "전에 만든 친구를 불러오거나, 새로 그려볼까?"
            : "새 친구를 그려볼까?",
        draw: characterName.trim()
            ? "마음껏 그려봐! 대충 그려도 예쁘게 변해!"
            : `${heroDescription}의 이름을 먼저 지어줘!`,
        style: "어떤 스타일로 변신시켜볼까? 골라봐!",
        transform: "마법이 일어나고 있어! 조금만 기다려~",
        result: transformError
            ? "앗, 마법이 안 됐어... 다시 해볼까?"
            : `짜잖! ${characterName}이(가) 태어났어!`,
    };

    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        // touch-action: none CSS가 스크롤 방지 처리
        setIsDrawing(true);
        setHasDrawn(true);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        setHistory(prev => [...prev.slice(-10), imageData]);
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        let x, y;
        if ("touches" in e) {
            x = (e.touches[0].clientX - rect.left) * scaleX;
            y = (e.touches[0].clientY - rect.top) * scaleY;
        } else {
            x = (e.clientX - rect.left) * scaleX;
            y = (e.clientY - rect.top) * scaleY;
        }
        ctx.beginPath();
        ctx.moveTo(x, y);
    };

    const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        // touch-action: none CSS가 스크롤 방지 처리
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        let x, y;
        if ("touches" in e) {
            x = (e.touches[0].clientX - rect.left) * scaleX;
            y = (e.touches[0].clientY - rect.top) * scaleY;
        } else {
            x = (e.clientX - rect.left) * scaleX;
            y = (e.clientY - rect.top) * scaleY;
        }
        ctx.lineTo(x, y);
        ctx.strokeStyle = isEraserMode ? "#FFFFFF" : color;
        ctx.lineWidth = isEraserMode ? brushSize * 2 : brushSize;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
    };

    const stopDrawing = () => setIsDrawing(false);

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        setHasDrawn(false);
        setHistory([]);
    };

    const undo = () => {
        if (history.length === 0) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const lastState = history[history.length - 1];
        ctx.putImageData(lastState, 0, 0);
        setHistory(prev => prev.slice(0, -1));
    };

    const handleUseExisting = () => {
        if (selectedExisting) {
            localStorage.setItem("create_character", JSON.stringify({
                existingId: selectedExisting.id,
                name: selectedExisting.name,
                imageUrl: selectedExisting.imageUrl,
                isNew: false,
            }));
            router.push("/create/recipe");
        }
    };

    const handleTransform = async () => {
        // 캔버스 블롭을 미리 저장 (화면 전환 전에)
        const canvas = canvasRef.current;
        if (canvas) {
            const blob = await new Promise<Blob | null>((resolve) => {
                canvas.toBlob(resolve, "image/png", 0.9);
            });
            if (blob) {
                console.log("Canvas blob saved:", blob.size, "bytes");
                setSavedCanvasBlob(blob);
            }
        }
        // 스타일 선택 단계로 이동
        setInnerStep("style");
    };

    // 스타일 선택 후 실제 변환 시작
    const handleStartTransform = async () => {
        setTransformError(null);
        setInnerStep("transform");

        try {
            if (!savedCanvasBlob) {
                throw new Error("No canvas data");
            }

            // Blob을 Base64로 변환
            const reader = new FileReader();
            const base64 = await new Promise<string>((resolve, reject) => {
                reader.onloadend = () => {
                    const result = reader.result as string;
                    const base64Data = result.split(",")[1]; // data:image/png;base64,... 에서 base64 부분만
                    resolve(base64Data);
                };
                reader.onerror = reject;
                reader.readAsDataURL(savedCanvasBlob);
            });

            // API 호출
            const res = await fetch("/api/characters/transform", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    imageBase64: base64,
                    styleId: selectedStyle,
                    characterName: characterName,
                }),
            });

            const data = await res.json();
            console.log("Transform result:", data);

            if (data.imageBase64) {
                try {
                    // 배경 제거 (클라이언트 측 후처리)
                    const transparentImage = await removeBackgroundFromImage(data.imageBase64);
                    setTransformedImageUrl(transparentImage);
                } catch (bgError) {
                    console.error("Background removal failed:", bgError);
                    setTransformedImageUrl(`data:image/png;base64,${data.imageBase64}`);
                }
                if (data.imagePrompt) setCharacterPrompt(data.imagePrompt);
            } else if (data.transformed && data.imageUrl) {
                setTransformedImageUrl(data.imageUrl);
                if (data.imagePrompt) setCharacterPrompt(data.imagePrompt);
            } else {
                // 변환 실패 시 placeholder 사용
                console.warn("Transform failed, using placeholder");
                setTransformedImageUrl("/helpers/pebble.webp");
                setTransformError(data.message || "Transformation failed");
            }
        } catch (error) {
            console.error("Transform error:", error);
            setTransformedImageUrl("/helpers/pebble.webp");
            setTransformError(error instanceof Error ? error.message : "Unknown error");
        } finally {
            setInnerStep("result");
        }
    };

    const [isSaving, setIsSaving] = useState(false);

    const handleConfirmCharacter = async () => {
        if (!characterName.trim()) return;
        setIsSaving(true);
        try {
            // DB에 저장할 파일 경로 (파일명만)
            let doodleFilePath = "";
            // 화면 표시용 URL
            let doodleDisplayUrl = "https://placehold.co/400x400/png?text=Doodle";

            if (savedCanvasBlob) {
                console.log("Using saved canvas blob:", savedCanvasBlob.size, "bytes");

                // Supabase Storage에 업로드
                const { createClient } = await import("@/lib/supabase/client");
                const supabase = createClient();

                const fileName = `doodle_${Date.now()}_${Math.random().toString(36).substring(7)}.png`;

                console.log("Uploading to Supabase:", fileName);

                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from("doodles")
                    .upload(fileName, savedCanvasBlob, {
                        contentType: "image/png",
                        upsert: false,
                    });

                console.log("Upload result:", { uploadData, uploadError });

                if (uploadError) {
                    console.error("Upload error:", uploadError);
                } else if (uploadData) {
                    // DB에는 파일 경로만 저장
                    doodleFilePath = uploadData.path;
                    console.log("Saved file path:", doodleFilePath);

                    // 화면 표시용 URL 생성
                    const { data: urlData } = supabase.storage
                        .from("doodles")
                        .getPublicUrl(uploadData.path);

                    if (urlData?.publicUrl) {
                        doodleDisplayUrl = urlData.publicUrl;
                    } else {
                        // Public URL이 안 되면 signed URL 시도
                        const { data: signedData } = await supabase.storage
                            .from("doodles")
                            .createSignedUrl(uploadData.path, 3600);
                        if (signedData?.signedUrl) {
                            doodleDisplayUrl = signedData.signedUrl;
                        }
                    }
                    console.log("Display URL:", doodleDisplayUrl);
                }
            } else {
                console.log("No saved canvas blob found");
            }

            // 변환된 AI 이미지도 Supabase에 업로드 (삭제 시 정상 처리를 위해)
            let renderFilePath = "";
            if (transformedImageUrl) {
                try {
                    const { createClient } = await import("@/lib/supabase/client");
                    const supabase = createClient();
                    const { compressImage } = await import("@/lib/imageUtils");

                    // WebP로 압축 (품질 0.8)
                    const blob = await compressImage(transformedImageUrl, 0.8, "image/webp");

                    const renderFileName = `transformed_${Date.now()}_${Math.random().toString(36).substring(7)}.webp`;
                    console.log("Uploading transformed image (compressed):", renderFileName, blob.size, "bytes");

                    const { data: renderUploadData, error: renderUploadError } = await supabase.storage
                        .from("doodles")
                        .upload(renderFileName, blob, {
                            contentType: "image/webp",
                            upsert: false,
                        });

                    if (renderUploadError) {
                        console.error("Render upload error:", renderUploadError);
                    } else if (renderUploadData) {
                        renderFilePath = renderUploadData.path;
                        console.log("Saved render path:", renderFilePath);
                    }
                } catch (uploadErr) {
                    console.error("Failed to upload transformed image:", uploadErr);
                }
            } else if (transformedImageUrl) {
                // 이미 URL이면 경로 추출 시도 (기존 호환성)
                renderFilePath = transformedImageUrl;
            }

            const res = await fetch("/api/characters", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: characterName,
                    // DB에는 파일 경로만 저장 (빈 문자열이면 placeholder)
                    doodlePath: doodleFilePath || "https://placehold.co/400x400/png?text=Doodle",
                    renderPath: renderFilePath || undefined,
                    role: "hero",
                    personality: "brave",
                }),
            });

            if (!res.ok) throw new Error("Failed to save character");

            const data = await res.json();
            const savedChar = data.character;

            // localStorage에는 표시용 URL 저장
            localStorage.setItem("create_character", JSON.stringify({
                id: savedChar.id,
                name: savedChar.name,
                imageUrl: transformedImageUrl, // 화면 표시용 (Base64 or URL)
                doodleUrl: doodleDisplayUrl,
                styleId: selectedStyle, // Save styleId for image generation
                description: characterPrompt,
                hasDrawing: true,
                isNew: true,
            }));
            router.push("/create/recipe");
        } catch (error) {
            console.error(error);
            alert("캐릭터 저장에 실패했어요.");
        } finally {
            setIsSaving(false);
        }
    };

    const handleBack = () => {
        if (innerStep === "result") setInnerStep("style");
        else if (innerStep === "style") setInnerStep("draw");
        else if (innerStep === "transform") setInnerStep("style");
        else if (innerStep === "draw") setInnerStep("select");
        else router.push("/");
    };

    const initCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const goToDraw = () => {
        setInnerStep("draw");
        setTimeout(initCanvas, 100);
    };

    const stepTitles: Record<string, { title: string; subtitle: string }> = {
        select: { title: "주인공", subtitle: "누구와 함께 모험을 떠날까?" },
        draw: { title: "주인공 그리기", subtitle: "너만의 상상력을 펼쳐봐!" },
        style: { title: "스타일 선택", subtitle: "어떤 그림체로 변신시켜볼까?" },
        transform: { title: "마법 변환 중...", subtitle: "캐릭터가 태어나고 있어!" },
        result: { title: "주인공 탄생!", subtitle: "와! 정말 멋진 친구야!" },
    };

    const { title, subtitle } = stepTitles[innerStep] || { title: "", subtitle: "" };

    const helperContent = (
        <AnimatePresence mode="wait">
            {/* select 단계에서는 헬퍼를 내부 카드에 배치하므로 여기서는 null */}
            {innerStep === "select" ? null :
                innerStep === "transform" ? (
                    <motion.div
                        key="transform-helper"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <Helper
                            character="whirlwind"
                            message={`${characterName || '친구'}을(를) 예쁘게 바꾸고 있어! 조금만 기다려~`}
                            position="right"
                            style={{ marginBottom: 0 }}
                        />
                    </motion.div>
                ) : innerStep === "draw" ? (
                    null
                ) : (
                    <motion.div
                        key={innerStep}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <Helper
                            character="leaf"
                            message={helperMessages[innerStep] || ""}
                            position="right"
                            style={{ marginBottom: 0 }}
                        />
                    </motion.div>
                )}
        </AnimatePresence>
    );

    return (
        <StoryFlowLayout
            currentStep={1}
            title={title}
            subtitle={subtitle}
            backHref="/"
            helper={helperContent}
            contentMaxWidth="100%"
        >
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "0 1rem",
                width: "100%",
                maxWidth: innerStep === "select" ? "1000px" : "100%", // select 단계는 폭 제한
                margin: "0 auto",
            }}>
                {innerStep === "select" && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            backgroundColor: "white",
                            borderRadius: "24px",
                            padding: "2rem",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.03)", // 아주 연한 그림자
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem"
                        }}
                    >
                        {/* 헬퍼 (카드 내부 우측 상단) */}
                        <div style={{ position: "absolute", top: "1.5rem", right: "2rem", zIndex: 10, display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                style={{
                                    padding: "0.75rem 1rem",
                                    backgroundColor: "white",
                                    border: "1px solid #E5E7EB",
                                    borderRadius: "16px",
                                    borderTopRightRadius: "4px",
                                    fontSize: "0.9rem",
                                    fontWeight: 500,
                                    color: "#374151",
                                    whiteSpace: "nowrap",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                }}
                            >
                                {helperMessages["select"]}
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                style={{ width: "80px", height: "80px", flexShrink: 0 }}
                            >
                                <Image
                                    src="/helpers/pebble.webp"
                                    alt="Helper"
                                    width={80}
                                    height={80}
                                    style={{ objectFit: "contain", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))" }}
                                />
                            </motion.div>
                        </div>

                        {/* 내가 만든 친구들 (가로 스크롤) */}
                        <section style={{ marginTop: "1rem" }}>
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1rem", color: "#4B5563" }}>
                                내가 만든 친구들
                            </h3>
                            {isLoadingCharacters ? (
                                <div style={{ textAlign: "center", padding: "1rem" }}>
                                    <Loader2 size={24} className="animate-spin text-purple-500 mx-auto" />
                                    <p style={{ fontSize: "0.85rem", color: "#9CA3AF", marginTop: "0.5rem" }}>불러오는 중...</p>
                                </div>
                            ) : existingCharacters.length > 0 ? (
                                <div style={{
                                    display: "flex",
                                    gap: "1rem",
                                    overflowX: "auto",
                                    padding: "0.3rem",
                                    msOverflowStyle: "none",
                                    scrollbarWidth: "none",
                                }}>
                                    <style jsx>{`
                                        div::-webkit-scrollbar { display: none; }
                                    `}</style>
                                    {existingCharacters.map((char) => {
                                        const isSelected = selectedExisting?.id === char.id;
                                        return (
                                            <motion.button
                                                key={char.id}
                                                onClick={() => setSelectedExisting(char)}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                style={{
                                                    minWidth: "100px",
                                                    padding: "1rem",
                                                    border: isSelected ? "2px solid #8B5CF6" : "1px solid #E5E7EB",
                                                    borderRadius: "16px",
                                                    backgroundColor: isSelected ? "#F3E8FF" : "white",
                                                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                                    cursor: "pointer",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    gap: "0.75rem",
                                                }}
                                            >
                                                <div style={{
                                                    width: "80px",
                                                    height: "80px",
                                                    borderRadius: "12px",
                                                    backgroundColor: "#F9FAFB",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    overflow: "hidden",
                                                }}>
                                                    {char.imageUrl ? (
                                                        <Image src={char.imageUrl} alt={char.name} width={60} height={60} style={{ objectFit: "cover" }} />
                                                    ) : (
                                                        <User size={28} color="#D1D5DB" />
                                                    )}
                                                </div>
                                                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#374151" }}>
                                                    {char.name || "이름 없음"}
                                                </span>
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div style={{ padding: "1rem 0", color: "#9CA3AF", fontSize: "0.9rem" }}>
                                    아직 만든 친구가 없어!
                                </div>
                            )}

                            {selectedExisting && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} style={{ marginTop: "1rem" }}>
                                    <Button
                                        variant="primary"
                                        onClick={handleUseExisting}
                                        style={{ width: "100%", borderRadius: "12px", height: "48px" }}
                                    >
                                        {selectedExisting.name}이랑 모험 떠나기 <ChevronRight size={18} />
                                    </Button>
                                </motion.div>
                            )}
                        </section>

                        {/* 새 친구 만들기 (점선 박스) */}
                        <section>
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1rem", color: "#4B5563" }}>
                                새 친구 만들기
                            </h3>
                            <motion.button
                                onClick={goToDraw}
                                whileHover={{ scale: 1.01, backgroundColor: "#F9FAFB", borderColor: "#8B5CF6" }}
                                whileTap={{ scale: 0.99 }}
                                style={{
                                    width: "100%",
                                    padding: "3rem",
                                    border: "2px dashed #D1D5DB",
                                    borderRadius: "20px",
                                    backgroundColor: "white",
                                    cursor: "pointer",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "0.5rem",
                                    transition: "all 0.2s ease"
                                }}
                            >
                                <Plus size={40} className="text-purple-500" />
                                <span style={{ fontSize: "1rem", fontWeight: 600, color: "#8B5CF6" }}>
                                    새 친구 그리기
                                </span>
                            </motion.button>
                        </section>

                        <div style={{ paddingLeft: "0.5rem" }}>
                            <Button variant="ghost" onClick={() => router.push("/")} style={{ height: "40px" }}>
                                <ChevronLeft size={16} className="mr-1" /> 뒤로
                            </Button>
                        </div>
                    </motion.div>
                )}

                {innerStep === "draw" && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} style={{ width: "100%" }}>
                        {/* 흰색 카드 컨테이너 */}
                        <div style={{
                            backgroundColor: "white",
                            borderRadius: "24px",
                            padding: "1.5rem",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                            maxWidth: "700px",
                            margin: "0 auto",
                        }}>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "1rem",
                                marginBottom: "1rem",
                            }}>
                                {/* 이름 입력 */}
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    padding: "0.5rem 0.75rem",
                                    backgroundColor: "#F3E8FF",
                                    borderRadius: "14px",
                                    border: "2px solid #DDD6FE",
                                    flex: 1,
                                    maxWidth: "300px",
                                }}>
                                    <span style={{
                                        fontSize: "0.9rem",
                                        fontWeight: 700,
                                        color: "#7C3AED",
                                        whiteSpace: "nowrap",
                                    }}>
                                        이름:
                                    </span>
                                    <Input
                                        type="text"
                                        placeholder="이름을 지어줘!"
                                        value={characterName}
                                        onChange={(e) => setCharacterName(e.target.value)}
                                        style={{
                                            flex: 1,
                                            height: "32px",
                                            fontSize: "0.9rem",
                                            borderRadius: "8px",
                                            border: "1.5px solid #E5E7EB",
                                            backgroundColor: "white",
                                            minWidth: "100px",
                                        }}
                                    />
                                </div>

                                {/* 헬퍼 + 말풍선 */}
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                    <motion.div
                                        initial={{ scale: 0.95, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", bounce: 0.3 }}
                                        style={{
                                            padding: "0.75rem 1rem",
                                            backgroundColor: "white",
                                            border: "1px solid #E5E7EB",
                                            borderRadius: "16px",
                                            borderTopRightRadius: "4px",
                                            fontSize: "0.9rem",
                                            fontWeight: 500,
                                            color: "#374151",
                                            whiteSpace: "normal",
                                            wordBreak: "keep-all",
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                            maxWidth: "220px",
                                        }}
                                    >
                                        {characterName.trim() ? "마음껏 그려봐! 대충 그려도 예쁘게 변해!" : "먼저 친구 이름을 지어줘!"}
                                    </motion.div>
                                    <motion.div
                                        animate={{ y: [0, -6, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                        style={{ width: "80px", height: "80px", flexShrink: 0 }}
                                    >
                                        <Image
                                            src="/helpers/pebble.webp"
                                            alt="Helper"
                                            width={80}
                                            height={80}
                                            style={{ objectFit: "contain", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))" }}
                                        />
                                    </motion.div>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", height: "100%" }}>
                                <div style={{
                                    flex: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "0.5rem",
                                }}>
                                    <canvas
                                        ref={canvasRef}
                                        width={600}
                                        height={600}
                                        onMouseDown={startDrawing}
                                        onMouseMove={draw}
                                        onMouseUp={stopDrawing}
                                        onMouseLeave={stopDrawing}
                                        onTouchStart={startDrawing}
                                        onTouchMove={draw}
                                        onTouchEnd={stopDrawing}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                            maxHeight: "65vh",
                                            aspectRatio: "1/1",
                                            display: "block",
                                            margin: "0 auto",
                                            cursor: "crosshair",
                                            touchAction: "none",
                                            borderRadius: "16px",
                                            backgroundColor: "#FFFFFF",
                                            border: "2px solid #E5E7EB",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                        }}
                                    />
                                </div>

                                <div style={{ width: "88px", display: "flex", flexDirection: "column", gap: "0.625rem", flexShrink: 0 }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.375rem" }}>
                                        {colors.map((c) => (
                                            <motion.button
                                                key={c}
                                                onClick={() => setColor(c)}
                                                whileTap={{ scale: 0.9 }}
                                                style={{
                                                    width: "36px",
                                                    height: "36px",
                                                    borderRadius: "8px",
                                                    backgroundColor: c,
                                                    border: color === c ? "3px solid #374151" : "2px solid #E5E7EB",
                                                    cursor: "pointer",
                                                    boxShadow: color === c ? "0 2px 4px rgba(0,0,0,0.15)" : "none",
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <div style={{ display: "flex", gap: "0.375rem", marginTop: "0.25rem" }}>
                                        <motion.button
                                            onClick={() => setIsEraserMode(false)}
                                            whileTap={{ scale: 0.9 }}
                                            style={{
                                                flex: 1,
                                                height: "40px",
                                                borderRadius: "8px",
                                                backgroundColor: !isEraserMode ? "#8B5CF6" : "#F3F4F6",
                                                border: "1.5px solid #E5E7EB",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Pencil size={18} color={!isEraserMode ? "white" : "#9CA3AF"} />
                                        </motion.button>
                                        <motion.button
                                            onClick={() => setIsEraserMode(true)}
                                            whileTap={{ scale: 0.9 }}
                                            style={{
                                                flex: 1,
                                                height: "40px",
                                                borderRadius: "8px",
                                                backgroundColor: isEraserMode ? "#8B5CF6" : "#F3F4F6",
                                                border: "1.5px solid #E5E7EB",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Eraser size={18} color={isEraserMode ? "white" : "#9CA3AF"} />
                                        </motion.button>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem", alignItems: "center" }}>
                                        {brushSizes.map((size) => (
                                            <motion.button
                                                key={size}
                                                onClick={() => setBrushSize(size)}
                                                whileTap={{ scale: 0.9 }}
                                                style={{
                                                    width: "100%",
                                                    height: "32px",
                                                    borderRadius: "8px",
                                                    backgroundColor: brushSize === size ? "#374151" : "#F3F4F6",
                                                    border: brushSize === size ? "none" : "1.5px solid #E5E7EB",
                                                    cursor: "pointer",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <div style={{
                                                    width: Math.min(size, 20),
                                                    height: Math.min(size, 20),
                                                    borderRadius: "50%",
                                                    backgroundColor: brushSize === size ? "white" : "#374151",
                                                }} />
                                            </motion.button>
                                        ))}
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem", marginTop: "0.25rem" }}>
                                        <Button variant="outline" size="sm" onClick={undo} disabled={history.length === 0} style={{ height: "40px", borderRadius: "10px", padding: 0, border: "2px solid #374151" }}>
                                            <RotateCcw size={18} />
                                        </Button>
                                        <Button variant="outline" size="sm" onClick={clearCanvas} style={{ height: "40px", borderRadius: "10px", padding: 0, color: "#EF4444", border: "2px solid #FECACA" }}>
                                            <Trash2 size={18} />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
                                <Button variant="ghost" onClick={handleBack} style={{ flex: 1, height: "48px", borderRadius: "12px", border: "2px solid #374151", fontWeight: 600 }}>
                                    <ChevronLeft size={18} /> 뒤로
                                </Button>
                                <motion.div style={{ flex: 2 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        onClick={handleTransform}
                                        disabled={!hasDrawn || !characterName.trim()}
                                        style={{
                                            width: "100%",
                                            height: "48px",
                                            borderRadius: "12px",
                                            background: (hasDrawn && characterName.trim()) ? "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)" : undefined,
                                            fontWeight: 600,
                                        }}
                                    >
                                        <Sparkles size={18} /> 마법 변환! <Wand2 size={18} />
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {innerStep === "style" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "1rem",
                            maxWidth: "700px",
                            margin: "0 auto",
                            width: "100%",
                        }}
                    >
                        {/* 상단: 원본 그림 + 제목 */}
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1.5rem",
                            marginBottom: "1.5rem",
                            width: "100%",
                            justifyContent: "center",
                        }}>
                            {/* 원본 그림 미리보기 */}
                            <div style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "16px",
                                overflow: "hidden",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                border: "3px solid #E5E7EB",
                                flexShrink: 0,
                            }}>
                                {savedCanvasBlob && (
                                    <img
                                        src={URL.createObjectURL(savedCanvasBlob)}
                                        alt="원본 그림"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                )}
                            </div>
                            <div style={{ textAlign: "left" }}>
                                <h3 style={{
                                    fontSize: "1.3rem",
                                    fontWeight: 700,
                                    color: "#1F2937",
                                    marginBottom: "0.25rem",
                                }}>
                                    <Palette size={20} style={{ marginRight: "0.5rem", verticalAlign: "middle", color: "#8B5CF6" }} />
                                    {characterName}의 스타일 선택
                                </h3>
                                <p style={{
                                    fontSize: "0.85rem",
                                    color: "#6B7280",
                                }}>
                                    선택한 스타일이 동화책 전체에 적용돼요!
                                </p>
                            </div>
                        </div>

                        {/* 스타일 선택 (5개 가로 배치) */}
                        <div style={{
                            display: "flex",
                            gap: "0.75rem",
                            width: "100%",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            marginBottom: "1.5rem",
                        }}>
                            {Object.values(ART_STYLES).map((style) => (
                                <motion.button
                                    key={style.id}
                                    onClick={() => setSelectedStyle(style.id as ArtStyleId)}
                                    whileHover={{ scale: 1.05, y: -4 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        padding: "0.75rem 1rem",
                                        borderRadius: "16px",
                                        border: selectedStyle === style.id
                                            ? `3px solid ${style.color}`
                                            : "2px solid #E5E7EB",
                                        backgroundColor: selectedStyle === style.id
                                            ? `${style.color}20`
                                            : "white",
                                        cursor: "pointer",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: "0.25rem",
                                        minWidth: "90px",
                                        boxShadow: selectedStyle === style.id
                                            ? `0 6px 16px ${style.color}40`
                                            : "0 2px 8px rgba(0,0,0,0.05)",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    <span style={{ fontSize: "1.8rem" }}>{style.emoji}</span>
                                    <span style={{
                                        fontSize: "0.85rem",
                                        fontWeight: 700,
                                        color: selectedStyle === style.id ? style.color : "#374151"
                                    }}>
                                        {style.name}
                                    </span>
                                </motion.button>
                            ))}
                        </div>

                        {/* 액션 버튼 */}
                        <div style={{ display: "flex", gap: "1rem", width: "100%", maxWidth: "500px" }}>
                            <Button
                                variant="outline"
                                onClick={() => setInnerStep("draw")}
                                style={{ flex: 1, height: "52px", borderRadius: "14px", fontWeight: 600 }}
                            >
                                <ChevronLeft size={18} /> 다시 그리기
                            </Button>
                            <Button
                                variant="primary"
                                onClick={handleStartTransform}
                                style={{
                                    flex: 2,
                                    height: "52px",
                                    borderRadius: "14px",
                                    fontWeight: 700,
                                    background: `linear-gradient(135deg, ${ART_STYLES[selectedStyle].color} 0%, #8B5CF6 100%)`,
                                    boxShadow: `0 8px 20px ${ART_STYLES[selectedStyle].color}40`,
                                }}
                            >
                                <Sparkles size={18} /> {ART_STYLES[selectedStyle].name} 스타일로 변신!
                            </Button>
                        </div>
                    </motion.div>
                )}

                {innerStep === "transform" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0 1rem", marginTop: "-2rem" }}>
                        <div style={{ display: "flex", gap: "8px", marginTop: "0.5rem" }}>
                            {[0, 1, 2].map((i) => (
                                <motion.div key={i} animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }} style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#9B59B6" }} />
                            ))}
                        </div>
                    </motion.div>
                )}

                {innerStep === "result" && transformedImageUrl && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", bounce: 0.3 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem" }}>
                        <div style={{ width: "300px", height: "300px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", position: "relative", marginBottom: "2rem" }}>
                            <Image src={transformedImageUrl} alt="result" fill style={{ objectFit: "cover" }} unoptimized />
                        </div>
                        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1F2937" }}>{characterName}</h2>
                            <p style={{ color: "#6B7280" }}>멋진 주인공이 탄생했어!</p>
                        </div>
                        <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
                            <Button variant="outline" onClick={() => setInnerStep("draw")} style={{ flex: 1, height: "48px" }}>
                                다시 그리기
                            </Button>
                            <Button variant="primary" onClick={handleConfirmCharacter} style={{ flex: 1, height: "48px" }}>
                                이 친구로 결정! <ChevronRight />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </div>
        </StoryFlowLayout>
    );
}
