import { Card, CardContent } from "@/components";
import { Badge, BadgeVariant } from "@/components";

interface LanguageCardProps {
    ko: string;
    en: string;
    variant?: "default" | "compact";
}

export function LanguageCard({ ko, en, variant = "default" }: LanguageCardProps) {
    if (variant === "compact") {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                    padding: "var(--space-2) var(--space-3)",
                    backgroundColor: "var(--color-warm-white)",
                    border: "1px solid var(--color-border-light)",
                    borderRadius: "var(--radius-sm)",
                }}
            >
                <span style={{ fontWeight: "var(--font-bold)", fontSize: "var(--text-sm)" }}>
                    {ko}
                </span>
                <span style={{ color: "var(--color-text-muted)", fontSize: "var(--text-xs)" }}>
                    {en}
                </span>
            </div>
        );
    }

    return (
        <Card
            padding="md"
            hover
            style={{
                textAlign: "center",
                minHeight: 80,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <CardContent>
                <div
                    style={{
                        fontSize: "var(--text-xl)",
                        fontWeight: "var(--font-bold)",
                        marginBottom: "var(--space-2)",
                        color: "var(--color-text-primary)",
                    }}
                >
                    {ko}
                </div>
                <div
                    style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--color-text-secondary)",
                    }}
                >
                    {en}
                </div>
            </CardContent>
        </Card>
    );
}

type ResultChoice = "SUCCESS" | "SILLY" | "NEXT";

interface ResultBadgeProps {
    choice: ResultChoice;
}

const choiceConfig: Record<ResultChoice, { label: string; variant: BadgeVariant }> = {
    SUCCESS: { label: "성공", variant: "success" },
    SILLY: { label: "엉뚱", variant: "silly" },
    NEXT: { label: "다음", variant: "next" },
};

export function ResultBadge({ choice }: ResultBadgeProps) {
    const config = choiceConfig[choice];
    return <Badge variant={config.variant}>{config.label}</Badge>;
}
