import { Card } from "@/components";

export default function Loading() {
    return (
        <main
            style={{
                maxWidth: "var(--max-width-content)",
                margin: "0 auto",
                padding: "var(--space-10)",
                textAlign: "center",
            }}
        >
            <Card padding="lg" style={{ display: "inline-block" }}>
                <div
                    style={{
                        width: 40,
                        height: 40,
                        border: "3px solid var(--color-border)",
                        borderTopColor: "var(--color-deep-teal)",
                        borderRadius: "50%",
                        margin: "0 auto var(--space-4)",
                        animation: "spin 0.8s linear infinite",
                    }}
                />
                <div style={{ color: "var(--color-text-secondary)" }}>
                    로딩 중...
                </div>
            </Card>

            <style>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </main>
    );
}
