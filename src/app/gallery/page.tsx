import { prisma } from "@/lib/db";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { PageContainer, PageTitle, Card, Button } from "@/components";
import DeleteCharacterButton from "./DeleteCharacterButton";

export const runtime = "nodejs";

export default async function GalleryPage() {
    const supabase = await createClient();

    const { data: authData, error: authErr } = await supabase.auth.getUser();
    if (authErr || !authData.user) redirect("/login");

    const userId = authData.user.id;

    const characters = await prisma.character.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        select: {
            id: true,
            name: true,
            doodlePath: true,
            renderPath: true,
            createdAt: true,
        },
    });

    const rows = await Promise.all(
        characters.map(async (c) => {
            const { data, error } = await supabase.storage
                .from("doodles")
                .createSignedUrl(c.doodlePath, 60 * 10);

            return {
                ...c,
                doodleUrl: error ? null : data?.signedUrl ?? null,
            };
        })
    );

    return (
        <PageContainer>
            <PageTitle description="내가 심은 캐릭터 씨앗들이에요 🌱">
                캐릭터 갤러리
            </PageTitle>

            <div style={{ marginBottom: "var(--space-6)" }}>
                <Link href="/create">
                    <Button variant="primary">+ 새 캐릭터 만들기</Button>
                </Link>
            </div>

            {rows.length === 0 ? (
                <Card padding="lg" style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>
                        🌱
                    </div>
                    <div style={{ color: "var(--color-text-secondary)" }}>
                        아직 캐릭터가 없어요.
                        <br />
                        <Link href="/create" style={{ color: "var(--color-deep-teal)" }}>
                            씨앗 심기
                        </Link>
                        에서 낙서를 저장해보세요!
                    </div>
                </Card>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                        gap: "var(--space-4)",
                    }}
                >
                    {rows.map((c) => (
                        <Card key={c.id} padding="none" hover className="card-hover">
                            {/* 이미지 영역 */}
                            <div
                                style={{
                                    height: 180,
                                    backgroundColor: "var(--color-cream-dark)",
                                    borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
                                    overflow: "hidden",
                                }}
                            >
                                {c.doodleUrl ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={c.doodleUrl}
                                        alt={c.name ?? "doodle"}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                ) : (
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--color-text-muted)",
                                        }}
                                    >
                                        <div style={{ fontSize: "2.5rem", marginBottom: "var(--space-2)" }}>🌱</div>
                                        <div style={{ fontSize: "var(--text-xs)" }}>이미지 없음</div>
                                    </div>
                                )}
                            </div>

                            {/* 정보 영역 */}
                            <div style={{ padding: "var(--space-4)" }}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "flex-start",
                                        marginBottom: "var(--space-2)",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontWeight: "var(--font-bold)",
                                            fontSize: "var(--text-lg)",
                                            color: "var(--color-text-primary)",
                                        }}
                                    >
                                        {c.name ?? "이름 없는 캐릭터"}
                                    </div>
                                    <DeleteCharacterButton characterId={c.id} characterName={c.name} />
                                </div>

                                <div
                                    style={{
                                        fontSize: "var(--text-xs)",
                                        color: "var(--color-text-muted)",
                                        marginBottom: "var(--space-3)",
                                    }}
                                >
                                    {new Date(c.createdAt).toLocaleDateString("ko-KR", {
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </div>

                                <Link href={`/scene/create`}>
                                    <Button variant="outline" size="sm" style={{ width: "100%" }}>
                                        🎬 장면 만들기
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </PageContainer>
    );
}
