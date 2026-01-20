// MVP Learning Cards Definition
// 이미지 경로는 추후 실제 제작된 파일명으로 매핑됩니다. (현재는 Placeholder)

export interface MvpCardDefinition {
    id: string; // 고유 구분자 (DB 저장 시에는 자동 생성되지만, 로직상 매핑을 위해 ID 필요)
    type: "언어" | "전통" | "인성" | "과학" | "예술";
    name: string;
    desc: string;
    color: string;
    imagePath: string; // /images/cards/...
    trigger: {
        type: "common" | "place" | "personality" | "object";
        value?: string; // triggering value (e.g., "space", "brave")
    };
}

export const MVP_CARDS: MvpCardDefinition[] = [
    // 1. 언어 (Language) - 기본 지급
    {
        id: "card_lang_word_1",
        type: "언어",
        name: "말놀이 대장",
        desc: "재미있는 소리를 흉내내봐요!",
        color: "#607D8B",
        imagePath: "/images/cards/card_lang_speak.png", // Placeholder
        trigger: { type: "common" },
    },

    // 2. 전통 (Heritage) - Trigger: Place(tradition/palace/village) OR Personality(wise/kind)
    {
        id: "card_heritage_club",
        type: "전통",
        name: "도깨비 방망이",
        desc: "뚝딱! 소원을 들어주는 방망이",
        color: "#795548",
        imagePath: "/images/cards/card_heritage_club.png",
        trigger: { type: "place", value: "village" }, // 민속촌/마을
    },
    {
        id: "card_heritage_hanbok",
        type: "전통",
        name: "알록달록 한복",
        desc: "고운 색동 저고리와 치마",
        color: "#E91E63",
        imagePath: "/images/cards/card_heritage_hanbok.png",
        trigger: { type: "place", value: "palace" }, // 궁전
    },
    {
        id: "card_heritage_hat",
        type: "전통",
        name: "지혜의 갓",
        desc: "옛날 선비들이 쓰던 멋진 모자",
        color: "#212121",
        imagePath: "/images/cards/card_heritage_hat.png",
        trigger: { type: "personality", value: "pers-wise" },
    },

    // 3. 인성 (SEL) - Trigger: Personality
    {
        id: "card_sel_courage",
        type: "인성",
        name: "용기의 뱃지",
        desc: "두려움을 이겨내고 도전했어요!",
        color: "#FF9800",
        imagePath: "/images/cards/card_sel_courage.png",
        trigger: { type: "personality", value: "pers-brave" },
    },
    {
        id: "card_sel_care",
        type: "인성",
        name: "배려의 하트",
        desc: "친구를 먼저 생각하는 따뜻한 마음",
        color: "#8BC34A",
        imagePath: "/images/cards/card_sel_care.png",
        trigger: { type: "personality", value: "pers-kind" },
    },
    {
        id: "card_sel_playful",
        type: "인성",
        name: "장난꾸러기 표정",
        desc: "재미있는 장난을 칠 때 짓는 표정",
        color: "#FFC107",
        imagePath: "/images/cards/card_sel_playful.png",
        trigger: { type: "personality", value: "pers-playful" },
    },

    // 4. 과학 (STEAM) - Trigger: Place
    {
        id: "card_steam_spaceship",
        type: "과학",
        name: "무중력 우주선",
        desc: "둥둥~ 우주에서는 몸이 떠요!",
        color: "#3F51B5",
        imagePath: "/images/cards/card_steam_spaceship.png",
        trigger: { type: "place", value: "place-school" }, // 일단 school을 space 대신 매핑 (space가 ID에 없어서 school을 마법학교/우주 테마로 가정하거나, 임시 매핑)
    },
    {
        id: "card_steam_leaf",
        type: "과학",
        name: "광합성 나뭇잎",
        desc: "햇빛을 먹고 쑥쑥 자라나요",
        color: "#4CAF50",
        imagePath: "/images/cards/card_steam_leaf.png",
        trigger: { type: "place", value: "place-forest" },
    },
    {
        id: "card_steam_fish",
        type: "과학",
        name: "심해 아귀",
        desc: "캄캄한 바닷속 불을 밝히는 물고기",
        color: "#00BCD4",
        imagePath: "/images/cards/card_steam_fish.png",
        trigger: { type: "place", value: "place-ocean" },
    },
    {
        id: "card_steam_robot",
        type: "과학",
        name: "미래 로봇 친구",
        desc: "무엇이든 척척 도와주는 AI 로봇",
        color: "#607D8B",
        imagePath: "/images/cards/card_steam_robot.png",
        trigger: { type: "place", value: "place-school" }, // 마법학교 -> 로봇/미래
    },

    // 5. 예술 (Art) - Trigger: Common (Drawing)
    {
        id: "card_art_palette",
        type: "예술",
        name: "무지개 팔레트",
        desc: "빨주노초파남보, 색깔을 섞어봐요",
        color: "#F44336",
        imagePath: "/images/cards/card_art_palette.png",
        trigger: { type: "common" }, // 기본 지급 (그리기 참여 보상)
    },
];
