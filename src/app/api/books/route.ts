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

        return successResponse({
            books: books.map((b) => ({
                id: b.id,
                title: b.title,
                coverPath: b.coverPath,
                status: b.status,
                sceneCount: b._count.scenes,
                targetSceneCount: b.targetSceneCount,
                createdAt: b.createdAt,
                completedAt: b.completedAt,
            })),
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
            await prisma.card.createMany({
                data: input.cards.map((card: any) => ({
                    userId,
                    bookId: book.id,
                    type: card.type,
                    name: card.name,
                    desc: card.desc,
                    color: card.color,
                    imagePath: card.imagePath,
                })),
            });
        }

        // 💧 물방울 보상: 동화책 시작
        await addWaterDrops(userId, "scene_created", 5);

        return createdResponse({ book });
    } catch (error) {
        console.error("POST /api/books Error:", error);
        return handleApiError(error);
    }
}
