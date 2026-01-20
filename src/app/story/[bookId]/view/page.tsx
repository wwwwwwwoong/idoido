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

    // Scene 데이터 변환
    const formattedScenes = book.scenes.map(scene => ({
        id: scene.id,
        order: scene.order ?? 0,
        backgroundId: scene.backgroundId,
        storyText: scene.storyText,
        objects: scene.objects as any || null,
    }));

    return (
        <BookViewerClient
            book={{
                id: book.id,
                title: book.title,
                status: book.status,
                scenes: formattedScenes,
            }}
            characterImageUrl={characterImageUrl}
            user={data.user}
        />
    );
}
