"use client";

import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { Check, Pen, Image, Sparkles, Menu, PenLine, Home, FolderOpen, LogOut, ChevronLeft, X, FlaskConical, FileText, Mic } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { WalletDisplay } from "@/components/features/WalletDisplay";

interface Step {
    id: number;
    label: string;
    icon: ReactNode;
}

const defaultSteps: Step[] = [
    { id: 1, label: "주인공", icon: <Pen size={18} /> },
    { id: 2, label: "레시피", icon: <FlaskConical size={18} /> },
    { id: 3, label: "이야기", icon: <FileText size={18} /> },
    { id: 4, label: "장면", icon: <Image size={18} /> },
    { id: 5, label: "완성", icon: <Sparkles size={18} /> },
    { id: 6, label: "목소리", icon: <Mic size={18} /> },
];

interface StoryFlowLayoutProps {
    children: ReactNode;
    currentStep: number;
    title?: string;
    subtitle?: string;
    backHref?: string;
    helper?: ReactNode;
    contentMaxWidth?: string;
}

export default function StoryFlowLayout({
    children,
    currentStep,
    title,
    subtitle,
    backHref,
    helper,
    contentMaxWidth = "800px",
}: StoryFlowLayoutProps) {
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleLogout = async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
        router.push("/");
        router.refresh();
    };

    // 반응형 처리 - Hydration 오류 방지
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
        checkDesktop();
        window.addEventListener("resize", checkDesktop);
        return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    return (
        <div style={{
            minHeight: "100dvh",
            display: "flex",
            backgroundColor: "#FFFFFF",
            color: "#1F2937",
        }}>
            {/* 좌측 사이드바 (SOOP 스타일 - 아이콘 + 라벨) */}
            <aside
                style={{
                    width: "72px",
                    display: isDesktop ? "flex" : "none",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0.75rem 0",
                    gap: "0.25rem",
                    borderRight: "1px solid #E5E7EB",
                    backgroundColor: "#FAFAFA",
                    position: "sticky",
                    top: 0,
                    height: "100dvh",
                }}
            >
                {/* 햄버거 메뉴 버튼 */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    style={{
                        width: "56px",
                        padding: "0.5rem 0",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.125rem",
                        backgroundColor: "transparent",
                        color: "#4B5563",
                        cursor: "pointer",
                        border: "none",
                        marginBottom: "0.5rem",
                        transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#E5E7EB"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                >
                    <Menu size={20} />
                    <span style={{ fontSize: "0.65rem", fontWeight: 500 }}>메뉴</span>
                </button>

                {/* 단계 아이콘들 + 라벨 */}
                {defaultSteps.map((step) => {
                    const isActive = currentStep === step.id;
                    const isDone = currentStep > step.id;

                    return (
                        <div
                            key={step.id}
                            style={{
                                width: "56px",
                                padding: "0.375rem 0",
                                borderRadius: "10px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "0.125rem",
                                backgroundColor: isActive ? "#8B5CF6" : "transparent",
                                color: isActive ? "white" : isDone ? "#059669" : "#9CA3AF",
                                cursor: "default",
                                transition: "all 0.2s",
                            }}
                        >
                            {isDone ? <Check size={18} /> : step.icon}
                            <span style={{
                                fontSize: "0.6rem",
                                fontWeight: isActive ? 600 : 500,
                                color: isActive ? "white" : isDone ? "#059669" : "#6B7280",
                            }}>
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </aside>

            {/* 메인 콘텐츠 영역 */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* 상단 헤더 */}
                <header style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.5rem 1rem",
                    borderBottom: "1px solid #E5E7EB",
                    position: "sticky",
                    top: 0,
                    zIndex: 50,
                    backgroundColor: "#FFFFFF",
                }}>
                    {/* 좌측: 모바일 햄버거 + 로고 */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        {/* 모바일에서만 햄버거 */}
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                display: isDesktop ? "none" : "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "transparent",
                                color: "#4B5563",
                                cursor: "pointer",
                                border: "none",
                            }}
                        >
                            <Menu size={22} />
                        </button>
                        <Link
                            href="/"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                textDecoration: "none",
                                color: "#1F2937",
                                fontSize: "1.25rem",
                                fontWeight: 500,
                            }}
                        >
                            <span style={{ fontSize: "1.5rem" }}>🌱</span>
                            <span>IDO</span>
                        </Link>
                    </div>

                    {/* 중앙: 타이틀 (Navbar로 이동) */}
                    <div style={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                        pointerEvents: "none", // 클릭 통과
                    }}>
                        {title && (
                            <h1 style={{
                                fontSize: "1.1rem",
                                fontWeight: 700,
                                color: "#111827",
                                margin: 0,
                                lineHeight: 1.2,
                            }}>
                                {title}
                            </h1>
                        )}
                        {/* subtitle은 공간상 생략하거나 아주 작게 표시 (일단 생략하여 깔끔하게 유지) */}
                    </div>

                    {/* 우측: 지갑 + 프로필 */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", position: "relative" }}>
                        <WalletDisplay compact />
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            style={{
                                width: "36px",
                                height: "36px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                cursor: "pointer",
                                border: "none",
                            }}
                        >
                            U
                        </button>

                        {/* 프로필 드롭다운 */}
                        {isProfileOpen && (
                            <>
                                <div
                                    onClick={() => setIsProfileOpen(false)}
                                    style={{
                                        position: "fixed",
                                        inset: 0,
                                        zIndex: 100,
                                    }}
                                />
                                <div style={{
                                    position: "absolute",
                                    top: "100%",
                                    right: 0,
                                    marginTop: "0.5rem",
                                    backgroundColor: "white",
                                    borderRadius: "12px",
                                    boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                                    border: "1px solid #E5E7EB",
                                    minWidth: "160px",
                                    zIndex: 101,
                                    overflow: "hidden",
                                }}>
                                    <Link
                                        href="/my"
                                        onClick={() => setIsProfileOpen(false)}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            padding: "0.75rem 1rem",
                                            textDecoration: "none",
                                            color: "#374151",
                                            fontSize: "0.875rem",
                                        }}
                                    >
                                        <FolderOpen size={16} /> 내 서재
                                    </Link>
                                    <div style={{ height: "1px", backgroundColor: "#E5E7EB" }} />
                                    <button
                                        onClick={handleLogout}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            padding: "0.75rem 1rem",
                                            width: "100%",
                                            border: "none",
                                            backgroundColor: "transparent",
                                            color: "#6B7280",
                                            fontSize: "0.875rem",
                                            cursor: "pointer",
                                            textAlign: "left",
                                        }}
                                    >
                                        <LogOut size={16} /> 로그아웃
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </header>

                {/* 콘텐츠 영역 */}
                <main style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "1.5rem 1rem",
                    overflowY: "auto",
                    backgroundColor: "#FAFAFA",
                }}>


                    {/* 도우미 */}
                    {helper && (
                        <div style={{
                            maxWidth: contentMaxWidth,
                            width: "100%",
                            marginBottom: "1rem",
                        }}>
                            {helper}
                        </div>
                    )}

                    {/* 메인 콘텐츠 */}
                    <div style={{
                        maxWidth: contentMaxWidth,
                        width: "100%",
                        flex: 1,
                    }}>
                        {children}
                    </div>
                </main>
            </div>

            {/* 슬라이드 사이드바 */}
            {isSidebarOpen && (
                <>
                    <div
                        onClick={() => setIsSidebarOpen(false)}
                        style={{
                            position: "fixed",
                            inset: 0,
                            backgroundColor: "rgba(0,0,0,0.3)",
                            zIndex: 100,
                        }}
                    />
                    <div style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: "300px",
                        backgroundColor: "#FFFFFF",
                        zIndex: 101,
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "4px 0 24px rgba(0,0,0,0.12)",
                    }}>
                        {/* 사이드바 헤더 */}
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "0.75rem 1rem",
                            borderBottom: "1px solid #E5E7EB",
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span style={{ fontSize: "1.5rem" }}>🌱</span>
                                <span style={{ fontSize: "1.25rem", fontWeight: 600, color: "#111827" }}>IDO</span>
                            </div>
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                style={{
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "transparent",
                                    color: "#6B7280",
                                    cursor: "pointer",
                                    border: "none",
                                }}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* 진행 단계 */}
                        <div style={{ padding: "1rem" }}>
                            <p style={{
                                fontSize: "0.75rem",
                                color: "#9CA3AF",
                                marginBottom: "0.75rem",
                                textTransform: "uppercase",
                                fontWeight: 600,
                                letterSpacing: "0.05em",
                            }}>
                                만들기 진행 단계
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                                {defaultSteps.map((step) => {
                                    const isActive = currentStep === step.id;
                                    const isDone = currentStep > step.id;

                                    return (
                                        <div
                                            key={step.id}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.75rem",
                                                padding: "0.625rem 0.75rem",
                                                borderRadius: "10px",
                                                backgroundColor: isActive ? "#F3E8FF" : "transparent",
                                                color: isDone ? "#059669" : isActive ? "#7C3AED" : "#6B7280",
                                            }}
                                        >
                                            <div style={{
                                                width: "28px",
                                                height: "28px",
                                                borderRadius: "8px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: isDone ? "#D1FAE5" : isActive ? "#8B5CF6" : "#F3F4F6",
                                                color: isDone ? "#059669" : isActive ? "white" : "#9CA3AF",
                                                fontSize: "0.8rem",
                                                fontWeight: 600,
                                            }}>
                                                {isDone ? <Check size={14} /> : step.icon}
                                            </div>
                                            <span style={{ fontSize: "0.9rem", fontWeight: isActive ? 600 : 400 }}>
                                                {step.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div style={{ height: "1px", backgroundColor: "#E5E7EB", margin: "0 1rem" }} />

                        {/* 네비게이션 */}
                        <div style={{ padding: "1rem", flex: 1 }}>
                            <Link
                                href="/"
                                onClick={() => setIsSidebarOpen(false)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    padding: "0.75rem",
                                    borderRadius: "10px",
                                    textDecoration: "none",
                                    color: "#374151",
                                    fontSize: "0.9rem",
                                }}
                            >
                                <Home size={18} /> 홈으로
                            </Link>
                            <Link
                                href="/create/draw"
                                onClick={() => setIsSidebarOpen(false)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    padding: "0.75rem",
                                    borderRadius: "10px",
                                    textDecoration: "none",
                                    color: "#374151",
                                    fontSize: "0.9rem",
                                }}
                            >
                                <PenLine size={18} /> 새로 만들기
                            </Link>
                            <Link
                                href="/my"
                                onClick={() => setIsSidebarOpen(false)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    padding: "0.75rem",
                                    borderRadius: "10px",
                                    textDecoration: "none",
                                    color: "#374151",
                                    fontSize: "0.9rem",
                                }}
                            >
                                <FolderOpen size={18} /> 내 서재
                            </Link>
                            {backHref && (
                                <Link
                                    href={backHref}
                                    onClick={() => setIsSidebarOpen(false)}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        padding: "0.75rem",
                                        borderRadius: "10px",
                                        textDecoration: "none",
                                        color: "#DC2626",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    <ChevronLeft size={18} /> 이전 단계
                                </Link>
                            )}
                        </div>
                    </div>
                </>
            )}

        </div>
    );
}
