// Card Library Index - 총 213종 (185 학습카드 + 28 FX 스티커)

// 기본 단어 60장
export { basicWordCards, natureCards, animalCards, locationCards, objectCards, foodCards } from "./basicWords";
export type { CardData } from "./basicWords";

// 표현 30장
export { phraseCards } from "./phrases";

// 한국문화 30장
export { cultureCards } from "./culture";

// 감정 20장 + 행동 20장 + 유틸리티 15장 + 대체 10장
export { emotionCards, actionCards, utilityCards, fallbackCards } from "./emotionsActions";

// FX 스티커 28종
export { expressionStickers, poseStickers, fxStickers, allFxStickers } from "./fxStickers";
export type { FxStickerData } from "./fxStickers";

// ─────────────────────────────────────────────────────────────
// 전체 카드 통합
// ─────────────────────────────────────────────────────────────

import { basicWordCards } from "./basicWords";
import { phraseCards } from "./phrases";
import { cultureCards } from "./culture";
import { emotionCards, actionCards, utilityCards, fallbackCards } from "./emotionsActions";
import type { CardData } from "./basicWords";

// 전체 학습 카드 (185장)
export const allLearningCards: CardData[] = [
    ...basicWordCards,      // 60
    ...phraseCards,         // 30
    ...cultureCards,        // 30
    ...emotionCards,        // 20
    ...actionCards,         // 20
    ...utilityCards,        // 15
    ...fallbackCards,       // 10
];

// 카드 검색 함수
export function findCardsByTags(tags: string[], level?: string): CardData[] {
    return allLearningCards.filter(card => {
        const hasMatchingTag = card.tags.some(t => tags.includes(t));
        const matchesLevel = !level || card.level === level;
        return hasMatchingTag && matchesLevel;
    });
}

// 카드 ID로 찾기
export function findCardById(id: string): CardData | undefined {
    return allLearningCards.find(card => card.id === id);
}

// 카테고리별 카드 찾기
export function findCardsByType(type: CardData["type"]): CardData[] {
    return allLearningCards.filter(card => card.type === type);
}

// Fallback 카드 (매칭 실패 시)
export function getRandomFallbackCards(count: number = 2): CardData[] {
    const shuffled = [...fallbackCards].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

console.log(`📚 Card Library Loaded: ${allLearningCards.length} learning cards`);
