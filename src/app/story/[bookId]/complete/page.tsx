import { createClient } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { Button, Card } from "@/components";
import StoryFlowLayout from "@/components/layout/StoryFlowLayout";
import { Home, Plus, BookOpen, RotateCcw } from "lucide-react";
import ReadAloudButton from "@/components/story/ReadAloudButton";

interface PageProps {
    params: Promise<{ bookId: string }>;
}

export default async function BookCompletePage({ params }: PageProps) {
    const { bookId } = await params;
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
        redirect("/login");
    }

    if (bookId === "new") {
        redirect("/story");
    }

    // 동화책 완료 처리
    const book = await prisma.book.findFirst({
        where: { id: bookId, userId: data.user.id },
    }).then(async (b) => {
        if (!b) return null;
        return await prisma.book.update({
            where: { id: bookId },
            data: {
                status: "COMPLETED",
                completedAt: new Date(),
            },
            include: {
                scenes: {
                    include: { character: true },
                    orderBy: { order: "asc" },
                },
                cards: true,
            },
        });
    });

    if (!book) {
        notFound();
    }

    const sceneCount = book.scenes.length;
    const cardCount = book.cards?.length ?? 0;

    return (
        <StoryFlowLayout
            currentStep={4}
            title="동화책 완성! 🎉"
            subtitle={`"${book.title}" 동화책이 완성되었어요`}
        >
            {/* 통계 */}
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
                <StatCard label="장면" value={sceneCount} />
                <StatCard label="카드" value={cardCount} />
            </div>

            {/* 카드 목록 */}
            {book.cards && book.cards.length > 0 && (
                <section style={{ marginBottom: "2rem" }}>
                    <h3 style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--muted-foreground)" }}>
                        모은 카드들
                    </h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {book.cards.map((card, i) => (
                            <div
                                key={i}
                                style={{
                                    padding: "0.5rem 0.875rem",
                                    border: "2px solid var(--border)",
                                    borderRadius: "9999px",
                                    backgroundColor: "var(--card)",
                                    fontSize: "0.8rem",
                                }}
                            >
                                <span style={{ fontWeight: 600, color: card.color || undefined }}>{card.name}</span>
                                <span style={{ color: "var(--muted-foreground)", marginLeft: "0.375rem" }}>{card.type}</span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* 읽어주기 버튼 */}
            <div style={{ marginBottom: "1.5rem" }}>
                <ReadAloudButton
                    text={book.scenes.map(s => s.storyText).filter(Boolean).join(". ")}
                    label="🔊 동화책 전체 듣기"
                />
            </div>

            {/* 액션 버튼 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link href="/create/draw">
                    <Button variant="primary" size="lg" style={{ width: "100%" }}>
                        <Plus size={18} /> 새 동화책 만들기
                    </Button>
                </Link>
                <Link href="/my">
                    <Button variant="outline" size="lg" style={{ width: "100%" }}>
                        <BookOpen size={18} /> 내 동화책 보기
                    </Button>
                </Link>
                <Link href="/">
                    <Button variant="ghost" size="md" style={{ width: "100%" }}>
                        <Home size={16} /> 홈으로
                    </Button>
                </Link>
            </div>
        </StoryFlowLayout>
    );
}

function StatCard({ label, value }: { label: string; value: number }) {
    return (
        <div
            style={{
                padding: "1rem 2rem",
                border: "2px solid var(--border)",
                borderRadius: "12px",
                backgroundColor: "var(--card)",
                textAlign: "center",
            }}
        >
            <div style={{ fontSize: "1.75rem", fontWeight: 700 }}>{value}</div>
            <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>{label}</div>
        </div>
    );
}
