// Card Library - FX Stickers for Composite Pages (28 items)

export interface FxStickerData {
    id: string;
    type: "expression" | "pose" | "fx";
    category: string;
    name: string;
    emoji: string;
    description: string;
    imagePath?: string;
}

// 표정 오버레이 10종
export const expressionStickers: FxStickerData[] = [
    { id: "expr-001", type: "expression", category: "positive", name: "웃음", emoji: "😊", description: "기쁜 표정" },
    { id: "expr-002", type: "expression", category: "positive", name: "신남", emoji: "🤩", description: "반짝이는 눈" },
    { id: "expr-003", type: "expression", category: "neutral", name: "놀람", emoji: "😲", description: "놀란 표정" },
    { id: "expr-004", type: "expression", category: "negative", name: "걱정", emoji: "😟", description: "걱정하는 표정" },
    { id: "expr-005", type: "expression", category: "negative", name: "속상", emoji: "😢", description: "눈물 표정" },
    { id: "expr-006", type: "expression", category: "negative", name: "화남", emoji: "😠", description: "화난 표정" },
    { id: "expr-007", type: "expression", category: "positive", name: "용기", emoji: "😤", description: "결심한 표정" },
    { id: "expr-008", type: "expression", category: "neutral", name: "졸림", emoji: "😴", description: "졸린 표정" },
    { id: "expr-009", type: "expression", category: "neutral", name: "부끄러움", emoji: "😳", description: "볼 홍조" },
    { id: "expr-010", type: "expression", category: "neutral", name: "궁금", emoji: "🤔", description: "물음표 눈썹" },
];

// 포즈/연출 카드 8종
export const poseStickers: FxStickerData[] = [
    { id: "pose-001", type: "pose", category: "greeting", name: "인사하기", emoji: "🙋", description: "손 흔들기" },
    { id: "pose-002", type: "pose", category: "movement", name: "뛰기", emoji: "🏃", description: "달리기/뛰기" },
    { id: "pose-003", type: "pose", category: "search", name: "찾기", emoji: "🔍", description: "두리번거리기" },
    { id: "pose-004", type: "pose", category: "point", name: "가리키기", emoji: "👉", description: "손가락으로 가리키기" },
    { id: "pose-005", type: "pose", category: "care", name: "안아주기", emoji: "🤗", description: "안아주기/도와주기" },
    { id: "pose-006", type: "pose", category: "hide", name: "숨기", emoji: "🙈", description: "숨기/몰래보기" },
    { id: "pose-007", type: "pose", category: "action", name: "점프", emoji: "⭐", description: "점프/펑!" },
    { id: "pose-008", type: "pose", category: "celebrate", name: "축하", emoji: "🎉", description: "만세/축하" },
];

// FX 스티커 10종
export const fxStickers: FxStickerData[] = [
    { id: "fx-001", type: "fx", category: "water", name: "물방울", emoji: "💧", description: "물방울 점" },
    { id: "fx-002", type: "fx", category: "sparkle", name: "반짝", emoji: "✨", description: "반짝반짝" },
    { id: "fx-003", type: "fx", category: "wind", name: "바람선", emoji: "💨", description: "바람 효과" },
    { id: "fx-004", type: "fx", category: "footprint", name: "발자국", emoji: "👣", description: "발자국" },
    { id: "fx-005", type: "fx", category: "speed", name: "속도선", emoji: "💨", description: "속도감" },
    { id: "fx-006", type: "fx", category: "glow", name: "후광", emoji: "🌟", description: "후광 링" },
    { id: "fx-007", type: "fx", category: "love", name: "하트", emoji: "❤️", description: "하트 효과" },
    { id: "fx-008", type: "fx", category: "question", name: "물음표", emoji: "❓", description: "물음표" },
    { id: "fx-009", type: "fx", category: "sweat", name: "땀방울", emoji: "💦", description: "땀방울" },
    { id: "fx-010", type: "fx", category: "nature", name: "꽃잎", emoji: "🌸", description: "꽃잎/별가루" },
];

// 전체 FX 스티커
export const allFxStickers: FxStickerData[] = [
    ...expressionStickers,
    ...poseStickers,
    ...fxStickers,
];
