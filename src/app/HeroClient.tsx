"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components";
import { Sparkles, BookOpen, Palette, Wand2, BookMarked, PartyPopper } from "lucide-react";

interface HeroClientProps {
    isLoggedIn: boolean;
}

export default function HeroClient({ isLoggedIn }: HeroClientProps) {
    const router = useRouter();

    const handleStart = () => {
        if (!isLoggedIn) {
            router.push("/login");
            return;
        }
        router.push("/create/draw");
    };

    const flowSteps = [
        { Icon: Palette, label: "주인공", color: "#EC4899" },
        { Icon: Sparkles, label: "레시피", color: "#8B5CF6" },
        { Icon: Wand2, label: "이야기", color: "#3B82F6" },
        { Icon: BookMarked, label: "장면", color: "#F59E0B" },
        { Icon: PartyPopper, label: "완성", color: "#22C55E" },
    ];

    return (
        <div style={{
            maxWidth: "400px",
            margin: "2rem auto",
            textAlign: "center",
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1
                    style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        lineHeight: 1.35,
                        marginBottom: "0.5rem",
                        color: "#1F2937",
                    }}
                >
                    내가 그린 그림이<br />동화책이 된다면?
                </h1>

                <p style={{
                    fontSize: "0.875rem",
                    color: "#6B7280",
                    marginBottom: "1rem",
                    lineHeight: 1.5
                }}>
                    아이가 그린 낙서가 마법처럼<br />동화책 속 주인공이 돼요!
                </p>

                {/* 플로우 안내 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.2rem",
                        marginBottom: "1.25rem",
                        flexWrap: "wrap",
                    }}
                >
                    {flowSteps.map((step, idx) => (
                        <motion.div
                            key={step.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + idx * 0.08 }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.1rem",
                            }}
                        >
                            <span style={{
                                padding: "0.25rem 0.4rem",
                                backgroundColor: "rgba(255,255,255,0.9)",
                                borderRadius: "6px",
                                fontSize: "0.65rem",
                                fontWeight: 600,
                                display: "flex",
                                alignItems: "center",
                                gap: "0.15rem",
                                color: step.color,
                            }}>
                                <step.Icon size={10} />
                                {step.label}
                            </span>
                            {idx < 4 && (
                                <span style={{ color: "#D1D5DB", fontSize: "0.6rem" }}>→</span>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA 버튼 */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
                >
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={handleStart}
                            style={{
                                width: "100%",
                                height: "48px",
                                borderRadius: "12px",
                                fontSize: "1rem",
                                background: "linear-gradient(135deg, #5cacf6ff 0%, #557bf7ff 100%)",
                                boxShadow: "0 4px 14px rgba(139, 92, 246, 0.35)",
                            }}
                        >
                            <Sparkles size={18} />
                            동화책 만들기
                        </Button>
                    </motion.div>

                    {isLoggedIn && (
                        <Link href="/my" style={{ width: "100%" }}>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    style={{
                                        width: "100%",
                                        height: "44px",
                                        borderRadius: "10px",
                                        backgroundColor: "rgba(255,255,255,0.8)",
                                    }}
                                >
                                    <BookOpen size={16} />
                                    내 동화책 보기
                                </Button>
                            </motion.div>
                        </Link>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
}
