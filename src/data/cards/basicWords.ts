// Card Library - Basic Words (60 cards)
// 기본 단어 카드 라이브러리

export interface CardData {
    id: string;
    type: "word" | "phrase" | "culture" | "emotion" | "action" | "basic";
    category: string;
    tags: string[];
    level: "3-5" | "6-7" | "8-10";
    frontTitleKo: string;
    frontTitleEn: string;
    backText: string;
    frontImageUrl?: string;
    exampleTemplate?: string;
}

// 자연/날씨 10장
export const natureCards: CardData[] = [
    { id: "word-001", type: "word", category: "nature", tags: ["해", "날씨", "하늘"], level: "3-5", frontTitleKo: "해", frontTitleEn: "Sun", backText: "하늘에서 빛나는 해", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-002", type: "word", category: "nature", tags: ["달", "밤", "하늘"], level: "3-5", frontTitleKo: "달", frontTitleEn: "Moon", backText: "밤하늘에 빛나는 달", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-003", type: "word", category: "nature", tags: ["별", "밤", "하늘"], level: "3-5", frontTitleKo: "별", frontTitleEn: "Star", backText: "밤하늘에 반짝이는 별", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-004", type: "word", category: "nature", tags: ["구름", "하늘", "날씨"], level: "3-5", frontTitleKo: "구름", frontTitleEn: "Cloud", backText: "하늘에 떠 있는 구름", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-005", type: "word", category: "nature", tags: ["비", "날씨", "물"], level: "3-5", frontTitleKo: "비", frontTitleEn: "Rain", backText: "하늘에서 내리는 비", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-006", type: "word", category: "nature", tags: ["바람", "날씨"], level: "3-5", frontTitleKo: "바람", frontTitleEn: "Wind", backText: "살랑살랑 부는 바람", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-007", type: "word", category: "nature", tags: ["눈", "날씨", "겨울"], level: "3-5", frontTitleKo: "눈", frontTitleEn: "Snow", backText: "펑펑 내리는 눈", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-008", type: "word", category: "nature", tags: ["무지개", "하늘", "비"], level: "3-5", frontTitleKo: "무지개", frontTitleEn: "Rainbow", backText: "일곱 빛깔 무지개", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-009", type: "word", category: "nature", tags: ["나무", "숲", "자연"], level: "3-5", frontTitleKo: "나무", frontTitleEn: "Tree", backText: "키가 큰 나무", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-010", type: "word", category: "nature", tags: ["꽃", "자연", "봄"], level: "3-5", frontTitleKo: "꽃", frontTitleEn: "Flower", backText: "예쁘게 핀 꽃", frontImageUrl: "/cards/placeholder.svg" },
];

// 동물 12장
export const animalCards: CardData[] = [
    { id: "word-011", type: "word", category: "animal", tags: ["토끼", "동물"], level: "3-5", frontTitleKo: "토끼", frontTitleEn: "Rabbit", backText: "깡충깡충 뛰는 토끼", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-012", type: "word", category: "animal", tags: ["호랑이", "동물", "한국"], level: "3-5", frontTitleKo: "호랑이", frontTitleEn: "Tiger", backText: "어흥! 용감한 호랑이", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-013", type: "word", category: "animal", tags: ["곰", "동물", "숲"], level: "3-5", frontTitleKo: "곰", frontTitleEn: "Bear", backText: "뒤뚱뒤뚱 귀여운 곰", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-014", type: "word", category: "animal", tags: ["여우", "동물", "숲"], level: "3-5", frontTitleKo: "여우", frontTitleEn: "Fox", backText: "똑똑한 여우", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-015", type: "word", category: "animal", tags: ["새", "동물", "하늘"], level: "3-5", frontTitleKo: "새", frontTitleEn: "Bird", backText: "하늘을 나는 새", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-016", type: "word", category: "animal", tags: ["나비", "동물", "꽃"], level: "3-5", frontTitleKo: "나비", frontTitleEn: "Butterfly", backText: "팔랑팔랑 나비", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-017", type: "word", category: "animal", tags: ["물고기", "동물", "바다"], level: "3-5", frontTitleKo: "물고기", frontTitleEn: "Fish", backText: "헤엄치는 물고기", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-018", type: "word", category: "animal", tags: ["거북이", "동물"], level: "3-5", frontTitleKo: "거북이", frontTitleEn: "Turtle", backText: "느릿느릿 거북이", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-019", type: "word", category: "animal", tags: ["강아지", "동물", "집"], level: "3-5", frontTitleKo: "강아지", frontTitleEn: "Dog", backText: "멍멍! 귀여운 강아지", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-020", type: "word", category: "animal", tags: ["고양이", "동물", "집"], level: "3-5", frontTitleKo: "고양이", frontTitleEn: "Cat", backText: "야옹! 귀여운 고양이", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-021", type: "word", category: "animal", tags: ["공룡", "동물"], level: "3-5", frontTitleKo: "공룡", frontTitleEn: "Dinosaur", backText: "쿵쿵! 큰 공룡", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-022", type: "word", category: "animal", tags: ["벌", "동물", "꽃"], level: "3-5", frontTitleKo: "벌", frontTitleEn: "Bee", backText: "윙윙 꿀을 모으는 벌", frontImageUrl: "/cards/placeholder.svg" },
];

// 장소 10장
export const locationCards: CardData[] = [
    { id: "word-023", type: "word", category: "location", tags: ["집", "장소"], level: "3-5", frontTitleKo: "집", frontTitleEn: "Home", backText: "우리 가족이 사는 집", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-024", type: "word", category: "location", tags: ["학교", "장소"], level: "3-5", frontTitleKo: "학교", frontTitleEn: "School", backText: "친구들과 배우는 학교", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-025", type: "word", category: "location", tags: ["놀이터", "장소"], level: "3-5", frontTitleKo: "놀이터", frontTitleEn: "Playground", backText: "신나게 노는 놀이터", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-026", type: "word", category: "location", tags: ["숲", "장소", "자연"], level: "3-5", frontTitleKo: "숲", frontTitleEn: "Forest", backText: "나무가 많은 숲", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-027", type: "word", category: "location", tags: ["바다", "장소", "자연"], level: "3-5", frontTitleKo: "바다", frontTitleEn: "Sea", backText: "넓고 푸른 바다", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-028", type: "word", category: "location", tags: ["산", "장소", "자연"], level: "3-5", frontTitleKo: "산", frontTitleEn: "Mountain", backText: "높고 큰 산", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-029", type: "word", category: "location", tags: ["강", "장소", "자연"], level: "3-5", frontTitleKo: "강", frontTitleEn: "River", backText: "졸졸 흐르는 강", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-030", type: "word", category: "location", tags: ["마을", "장소"], level: "3-5", frontTitleKo: "마을", frontTitleEn: "Village", backText: "사람들이 사는 마을", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-031", type: "word", category: "location", tags: ["시장", "장터", "장소"], level: "3-5", frontTitleKo: "시장", frontTitleEn: "Market", backText: "물건을 사고파는 시장", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-032", type: "word", category: "location", tags: ["하늘", "장소", "자연"], level: "3-5", frontTitleKo: "하늘", frontTitleEn: "Sky", backText: "높고 넓은 하늘", frontImageUrl: "/cards/placeholder.svg" },
];

// 사물 18장
export const objectCards: CardData[] = [
    { id: "word-033", type: "word", category: "object", tags: ["문", "사물", "집"], level: "3-5", frontTitleKo: "문", frontTitleEn: "Door", backText: "열고 닫는 문", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-034", type: "word", category: "object", tags: ["열쇠", "사물"], level: "3-5", frontTitleKo: "열쇠", frontTitleEn: "Key", backText: "문을 여는 열쇠", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-035", type: "word", category: "object", tags: ["가방", "사물"], level: "3-5", frontTitleKo: "가방", frontTitleEn: "Bag", backText: "물건을 넣는 가방", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-036", type: "word", category: "object", tags: ["지도", "사물"], level: "3-5", frontTitleKo: "지도", frontTitleEn: "Map", backText: "길을 찾는 지도", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-037", type: "word", category: "object", tags: ["등불", "사물", "빛"], level: "3-5", frontTitleKo: "등불", frontTitleEn: "Lantern", backText: "밤을 밝히는 등불", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-038", type: "word", category: "object", tags: ["우산", "사물", "비"], level: "3-5", frontTitleKo: "우산", frontTitleEn: "Umbrella", backText: "비를 막아주는 우산", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-039", type: "word", category: "object", tags: ["모자", "사물"], level: "3-5", frontTitleKo: "모자", frontTitleEn: "Hat", backText: "머리에 쓰는 모자", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-040", type: "word", category: "object", tags: ["신발", "사물"], level: "3-5", frontTitleKo: "신발", frontTitleEn: "Shoes", backText: "발에 신는 신발", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-041", type: "word", category: "object", tags: ["책", "사물"], level: "3-5", frontTitleKo: "책", frontTitleEn: "Book", backText: "읽는 재미가 있는 책", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-042", type: "word", category: "object", tags: ["연필", "사물"], level: "3-5", frontTitleKo: "연필", frontTitleEn: "Pencil", backText: "글씨를 쓰는 연필", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-043", type: "word", category: "object", tags: ["종이", "사물"], level: "3-5", frontTitleKo: "종이", frontTitleEn: "Paper", backText: "그림을 그리는 종이", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-044", type: "word", category: "object", tags: ["붓", "사물", "그림"], level: "3-5", frontTitleKo: "붓", frontTitleEn: "Brush", backText: "그림을 그리는 붓", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-045", type: "word", category: "object", tags: ["풍선", "사물"], level: "3-5", frontTitleKo: "풍선", frontTitleEn: "Balloon", backText: "둥둥 떠오르는 풍선", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-046", type: "word", category: "object", tags: ["장난감", "사물"], level: "3-5", frontTitleKo: "장난감", frontTitleEn: "Toy", backText: "가지고 노는 장난감", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-047", type: "word", category: "object", tags: ["거울", "사물"], level: "3-5", frontTitleKo: "거울", frontTitleEn: "Mirror", backText: "내 모습이 보이는 거울", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-048", type: "word", category: "object", tags: ["시계", "사물", "시간"], level: "3-5", frontTitleKo: "시계", frontTitleEn: "Clock", backText: "시간을 알려주는 시계", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-049", type: "word", category: "object", tags: ["상자", "사물"], level: "3-5", frontTitleKo: "상자", frontTitleEn: "Box", backText: "물건을 담는 상자", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-050", type: "word", category: "object", tags: ["다리", "사물", "건물"], level: "3-5", frontTitleKo: "다리", frontTitleEn: "Bridge", backText: "강을 건너는 다리", frontImageUrl: "/cards/placeholder.svg" },
];

// 음식/식물 10장
export const foodCards: CardData[] = [
    { id: "word-051", type: "word", category: "food", tags: ["떡", "음식", "한국"], level: "3-5", frontTitleKo: "떡", frontTitleEn: "Rice cake", backText: "쫀득쫀득 맛있는 떡", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-052", type: "word", category: "food", tags: ["김밥", "음식", "한국"], level: "3-5", frontTitleKo: "김밥", frontTitleEn: "Gimbap", backText: "동글동글 맛있는 김밥", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-053", type: "word", category: "food", tags: ["사과", "음식", "과일"], level: "3-5", frontTitleKo: "사과", frontTitleEn: "Apple", backText: "아삭아삭 사과", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-054", type: "word", category: "food", tags: ["바나나", "음식", "과일"], level: "3-5", frontTitleKo: "바나나", frontTitleEn: "Banana", backText: "노란 바나나", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-055", type: "word", category: "food", tags: ["딸기", "음식", "과일"], level: "3-5", frontTitleKo: "딸기", frontTitleEn: "Strawberry", backText: "빨간 딸기", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-056", type: "word", category: "food", tags: ["꿀", "음식"], level: "3-5", frontTitleKo: "꿀", frontTitleEn: "Honey", backText: "달콤한 꿀", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-057", type: "word", category: "food", tags: ["우유", "음식"], level: "3-5", frontTitleKo: "우유", frontTitleEn: "Milk", backText: "하얀 우유", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-058", type: "word", category: "food", tags: ["밥", "음식", "한국"], level: "3-5", frontTitleKo: "밥", frontTitleEn: "Rice", backText: "맛있는 밥", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-059", type: "word", category: "food", tags: ["물", "음식"], level: "3-5", frontTitleKo: "물", frontTitleEn: "Water", backText: "시원한 물", frontImageUrl: "/cards/placeholder.svg" },
    { id: "word-060", type: "word", category: "food", tags: ["씨앗", "식물"], level: "3-5", frontTitleKo: "씨앗", frontTitleEn: "Seed", backText: "쑥쑥 자라는 씨앗", frontImageUrl: "/cards/placeholder.svg" },
];

// 기본 단어 전체
export const basicWordCards: CardData[] = [
    ...natureCards,
    ...animalCards,
    ...locationCards,
    ...objectCards,
    ...foodCards,
];
