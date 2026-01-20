export type Verb = { id: string; ko: string; en: string };
export type Item = {
    id: string;
    name_ko: string;
    name_en: string;
    verbs: [Verb, Verb]; // MVP: 2개 고정
};

export const items: Item[] = [
    // 전통
    {
        id: "gat",
        name_ko: "갓",
        name_en: "Gat",
        verbs: [
            { id: "wear", ko: "씌우기", en: "put on" },
            { id: "disguise", ko: "변장하기", en: "disguise" },
        ],
    },
    {
        id: "bokjumeoni",
        name_ko: "복주머니",
        name_en: "Lucky pouch",
        verbs: [
            { id: "take_out", ko: "꺼내기", en: "take out" },
            { id: "gift", ko: "선물하기", en: "gift" },
        ],
    },
    {
        id: "dokkaebi_bat",
        name_ko: "도깨비 방망이",
        name_en: "Goblin bat",
        verbs: [
            { id: "magic", ko: "뚝딱!", en: "ta-da!" },
            { id: "change", ko: "바꾸기", en: "change" },
        ],
    },
    {
        id: "fan",
        name_ko: "부채",
        name_en: "Fan",
        verbs: [
            { id: "blow", ko: "후우~", en: "blow" },
            { id: "sweep", ko: "날려보내기", en: "sweep away" },
        ],
    },
    {
        id: "hahoe_mask",
        name_ko: "하회탈",
        name_en: "Mask",
        verbs: [
            { id: "wear", ko: "쓰기", en: "wear" },
            { id: "change_face", ko: "표정 바꾸기", en: "change face" },
        ],
    },

    // 현대
    {
        id: "smartphone",
        name_ko: "스마트폰",
        name_en: "Smartphone",
        verbs: [
            { id: "search", ko: "찾아보기", en: "search" },
            { id: "ding", ko: "띵동!", en: "ding-dong" },
        ],
    },
    {
        id: "kickboard",
        name_ko: "킥보드",
        name_en: "Kick scooter",
        verbs: [
            { id: "zoom", ko: "씽씽!", en: "zoom" },
            { id: "jump", ko: "점프!", en: "jump" },
        ],
    },
    {
        id: "vr_goggles",
        name_ko: "VR 고글",
        name_en: "VR goggles",
        verbs: [
            { id: "enter", ko: "들어가기", en: "enter" },
            { id: "warp", ko: "순간이동", en: "warp" },
        ],
    },
    {
        id: "drone",
        name_ko: "드론",
        name_en: "Drone",
        verbs: [
            { id: "fly", ko: "날리기", en: "fly" },
            { id: "find", ko: "찾기", en: "find" },
        ],
    },
    {
        id: "glow_wand",
        name_ko: "요술 야광봉",
        name_en: "Glow wand",
        verbs: [
            { id: "light", ko: "밝히기", en: "light up" },
            { id: "color", ko: "색 바꾸기", en: "change color" },
        ],
    },
];
