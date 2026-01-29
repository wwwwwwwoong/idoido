import { createClient } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import BookViewerClient from "./BookViewerClient";

interface PageProps {
    params: Promise<{ bookId: string }>;
}

export default async function BookViewPage({ params }: PageProps) {
    const { bookId } = await params;
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
        redirect("/login");
    }

    const book = await prisma.book.findFirst({
        where: { id: bookId, userId: data.user.id },
        include: {
            scenes: {
                orderBy: { order: "asc" },
                include: {
                    character: true,
                },
            },
        },
    });

    if (!book) {
        notFound();
    }

    // 캐릭터 이미지 URL 생성
    let characterImageUrl: string | null = null;
    const firstCharacter = book.scenes.find(s => s.character)?.character;
    if (firstCharacter) {
        const imagePath = firstCharacter.renderPath || firstCharacter.doodlePath;
        if (imagePath) {
            // Base64 데이터인 경우 그대로 사용
            if (imagePath.startsWith("data:")) {
                characterImageUrl = imagePath;
            }
            // 외부 URL이거나 로컬 public 파일인 경우 그대로 사용
            else if (imagePath.startsWith("http") || imagePath.startsWith("/")) {
                characterImageUrl = imagePath;
            } else {
                // Supabase Storage 경로인 경우 signed URL 생성
                const { data: signedData } = await supabase.storage
                    .from("doodles")
                    .createSignedUrl(imagePath, 3600);
                characterImageUrl = signedData?.signedUrl || null;
            }
        }
    }

    // URL 변환 헬퍼
    const getImageUrl = async (path: string | null) => {
        if (!path) return null;
        if (path.startsWith("data:") || path.startsWith("http") || path.startsWith("/")) {
            return path;
        }
        // Supabase Storage 경로 처리 (Signed URL 시도 -> 실패 시 Public URL)
        try {
            const cleanPath = path.replace(/^\/+/, "");
            const { data: signedData, error } = await supabase.storage
                .from("doodles")
                .createSignedUrl(cleanPath, 3600);

            if (error || !signedData?.signedUrl) {
                console.error("Signed URL failed, falling back to Public URL:", error);
                const { data: publicData } = supabase.storage.from("doodles").getPublicUrl(cleanPath);
                return publicData.publicUrl;
            }

            return signedData.signedUrl;
        } catch (e) {
            console.error("URL generation error:", e);
            // 최후의 수단: Public URL
            const cleanPath = path.replace(/^\/+/, "");
            const { data: publicData } = supabase.storage.from("doodles").getPublicUrl(cleanPath);
            return publicData.publicUrl;
        }
    };

    // 표지 이미지 결정: DB에 coverPath가 없으면 1페이지 이미지 사용 (Fallback)
    const rawCoverPath = book.coverPath || book.scenes[0]?.sceneImagePath;

    // Scene 데이터 변환
    const formattedScenes = await Promise.all(book.scenes.map(async (scene) => ({
        id: scene.id,
        order: scene.order ?? 0,
        backgroundId: scene.backgroundId,
        storyText: scene.storyText,
        objects: scene.objects as any || null,
        sceneImagePath: (await getImageUrl(scene.sceneImagePath)) || undefined,
    })));

    // 표지 이미지 Signed URL 변환
    const coverUrl = (await getImageUrl(rawCoverPath)) || undefined;

    return (
        <BookViewerClient
            book={{
                id: book.id,
                title: book.title,
                status: book.status,
                scenes: formattedScenes,
                coverPath: coverUrl, // 변환된 표지 URL (또는 폴백)
                coverColor: undefined, // BookViewer가 알아서 처리
            }}
            characterImageUrl={characterImageUrl}
            user={data.user}
        />
    );
}
