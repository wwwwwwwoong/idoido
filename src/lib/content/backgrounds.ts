export type Background = {
    id: string;
    name_ko: string;
    name_en: string;
};

export const backgrounds: Background[] = [
    { id: "sparkling_pond", name_ko: "반짝 연못", name_en: "Sparkling Pond" },
    { id: "moonlit_hanok", name_ko: "달빛 한옥 길", name_en: "Moonlit Hanok Road" },
    { id: "windy_hill", name_ko: "바람 언덕", name_en: "Windy Hill" },
    { id: "dancheong_garden", name_ko: "단청 정원", name_en: "Dancheong Garden" },
    { id: "neon_playground", name_ko: "네온 놀이터", name_en: "Neon Playground" },
    { id: "space_garden", name_ko: "우주 정원", name_en: "Space Garden" },
    { id: "blank_garden", name_ko: "빈 배경(내가 만든 정원)", name_en: "Blank Garden" },
];
