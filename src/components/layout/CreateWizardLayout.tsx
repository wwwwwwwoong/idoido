"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { WalletDisplay } from "@/components/features/WalletDisplay";

interface CreateWizardLayoutProps {
    children: ReactNode;
    currentStep: number;
    title: string;
    subtitle: string;
    backHref?: string;
    showWallet?: boolean;
    savedStatus?: "saved" | "saving" | "unsaved";
}

export default function CreateWizardLayout({
    children,
    currentStep,
    title,
    subtitle,
    backHref,
    showWallet = true,
    savedStatus,
}: CreateWizardLayoutProps) {
    // 3-Stage Progress Logic
    // Stage 1: Prep (Steps 1-3) -> Setup, Mixer, Character
    // Stage 2: Story (Steps 4-5) -> Outline, Manuscript
    // Stage 3: Art (Steps 6-8) -> Editor, Illustrations, Finish

    const stages = [
        { label: "준비하기", emoji: "🌱", activeSteps: [1, 2] },
        { label: "이야기", emoji: "📖", activeSteps: [3, 4] },
        { label: "그림/완성", emoji: "🎨", activeSteps: [5, 6, 7] },
    ];

    const currentStageIndex = stages.findIndex(s => s.activeSteps.includes(currentStep));

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--background)", display: "flex", flexDirection: "column" }}>
            {/* Header */}
            <header style={{
                height: "60px",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 1rem",
                backgroundColor: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(10px)",
                position: "sticky",
                top: 0,
                zIndex: 50
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    {backHref ? (
                        <Link href={backHref} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: "50%", backgroundColor: "var(--secondary)" }}>
                            <ChevronLeft size={20} />
                        </Link>
                    ) : (
                        <div style={{ width: 32 }} />
                    )}

                    {/* Save Status Indicator */}
                    {savedStatus && (
                        <div style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            color: savedStatus === 'saved' ? "#2563EB" : "var(--muted-foreground)",
                            display: "flex", alignItems: "center", gap: "0.25rem"
                        }}>
                            {savedStatus === 'saving' && <span className="animate-pulse">💾 저장 중...</span>}
                            {savedStatus === 'saved' && <span>☁️ 저장됨</span>}
                            {savedStatus === 'unsaved' && <span style={{ color: "#E53935" }}>⚠️ 저장 안됨</span>}
                        </div>
                    )}
                </div>

                {/* Stage Progress Bar (Center) */}
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                    {stages.map((stage, idx) => {
                        const isActive = idx === currentStageIndex;
                        const isPast = idx < currentStageIndex;

                        return (
                            <div key={idx} style={{
                                display: "flex", alignItems: "center", gap: "0.375rem",
                                padding: "0.375rem 0.75rem",
                                borderRadius: "20px",
                                backgroundColor: isActive ? "#EFF6FF" : "transparent",
                                opacity: isActive || isPast ? 1 : 0.4,
                                transition: "all 0.3s ease"
                            }}>
                                <span style={{ fontSize: "1rem" }}>{stage.emoji}</span>
                                {isActive && (
                                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#2563EB" }}>
                                        {stage.label}
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div style={{ width: 32, display: "flex", justifyContent: "flex-end" }}>
                    {showWallet && <WalletDisplay />}
                </div>
            </header>

            {/* Main Content */}
            <main style={{ flex: 1, padding: "1.5rem", maxWidth: "600px", width: "100%", margin: "0 auto", display: "flex", flexDirection: "column" }}>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <h1 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--foreground)" }}>{title}</h1>
                    <p style={{ color: "var(--muted-foreground)", fontSize: "0.95rem" }}>{subtitle}</p>
                </div>
                {children}
            </main>
        </div>
    );
}
