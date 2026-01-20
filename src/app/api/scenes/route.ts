import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/auth";
import { ResultChoice } from "@/generated/prisma";
import { addWaterDrops, addMagicSeeds } from "@/lib/wallet";
import {
    successResponse,
    createdResponse,
    forbiddenResponse,
    handleApiError,
    validationErrorResponse,
} from "@/lib/apiResponse";

export const runtime = "nodejs";

const CreateSceneSchema = z.object({
    characterId: z.string().uuid(),
    backgroundId: z.string().min(1),
    itemId: z.string().min(1),
    verbId: z.string().min(1),
    resultChoice: z.enum(["SUCCESS", "SILLY", "NEXT"]),
    bookId: z.string().uuid().optional(), // 동화책에 추가하는 경우
    sceneImagePath: z.string().min(1).optional(),
    cards: z
        .array(
            z.object({
                ko: z.string().min(1),
                en: z.string().min(1),
                order: z.number().int().min(0).max(2),
            })
        )
        .length(3),
});

export async function GET() {
    try {
        const userId = await requireUserId();

        const scenes = await prisma.scene.findMany({
            where: { userId },
            include: { cards: { orderBy: { order: "asc" } }, character: true },
            orderBy: { createdAt: "desc" },
        });

        return successResponse({ scenes });
    } catch (error) {
        return handleApiError(error);
    }
}

export async function POST(req: Request) {
    try {
        const userId = await requireUserId();
        const body = await req.json();

        const parseResult = CreateSceneSchema.safeParse(body);
        if (!parseResult.success) {
            return validationErrorResponse(parseResult.error);
        }
        const input = parseResult.data;

        // 캐릭터 소유권 체크
        const character = await prisma.character.findFirst({
            where: { id: input.characterId, userId },
            select: { id: true },
        });
        if (!character) return forbiddenResponse();

        // 첫 장면인지 확인
        const sceneCount = await prisma.scene.count({ where: { userId } });
        const isFirst = sceneCount === 0;

        // 동화책 내 순서 계산 (bookId가 있는 경우)
        let order: number | undefined;
        if (input.bookId) {
            const lastScene = await prisma.scene.findFirst({
                where: { bookId: input.bookId },
                orderBy: { order: "desc" },
                select: { order: true },
            });
            order = (lastScene?.order ?? -1) + 1;
        }

        const created = await prisma.scene.create({
            data: {
                userId,
                characterId: input.characterId,
                backgroundId: input.backgroundId,
                itemId: input.itemId,
                verbId: input.verbId,
                resultChoice: input.resultChoice as ResultChoice,
                bookId: input.bookId,
                order,
                sceneImagePath: input.sceneImagePath,
                cards: {
                    create: input.cards.map((c) => ({ ko: c.ko, en: c.en, order: c.order })),
                },
            },
            include: { cards: { orderBy: { order: "asc" } } },
        });

        // 💧 물방울 보상
        const rewards: Array<{ type: string; reason: string; delta: number }> = [];

        // 기본: 장면 생성 +2
        const { delta: sceneReward } = await addWaterDrops(userId, "scene_created");
        rewards.push({ type: "WATER_DROP", reason: "scene_created", delta: sceneReward });

        // 첫 장면 보너스: 🌱 +1
        if (isFirst) {
            const { delta: firstBonus } = await addMagicSeeds(userId, "event_reward", 1);
            rewards.push({ type: "MAGIC_SEED", reason: "first_scene_bonus", delta: firstBonus });
        }

        return createdResponse({
            scene: created,
            rewards,
            isFirstScene: isFirst,
        });
    } catch (error) {
        return handleApiError(error);
    }
}
