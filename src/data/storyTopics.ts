// 아이들을 위한 동화책 주제 데이터

export interface TopicCategory {
    id: string;
    name: string;
    emoji: string;
    color: string;
    description: string;
}

// 장면 가이드
export interface SceneGuide {
    phase: string; // 시작, 전개, 갈등, 해결, 결말
    emoji: string;
    description: string;
}

export interface StoryTopic {
    id: string;
    categoryId: string;
    title: string;
    emoji: string;
    situation: string;
    lesson: string;
    suggestedTitle: string;
    keywords: string[];
    // 스토리 뼈대 (5장면 기준)
    outline?: SceneGuide[];
}

// 주제 카테고리
export const topicCategories: TopicCategory[] = [
    {
        id: "emotion",
        name: "감정",
        emoji: "💗",
        color: "#E57373",
        description: "마음을 알아가요",
    },
    {
        id: "social",
        name: "관계",
        emoji: "🤝",
        color: "#64B5F6",
        description: "친구와 가족",
    },
    {
        id: "values",
        name: "가치",
        emoji: "⭐",
        color: "#FFD54F",
        description: "올바른 마음",
    },
    {
        id: "creative",
        name: "상상",
        emoji: "🌈",
        color: "#BA68C8",
        description: "자유롭게 상상해요",
    },
];

// 주제별 스토리 아이디어
export const storyTopics: StoryTopic[] = [
    // 감정 카테고리
    {
        id: "anger",
        categoryId: "emotion",
        title: "화가 났을 때",
        emoji: "😤",
        situation: "친구가 내 장난감을 빼앗았어요",
        lesson: "화가 나도 말로 표현할 수 있어요",
        suggestedTitle: "토리의 마음 이야기",
        keywords: ["화", "표현", "진정"],
        outline: [
            { phase: "시작", emoji: "🌅", description: "주인공이 친구와 즐겁게 놀고 있어요" },
            { phase: "평화", emoji: "😊", description: "둘이 사이좋게 장난감을 가지고 놀아요" },
            { phase: "갈등", emoji: "😤", description: "친구가 장난감을 빼앗았어요! 주인공은 화가 났어요" },
            { phase: "감정", emoji: "🔥", description: "얼굴이 빨개지고 소리를 지르고 싶어요" },
            { phase: "선택", emoji: "🤔", description: "어떻게 해야 할까? 크게 숨을 쉬어요" },
            { phase: "해결", emoji: "💬", description: "\"그건 내 거야, 속상해\" 라고 말했어요" },
            { phase: "결말", emoji: "🤝", description: "친구가 사과하고 다시 함께 놀았어요" },
        ],
    },
    {
        id: "fear",
        categoryId: "emotion",
        title: "무서울 때",
        emoji: "😨",
        situation: "밤에 혼자 있는 게 무서워요",
        lesson: "무서운 건 나쁜 게 아니에요. 용기를 내볼 수 있어요",
        suggestedTitle: "용감한 밤 모험",
        keywords: ["무서움", "용기", "밤"],
    },
    {
        id: "sad",
        categoryId: "emotion",
        title: "슬플 때",
        emoji: "😢",
        situation: "좋아하던 친구가 이사를 갔어요",
        lesson: "슬픔도 소중한 감정이에요. 울어도 괜찮아요",
        suggestedTitle: "눈물방울의 비밀",
        keywords: ["슬픔", "이별", "추억"],
    },
    {
        id: "jealous",
        categoryId: "emotion",
        title: "부러울 때",
        emoji: "😕",
        situation: "동생만 예뻐하는 것 같아요",
        lesson: "나도 특별해요. 모두 다른 사랑을 받아요",
        suggestedTitle: "나도 사랑받고 있어요",
        keywords: ["질투", "사랑", "특별함"],
    },
    {
        id: "happy",
        categoryId: "emotion",
        title: "기쁠 때",
        emoji: "😊",
        situation: "친구와 함께 놀아서 너무 즐거워요",
        lesson: "기쁨을 나누면 더 커져요",
        suggestedTitle: "함께라서 행복해",
        keywords: ["기쁨", "나눔", "친구"],
    },

    // 관계 카테고리
    {
        id: "sharing",
        categoryId: "social",
        title: "나눔",
        emoji: "🎁",
        situation: "과자가 하나밖에 없어요",
        lesson: "나누면 기분이 더 좋아져요",
        suggestedTitle: "반으로 나눈 과자",
        keywords: ["나눔", "양보", "기쁨"],
    },
    {
        id: "fight",
        categoryId: "social",
        title: "싸웠을 때",
        emoji: "💔",
        situation: "친구랑 싸워서 마음이 아파요",
        lesson: "미안하다고 말하면 다시 친해질 수 있어요",
        suggestedTitle: "미안해, 친구야",
        keywords: ["화해", "미안함", "우정"],
    },
    {
        id: "newFriend",
        categoryId: "social",
        title: "새 친구",
        emoji: "👋",
        situation: "처음 보는 친구에게 말 거는 게 어려워요",
        lesson: "먼저 인사하면 친구가 될 수 있어요",
        suggestedTitle: "안녕, 새 친구!",
        keywords: ["인사", "용기", "친구"],
    },
    {
        id: "family",
        categoryId: "social",
        title: "가족 사랑",
        emoji: "🏠",
        situation: "부모님이 바빠서 함께 못 놀아요",
        lesson: "가족은 항상 서로를 사랑해요",
        suggestedTitle: "우리 가족 이야기",
        keywords: ["가족", "사랑", "시간"],
    },
    {
        id: "helping",
        categoryId: "social",
        title: "도움",
        emoji: "🙌",
        situation: "친구가 넘어졌어요",
        lesson: "도움을 주면 나도 기분이 좋아져요",
        suggestedTitle: "도움의 손",
        keywords: ["도움", "배려", "친절"],
    },

    // 가치 카테고리
    {
        id: "honesty",
        categoryId: "values",
        title: "정직",
        emoji: "💎",
        situation: "실수로 컵을 깨뜨렸어요",
        lesson: "진실을 말하면 마음이 편해져요",
        suggestedTitle: "정직한 토리",
        keywords: ["정직", "진실", "용기"],
    },
    {
        id: "patience",
        categoryId: "values",
        title: "인내",
        emoji: "🌱",
        situation: "레고를 만드는데 자꾸 무너져요",
        lesson: "포기하지 않으면 해낼 수 있어요",
        suggestedTitle: "포기하지 않아요",
        keywords: ["인내", "끈기", "성공"],
    },
    {
        id: "courage",
        categoryId: "values",
        title: "용기",
        emoji: "🦁",
        situation: "발표하는 게 떨려요",
        lesson: "떨려도 한 번 해보면 자신감이 생겨요",
        suggestedTitle: "용감한 발표",
        keywords: ["용기", "도전", "자신감"],
    },
    {
        id: "respect",
        categoryId: "values",
        title: "존중",
        emoji: "🙏",
        situation: "친구가 나와 다르게 생각해요",
        lesson: "다르다고 틀린 게 아니에요",
        suggestedTitle: "다름은 특별함",
        keywords: ["존중", "다름", "특별함"],
    },
    {
        id: "responsibility",
        categoryId: "values",
        title: "책임감",
        emoji: "📚",
        situation: "내가 맡은 일을 하기 싫어요",
        lesson: "약속을 지키면 믿음직한 사람이 돼요",
        suggestedTitle: "약속을 지키는 토리",
        keywords: ["책임", "약속", "신뢰"],
    },

    // 상상 카테고리
    {
        id: "adventure",
        categoryId: "creative",
        title: "모험",
        emoji: "🗺️",
        situation: "신비한 숲에서 보물을 찾아요",
        lesson: "상상의 세계에서 무엇이든 가능해요",
        suggestedTitle: "신비한 숲 모험",
        keywords: ["모험", "탐험", "보물"],
    },
    {
        id: "magic",
        categoryId: "creative",
        title: "마법",
        emoji: "✨",
        situation: "마법 지팡이를 발견했어요",
        lesson: "상상력은 마법보다 강해요",
        suggestedTitle: "마법의 지팡이",
        keywords: ["마법", "소원", "상상"],
    },
    {
        id: "space",
        categoryId: "creative",
        title: "우주",
        emoji: "🚀",
        situation: "로켓을 타고 달나라에 가요",
        lesson: "꿈꾸면 어디든 갈 수 있어요",
        suggestedTitle: "달나라 여행",
        keywords: ["우주", "별", "꿈"],
    },
    {
        id: "underwater",
        categoryId: "creative",
        title: "바닷속",
        emoji: "🐠",
        situation: "물고기 친구와 바닷속을 탐험해요",
        lesson: "새로운 세계는 항상 흥미로워요",
        suggestedTitle: "바닷속 친구들",
        keywords: ["바다", "물고기", "탐험"],
    },
    {
        id: "freeplay",
        categoryId: "creative",
        title: "자유롭게",
        emoji: "🎨",
        situation: "내 마음대로 이야기를 만들어요",
        lesson: "나만의 이야기는 특별해요",
        suggestedTitle: "나의 이야기",
        keywords: ["자유", "창작", "상상"],
    },
];

// 카테고리별 주제 가져오기
export function getTopicsByCategory(categoryId: string): StoryTopic[] {
    return storyTopics.filter((t) => t.categoryId === categoryId);
}

// 주제 ID로 주제 가져오기
export function getTopicById(topicId: string): StoryTopic | undefined {
    return storyTopics.find((t) => t.id === topicId);
}
