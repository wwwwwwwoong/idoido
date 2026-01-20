"use client";

import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

interface PageData {
    id: number;
    thumbnail?: string | ReactNode; // 이미지 URL 또는 ReactNode (색상 박스 등)
    isCompleted?: boolean;
    label?: string;
}

interface TimelineEditorLayoutProps {
    pages: PageData[];
    currentPageIndex: number;
    onPageSelect: (index: number) => void;
    onAddPage?: () => void;
    maxPages?: number;
    children: ReactNode; // 편집 영역
    pageContent?: ReactNode; // 현재 페이지 내용 (스토리 텍스트 등)
}

export default function TimelineEditorLayout({
    pages,
    currentPageIndex,
    onPageSelect,
    onAddPage,
    maxPages = 8,
    children,
    pageContent,
}: TimelineEditorLayoutProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollTimeline = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 150;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const canAddMore = onAddPage && pages.length < maxPages;

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            gap: "1rem",
        }}>
            {/* 상단: 타임라인 (가로 스크롤 + 썸네일) */}
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0 0.5rem",
            }}>
                {/* 좌측 화살표 */}
                <button
                    onClick={() => scrollTimeline("left")}
                    style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#F3F4F6",
                        border: "none",
                        cursor: "pointer",
                        flexShrink: 0,
                    }}
                >
                    <ChevronLeft size={18} color="#6B7280" />
                </button>

                {/* 썸네일 스크롤 영역 */}
                <div
                    ref={scrollRef}
                    style={{
                        display: "flex",
                        gap: "0.75rem",
                        overflowX: "auto",
                        flex: 1,
                        padding: "0.5rem 0",
                        scrollBehavior: "smooth",
                        scrollbarWidth: "none",
                    }}
                    className="hide-scrollbar"
                >
                    {pages.map((page, index) => {
                        const isActive = index === currentPageIndex;
                        return (
                            <motion.button
                                key={page.id}
                                onClick={() => onPageSelect(index)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    width: "80px",
                                    height: "60px",
                                    borderRadius: "10px",
                                    border: isActive
                                        ? "3px solid #8B5CF6"
                                        : page.isCompleted
                                            ? "2px solid #10B981"
                                            : "2px solid #E5E7EB",
                                    backgroundColor: "#F9FAFB",
                                    cursor: "pointer",
                                    flexShrink: 0,
                                    overflow: "hidden",
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: isActive ? "0 4px 12px rgba(139, 92, 246, 0.25)" : "none",
                                    transition: "all 0.2s",
                                }}
                            >
                                {/* 썸네일 내용 */}
                                {typeof page.thumbnail === "string" ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={page.thumbnail}
                                        alt={`Page ${page.id}`}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }}
                                    />
                                ) : page.thumbnail ? (
                                    page.thumbnail
                                ) : (
                                    <span style={{
                                        fontSize: "1.25rem",
                                        fontWeight: 700,
                                        color: isActive ? "#8B5CF6" : "#9CA3AF"
                                    }}>
                                        {page.id}
                                    </span>
                                )}

                                {/* 완료 표시 */}
                                {page.isCompleted && !isActive && (
                                    <div style={{
                                        position: "absolute",
                                        top: "4px",
                                        right: "4px",
                                        width: "16px",
                                        height: "16px",
                                        borderRadius: "50%",
                                        backgroundColor: "#10B981",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                            <path d="M20 6L9 17L4 12" />
                                        </svg>
                                    </div>
                                )}

                                {/* 라벨 (선택) */}
                                {page.label && (
                                    <div style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        backgroundColor: "rgba(0,0,0,0.5)",
                                        color: "white",
                                        fontSize: "0.65rem",
                                        padding: "2px 4px",
                                        textAlign: "center",
                                    }}>
                                        {page.label}
                                    </div>
                                )}
                            </motion.button>
                        );
                    })}

                    {/* 페이지 추가 버튼 */}
                    {canAddMore && (
                        <motion.button
                            onClick={onAddPage}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                width: "80px",
                                height: "60px",
                                borderRadius: "10px",
                                border: "2px dashed #D1D5DB",
                                backgroundColor: "#F9FAFB",
                                cursor: "pointer",
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Plus size={24} color="#9CA3AF" />
                        </motion.button>
                    )}
                </div>

                {/* 우측 화살표 */}
                <button
                    onClick={() => scrollTimeline("right")}
                    style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#F3F4F6",
                        border: "none",
                        cursor: "pointer",
                        flexShrink: 0,
                    }}
                >
                    <ChevronRight size={18} color="#6B7280" />
                </button>
            </div>

            {/* 페이지 인디케이터 */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.25rem",
            }}>
                {pages.map((_, index) => (
                    <div
                        key={index}
                        style={{
                            width: index === currentPageIndex ? "20px" : "6px",
                            height: "6px",
                            borderRadius: "3px",
                            backgroundColor: index === currentPageIndex ? "#8B5CF6" : "#E5E7EB",
                            transition: "all 0.2s",
                        }}
                    />
                ))}
            </div>

            {/* 현재 페이지 내용 (스토리 텍스트 등) */}
            {pageContent && (
                <motion.div
                    key={currentPageIndex}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        padding: "0.75rem 1rem",
                        backgroundColor: "white",
                        borderRadius: "12px",
                        border: "1px solid #E5E7EB",
                        textAlign: "center",
                    }}
                >
                    {pageContent}
                </motion.div>
            )}

            {/* 메인 편집 영역 (고정 높이) */}
            <div style={{
                flex: 1,
                minHeight: 0, // flex item 스크롤 방지
                display: "flex",
                flexDirection: "column",
            }}>
                <motion.div
                    key={currentPageIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        flex: 1,
                        backgroundColor: "#F9FAFB",
                        borderRadius: "16px",
                        border: "2px solid #E5E7EB",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {children}
                </motion.div>
            </div>

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
