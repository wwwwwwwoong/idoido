import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/auth";
import { successResponse, notFoundResponse, handleApiError } from "@/lib/apiResponse";

export const runtime = "nodejs";

interface RouteParams {
    params: Promise<{ bookId: string }>;
}

/**
 * GET /api/books/[bookId]
 * 동화책 상세 조회
 */
export async function GET(_req: Request, { params }: RouteParams) {
    try {
        const userId = await requireUserId();
        const { bookId } = await params;

        const book = await prisma.book.findFirst({
            where: { id: bookId, userId },
            include: {
                scenes: {
                    include: { character: true, cards: true },
                    orderBy: { order: "asc" },
                },
                _count: { select: { scenes: true } },
            },
        });

        if (!book) {
            return notFoundResponse("Book");
        }

        return successResponse({ book });
    } catch (error) {
        return handleApiError(error);
    }
}

/**
 * PATCH /api/books/[bookId]
 * 동화책 정보 업데이트
 */

/**
 * DELETE /api/books/[bookId]
 * 동화책 삭제
 */
export async function DELETE(_req: Request, { params }: RouteParams) {
    try {
        const userId = await requireUserId();
        const { bookId } = await params;

        // 사용자의 동화책인지 확인
        const book = await prisma.book.findFirst({
            where: { id: bookId, userId },
        });

        if (!book) {
            return notFoundResponse("Book");
        }

        // 동화책 삭제 (관련 장면도 cascade 삭제됨)
        await prisma.book.delete({
            where: { id: bookId },
        });

        return successResponse({ message: "동화책이 삭제되었습니다." });
    } catch (error) {
        return handleApiError(error);
    }
}
