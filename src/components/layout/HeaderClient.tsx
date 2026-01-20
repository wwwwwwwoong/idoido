"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Sprout, PenLine, FolderOpen, Menu, X, LogOut } from "lucide-react";

// 네비게이션 (만들기 + 마이페이지)
const navLinks = [
    { href: "/create/draw", label: "만들기", Icon: PenLine },
    { href: "/my", label: "마이페이지", Icon: FolderOpen },
];

function WalletDisplayCompact() {
    const [balance, setBalance] = useState({ waterDrops: 0, magicSeeds: 0 });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchBalance() {
            try {
                const res = await fetch("/api/wallet");
                if (res.ok) {
                    const data = await res.json();
                    setBalance(data.balance);
                }
            } catch { } finally {
                setIsLoading(false);
            }
        }
        fetchBalance();
    }, []);

    if (isLoading) return null;

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.375rem 0.75rem",
                backgroundColor: "var(--muted)",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: 600,
            }}
        >
            <span title="물방울">💧 {balance.waterDrops}</span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span title="마법의씨앗">🌱 {balance.magicSeeds}</span>
        </div>
    );
}

interface HeaderClientProps {
    user: User | null;
}

export default function HeaderClient({ user }: HeaderClientProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleLogout = async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
        router.push("/");
        router.refresh();
    };

    return (
        <header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 50,
                backgroundColor: "var(--background)",
                borderBottom: "2px solid var(--border)",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 1.5rem",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* 로고 */}
                <Link
                    href="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        textDecoration: "none",
                        color: "var(--foreground)",
                        fontWeight: 700,
                        fontSize: "1.25rem",
                    }}
                >
                    <Sprout size={24} color="#2D8B5E" />
                    아이두
                </Link>

                {/* 데스크톱 네비게이션 */}
                <nav
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}
                    className="desktop-nav"
                >
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                        const IconComponent = link.Icon;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.375rem",
                                    padding: "0.5rem 1rem",
                                    borderRadius: "9999px",
                                    textDecoration: "none",
                                    fontSize: "0.9rem",
                                    fontWeight: 500,
                                    color: isActive ? "var(--foreground)" : "var(--muted-foreground)",
                                    backgroundColor: isActive ? "var(--muted)" : "transparent",
                                    transition: "all 150ms ease",
                                }}
                            >
                                <IconComponent size={16} />
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* 유저 액션 */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    {user ? (
                        <>
                            {/* 지갑 표시 */}
                            <WalletDisplayCompact />

                            {/* 프로필 버튼 + 드롭다운 */}
                            <div style={{ position: "relative" }}>
                                <button
                                    onClick={() => setMobileOpen(prev => !prev)}
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
                                {mobileOpen && (
                                    <>
                                        <div
                                            onClick={() => setMobileOpen(false)}
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
                                            minWidth: "180px",
                                            zIndex: 101,
                                            overflow: "hidden",
                                        }}>
                                            <Link
                                                href="/my"
                                                onClick={() => setMobileOpen(false)}
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
                                            <Link
                                                href="/create/draw"
                                                onClick={() => setMobileOpen(false)}
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
                                                <PenLine size={16} /> 만들기
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
                        </>
                    ) : (
                        <Link
                            href="/login"
                            style={{
                                padding: "0.5rem 1.25rem",
                                border: "2px solid var(--foreground)",
                                borderRadius: "9999px",
                                backgroundColor: "var(--foreground)",
                                color: "var(--background)",
                                textDecoration: "none",
                                fontSize: "0.875rem",
                                fontWeight: 600,
                            }}
                        >
                            로그인
                        </Link>
                    )}

                    {/* 모바일 메뉴 버튼 */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        style={{
                            display: "none",
                            padding: "0.5rem",
                            border: "none",
                            backgroundColor: "transparent",
                            cursor: "pointer",
                        }}
                        className="mobile-menu-btn"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* 모바일 메뉴 */}
            {mobileOpen && (
                <div
                    style={{
                        padding: "1rem 1.5rem",
                        borderTop: "1px solid var(--border)",
                        backgroundColor: "var(--background)",
                    }}
                    className="mobile-nav"
                >
                    {navLinks.map((link) => {
                        const IconComponent = link.Icon;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    padding: "0.75rem 0",
                                    textDecoration: "none",
                                    color: "var(--foreground)",
                                    fontWeight: 500,
                                }}
                            >
                                <IconComponent size={18} />
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            )}

            <style>{`
                @media (max-width: 640px) {
                    .desktop-nav { display: none !important; }
                    .mobile-menu-btn { display: block !important; }
                    .desktop-only { display: none !important; }
                }
                @media (min-width: 641px) {
                    .mobile-nav { display: none !important; }
                }
            `}</style>
        </header>
    );
}
