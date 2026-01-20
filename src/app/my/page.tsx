import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Header } from "@/components";
import { prisma } from "@/lib/db";
import MyDashboardClient from "./MyDashboardClient";

export default async function MyPage() {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
        redirect("/login");
    }

    const userId = data.user.id;

    // 데이터 가져오기
    const [books, charactersRaw, cardsRaw] = await Promise.all([
        prisma.book.findMany({
            where: { userId },
            include: { scenes: { select: { id: true } } },
            orderBy: { updatedAt: "desc" },
        }),
        prisma.character.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
        }),
        prisma.card.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
        }),
    ]);

    // Card 데이터를 CardItem 형태로 가공
    const cards = cardsRaw.map(c => ({
        id: c.id,
        type: c.type,
        name: c.name,
        desc: c.desc,
        color: c.color,
        imagePath: c.imagePath
    }));

    // 경로를 URL로 변환하는 헬퍼 함수
    const getImageUrl = async (path: string | null, fallbackName: string) => {
        if (!path) return null;

        // Base64 데이터인 경우 그대로 사용
        if (path.startsWith("data:")) {
            return path;
        }

        // 외부 URL이거나 로컬 public 파일인 경우 그대로 사용
        if (path.startsWith("http") || path.startsWith("/")) {
            return path;
        }

        // Supabase Storage인 경우 signed URL 생성
        try {
            const { data: signedData, error } = await supabase.storage
                .from("doodles")
                .createSignedUrl(path, 3600);

            if (error) {
                console.error(`Signed URL error for "${path}":`, error.message);
                return null;
            }
            return signedData?.signedUrl || null;
        } catch (e) {
            console.error(`Exception for "${path}":`, e);
            return null;
        }
    };

    // 캐릭터 이미지 signed URL 생성
    const characters = await Promise.all(
        charactersRaw.map(async (c) => {
            // 메인 이미지: renderPath 우선, 없으면 doodlePath
            const mainImageUrl = await getImageUrl(c.renderPath || c.doodlePath, c.name || "?");
            // 원본 그림: doodlePath (renderPath와 다를 경우에만)
            const doodleUrl = c.doodlePath !== c.renderPath
                ? await getImageUrl(c.doodlePath, c.name || "?")
                : null;

            return {
                id: c.id,
                name: c.name,
                imageUrl: mainImageUrl || `https://placehold.co/400x400/FFB6C1/333333?text=${encodeURIComponent(c.name || "?")}`,
                doodleUrl, // 원본 그림 URL (없으면 null)
            };
        })
    );

    return (
        <>
            <Header user={data.user} />
            <MyDashboardClient
                books={await Promise.all(books.map(async (b) => {
                    let coverUrl = null;
                    if (b.coverPath) {
                        // Base64 데이터인 경우 그대로 사용
                        if (b.coverPath.startsWith("data:")) {
                            coverUrl = b.coverPath;
                        }
                        // 외부 URL이거나 로컬 파일인 경우 그대로 사용
                        else if (b.coverPath.startsWith("http") || b.coverPath.startsWith("/")) {
                            coverUrl = b.coverPath;
                        } else {
                            // Supabase Storage 경로인 경우 signed URL 생성
                            const { data: signedData } = await supabase.storage
                                .from("doodles")
                                .createSignedUrl(b.coverPath, 3600);
                            coverUrl = signedData?.signedUrl || null;
                        }
                    }
                    return {
                        id: b.id,
                        title: b.title,
                        status: b.status,
                        sceneCount: b.scenes.length,
                        updatedAt: b.updatedAt.toISOString(),
                        coverUrl,
                    };
                }))}
                characters={characters}
                cards={cards}
            />
        </>
    );
}
