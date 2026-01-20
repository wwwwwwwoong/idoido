import { requireUserId } from "@/lib/auth";
import { getWalletBalance, getWalletHistory, grantSignupBonus } from "@/lib/wallet";
import { successResponse, handleApiError } from "@/lib/apiResponse";

export const runtime = "nodejs";

/**
 * GET /api/wallet
 * 현재 유저의 재화 잔액 및 최근 내역 조회
 */
export async function GET() {
    try {
        const userId = await requireUserId();

        const [balance, history] = await Promise.all([
            getWalletBalance(userId),
            getWalletHistory(userId, undefined, 10),
        ]);

        return successResponse({
            balance,
            history: history.map((h) => ({
                id: h.id,
                type: h.currencyType,
                delta: h.delta,
                reason: h.reason,
                createdAt: h.createdAt,
            })),
        });
    } catch (error) {
        return handleApiError(error);
    }
}
