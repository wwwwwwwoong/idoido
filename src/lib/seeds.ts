import { prisma } from "@/lib/db";

// 씨앗 포인트 획득/사용 사유
export type SeedReason =
    | "character_created"   // 캐릭터 생성 +10
    | "scene_created"       // 1페이지 생성 +20
    | "daily_login"         // 일일 로그인 +5
    | "first_scene"         // 첫 1페이지 보너스 +50
    | "bag_opened"          // 보따리 열기 -3
    | "admin_grant";        // 관리자 지급 (양수/음수)

// 사유별 기본 포인트
const SEED_POINTS: Partial<Record<SeedReason, number>> = {
    character_created: 10,
    scene_created: 20,
    daily_login: 5,
    first_scene: 50,
    bag_opened: -3,
};

/**
 * 유저의 현재 씨앗 합계 조회
 */
export async function getSeedBalance(userId: string): Promise<number> {
    const result = await prisma.seedLedger.aggregate({
        where: { userId },
        _sum: { delta: true },
    });
    return result._sum.delta ?? 0;
}

/**
 * 씨앗 포인트 적립/차감
 */
export async function addSeedPoints(
    userId: string,
    reason: SeedReason,
    customDelta?: number
): Promise<{ balance: number; delta: number }> {
    const delta = customDelta ?? SEED_POINTS[reason] ?? 0;

    await prisma.seedLedger.create({
        data: {
            userId,
            delta,
            reason,
        },
    });

    const balance = await getSeedBalance(userId);
    return { balance, delta };
}

/**
 * 씨앗 사용 가능 여부 확인 (잔액 >= 비용)
 */
export async function canSpendSeeds(userId: string, cost: number): Promise<boolean> {
    const balance = await getSeedBalance(userId);
    return balance >= cost;
}

/**
 * 유저의 씨앗 기록 조회 (최근 N개)
 */
export async function getSeedHistory(userId: string, limit = 20) {
    return prisma.seedLedger.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: limit,
    });
}

/**
 * 첫 장면인지 확인
 */
export async function isFirstScene(userId: string): Promise<boolean> {
    const count = await prisma.scene.count({ where: { userId } });
    return count === 0;
}
