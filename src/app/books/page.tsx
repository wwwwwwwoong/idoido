import { prisma } from "@/lib/db";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { PageContainer, PageTitle, Card, Button } from "@/components";

export const runtime = "nodejs";

export default async function BooksPage() {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    if (!data.user) redirect("/login");

    const userId = data.user.id;

    const books = await prisma.book.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        include: {
            _count: { select: { scenes: true } },
        },
    });

    return (
        <PageContainer>
            <PageTitle description="내가 만든 동화책들이에요 📚">
                내 동화책
            </PageTitle>

            <div style={{ marginBottom: "var(--space-6)" }}>
                <Link href="/books/new">
                    <Button variant="primary">+ 새 동화책 시작하기</Button>
                </Link>
            </div>

            {books.length === 0 ? (
                <Card padding="lg" style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "var(--text-3xl)", marginBottom: "var(--space-3)" }}>
                        📚
                    </div>
                    <div style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-4)" }}>
                        아직 동화책이 없어요.
                        <br />
                        새 동화책을 시작해보세요!
                    </div>
                    <Link href="/books/new">
                        <Button variant="primary">새 동화책 만들기</Button>
                    </Link>
                </Card>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: "var(--space-4)",
                    }}
                >
                    {books.map((book) => (
                        <Link
                            key={book.id}
                            href={`/books/${book.id}`}
                            style={{ textDecoration: "none" }}
                        >
                            <Card padding="none" hover className="card-hover">
                                {/* 표지 영역 */}
                                <div
                                    style={{
                                        height: 180,
                                        background: book.status === "COMPLETED"
                                            ? "linear-gradient(135deg, var(--color-success-light) 0%, #c8e6c9 100%)"
                                            : "linear-gradient(135deg, var(--color-warm-pink) 0%, #fce4ec 100%)",
                                        borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        position: "relative",
                                    }}
                                >
                                    {/* 상태 배지 */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "var(--space-3)",
                                            right: "var(--space-3)",
                                            padding: "var(--space-1) var(--space-2)",
                                            backgroundColor: book.status === "COMPLETED" ? "var(--color-success)" : "var(--color-coral)",
                                            color: "white",
                                            borderRadius: "var(--radius-sm)",
                                            fontSize: "var(--text-xs)",
                                            fontWeight: "var(--font-bold)",
                                        }}
                                    >
                                        {book.status === "COMPLETED" ? "완성" : "작성 중"}
                                    </div>

                                    {/* 아이콘 + 장면 수 */}
                                    <div style={{ fontSize: "3.5rem", marginBottom: "var(--space-2)" }}>
                                        {book.status === "COMPLETED" ? "📖" : "✏️"}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "var(--text-sm)",
                                            fontWeight: "var(--font-semibold)",
                                            color: book.status === "COMPLETED" ? "var(--color-success)" : "var(--color-coral)",
                                        }}
                                    >
                                        {book._count.scenes}페이지
                                    </div>
                                </div>

                                {/* 정보 영역 */}
                                <div style={{ padding: "var(--space-4)" }}>
                                    {/* 제목 */}
                                    <div
                                        style={{
                                            fontWeight: "var(--font-bold)",
                                            fontSize: "var(--text-lg)",
                                            marginBottom: "var(--space-2)",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            color: "var(--color-text-primary)",
                                        }}
                                    >
                                        {book.title || "제목 없음"}
                                    </div>

                                    {/* 메타 정보 */}
                                    <div
                                        style={{
                                            fontSize: "var(--text-xs)",
                                            color: "var(--color-text-muted)",
                                        }}
                                    >
                                        {new Date(book.createdAt).toLocaleDateString("ko-KR", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            )}
        </PageContainer>
    );
}
