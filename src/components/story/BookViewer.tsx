"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

// 배경 정의
const BACKGROUNDS: Record<string, { gradient: string; name: string }> = {
    forest: { gradient: "linear-gradient(180deg, #4ADE80 0%, #166534 100%)", name: "숲" },
    ocean: { gradient: "linear-gradient(180deg, #60A5FA 0%, #1E40AF 100%)", name: "바다" },
    sky: { gradient: "linear-gradient(180deg, #93C5FD 0%, #3B82F6 100%)", name: "하늘" },
    village: { gradient: "linear-gradient(180deg, #FCD34D 0%, #B45309 100%)", name: "마을" },
    night: { gradient: "linear-gradient(180deg, #1E1B4B 0%, #0F172A 100%)", name: "밤" },
};

export interface SceneObject {
    id: string;
    type: "character" | "item";
    itemId?: string;
    x: number;
    y: number;
    scale: number;
    rotation: number;
}

export interface SceneData {
    id: string;
    order: number;
    backgroundId: string;
    storyText: string | null;
    objects: SceneObject[] | null;
}

export interface BookData {
    id: string;
    title: string | null;
    status: string;
    scenes: SceneData[];
    coverColor?: string;
}

interface Props {
    book: BookData;
    characterImageUrl?: string | null;
    className?: string;
}

export default function BookViewer({ book, characterImageUrl, className }: Props) {
    const [currentPage, setCurrentPage] = useState(-1); // -1: 표지
    const [isMuted, setIsMuted] = useState(false);

    // totalPages calculation updated to be safe
    const totalPages = book.scenes ? book.scenes.length : 0;

    const colors = ["#F472B6", "#60A5FA", "#A78BFA", "#34D399", "#FBBF24", "#FB923C"];
    const coverColor = book.coverColor || colors[0];

    // 페이지 넘기기 사운드
    const playPageTurnSound = () => {
        if (isMuted) return;
        try {
            const audio = new Audio("/sounds/page-turn.mp3");
            audio.volume = 0.3;
            audio.play().catch(() => { });
        } catch { }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            playPageTurnSound();
            setCurrentPage(prev => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > -1) {
            playPageTurnSound();
            setCurrentPage(prev => prev - 1);
        }
    };

    // 키보드 네비게이션
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") handleNextPage();
            if (e.key === "ArrowLeft") handlePrevPage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentPage, totalPages]);

    const currentScene = currentPage >= 0 && book.scenes ? book.scenes[currentPage] : null;
    // Default to a fallback gradient if backgroundId is missing or invalid
    const bgGradient = currentScene?.backgroundId
        ? BACKGROUNDS[currentScene.backgroundId]?.gradient || BACKGROUNDS.forest.gradient
        : coverColor;

    return (
        <div
            className={className}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                backgroundColor: "#f0f0f0", // basic fallback
            }}
        >
            {/* 사운드 토글 */}
            <div style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                zIndex: 20,
            }}>
                <button
                    onClick={() => setIsMuted(!isMuted)}
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.2)",
                        backdropFilter: "blur(8px)",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                    }}
                >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
            </div>

            {/* 페이지 콘텐츠 */}
            <AnimatePresence mode="wait">
                {currentPage === -1 ? (
                    // 표지
                    <motion.div
                        key="cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            width: "100%",
                            height: "100%",
                            background: `linear-gradient(135deg, ${coverColor} 0%, #A78BFA 50%, #60A5FA 100%)`,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            textAlign: "center",
                            padding: "2rem",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        {/* 장식 패턴 */}
                        <div style={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)",
                            pointerEvents: "none",
                        }} />

                        {/* 캐릭터 이미지 */}
                        {characterImageUrl && (
                            <div style={{
                                marginBottom: "1.5rem",
                                position: "relative",
                            }}>
                                <div style={{
                                    position: "absolute",
                                    inset: -10,
                                    background: "rgba(255,255,255,0.2)",
                                    borderRadius: "50%",
                                    filter: "blur(20px)",
                                }} />
                                <img
                                    src={characterImageUrl}
                                    alt="캐릭터"
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        objectFit: "contain",
                                        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2))",
                                        position: "relative",
                                    }}
                                />
                            </div>
                        )}

                        {/* 제목 */}
                        <div style={{
                            fontSize: "2.5rem",
                            fontWeight: 700,
                            marginBottom: "0.75rem",
                            fontFamily: "'Gaegu', cursive",
                            textShadow: "0 2px 8px rgba(0,0,0,0.2)",
                            wordBreak: "keep-all",
                            position: "relative",
                        }}>
                            {book.title || "나의 동화책"}
                        </div>

                        {/* 페이지 수 */}
                        <div style={{
                            fontSize: "1rem",
                            opacity: 0.9,
                            backgroundColor: "rgba(255,255,255,0.2)",
                            padding: "0.5rem 1rem",
                            borderRadius: "20px",
                            backdropFilter: "blur(4px)",
                        }}>
                            📖 {totalPages}페이지
                        </div>
                    </motion.div>
                ) : (
                    // 본문 페이지
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        style={{
                            width: "100%",
                            height: "100%",
                            background: bgGradient,
                            display: "flex",
                            position: "relative",
                            flexDirection: "column",
                        }}
                    >
                        {/* 장면 영역 (이미지/오브젝트) */}
                        <div style={{ flex: 1, position: "relative", width: "100%", height: "100%" }}>
                            {/* Scene Image (If generated) */}
                            {/* In the new flow, we might have a full scene image. 
                                Or we might still have individual objects. 
                                Ideally, we prioritize the full scene image if available. */}
                            {(currentScene as any).sceneImagePath ? (
                                <img
                                    src={(currentScene as any).sceneImagePath}
                                    alt="장면"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            ) : (
                                currentScene?.objects?.map((obj) => (
                                    <div
                                        key={obj.id}
                                        style={{
                                            position: "absolute",
                                            left: `${obj.x}%`,
                                            top: `${obj.y}%`,
                                            transform: `translate(-50%, -50%) scale(${obj.scale}) rotate(${obj.rotation}deg)`,
                                        }}
                                    >
                                        {obj.type === "character" && characterImageUrl && (
                                            <img
                                                src={characterImageUrl}
                                                alt="캐릭터"
                                                style={{ width: "120px", height: "120px", objectFit: "contain" }}
                                            />
                                        )}
                                    </div>
                                ))
                            )}
                        </div>

                        {/* 텍스트 영역 - Overlay at bottom */}
                        <div style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: "2.5rem 2rem 1.5rem",
                            background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)",
                            color: "white",
                            zIndex: 10,
                        }}>
                            <div style={{
                                fontSize: "1.125rem",
                                lineHeight: 1.6,
                                fontWeight: 500,
                                textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                                wordBreak: "keep-all",
                                whiteSpace: "pre-wrap", // Preserve newlines
                            }}>
                                {currentScene?.storyText || "이야기가 없습니다."}
                            </div>
                            <div style={{
                                marginTop: "0.75rem",
                                fontSize: "0.85rem",
                                opacity: 0.8,
                                textAlign: "right",
                            }}>
                                📖 {currentPage + 1} / {totalPages}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 네비게이션 버튼 */}
            <button
                onClick={handlePrevPage}
                disabled={currentPage === -1}
                style={{
                    position: "absolute",
                    left: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: currentPage === -1 ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.3)",
                    backdropFilter: "blur(8px)",
                    border: "none",
                    cursor: currentPage === -1 ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    opacity: currentPage === -1 ? 0.3 : 1,
                    zIndex: 30,
                    transition: "all 0.2s",
                }}
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={handleNextPage}
                disabled={currentPage >= totalPages - 1}
                style={{
                    position: "absolute",
                    right: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: currentPage >= totalPages - 1 ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.3)",
                    backdropFilter: "blur(8px)",
                    border: "none",
                    cursor: currentPage >= totalPages - 1 ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    opacity: currentPage >= totalPages - 1 ? 0.3 : 1,
                    zIndex: 30,
                    transition: "all 0.2s",
                }}
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
}
