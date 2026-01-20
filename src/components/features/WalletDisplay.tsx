"use client";

import { useEffect, useState } from "react";

interface WalletBalance {
    waterDrops: number;
    magicSeeds: number;
}

interface WalletDisplayProps {
    initialBalance?: WalletBalance;
    compact?: boolean;
}

export function WalletDisplay({ initialBalance, compact = false }: WalletDisplayProps) {
    const [balance, setBalance] = useState<WalletBalance>(
        initialBalance ?? { waterDrops: 0, magicSeeds: 0 }
    );
    const [isLoading, setIsLoading] = useState(!initialBalance);

    useEffect(() => {
        if (initialBalance) return;

        async function fetchBalance() {
            try {
                const res = await fetch("/api/wallet");
                if (res.ok) {
                    const data = await res.json();
                    setBalance(data.balance);
                }
            } catch (error) {
                console.error("Failed to fetch wallet:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchBalance();
    }, [initialBalance]);

    if (isLoading) {
        return (
            <div
                style={{
                    display: "flex",
                    gap: "var(--space-3)",
                    padding: compact ? "var(--space-1) var(--space-2)" : "var(--space-2) var(--space-3)",
                    backgroundColor: "var(--color-cream-dark)",
                    borderRadius: "var(--radius-full)",
                    fontSize: compact ? "var(--text-xs)" : "var(--text-sm)",
                }}
            >
                <span style={{ opacity: 0.5 }}>로딩...</span>
            </div>
        );
    }

    return (
        <div
            style={{
                display: "flex",
                gap: "var(--space-3)",
                padding: compact ? "var(--space-1) var(--space-2)" : "var(--space-2) var(--space-3)",
                backgroundColor: "var(--color-cream-dark)",
                borderRadius: "var(--radius-full)",
                fontSize: compact ? "var(--text-xs)" : "var(--text-sm)",
            }}
        >
            {/* 물방울 */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-1)",
                }}
                title="물방울 - 스토리 추천에 사용"
            >
                <span>💧</span>
                <span style={{ fontWeight: "var(--font-semibold)" }}>
                    {balance.waterDrops.toLocaleString()}
                </span>
            </div>

            {/* 구분선 */}
            <div
                style={{
                    width: 1,
                    backgroundColor: "var(--color-border)",
                }}
            />

            {/* 마법의씨앗 */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-1)",
                }}
                title="마법의씨앗 - AI 캐릭터 변환에 사용"
            >
                <span>🌱</span>
                <span style={{ fontWeight: "var(--font-semibold)" }}>
                    {balance.magicSeeds.toLocaleString()}
                </span>
            </div>
        </div>
    );
}
