// Card Library - Emotions & Actions & Utility (65 cards)
import type { CardData } from "./basicWords";

// 감정 20장
export const emotionCards: CardData[] = [
    { id: "emotion-001", type: "emotion", category: "positive", tags: ["기쁨", "감정"], level: "3-5", frontTitleKo: "기쁨", frontTitleEn: "Joy", backText: "기분이 좋을 때" },
    { id: "emotion-002", type: "emotion", category: "negative", tags: ["슬픔", "감정"], level: "3-5", frontTitleKo: "슬픔", frontTitleEn: "Sadness", backText: "눈물이 날 때" },
    { id: "emotion-003", type: "emotion", category: "negative", tags: ["화남", "감정"], level: "3-5", frontTitleKo: "화남", frontTitleEn: "Anger", backText: "화가 날 때" },
    { id: "emotion-004", type: "emotion", category: "neutral", tags: ["놀람", "감정"], level: "3-5", frontTitleKo: "놀람", frontTitleEn: "Surprise", backText: "깜짝 놀랄 때" },
    { id: "emotion-005", type: "emotion", category: "negative", tags: ["무서움", "감정"], level: "3-5", frontTitleKo: "무서움", frontTitleEn: "Fear", backText: "무서울 때" },
    { id: "emotion-006", type: "emotion", category: "neutral", tags: ["부끄러움", "감정"], level: "3-5", frontTitleKo: "부끄러움", frontTitleEn: "Shyness", backText: "얼굴이 빨개질 때" },
    { id: "emotion-007", type: "emotion", category: "positive", tags: ["용기", "감정"], level: "3-5", frontTitleKo: "용기", frontTitleEn: "Courage", backText: "씩씩하게 도전할 때" },
    { id: "emotion-008", type: "emotion", category: "negative", tags: ["걱정", "감정"], level: "3-5", frontTitleKo: "걱정", frontTitleEn: "Worry", backText: "마음이 불안할 때" },
    { id: "emotion-009", type: "emotion", category: "positive", tags: ["신남", "감정"], level: "3-5", frontTitleKo: "신남", frontTitleEn: "Excitement", backText: "신나고 즐거울 때" },
    { id: "emotion-010", type: "emotion", category: "neutral", tags: ["지루함", "감정"], level: "3-5", frontTitleKo: "지루함", frontTitleEn: "Boredom", backText: "심심할 때" },
    { id: "emotion-011", type: "emotion", category: "neutral", tags: ["졸림", "감정"], level: "3-5", frontTitleKo: "졸림", frontTitleEn: "Sleepy", backText: "잠이 올 때" },
    { id: "emotion-012", type: "emotion", category: "neutral", tags: ["배고픔", "감정"], level: "3-5", frontTitleKo: "배고픔", frontTitleEn: "Hungry", backText: "배가 고플 때" },
    { id: "emotion-013", type: "emotion", category: "negative", tags: ["아픔", "감정"], level: "3-5", frontTitleKo: "아픔", frontTitleEn: "Hurt", backText: "다쳤을 때" },
    { id: "emotion-014", type: "emotion", category: "positive", tags: ["사랑", "감정"], level: "3-5", frontTitleKo: "사랑", frontTitleEn: "Love", backText: "따뜻한 마음" },
    { id: "emotion-015", type: "emotion", category: "positive", tags: ["감사", "감정"], level: "3-5", frontTitleKo: "감사", frontTitleEn: "Gratitude", backText: "고마운 마음" },
    { id: "emotion-016", type: "emotion", category: "positive", tags: ["자랑스러움", "감정"], level: "6-7", frontTitleKo: "자랑스러움", frontTitleEn: "Pride", backText: "뿌듯할 때" },
    { id: "emotion-017", type: "emotion", category: "negative", tags: ["실망", "감정"], level: "6-7", frontTitleKo: "실망", frontTitleEn: "Disappointment", backText: "기대가 어긋났을 때" },
    { id: "emotion-018", type: "emotion", category: "negative", tags: ["답답함", "감정"], level: "6-7", frontTitleKo: "답답함", frontTitleEn: "Frustration", backText: "마음이 답답할 때" },
    { id: "emotion-019", type: "emotion", category: "neutral", tags: ["차분함", "감정"], level: "3-5", frontTitleKo: "차분함", frontTitleEn: "Calm", backText: "마음이 평화로울 때" },
    { id: "emotion-020", type: "emotion", category: "neutral", tags: ["궁금함", "감정"], level: "3-5", frontTitleKo: "궁금함", frontTitleEn: "Curiosity", backText: "알고 싶을 때" },
];

// 행동(동사) 20장
export const actionCards: CardData[] = [
    { id: "action-001", type: "action", category: "movement", tags: ["찾다", "행동"], level: "3-5", frontTitleKo: "찾다", frontTitleEn: "Find", backText: "무언가를 찾아요" },
    { id: "action-002", type: "action", category: "movement", tags: ["달리다", "행동"], level: "3-5", frontTitleKo: "달리다", frontTitleEn: "Run", backText: "빨리 달려요" },
    { id: "action-003", type: "action", category: "movement", tags: ["걷다", "행동"], level: "3-5", frontTitleKo: "걷다", frontTitleEn: "Walk", backText: "천천히 걸어요" },
    { id: "action-004", type: "action", category: "movement", tags: ["뛰다", "행동"], level: "3-5", frontTitleKo: "뛰다", frontTitleEn: "Jump", backText: "폴짝 뛰어요" },
    { id: "action-005", type: "action", category: "movement", tags: ["숨다", "행동"], level: "3-5", frontTitleKo: "숨다", frontTitleEn: "Hide", backText: "꼭꼭 숨어요" },
    { id: "action-006", type: "action", category: "interact", tags: ["열다", "행동"], level: "3-5", frontTitleKo: "열다", frontTitleEn: "Open", backText: "문을 열어요" },
    { id: "action-007", type: "action", category: "interact", tags: ["닫다", "행동"], level: "3-5", frontTitleKo: "닫다", frontTitleEn: "Close", backText: "문을 닫아요" },
    { id: "action-008", type: "action", category: "interact", tags: ["주다", "행동"], level: "3-5", frontTitleKo: "주다", frontTitleEn: "Give", backText: "선물을 줘요" },
    { id: "action-009", type: "action", category: "interact", tags: ["받다", "행동"], level: "3-5", frontTitleKo: "받다", frontTitleEn: "Receive", backText: "선물을 받아요" },
    { id: "action-010", type: "action", category: "care", tags: ["도와주다", "행동"], level: "3-5", frontTitleKo: "도와주다", frontTitleEn: "Help", backText: "친구를 도와줘요" },
    { id: "action-011", type: "action", category: "care", tags: ["안아주다", "행동"], level: "3-5", frontTitleKo: "안아주다", frontTitleEn: "Hug", backText: "꼭 안아줘요" },
    { id: "action-012", type: "action", category: "expression", tags: ["웃다", "행동"], level: "3-5", frontTitleKo: "웃다", frontTitleEn: "Laugh", backText: "하하 웃어요" },
    { id: "action-013", type: "action", category: "expression", tags: ["울다", "행동"], level: "3-5", frontTitleKo: "울다", frontTitleEn: "Cry", backText: "눈물이 나요" },
    { id: "action-014", type: "action", category: "communicate", tags: ["말하다", "행동"], level: "3-5", frontTitleKo: "말하다", frontTitleEn: "Speak", backText: "이야기해요" },
    { id: "action-015", type: "action", category: "communicate", tags: ["듣다", "행동"], level: "3-5", frontTitleKo: "듣다", frontTitleEn: "Listen", backText: "귀 기울여요" },
    { id: "action-016", type: "action", category: "sense", tags: ["보다", "행동"], level: "3-5", frontTitleKo: "보다", frontTitleEn: "See", backText: "눈으로 봐요" },
    { id: "action-017", type: "action", category: "create", tags: ["만들다", "행동"], level: "3-5", frontTitleKo: "만들다", frontTitleEn: "Make", backText: "무언가를 만들어요" },
    { id: "action-018", type: "action", category: "create", tags: ["그리다", "행동"], level: "3-5", frontTitleKo: "그리다", frontTitleEn: "Draw", backText: "그림을 그려요" },
    { id: "action-019", type: "action", category: "care", tags: ["지키다", "행동"], level: "3-5", frontTitleKo: "지키다", frontTitleEn: "Protect", backText: "소중한 것을 지켜요" },
    { id: "action-020", type: "action", category: "wait", tags: ["기다리다", "행동"], level: "3-5", frontTitleKo: "기다리다", frontTitleEn: "Wait", backText: "조용히 기다려요" },
];

// 색·숫자·모양 15장
export const utilityCards: CardData[] = [
    // 색 6
    { id: "util-001", type: "basic", category: "color", tags: ["빨강", "색깔"], level: "3-5", frontTitleKo: "빨강", frontTitleEn: "Red", backText: "사과 같은 빨간색" },
    { id: "util-002", type: "basic", category: "color", tags: ["주황", "색깔"], level: "3-5", frontTitleKo: "주황", frontTitleEn: "Orange", backText: "귤 같은 주황색" },
    { id: "util-003", type: "basic", category: "color", tags: ["노랑", "색깔"], level: "3-5", frontTitleKo: "노랑", frontTitleEn: "Yellow", backText: "바나나 같은 노란색" },
    { id: "util-004", type: "basic", category: "color", tags: ["초록", "색깔"], level: "3-5", frontTitleKo: "초록", frontTitleEn: "Green", backText: "풀잎 같은 초록색" },
    { id: "util-005", type: "basic", category: "color", tags: ["파랑", "색깔"], level: "3-5", frontTitleKo: "파랑", frontTitleEn: "Blue", backText: "하늘 같은 파란색" },
    { id: "util-006", type: "basic", category: "color", tags: ["보라", "색깔"], level: "3-5", frontTitleKo: "보라", frontTitleEn: "Purple", backText: "포도 같은 보라색" },
    // 숫자 5
    { id: "util-007", type: "basic", category: "number", tags: ["하나", "숫자"], level: "3-5", frontTitleKo: "하나", frontTitleEn: "One", backText: "1️⃣ 하나" },
    { id: "util-008", type: "basic", category: "number", tags: ["둘", "숫자"], level: "3-5", frontTitleKo: "둘", frontTitleEn: "Two", backText: "2️⃣ 둘" },
    { id: "util-009", type: "basic", category: "number", tags: ["셋", "숫자"], level: "3-5", frontTitleKo: "셋", frontTitleEn: "Three", backText: "3️⃣ 셋" },
    { id: "util-010", type: "basic", category: "number", tags: ["넷", "숫자"], level: "3-5", frontTitleKo: "넷", frontTitleEn: "Four", backText: "4️⃣ 넷" },
    { id: "util-011", type: "basic", category: "number", tags: ["다섯", "숫자"], level: "3-5", frontTitleKo: "다섯", frontTitleEn: "Five", backText: "5️⃣ 다섯" },
    // 모양 4
    { id: "util-012", type: "basic", category: "shape", tags: ["동그라미", "모양"], level: "3-5", frontTitleKo: "동그라미", frontTitleEn: "Circle", backText: "⭕ 동그라미" },
    { id: "util-013", type: "basic", category: "shape", tags: ["세모", "모양"], level: "3-5", frontTitleKo: "세모", frontTitleEn: "Triangle", backText: "🔺 세모" },
    { id: "util-014", type: "basic", category: "shape", tags: ["네모", "모양"], level: "3-5", frontTitleKo: "네모", frontTitleEn: "Square", backText: "⬛ 네모" },
    { id: "util-015", type: "basic", category: "shape", tags: ["하트", "모양"], level: "3-5", frontTitleKo: "하트", frontTitleEn: "Heart", backText: "❤️ 하트" },
];

// 범용 대체 카드 10장
export const fallbackCards: CardData[] = [
    { id: "fallback-001", type: "basic", category: "daily", tags: ["단어", "오늘"], level: "3-5", frontTitleKo: "오늘의 단어", frontTitleEn: "Word of the Day", backText: "오늘 배우는 새로운 단어" },
    { id: "fallback-002", type: "emotion", category: "daily", tags: ["감정", "오늘"], level: "3-5", frontTitleKo: "오늘의 감정", frontTitleEn: "Feeling of the Day", backText: "오늘 내 마음은 어때?" },
    { id: "fallback-003", type: "phrase", category: "manners", tags: ["인사"], level: "3-5", frontTitleKo: "인사하기", frontTitleEn: "Greeting", backText: "바르게 인사해요" },
    { id: "fallback-004", type: "phrase", category: "manners", tags: ["약속"], level: "3-5", frontTitleKo: "약속하기", frontTitleEn: "Promise", backText: "약속은 꼭 지켜요" },
    { id: "fallback-005", type: "phrase", category: "manners", tags: ["차례"], level: "3-5", frontTitleKo: "차례 지키기", frontTitleEn: "Taking turns", backText: "순서를 기다려요" },
    { id: "fallback-006", type: "action", category: "manners", tags: ["정리"], level: "3-5", frontTitleKo: "정리하기", frontTitleEn: "Clean up", backText: "깨끗이 정리해요" },
    { id: "fallback-007", type: "phrase", category: "safety", tags: ["조심"], level: "3-5", frontTitleKo: "조심하기", frontTitleEn: "Safety first", backText: "안전하게 조심해요" },
    { id: "fallback-008", type: "action", category: "care", tags: ["도와주기"], level: "3-5", frontTitleKo: "도와주기", frontTitleEn: "Helping", backText: "친구를 도와줘요" },
    { id: "fallback-009", type: "action", category: "calm", tags: ["숨쉬기"], level: "3-5", frontTitleKo: "숨 고르기", frontTitleEn: "Take a deep breath", backText: "크게 숨을 쉬어요" },
    { id: "fallback-010", type: "phrase", category: "encourage", tags: ["칭찬"], level: "3-5", frontTitleKo: "칭찬하기", frontTitleEn: "Praise", backText: "잘했다고 말해줘요" },
];
