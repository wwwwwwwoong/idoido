import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/auth";
import { successResponse, notFoundResponse, handleApiError } from "@/lib/apiResponse";

export const runtime = "nodejs";

interface RouteParams {
    params: Promise<{ cardId: string }>;
}

/**
 * DELETE /api/cards/[cardId]
 * 언어카드 삭제
 */
export async function DELETE(_req: Request, { params }: RouteParams) {
    try {
        const userId = await requireUserId();
        const { cardId } = await params;

        // 카드가 사용자의 것인지 확인
        const card = await prisma.card.findFirst({
            where: {
                id: cardId,
                userId: userId,
            },
        });

        if (!card) {
            return notFoundResponse("Card");
        }

        await prisma.card.delete({
            where: { id: cardId },
        });

        return successResponse({ message: "카드가 삭제되었습니다." });
    } catch (error) {
        return handleApiError(error);
    }
}
