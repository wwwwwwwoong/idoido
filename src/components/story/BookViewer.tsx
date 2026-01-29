"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    sceneImagePath?: string;
}

export interface BookData {
    id: string;
    title: string | null;
    status: string;
    scenes: SceneData[];
    coverColor?: string;
    coverPath?: string;
}

interface Props {
    book: BookData;
    characterImageUrl?: string | null;
    className?: string;
}

export default function BookViewer({ book, characterImageUrl, className }: Props) {
    const [currentPage, setCurrentPage] = useState(-1); // -1: 표지

    // totalPages calculation updated to be safe
    const totalPages = book.scenes ? book.scenes.length : 0;

    const colors = ["#F472B6", "#60A5FA", "#A78BFA", "#34D399", "#FBBF24", "#FB923C"];
    const coverColor = book.coverColor || colors[0];

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > -1) {
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
                backgroundColor: "#f0f0f0",
            }}
        >
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
                            // 이미지가 있을 경우 배경을 투명하게 하거나 제거
                            background: (book.coverPath?.startsWith("http") || book.coverPath?.startsWith("data:"))
                                ? "transparent"
                                : `linear-gradient(135deg, ${coverColor} 0%, #A78BFA 50%, #60A5FA 100%)`,
                            display: "flex",
                            flexDirection: "column",
                            // 스타일 복구
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            textAlign: "center",
                            padding: "2rem",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >

                        {/* 배경 이미지 (Next.js Image 최적화) */}
                        {(book.coverPath?.startsWith("http") || book.coverPath?.startsWith("data:")) ? (
                            <Image
                                src={book.coverPath}
                                alt="Cover"
                                fill
                                priority
                                unoptimized
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, 800px"
                            />
                        ) : (
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                background: `linear-gradient(135deg, ${coverColor} 0%, #A78BFA 50%, #60A5FA 100%)`,
                                zIndex: -1,
                            }} />
                        )}

                        {/* 배경 이미지 오버레이 (이미지 있을 때만 살짝 어둡게) */}
                        {(book.coverPath?.startsWith("http") || book.coverPath?.startsWith("data:")) && (
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                backgroundColor: "rgba(0,0,0,0.15)",
                            }} />
                        )}

                        {/* 장식 패턴 (이미지 없을 때만) */}
                        {!(book.coverPath?.startsWith("http") || book.coverPath?.startsWith("data:")) && (
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)",
                                pointerEvents: "none",
                            }} />
                        )}

                        {/* 캐릭터 이미지 (표지 이미지가 없을 때만 표시) */}
                        {characterImageUrl && !(book.coverPath?.startsWith("http") || book.coverPath?.startsWith("data:")) && (
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
                                {/* 캐릭터는 Next.js Image로 최적화 (안정성을 위해 unoptimized) */}
                                <Image
                                    src={characterImageUrl}
                                    alt="캐릭터"
                                    width={200}
                                    height={200}
                                    unoptimized
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        objectFit: "contain",
                                        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2))",
                                        position: "relative",
                                        zIndex: 10
                                    }}
                                />
                            </div>
                        )}

                        {/* 제목 */}
                        <div style={{
                            fontSize: "3rem",
                            fontWeight: 700,
                            marginBottom: "0.75rem",
                            fontFamily: "'Gaegu', cursive",
                            textShadow: `
                                2px 2px 0 #000,
                                -1px -1px 0 #000,  
                                1px -1px 0 #000,
                                -1px 1px 0 #000,
                                1px 1px 0 #000,
                                0 4px 8px rgba(0,0,0,0.5)
                            `,
                            color: "white",
                            wordBreak: "keep-all",
                            position: "relative",
                            zIndex: 10,
                            padding: "0 1rem",
                        }}>
                            {book.title || "나의 동화책"}
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
                            {currentScene?.sceneImagePath ? (
                                <div style={{ width: "100%", height: "100%", position: "relative" }}>
                                    <Image
                                        src={currentScene.sceneImagePath}
                                        alt="장면"
                                        fill
                                        priority={true}
                                        unoptimized
                                        style={{ objectFit: "contain" }}
                                    />
                                    {/* Fallback이나 로딩 상태 처리는 필요 시 추가 */}
                                </div>
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
                                            <Image
                                                src={characterImageUrl}
                                                alt="캐릭터"
                                                width={200}
                                                height={200}
                                                priority
                                                style={{ width: "120px", height: "120px", objectFit: "contain" }}
                                                onError={() => {
                                                    // Image onError 처리 (필요시 상태 관리)
                                                }}
                                            />
                                        )}
                                    </div>
                                ))
                            )}
                        </div>

                        {/* 텍스트 영역 */}
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
                                whiteSpace: "pre-wrap",
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

            {/* 네비게이션 버튼 - 왼쪽 */}
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

            {/* 네비게이션 버튼 - 오른쪽 */}
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

            {/* 다음 페이지 프리로딩 (숨김 처리하여 미리 리소스 확보) */}
            {currentPage < totalPages - 1 && book.scenes && book.scenes[currentPage + 1]?.sceneImagePath && (
                <div style={{ position: "fixed", left: "-9999px", top: 0, width: "100vw", height: "100vh", pointerEvents: "none", opacity: 0 }}>
                    <Image
                        src={book.scenes[currentPage + 1].sceneImagePath!}
                        alt="preload"
                        fill
                        priority
                        unoptimized
                        sizes="100vw"
                    />
                </div>
            )}
        </div>
    );
}
