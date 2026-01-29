import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/auth";
import { addMagicSeeds, addWaterDrops } from "@/lib/wallet";
import {
    successResponse,
    createdResponse,
    handleApiError,
    validationErrorResponse,
} from "@/lib/apiResponse";

export const runtime = "nodejs";

const CreateBookSchema = z.object({
    title: z.string().min(1).max(100).optional(),
    topicId: z.string().min(1).optional(), // 선택한 주제 ID
    lesson: z.string().max(200).optional(), // 배울 교훈
    targetSceneCount: z.number().min(3).max(15).optional(), // 목표 장면 수
    outline: z.array(z.object({
        phase: z.string(),
        emoji: z.string(),
        description: z.string(),
    })).optional(), // 스토리 뼈대
    // 신규 필드
    pageLength: z.number().optional(),
    language: z.string().optional(),
    ageRange: z.string().optional(),
    coverPath: z.string().optional(), // 표지 이미지 경로
    // Scenes 저장을 위한 임시 구조 (선택 사항)
    scenes: z.array(z.any()).optional(),
    // 카드 저장을 위한 필드
    cards: z.array(z.object({
        type: z.string(),
        name: z.string(),
        desc: z.string().optional(),
        color: z.string().optional(),
        imagePath: z.string().optional(),
    })).optional(),
});

const UpdateBookSchema = z.object({
    title: z.string().min(1).max(100).optional(),
    status: z.enum(["DRAFT", "COMPLETED"]).optional(),
});

/**
 * GET /api/books
 * 유저의 동화책 목록 조회
 */
export async function GET() {
    try {
        const userId = await requireUserId();

        const books = await prisma.book.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
            include: {
                scenes: {
                    orderBy: { order: "asc" },
                    select: { id: true, order: true },
                },
                _count: { select: { scenes: true } },
            },
        });

        // Supabase signed URLs 생성
        const { createClient } = await import("@/lib/supabase/server");
        const supabase = await createClient();

        const booksWithUrls = await Promise.all(books.map(async (b) => {
            let coverUrl = b.coverPath;

            // 이미지 경로 처리 (URL이 아니거나, Supabase Public URL인 경우 서명 시도)
            const isSupabasePublicUrl = b.coverPath?.includes("/storage/v1/object/public/doodles/");
            const isRelativePath = b.coverPath && !b.coverPath.startsWith("http") && !b.coverPath.startsWith("data:");

            if (isRelativePath || isSupabasePublicUrl) {
                try {
                    // 상대 경로 추출 (이미 상대 경로면 그대로, URL이면 doodles/ 이후 추출)
                    let storagePath = b.coverPath;
                    if (isSupabasePublicUrl && b.coverPath) {
                        const match = b.coverPath.match(/\/doodles\/(.+)$/);
                        if (match && match[1]) {
                            storagePath = match[1];
                        }
                    }

                    if (storagePath) {
                        const { data, error } = await supabase.storage
                            .from("doodles")
                            .createSignedUrl(storagePath, 3600);

                        if (error) {
                            console.error("Signed URL error:", error);
                            coverUrl = null; // Fallback
                        } else if (data?.signedUrl) {
                            coverUrl = data.signedUrl;
                        } else {
                            coverUrl = null;
                        }
                    }
                } catch (e) {
                    console.error("Signed URL error:", e);
                    coverUrl = null;
                }
            }

            return {
                id: b.id,
                title: b.title,
                coverPath: coverUrl, // 서명된 URL로 교체
                status: b.status,
                sceneCount: b._count.scenes,
                targetSceneCount: b.targetSceneCount,
                createdAt: b.createdAt,
                completedAt: b.completedAt,
            };
        }));

        return successResponse({
            books: booksWithUrls,
        });
    } catch (error) {
        return handleApiError(error);
    }
}

/**
 * POST /api/books
 * 새 동화책 생성
 */
export async function POST(req: Request) {
    try {
        console.log("POST /api/books: Started");
        const userId = await requireUserId();
        console.log("POST /api/books: userId:", userId);

        const body = await req.json();
        console.log("POST /api/books: body:", JSON.stringify(body, null, 2));

        const parseResult = CreateBookSchema.safeParse(body);
        if (!parseResult.success) {
            console.error("POST /api/books: Validation Error:", parseResult.error);
            return validationErrorResponse(parseResult.error);
        }
        const input = parseResult.data;
        console.log("POST /api/books: Parsed Input:", input);

        const scenesCreateData = input.scenes ? {
            create: input.scenes.map((scene: any, index: number) => ({
                order: index + 1,
                userId,
                backgroundId: scene.backgroundId,
                itemId: "none",
                verbId: "none",
                resultChoice: "SUCCESS" as const,
                storyText: scene.storyText || "",
                objects: scene.objects || null,
                learningTags: scene.learningTags || null, // 학습 태그 저장
                characterId: scene.characterId || null, // 캐릭터 연결
                sceneImagePath: scene.sceneImagePath || null, // 이미지 경로 저장
            }))
        } : undefined;

        console.log("POST /api/books: Scenes Data to Create:", JSON.stringify(scenesCreateData));

        const book = await prisma.book.create({
            data: {
                userId,
                title: input.title || "나의 동화책",
                coverPath: input.coverPath || null,
                topicId: input.topicId,
                lesson: input.lesson,
                targetSceneCount: input.targetSceneCount || 7,
                outline: input.outline || [],
                pageLength: input.pageLength,
                language: input.language,
                ageRange: input.ageRange,
                scenes: scenesCreateData,
            },
        });

        console.log("POST /api/books: Book Created:", book.id);

        // Cards 저장
        if (input.cards && input.cards.length > 0) {
            // 중복 방지를 위해 하나씩 처리
            for (const card of input.cards) {
                // 이미 해당 유저가 가진 같은 이름의 카드가 있는지 확인
                const existing = await prisma.card.findFirst({
                    where: {
                        userId,
                        name: card.name,
                    }
                });

                // 없을 경우에만 저장
                if (!existing) {
                    await prisma.card.create({
                        data: {
                            userId,
                            bookId: book.id,
                            type: card.type,
                            name: card.name,
                            desc: card.desc,
                            color: card.color,
                            imagePath: card.imagePath,
                        }
                    });
                }
            }
        }

        // 💧 물방울 보상: 동화책 시작
        await addWaterDrops(userId, "scene_created", 5);

        return createdResponse({ book });
    } catch (error) {
        console.error("POST /api/books Error:", error);
        return handleApiError(error);
    }
}
