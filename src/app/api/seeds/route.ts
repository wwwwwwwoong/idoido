import { requireUserId } from "@/lib/auth";
import { getSeedBalance, getSeedHistory } from "@/lib/seeds";
import { successResponse, handleApiError } from "@/lib/apiResponse";

export const runtime = "nodejs";

/**
 * GET /api/seeds
 * 현재 유저의 씨앗 잔액 및 최근 내역 조회
 */
export async function GET() {
    try {
        const userId = await requireUserId();

        const [balance, history] = await Promise.all([
            getSeedBalance(userId),
            getSeedHistory(userId, 10),
        ]);

        return successResponse({
            balance,
            history: history.map((h) => ({
                id: h.id,
                delta: h.delta,
                reason: h.reason,
                createdAt: h.createdAt,
            })),
        });
    } catch (error) {
        return handleApiError(error);
    }
}
