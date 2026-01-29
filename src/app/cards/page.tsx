import { prisma } from "@/lib/db";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { PageContainer, PageTitle, Card, Button, LanguageCard } from "@/components";

export const runtime = "nodejs";

export default async function CardsPage() {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    if (!data.user) redirect("/login");

    const userId = data.user.id;

    // Cards are now associated with Books, not Scenes
    const cards = await prisma.card.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        select: {
            id: true,
            type: true,
            name: true,
            desc: true,
            color: true,
        },
        take: 100,
    });

    return (
        <PageContainer>
            <PageTitle description="내가 모은 카드들이에요 📚">
                카드 모음
            </PageTitle>

            <div style={{ marginBottom: "var(--space-6)" }}>
                <Link href="/create/draw">
                    <Button variant="primary">+ 새 동화책 만들기</Button>
                </Link>
            </div>

            {cards.length === 0 ? (
                <Card padding="lg" style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>
                        📚
                    </div>
                    <div style={{ color: "var(--color-text-secondary)" }}>
                        아직 카드가 없어요.
                        <br />
                        <Link href="/create/draw" style={{ color: "var(--color-deep-teal)" }}>
                            동화책 만들기
                        </Link>
                        를 하면 자동으로 생성돼요!
                    </div>
                </Card>
            ) : (
                <>
                    <div
                        style={{
                            marginBottom: "var(--space-4)",
                            padding: "var(--space-3) var(--space-4)",
                            backgroundColor: "var(--color-success-light)",
                            borderRadius: "var(--radius-md)",
                            color: "var(--color-success)",
                            fontWeight: "var(--font-medium)",
                        }}
                    >
                        총 {cards.length}개의 카드를 모았어요! 🌱
                    </div>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                            gap: "var(--space-3)",
                        }}
                    >
                        {cards.map((card) => (
                            <Card key={card.id} padding="md" hover>
                                <div style={{
                                    fontWeight: "var(--font-bold)",
                                    color: card.color || "var(--color-text-primary)",
                                    marginBottom: "var(--space-1)",
                                }}>
                                    {card.name}
                                </div>
                                <div style={{
                                    fontSize: "var(--text-xs)",
                                    color: "var(--color-text-secondary)",
                                }}>
                                    {card.type}
                                </div>
                                {card.desc && (
                                    <div style={{
                                        fontSize: "var(--text-sm)",
                                        color: "var(--color-text-muted)",
                                        marginTop: "var(--space-1)",
                                    }}>
                                        {card.desc}
                                    </div>
                                )}
                            </Card>
                        ))}
                    </div>
                </>
            )}
        </PageContainer>
    );
}
