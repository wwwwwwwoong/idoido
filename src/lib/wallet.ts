import { prisma } from "@/lib/db";
import { CurrencyType } from "@/generated/prisma";

// ─────────────────────────────────────────────────────────────
// 재화 획득/사용 사유
// ─────────────────────────────────────────────────────────────

export type WaterDropReason =
    | "daily_login"         // 출석 +3
    | "scene_created"       // 장면 완성 +2
    | "card_review"         // 카드 복습 +1
    | "share_bonus"         // 공유 보너스 +3
    | "story_recommend";    // AI 추천 사용 -1

export type MagicSeedReason =
    | "signup_bonus"        // 신규 가입 +5
    | "first_book"          // 첫 동화책 +3
    | "friend_invite"       // 친구 초대 +2
    | "event_reward"        // 이벤트 +1~3
    | "purchase"            // 구매
    | "ai_character";       // AI 캐릭터 변환 -1

// 기본 값 설정
const WATER_DROP_VALUES: Partial<Record<WaterDropReason, number>> = {
    daily_login: 3,
    scene_created: 2,
    card_review: 1,
    share_bonus: 3,
    story_recommend: -1,
};

const MAGIC_SEED_VALUES: Partial<Record<MagicSeedReason, number>> = {
    signup_bonus: 5,
    first_book: 3,
    friend_invite: 2,
    event_reward: 1,
    ai_character: -1,
};

// ─────────────────────────────────────────────────────────────
// 잔액 조회
// ─────────────────────────────────────────────────────────────

export async function getWalletBalance(userId: string) {
    const profile = await prisma.profile.findUnique({
        where: { id: userId },
        select: { waterDrops: true, magicSeeds: true },
    });

    return {
        waterDrops: profile?.waterDrops ?? 0,
        magicSeeds: profile?.magicSeeds ?? 0,
    };
}

// ─────────────────────────────────────────────────────────────
// 물방울 적립/사용
// ─────────────────────────────────────────────────────────────

export async function addWaterDrops(
    userId: string,
    reason: WaterDropReason,
    customDelta?: number
): Promise<{ balance: number; delta: number }> {
    const delta = customDelta ?? WATER_DROP_VALUES[reason] ?? 0;

    // 트랜잭션으로 원자성 보장
    const profile = await prisma.$transaction(async (tx) => {
        // 1. 레저 기록
        await tx.walletLedger.create({
            data: {
                userId,
                currencyType: CurrencyType.WATER_DROP,
                delta,
                reason,
            },
        });

        // 2. 잔액 업데이트
        return tx.profile.update({
            where: { id: userId },
            data: { waterDrops: { increment: delta } },
            select: { waterDrops: true },
        });
    });

    return { balance: profile.waterDrops, delta };
}

// ─────────────────────────────────────────────────────────────
// 마법의씨앗 적립/사용
// ─────────────────────────────────────────────────────────────

export async function addMagicSeeds(
    userId: string,
    reason: MagicSeedReason,
    customDelta?: number
): Promise<{ balance: number; delta: number }> {
    const delta = customDelta ?? MAGIC_SEED_VALUES[reason] ?? 0;

    const profile = await prisma.$transaction(async (tx) => {
        await tx.walletLedger.create({
            data: {
                userId,
                currencyType: CurrencyType.MAGIC_SEED,
                delta,
                reason,
            },
        });

        return tx.profile.update({
            where: { id: userId },
            data: { magicSeeds: { increment: delta } },
            select: { magicSeeds: true },
        });
    });

    return { balance: profile.magicSeeds, delta };
}

// ─────────────────────────────────────────────────────────────
// 잔액 확인 (사용 가능 여부)
// ─────────────────────────────────────────────────────────────

export async function canSpendWaterDrops(userId: string, cost: number): Promise<boolean> {
    const { waterDrops } = await getWalletBalance(userId);
    return waterDrops >= cost;
}

export async function canSpendMagicSeeds(userId: string, cost: number): Promise<boolean> {
    const { magicSeeds } = await getWalletBalance(userId);
    return magicSeeds >= cost;
}

// ─────────────────────────────────────────────────────────────
// 거래 내역 조회
// ─────────────────────────────────────────────────────────────

export async function getWalletHistory(
    userId: string,
    currencyType?: CurrencyType,
    limit = 20
) {
    return prisma.walletLedger.findMany({
        where: {
            userId,
            ...(currencyType && { currencyType }),
        },
        orderBy: { createdAt: "desc" },
        take: limit,
    });
}

// ─────────────────────────────────────────────────────────────
// 신규 가입 보너스
// ─────────────────────────────────────────────────────────────

export async function grantSignupBonus(userId: string) {
    // 이미 지급받았는지 체크
    const existing = await prisma.walletLedger.findFirst({
        where: {
            userId,
            currencyType: CurrencyType.MAGIC_SEED,
            reason: "signup_bonus",
        },
    });

    if (existing) {
        return { alreadyGranted: true, seeds: 0 };
    }

    const { balance } = await addMagicSeeds(userId, "signup_bonus");
    return { alreadyGranted: false, seeds: 5, balance };
}
