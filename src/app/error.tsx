"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button, Card, PageContainer } from "@/components";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Error:", error);
    }, [error]);

    return (
        <PageContainer>
            <div style={{
                minHeight: "80vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%"
            }}>
                <Card padding="lg" style={{ textAlign: "center", maxWidth: 480, width: "100%" }}>
                    <div style={{ fontSize: "var(--text-4xl)", marginBottom: "var(--space-4)" }}>
                        😢
                    </div>
                    <h2
                        style={{
                            fontSize: "var(--text-2xl)",
                            fontWeight: "var(--font-bold)",
                            marginBottom: "var(--space-2)",
                        }}
                    >
                        앗, 문제가 생겼어요!
                    </h2>
                    <p
                        style={{
                            color: "var(--color-text-secondary)",
                            marginBottom: "var(--space-6)",
                        }}
                    >
                        잠시 후 다시 시도해주세요.
                    </p>
                    <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center" }}>
                        <Button variant="primary" onClick={reset}>
                            다시 시도
                        </Button>
                        <Link href="/">
                            <Button variant="outline">홈으로</Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </PageContainer>
    );
}
