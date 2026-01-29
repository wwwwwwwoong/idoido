import { LibraryCard } from "./types/library";

// ============================================
// 성격 카드 (Personality)
// ============================================
export const personalityCards: LibraryCard[] = [
    {
        id: "pers-brave",
        category: "personality",
        name: "용감한",
        description: "무서워도 도전하는",
        icon: "Shield",
        color: "#3B82F6",
        bgColor: "#DBEAFE",
        imagePath: "/images/cards/pers-brave.webp",
        learningContent: {
            korean: "용감한",
            english: "Brave",
        }
    },
    {
        id: "pers-kind",
        category: "personality",
        name: "다정한",
        description: "따뜻하고 친절한",
        icon: "Heart",
        color: "#EC4899",
        bgColor: "#FCE7F3",
        imagePath: "/images/cards/pers-kind.webp",
        learningContent: {
            korean: "다정한",
            english: "Kind",
        }
    },
    {
        id: "pers-curious",
        category: "personality",
        name: "호기심 많은",
        description: "뭐든 궁금해하는",
        icon: "Search",
        color: "#F97316",
        bgColor: "#FFEDD5",
        imagePath: "/images/cards/pers-curious.webp",
        learningContent: {
            korean: "호기심 많은",
            english: "Curious",
        }
    },
    {
        id: "pers-shy",
        category: "personality",
        name: "수줍은",
        description: "조용하고 부끄럼 타는",
        icon: "Smile",
        color: "#A855F7",
        bgColor: "#F3E8FF",
        imagePath: "/images/cards/pers-shy.webp",
        learningContent: {
            korean: "수줍은",
            english: "Shy",
        }
    },
    {
        id: "pers-playful",
        category: "personality",
        name: "장난꾸러기",
        description: "재미있고 활발한",
        icon: "Laugh",
        color: "#22C55E",
        bgColor: "#DCFCE7",
        imagePath: "/images/cards/pers-playful.webp",
        learningContent: {
            korean: "장난꾸러기",
            english: "Playful",
        }
    },
    {
        id: "pers-wise",
        category: "personality",
        name: "똑똑한",
        description: "지혜롭고 생각이 많은",
        icon: "Lightbulb",
        color: "#EAB308",
        bgColor: "#FEF9C3",
        imagePath: "/images/cards/pers-wise.webp",
        learningContent: {
            korean: "똑똑한",
            english: "Smart",
        }
    },
    {
        id: "pers-energetic",
        category: "personality",
        name: "씩씩한",
        description: "활기차고 에너지 넘치는",
        icon: "Zap",
        color: "#F97316",
        bgColor: "#FFEDD5",
        imagePath: "/images/cards/pers-energetic.webp",
        learningContent: {
            korean: "씩씩한",
            english: "Energetic",
        }
    },
    {
        id: "pers-calm",
        category: "personality",
        name: "차분한",
        description: "침착하고 여유로운",
        icon: "Moon",
        color: "#6366F1",
        bgColor: "#E0E7FF",
        imagePath: "/images/cards/pers-calm.webp",
        learningContent: {
            korean: "차분한",
            english: "Calm",
        }
    },
];

// ============================================
// 역할 카드 (Role)
// ============================================
export const roleCards: LibraryCard[] = [
    {
        id: "role-explorer",
        category: "role",
        name: "탐험가",
        description: "새로운 곳을 찾아다니는",
        icon: "Compass",
        color: "#F97316",
        bgColor: "#FFEDD5",
        imagePath: "/images/cards/role-explorer.webp",
        learningContent: {
            korean: "탐험가",
            english: "Explorer",
        }
    },
    {
        id: "role-helper",
        category: "role",
        name: "도우미",
        description: "친구들을 돕는",
        icon: "HandHeart",
        color: "#EC4899",
        bgColor: "#FCE7F3",
        imagePath: "/images/cards/role-helper.webp",
        learningContent: {
            korean: "도우미",
            english: "Helper",
        }
    },
    {
        id: "role-friend",
        category: "role",
        name: "친구",
        description: "함께 놀고 웃는",
        icon: "Users",
        color: "#22C55E",
        bgColor: "#DCFCE7",
        imagePath: "/images/cards/role-friend.webp",
        learningContent: {
            korean: "친구",
            english: "Friend",
        }
    },
    {
        id: "role-hero",
        category: "role",
        name: "영웅",
        description: "위기에서 구해주는",
        icon: "Zap",
        color: "#3B82F6",
        bgColor: "#DBEAFE",
        imagePath: "/images/cards/role-hero.webp",
        learningContent: {
            korean: "영웅",
            english: "Hero",
        }
    },
    {
        id: "role-wizard",
        category: "role",
        name: "마법사",
        description: "신비한 마법을 부리는",
        icon: "Wand2",
        color: "#A855F7",
        bgColor: "#F3E8FF",
        imagePath: "/images/cards/role-wizard.webp",
        learningContent: {
            korean: "마법사",
            english: "Wizard",
        }
    },
    {
        id: "role-inventor",
        category: "role",
        name: "발명가",
        description: "새로운 것을 발명하는",
        icon: "Lightbulb",
        color: "#14B8A6",
        bgColor: "#CCFBF1",
        imagePath: "/images/cards/role-inventor.webp",
        learningContent: {
            korean: "발명가",
            english: "Inventor",
        }
    },
    {
        id: "role-chef",
        category: "role",
        name: "요리사",
        description: "맛있는 음식을 만드는",
        icon: "ChefHat",
        color: "#EF4444",
        bgColor: "#FEE2E2",
        imagePath: "/images/cards/role-chef.webp",
        learningContent: {
            korean: "요리사",
            english: "Chef",
        }
    },
    {
        id: "role-storyteller",
        category: "role",
        name: "이야기꾼",
        description: "재미있는 이야기를 들려주는",
        icon: "BookOpen",
        color: "#0EA5E9",
        bgColor: "#E0F2FE",
        imagePath: "/images/cards/role-storyteller.webp",
        learningContent: {
            korean: "이야기꾼",
            english: "Storyteller",
        }
    },
];

// ============================================
// 장소 카드 (Places)
// ============================================
export const placeCards: LibraryCard[] = [
    {
        id: "place-forest",
        category: "place",
        name: "신비로운 숲",
        description: "요정과 동물이 사는 마법의 숲",
        icon: "TreePine",
        color: "#22C55E",
        bgColor: "#DCFCE7",
        tags: ["자연", "신비로운", "모험"],
        imagePath: "/images/cards/place-forest.webp",
        learningContent: {
            korean: "숲",
            english: "Forest",
        }
    },
    {
        id: "place-ocean",
        category: "place",
        name: "깊은 바다",
        description: "인어와 물고기가 사는 바다",
        icon: "Waves",
        color: "#0EA5E9",
        bgColor: "#E0F2FE",
        tags: ["자연", "신비로운", "넓은"],
        imagePath: "/images/cards/place-ocean.webp",
        learningContent: {
            korean: "바다",
            english: "Ocean",
        }
    },
    {
        id: "place-palace",
        category: "place",
        name: "하늘 궁전",
        description: "구름 위에 있는 아름다운 궁전",
        icon: "Castle",
        color: "#8B5CF6",
        bgColor: "#EDE9FE",
        tags: ["왕족", "하늘", "화려한"],
        imagePath: "/images/cards/place-palace.webp",
        learningContent: {
            korean: "궁전",
            english: "Palace",
        }
    },
    {
        id: "place-village",
        category: "place",
        name: "작은 마을",
        description: "정겨운 이웃이 사는 마을",
        icon: "Home",
        color: "#F59E0B",
        bgColor: "#FEF3C7",
        tags: ["따뜻한", "일상", "평화로운"],
        imagePath: "/images/cards/place-village.webp",
        learningContent: {
            korean: "마을",
            english: "Village",
        }
    },
    {
        id: "place-mountain",
        category: "place",
        name: "구름 산",
        description: "구름 속에 숨겨진 높은 산",
        icon: "Mountain",
        color: "#6B7280",
        bgColor: "#F3F4F6",
        tags: ["자연", "모험", "높은"],
        imagePath: "/images/cards/place-mountain.webp",
        learningContent: {
            korean: "산",
            english: "Mountain",
        }
    },
    {
        id: "place-school",
        category: "place",
        name: "마법 학교",
        description: "마법을 배우는 신비한 학교",
        icon: "GraduationCap",
        color: "#6366F1",
        bgColor: "#E0E7FF",
        tags: ["학교", "마법", "배움"],
        imagePath: "/images/cards/place-school.webp",
        learningContent: {
            korean: "학교",
            english: "School",
        }
    },
    {
        id: "place-space",
        category: "place",
        name: "반짝이는 우주",
        description: "별과 행성이 반짝이는 신비한 우주",
        icon: "Rocket",
        color: "#1E3A8A",
        bgColor: "#DBEAFE",
        tags: ["우주", "탐험", "신비로운"],
        imagePath: "/images/cards/place-space.webp",
        learningContent: {
            korean: "우주",
            english: "Space",
        }
    },
    {
        id: "place-candy",
        category: "place",
        name: "과자 마을",
        description: "사탕과 초콜릿으로 된 달콤한 마을",
        icon: "Candy",
        color: "#F472B6",
        bgColor: "#FDF2F8",
        tags: ["달콤한", "판타지", "귀여운"],
        imagePath: "/images/cards/place-candy.webp",
        learningContent: {
            korean: "사탕",
            english: "Candy",
        }
    },
];

// ============================================
// 사건/소재 카드 (Events)
// ============================================
export const eventCards: LibraryCard[] = [
    {
        id: "event-adventure",
        category: "event",
        name: "모험 떠나기",
        description: "새로운 세계를 탐험해요",
        icon: "Compass",
        color: "#F97316",
        bgColor: "#FFEDD5",
        tags: ["모험", "용감한", "탐험"],
        imagePath: "/images/cards/event-adventure.webp",
        learningContent: {
            korean: "모험",
            english: "Adventure",
        }
    },
    {
        id: "event-friend",
        category: "event",
        name: "친구 만나기",
        description: "새로운 친구를 사귀어요",
        icon: "Users",
        color: "#EC4899",
        bgColor: "#FCE7F3",
        tags: ["우정", "따뜻한", "만남"],
        imagePath: "/images/cards/event-friend.webp",
        learningContent: {
            korean: "친구",
            english: "Friend",
        }
    },
    {
        id: "event-mystery",
        category: "event",
        name: "비밀 발견",
        description: "숨겨진 비밀을 찾아내요",
        icon: "Key",
        color: "#8B5CF6",
        bgColor: "#EDE9FE",
        tags: ["신비로운", "탐험", "발견"],
        imagePath: "/images/cards/event-mystery.webp",
        learningContent: {
            korean: "비밀",
            english: "Mystery",
        }
    },
    {
        id: "event-help",
        category: "event",
        name: "도움 주기",
        description: "어려운 친구를 도와줘요",
        icon: "HandHeart",
        color: "#EF4444",
        bgColor: "#FEE2E2",
        tags: ["따뜻한", "배려", "친절"],
        imagePath: "/images/cards/event-help.webp",
        learningContent: {
            korean: "도움",
            english: "Help",
        }
    },
    {
        id: "event-magic",
        category: "event",
        name: "마법 배우기",
        description: "신비한 마법을 배워요",
        icon: "Wand2",
        color: "#A855F7",
        bgColor: "#F3E8FF",
        tags: ["마법", "신비로운", "배움"],
        imagePath: "/images/cards/event-magic.webp",
        learningContent: {
            korean: "마법",
            english: "Magic",
        }
    },
    {
        id: "event-treasure",
        category: "event",
        name: "보물찾기",
        description: "숨겨진 보물을 찾아요",
        icon: "Gem",
        color: "#14B8A6",
        bgColor: "#CCFBF1",
        tags: ["모험", "탐험", "발견"],
        imagePath: "/images/cards/event-treasure.webp",
        learningContent: {
            korean: "보물",
            english: "Treasure",
        }
    },
    {
        id: "event-party",
        category: "event",
        name: "파티 열기",
        description: "신나는 파티를 열어요",
        icon: "PartyPopper",
        color: "#F472B6",
        bgColor: "#FDF2F8",
        tags: ["즐거운", "축하", "함께"],
        imagePath: "/images/cards/event-party.webp",
        learningContent: {
            korean: "파티",
            english: "Party",
        }
    },
    {
        id: "event-growth",
        category: "event",
        name: "성장하기",
        description: "어려움을 이겨내고 성장해요",
        icon: "TrendingUp",
        color: "#10B981",
        bgColor: "#D1FAE5",
        tags: ["성장", "극복", "용기"],
        imagePath: "/images/cards/event-growth.webp",
        learningContent: {
            korean: "성장",
            english: "Growth",
        }
    },
];

// ============================================
// 분위기 카드 (Moods)
// ============================================
export const moodCards: LibraryCard[] = [
    {
        id: "mood-warm",
        category: "mood",
        name: "따뜻한",
        description: "마음이 따뜻해지는",
        icon: "Sun",
        color: "#F59E0B",
        bgColor: "#FEF3C7",
        imagePath: "/images/cards/mood-warm.webp",
        learningContent: {
            korean: "따뜻한",
            english: "Warm",
        }
    },
    {
        id: "mood-exciting",
        category: "mood",
        name: "신나는",
        description: "두근두근 설레는",
        icon: "PartyPopper",
        color: "#EC4899",
        bgColor: "#FCE7F3",
        imagePath: "/images/cards/mood-exciting.webp",
        learningContent: {
            korean: "신나는",
            english: "Exciting",
        }
    },
    {
        id: "mood-calm",
        category: "mood",
        name: "잔잔한",
        description: "평화롭고 고요한",
        icon: "Moon",
        color: "#6366F1",
        bgColor: "#E0E7FF",
        imagePath: "/images/cards/mood-calm.webp",
        learningContent: {
            korean: "잔잔한",
            english: "Calm",
        }
    },
    {
        id: "mood-magical",
        category: "mood",
        name: "마법 같은",
        description: "신비롭고 환상적인",
        icon: "Wand2",
        color: "#A855F7",
        bgColor: "#F3E8FF",
        imagePath: "/images/cards/mood-magical.webp",
        learningContent: {
            korean: "마법 같은",
            english: "Magical",
        }
    },
    {
        id: "mood-funny",
        category: "mood",
        name: "재미있는",
        description: "웃음이 나오는",
        icon: "Laugh",
        color: "#22C55E",
        bgColor: "#DCFCE7",
        imagePath: "/images/cards/mood-funny.webp",
        learningContent: {
            korean: "재미있는",
            english: "Funny",
        }
    },
    {
        id: "mood-scary",
        category: "mood",
        name: "으스스한",
        description: "살짝 무섭고 긴장되는",
        icon: "Ghost",
        color: "#374151",
        bgColor: "#F3F4F6",
        imagePath: "/images/cards/mood-scary.webp",
        learningContent: {
            korean: "으스스한",
            english: "Scary",
        }
    },
    {
        id: "mood-mysterious",
        category: "mood",
        name: "신비로운",
        description: "알 수 없는 비밀이 가득한",
        icon: "Sparkles",
        color: "#6366F1",
        bgColor: "#EDE9FE",
        imagePath: "/images/cards/mood-mysterious.webp",
        learningContent: {
            korean: "신비로운",
            english: "Mysterious",
        }
    },
    {
        id: "mood-flutter",
        category: "mood",
        name: "설레는",
        description: "두근두근 기대되는",
        icon: "Heart",
        color: "#F472B6",
        bgColor: "#FDF2F8",
        imagePath: "/images/cards/mood-flutter.webp",
        learningContent: {
            korean: "설레는",
            english: "Flutter",
        }
    },
];

// ============================================
// 학습 주제 카드 (Learning Topic) - 레시피에서 선택
// ============================================
export const learningTopicCards: LibraryCard[] = [
    {
        id: "topic-emotion",
        category: "learningTopic",
        name: "감정 탐험",
        description: "다양한 표정과 감정을 이해해요",
        icon: "Heart",
        color: "#EC4899",
        bgColor: "#FCE7F3",
        tags: ["표정", "감정", "공감"],
        relatedItems: ["heart", "star", "sparkle"],
        imagePath: "/images/cards/topic-emotion.webp",
        learningContent: {
            korean: "감정",
            english: "Emotion",
        }
    },
    {
        id: "topic-expression",
        category: "learningTopic",
        name: "말하기 연습",
        description: "인사와 감사 표현을 배워요",
        icon: "MessageCircle",
        color: "#3B82F6",
        bgColor: "#DBEAFE",
        tags: ["인사", "감사", "사과"],
        relatedItems: ["crown", "flower", "bird"],
        imagePath: "/images/cards/topic-expression.webp",
        learningContent: {
            korean: "표현",
            english: "Expression",
        }
    },
    {
        id: "topic-culture",
        category: "learningTopic",
        name: "우리 문화",
        description: "한국의 전통과 명절을 알아봐요",
        icon: "Flag",
        color: "#EF4444",
        bgColor: "#FEE2E2",
        tags: ["전통", "명절", "한국"],
        relatedItems: ["hanbok", "club", "lantern"],
        imagePath: "/images/cards/topic-culture.webp",
        learningContent: {
            korean: "문화",
            english: "Culture",
        }
    },
    {
        id: "topic-science",
        category: "learningTopic",
        name: "과학 탐구",
        description: "신기한 과학 세계를 탐험해요",
        icon: "Rocket",
        color: "#6366F1",
        bgColor: "#E0E7FF",
        tags: ["우주", "로봇", "발명"],
        relatedItems: ["spaceship", "robot", "star"],
        imagePath: "/images/cards/topic-science.webp",
        learningContent: {
            korean: "과학",
            english: "Science",
        }
    },
    {
        id: "topic-nature",
        category: "learningTopic",
        name: "자연 친구",
        description: "자연과 동물을 사랑해요",
        icon: "Leaf",
        color: "#22C55E",
        bgColor: "#DCFCE7",
        tags: ["자연", "동물", "환경"],
        relatedItems: ["flower", "tree", "bird", "fish", "cloud"],
        imagePath: "/images/cards/topic-nature.webp",
        learningContent: {
            korean: "자연",
            english: "Nature",
        }
    },
];

// ============================================
// 학습 카드 (Learning)
// ============================================
export const learningCards: LibraryCard[] = [
    // 표정 (Expression)
    {
        id: "learn-happy",
        category: "learning",
        learningType: "expression",
        name: "기쁨",
        description: "행복할 때 짓는 표정",
        icon: "Smile",
        color: "#FCD34D",
        bgColor: "#FEF9C3",
        learningContent: {
            korean: "기쁘다, 행복하다",
            english: "Happy",
            example: "선물을 받아서 정말 기뻐요!",
        },
        imagePath: "/images/cards/learn-happy.webp",
    },
    {
        id: "learn-sad",
        category: "learning",
        learningType: "expression",
        name: "슬픔",
        description: "슬플 때 짓는 표정",
        icon: "Frown",
        color: "#60A5FA",
        bgColor: "#DBEAFE",
        learningContent: {
            korean: "슬프다, 서럽다",
            english: "Sad",
            example: "친구가 떠나서 슬펐어요.",
        },
        imagePath: "/images/cards/topic-emotion.webp",
    },
    {
        id: "learn-angry",
        category: "learning",
        learningType: "expression",
        name: "화남",
        description: "화가 났을 때 표정",
        icon: "Angry",
        color: "#F87171",
        bgColor: "#FEE2E2",
        learningContent: {
            korean: "화나다, 짜증나다",
            english: "Angry",
            example: "약속을 어겨서 화가 났어요.",
        },
        imagePath: "/images/cards/topic-emotion.webp",
    },
    {
        id: "learn-surprised",
        category: "learning",
        learningType: "expression",
        name: "놀람",
        description: "놀랐을 때 표정",
        icon: "AlertCircle",
        color: "#C084FC",
        bgColor: "#F3E8FF",
        learningContent: {
            korean: "놀라다, 깜짝이야",
            english: "Surprised",
            example: "깜짝 파티에 정말 놀랐어요!",
        },
        imagePath: "/images/cards/topic-emotion.webp",
    },

    // 표현 (Phrase)
    {
        id: "learn-hello",
        category: "learning",
        learningType: "phrase",
        name: "인사",
        description: "만났을 때 하는 말",
        icon: "Hand",
        color: "#10B981",
        bgColor: "#D1FAE5",
        learningContent: {
            korean: "안녕하세요",
            english: "Hello",
            example: "선생님, 안녕하세요!",
        },
        imagePath: "/images/cards/topic-expression.webp",
    },
    {
        id: "learn-thanks",
        category: "learning",
        learningType: "phrase",
        name: "감사",
        description: "고마울 때 하는 말",
        icon: "Gift",
        color: "#F472B6",
        bgColor: "#FCE7F3",
        learningContent: {
            korean: "고마워요, 감사합니다",
            english: "Thank you",
            example: "도와줘서 정말 고마워요!",
        },
        imagePath: "/images/cards/topic-expression.webp",
    },
    {
        id: "learn-sorry",
        category: "learning",
        learningType: "phrase",
        name: "사과",
        description: "미안할 때 하는 말",
        icon: "HeartHandshake",
        color: "#FB923C",
        bgColor: "#FFEDD5",
        learningContent: {
            korean: "미안해요, 죄송합니다",
            english: "Sorry",
            example: "늦어서 정말 미안해요.",
        },
        imagePath: "/images/cards/topic-expression.webp",
    },

    // 전통 (Tradition)
    {
        id: "learn-hanbok",
        category: "learning",
        learningType: "tradition",
        name: "한복",
        description: "우리나라 전통 옷",
        icon: "Shirt",
        color: "#E11D48",
        bgColor: "#FFE4E6",
        learningContent: {
            korean: "한복",
            english: "Hanbok",
            example: "설날에 예쁜 한복을 입어요.",
        },
        imagePath: "/images/cards/topic-culture.webp",
    },
    {
        id: "learn-seollal",
        category: "learning",
        learningType: "tradition",
        name: "설날",
        description: "새해 첫날 명절",
        icon: "CalendarHeart",
        color: "#DC2626",
        bgColor: "#FEE2E2",
        learningContent: {
            korean: "설날, 새해",
            english: "Lunar New Year",
            example: "설날에 세배를 드려요.",
        },
        imagePath: "/images/cards/topic-culture.webp",
    },

    // 교훈 (Moral)
    {
        id: "learn-courage",
        category: "learning",
        learningType: "moral",
        name: "용기",
        description: "무서워도 해내는 마음",
        icon: "Shield",
        color: "#2563EB",
        bgColor: "#DBEAFE",
        learningContent: {
            korean: "용기",
            english: "Courage",
            example: "용기를 내서 친구를 도왔어요.",
        },
        imagePath: "/images/cards/learn-courage.webp",
    },
    {
        id: "learn-sharing",
        category: "learning",
        learningType: "moral",
        name: "나눔",
        description: "함께 나누는 마음",
        icon: "Heart",
        color: "#EC4899",
        bgColor: "#FCE7F3",
        learningContent: {
            korean: "나눔",
            english: "Sharing",
            example: "친구와 간식을 나눠 먹었어요.",
        },
        imagePath: "/images/cards/learn-sharing.webp",
    },
    {
        id: "learn-honesty",
        category: "learning",
        learningType: "moral",
        name: "정직",
        description: "거짓말 하지 않는 것",
        icon: "CheckCircle",
        color: "#16A34A",
        bgColor: "#DCFCE7",
        learningContent: {
            korean: "정직",
            english: "Honesty",
            example: "정직하게 말하니 마음이 편했어요.",
        },
        imagePath: "/images/cards/learn-honesty.webp",
    },
];

// 전체 라이브러리
export const allLibraryCards: LibraryCard[] = [
    ...personalityCards,
    ...roleCards,
    ...placeCards,
    ...eventCards,
    ...moodCards,
    ...learningTopicCards,
    ...learningCards,
];

// 카테고리별 카드 가져오기
export function getCardsByCategory(category: string): LibraryCard[] {
    return allLibraryCards.filter(card => card.category === category);
}

// ID로 카드 찾기
export function getCardById(id: string): LibraryCard | undefined {
    return allLibraryCards.find(card => card.id === id);
}

// 학습 타입별 카드 가져오기
export function getLearningCardsByType(type: string): LibraryCard[] {
    return learningCards.filter(card => card.learningType === type);
}
