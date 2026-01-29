import { createClient } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { Header, Button, Card } from "@/components";
import { Plus, ArrowLeft, Check, Image } from "lucide-react";

interface PageProps {
    params: Promise<{ bookId: string }>;
}

export default async function BookDetailPage({ params }: PageProps) {
    const { bookId } = await params;
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
        redirect("/login");
    }

    if (bookId === "new") {
        redirect("/create/draw");
    }

    const book = await prisma.book.findFirst({
        where: { id: bookId, userId: data.user.id },
        include: {
            scenes: {
                include: { character: true },
                orderBy: { order: "asc" },
            },
        },
    });

    if (!book) {
        notFound();
    }

    const sceneCount = book.scenes.length;
    const isComplete = book.status === "COMPLETED";

    return (
        <>
            <Header user={data.user} />
            <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1.5rem" }}>
                {/* 뒤로가기 + 제목 */}
                <div style={{ marginBottom: "2rem" }}>
                    <Link
                        href="/story"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            color: "var(--muted-foreground)",
                            textDecoration: "none",
                            fontSize: "0.875rem",
                            marginBottom: "0.75rem",
                        }}
                    >
                        <ArrowLeft size={16} />
                        돌아가기
                    </Link>
                    <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>{book.title || "제목 없음"}</h1>
                    <p style={{ color: "var(--muted-foreground)", marginTop: "0.25rem" }}>
                        {sceneCount}개 장면 · {isComplete ? "완성됨" : "작성 중"}
                    </p>
                </div>

                {/* 장면 목록 */}
                <section style={{ marginBottom: "2rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {book.scenes.map((scene, index) => (
                            <Card key={scene.id} padding="md">
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                    <div
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "8px",
                                            backgroundColor: "var(--muted)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {index + 1}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 500 }}>
                                            {scene.character?.name || "캐릭터"}가 {scene.backgroundId}에서
                                        </div>
                                        <div style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                                            {scene.verbId}
                                        </div>
                                    </div>
                                    <Check size={20} color="var(--muted-foreground)" />
                                </div>
                            </Card>
                        ))}

                        {/* 새 장면 추가 */}
                        {!isComplete && (
                            <Link href={`/story/${bookId}/scene/new`} style={{ textDecoration: "none" }}>
                                <div
                                    style={{
                                        padding: "1.5rem",
                                        border: "2px dashed var(--border)",
                                        borderRadius: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "0.5rem",
                                        color: "var(--muted-foreground)",
                                        cursor: "pointer",
                                        transition: "all 150ms ease",
                                    }}
                                    className="neo-card-hover"
                                >
                                    <Plus size={20} />
                                    장면 추가하기
                                </div>
                            </Link>
                        )}
                    </div>
                </section>

                {/* 액션 버튼 */}
                <div style={{ display: "flex", gap: "0.75rem" }}>
                    {!isComplete && sceneCount >= 1 && (
                        <Link href={`/story/${bookId}/complete`} style={{ flex: 1 }}>
                            <Button variant="primary" size="lg" style={{ width: "100%" }}>
                                동화책 완성하기
                            </Button>
                        </Link>
                    )}
                    {isComplete && (
                        <Link href={`/story/${bookId}/complete`} style={{ flex: 1 }}>
                            <Button variant="outline" size="lg" style={{ width: "100%" }}>
                                동화책 보기
                            </Button>
                        </Link>
                    )}
                </div>
            </main>
        </>
    );
}
