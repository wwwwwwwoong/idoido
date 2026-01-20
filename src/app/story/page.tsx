import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Header, Button, Card } from "@/components";
import { prisma } from "@/lib/db";
import { Plus, BookOpen } from "lucide-react";

export default async function StoryPage() {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
        redirect("/login");
    }

    // 사용자의 동화책 목록
    const books = await prisma.book.findMany({
        where: { userId: data.user.id },
        include: {
            scenes: { select: { id: true } },
        },
        orderBy: { updatedAt: "desc" },
    });

    const draftBooks = books.filter((b) => b.status === "DRAFT");
    const completedBooks = books.filter((b) => b.status === "COMPLETED");

    return (
        <>
            <Header user={data.user} />
            <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1.5rem" }}>
                {/* 헤더 */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "2rem",
                    }}
                >
                    <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>나의 동화책</h1>
                    <Link href="/create/draw">
                        <Button variant="primary">
                            <Plus size={18} />
                            새 동화책
                        </Button>
                    </Link>
                </div>

                {/* 작성 중인 동화책 */}
                {draftBooks.length > 0 && (
                    <section style={{ marginBottom: "2.5rem" }}>
                        <h2
                            style={{
                                fontSize: "1rem",
                                fontWeight: 600,
                                marginBottom: "1rem",
                                color: "var(--muted-foreground)",
                            }}
                        >
                            작성 중 ({draftBooks.length})
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            {draftBooks.map((book) => (
                                <BookCard key={book.id} book={book} />
                            ))}
                        </div>
                    </section>
                )}

                {/* 완성된 동화책 */}
                {completedBooks.length > 0 && (
                    <section style={{ marginBottom: "2.5rem" }}>
                        <h2
                            style={{
                                fontSize: "1rem",
                                fontWeight: 600,
                                marginBottom: "1rem",
                                color: "var(--muted-foreground)",
                            }}
                        >
                            완성됨 ({completedBooks.length})
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            {completedBooks.map((book) => (
                                <BookCard key={book.id} book={book} />
                            ))}
                        </div>
                    </section>
                )}

                {/* 빈 상태 */}
                {books.length === 0 && (
                    <div
                        style={{
                            textAlign: "center",
                            padding: "4rem 2rem",
                            border: "2px dashed var(--border)",
                            borderRadius: "12px",
                        }}
                    >
                        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📚</div>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                            아직 동화책이 없어요
                        </h2>
                        <p style={{ color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
                            첫 번째 동화책을 만들어보세요!
                        </p>
                        <Link href="/create/draw">
                            <Button variant="primary" size="lg">
                                동화책 만들기
                            </Button>
                        </Link>
                    </div>
                )}
            </main>
        </>
    );
}

function BookCard({ book }: { book: { id: string; title: string | null; status: string; scenes: { id: string }[]; updatedAt: Date } }) {
    const sceneCount = book.scenes.length;
    const isDraft = book.status === "DRAFT";

    return (
        <Link href={`/story/${book.id}`} style={{ textDecoration: "none" }}>
            <Card hover padding="md">
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div
                        style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "8px",
                            backgroundColor: "var(--muted)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <BookOpen size={24} color="var(--muted-foreground)" />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>
                            {book.title || "제목 없음"}
                        </div>
                        <div style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                            {sceneCount}개 장면 · {isDraft ? "작성 중" : "완성됨"}
                        </div>
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>
                        {new Date(book.updatedAt).toLocaleDateString("ko-KR")}
                    </div>
                </div>
            </Card>
        </Link>
    );
}
