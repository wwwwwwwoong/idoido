import { prisma } from "@/lib/db";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { PageContainer, PageTitle, Card, Button, ResultBadge } from "@/components";
import { backgrounds } from "@/lib/content/backgrounds";
import { items } from "@/lib/content/items";

export const runtime = "nodejs";

export default async function ScenesPage() {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    if (!data.user) redirect("/login");

    const userId = data.user.id;

    const scenes = await prisma.scene.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        include: {
            character: { select: { id: true, name: true } },
        },
        take: 50,
    });

    return (
        <PageContainer>
            <PageTitle description="내가 만든 1페이지 이야기들이에요 📖">
                내 장면 목록
            </PageTitle>

            <div style={{ marginBottom: "var(--space-6)" }}>
                <Link href="/scene/create">
                    <Button variant="primary">+ 새 1페이지 만들기</Button>
                </Link>
            </div>

            {scenes.length === 0 ? (
                <Card padding="lg" style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>
                        📖
                    </div>
                    <div style={{ color: "var(--color-text-secondary)" }}>
                        아직 만든 1페이지가 없어요.
                        <br />
                        <Link href="/scene/create" style={{ color: "var(--color-deep-teal)" }}>
                            1페이지 만들기
                        </Link>
                        에서 이야기를 만들어보세요!
                    </div>
                </Card>
            ) : (
                <div style={{ display: "grid", gap: "var(--space-4)" }}>
                    {scenes.map((s) => {
                        const bg = backgrounds.find((b) => b.id === s.backgroundId);
                        const item = items.find((i) => i.id === s.itemId);
                        const verb = item?.verbs.find((v) => v.id === s.verbId);

                        return (
                            <Link
                                key={s.id}
                                href={`/scenes/${s.id}`}
                                style={{ textDecoration: "none" }}
                            >
                                <Card padding="md" hover>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            gap: "var(--space-4)",
                                        }}
                                    >
                                        <div style={{ flex: 1 }}>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "var(--space-3)",
                                                    marginBottom: "var(--space-2)",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontWeight: "var(--font-bold)",
                                                        fontSize: "var(--text-lg)",
                                                        color: "var(--color-text-primary)",
                                                    }}
                                                >
                                                    {s.character?.name ?? "이름 없는 캐릭터"}
                                                </span>
                                                <ResultBadge choice={s.resultChoice} />
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: "var(--text-sm)",
                                                    color: "var(--color-text-secondary)",
                                                }}
                                            >
                                                {bg?.name_ko ?? s.backgroundId}에서{" "}
                                                {item?.name_ko ?? s.itemId}를{" "}
                                                {verb?.ko ?? s.verbId}!
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "var(--text-xs)",
                                                color: "var(--color-text-muted)",
                                                textAlign: "right",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {new Date(s.createdAt).toLocaleDateString("ko-KR", {
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            )}
        </PageContainer>
    );
}
