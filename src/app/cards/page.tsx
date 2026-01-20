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

    const scenes = await prisma.scene.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        select: {
            id: true,
            createdAt: true,
            cards: {
                orderBy: { order: "asc" },
                select: {
                    id: true,
                    ko: true,
                    en: true,
                    order: true,
                },
            },
        },
        take: 100,
    });

    const seenKo = new Set<string>();
    const uniqueCards: Array<{ id: string; ko: string; en: string }> = [];

    for (const scene of scenes) {
        for (const card of scene.cards) {
            if (!seenKo.has(card.ko)) {
                seenKo.add(card.ko);
                uniqueCards.push({
                    id: card.id,
                    ko: card.ko,
                    en: card.en,
                });
            }
        }
    }

    return (
        <PageContainer>
            <PageTitle description="지금까지 만든 1페이지에서 수집한 단어들이에요 📚">
                언어카드 모음
            </PageTitle>

            <div style={{ marginBottom: "var(--space-6)" }}>
                <Link href="/scene/create">
                    <Button variant="primary">+ 새 1페이지 만들기</Button>
                </Link>
            </div>

            {uniqueCards.length === 0 ? (
                <Card padding="lg" style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>
                        📚
                    </div>
                    <div style={{ color: "var(--color-text-secondary)" }}>
                        아직 언어카드가 없어요.
                        <br />
                        <Link href="/scene/create" style={{ color: "var(--color-deep-teal)" }}>
                            1페이지 만들기
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
                        총 {uniqueCards.length}개의 단어를 배웠어요! 🌱
                    </div>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                            gap: "var(--space-3)",
                        }}
                    >
                        {uniqueCards.map((card) => (
                            <LanguageCard key={card.id} ko={card.ko} en={card.en} />
                        ))}
                    </div>
                </>
            )}
        </PageContainer>
    );
}
