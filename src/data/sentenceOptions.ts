// 단계별 문장 선택 옵션
// 각 단계마다 3가지 문장 + 나만의 문장 만들기 옵션

export interface SentenceOption {
    id: string;
    text: string; // {name}은 캐릭터 이름으로 치환됨
    backgroundId: string;
    itemId: string;
    verbId: string;
    emotion?: string; // 감정 키워드
}

export interface PhaseOptions {
    phase: string;
    emoji: string;
    title: string;
    sentences: SentenceOption[];
}

// "화가 났을 때" 주제의 단계별 문장
export const angerTopicSentences: PhaseOptions[] = [
    {
        phase: "시작",
        emoji: "🌅",
        title: "이야기의 시작",
        sentences: [
            {
                id: "start-1",
                text: "{name}이(가) 집에서 좋아하는 장난감을 가지고 놀고 있었어요.",
                backgroundId: "home",
                itemId: "toy",
                verbId: "play",
            },
            {
                id: "start-2",
                text: "{name}은(는) 놀이터에서 친구들과 공놀이를 하고 있었어요.",
                backgroundId: "playground",
                itemId: "ball",
                verbId: "play",
            },
            {
                id: "start-3",
                text: "{name}이(가) 유치원에서 블록으로 멋진 탑을 쌓고 있었어요.",
                backgroundId: "school",
                itemId: "blocks",
                verbId: "build",
            },
        ],
    },
    {
        phase: "평화",
        emoji: "😊",
        title: "즐거운 시간",
        sentences: [
            {
                id: "peace-1",
                text: "{name}은(는) 정말 행복했어요. 오늘은 좋은 날이에요!",
                backgroundId: "home",
                itemId: "toy",
                verbId: "play",
            },
            {
                id: "peace-2",
                text: "친구가 다가와서 함께 놀자고 했어요. {name}은(는) 기뻤어요.",
                backgroundId: "playground",
                itemId: "ball",
                verbId: "play",
            },
            {
                id: "peace-3",
                text: "{name}의 탑이 점점 높아지고 있었어요. 너무 신났어요!",
                backgroundId: "school",
                itemId: "blocks",
                verbId: "build",
            },
        ],
    },
    {
        phase: "갈등",
        emoji: "😤",
        title: "문제 발생!",
        sentences: [
            {
                id: "conflict-1",
                text: "그런데 갑자기! 친구가 {name}의 장난감을 빼앗았어요.",
                backgroundId: "home",
                itemId: "toy",
                verbId: "take",
                emotion: "upset",
            },
            {
                id: "conflict-2",
                text: "그때! 친구가 공을 혼자 가지고 가버렸어요. {name}은(는) 놀 수가 없었어요.",
                backgroundId: "playground",
                itemId: "ball",
                verbId: "take",
                emotion: "upset",
            },
            {
                id: "conflict-3",
                text: "아아! 친구가 실수로 {name}의 블록 탑을 무너뜨렸어요!",
                backgroundId: "school",
                itemId: "blocks",
                verbId: "break",
                emotion: "angry",
            },
        ],
    },
    {
        phase: "감정",
        emoji: "🔥",
        title: "마음속 감정",
        sentences: [
            {
                id: "emotion-1",
                text: "{name}의 얼굴이 빨개졌어요. 마음속에서 화가 부글부글 끓어올랐어요.",
                backgroundId: "home",
                itemId: "toy",
                verbId: "feel",
                emotion: "angry",
            },
            {
                id: "emotion-2",
                text: "{name}은(는) 너무 속상해서 눈물이 글썽글썽해졌어요.",
                backgroundId: "playground",
                itemId: "ball",
                verbId: "cry",
                emotion: "sad",
            },
            {
                id: "emotion-3",
                text: "{name}은(는) 소리를 지르고 싶었어요. 정말 화가 났거든요!",
                backgroundId: "school",
                itemId: "blocks",
                verbId: "shout",
                emotion: "angry",
            },
        ],
    },
    {
        phase: "선택",
        emoji: "🤔",
        title: "어떻게 할까?",
        sentences: [
            {
                id: "choice-1",
                text: "잠깐! {name}은(는) 생각했어요. '크게 숨을 쉬어볼까?'",
                backgroundId: "home",
                itemId: "heart",
                verbId: "breathe",
            },
            {
                id: "choice-2",
                text: "{name}은(는) 멈추고 천천히 셋을 세었어요. 하나... 둘... 셋...",
                backgroundId: "playground",
                itemId: "star",
                verbId: "count",
            },
            {
                id: "choice-3",
                text: "선생님이 배워준 것이 생각났어요. '화가 나면 깊은 숨!'",
                backgroundId: "school",
                itemId: "heart",
                verbId: "remember",
            },
        ],
    },
    {
        phase: "해결",
        emoji: "💬",
        title: "용기를 내어",
        sentences: [
            {
                id: "solve-1",
                text: "{name}은(는) 용기를 내어 말했어요. \"그건 내 거야. 빼앗으면 속상해.\"",
                backgroundId: "home",
                itemId: "toy",
                verbId: "speak",
            },
            {
                id: "solve-2",
                text: "\"나도 같이 놀고 싶어.\" {name}은(는) 차분하게 말할 수 있었어요.",
                backgroundId: "playground",
                itemId: "ball",
                verbId: "speak",
            },
            {
                id: "solve-3",
                text: "\"실수는 괜찮아. 다시 만들자!\" {name}은(는) 친구에게 말했어요.",
                backgroundId: "school",
                itemId: "blocks",
                verbId: "speak",
            },
        ],
    },
    {
        phase: "결말",
        emoji: "🤝",
        title: "해피엔딩",
        sentences: [
            {
                id: "end-1",
                text: "친구가 \"미안해\"라고 했어요. 둘은 다시 사이좋게 함께 놀았답니다.",
                backgroundId: "home",
                itemId: "toy",
                verbId: "play",
            },
            {
                id: "end-2",
                text: "친구가 공을 돌려줬어요. 둘은 웃으며 다시 공놀이를 했어요.",
                backgroundId: "playground",
                itemId: "ball",
                verbId: "play",
            },
            {
                id: "end-3",
                text: "둘이 함께 더 멋진 탑을 쌓았어요. {name}은(는) 기분이 좋았어요!",
                backgroundId: "school",
                itemId: "blocks",
                verbId: "build",
            },
        ],
    },
];

// 주제별 문장 맵
export const topicSentencesMap: Record<string, PhaseOptions[]> = {
    anger: angerTopicSentences,
};

// 문장에 캐릭터 이름 적용
export function applySentenceTemplate(sentence: string, characterName: string): string {
    return sentence.replace(/{name}/g, characterName);
}
