// 라이브러리 카드 타입 정의

export type CardCategory =
    | "personality" // 성격
    | "role"        // 역할
    | "place"       // 장소
    | "event"       // 사건/소재
    | "mood"        // 분위기
    | "learning"    // 학습 카드
    | "learningTopic"; // 학습 주제

export type LearningType =
    | "expression"  // 표정
    | "phrase"      // 표현
    | "tradition"   // 전통
    | "moral";      // 교훈

export interface LibraryCard {
    id: string;
    category: CardCategory;
    name: string;
    description: string;
    icon: string;           // Lucide icon name
    color: string;          // 카드 테마 색상
    bgColor: string;        // 배경 색상
    tags?: string[];        // 검색/필터용 태그
    learningType?: LearningType;  // 학습카드인 경우
    learningContent?: {
        korean: string;     // 한글 표현
        example?: string;   // 예문
        audio?: string;     // 오디오 파일 경로
    };
    relatedItems?: string[]; // 관련 꾸미기 아이템 ID
    imagePath?: string;     // 카드 이미지 경로 (.webp)
}

export interface StoryRecipe {
    personality: string | null;  // Card ID
    role: string | null;         // Card ID
    place: string | null;        // Card ID
    event: string | null;        // Card ID
    mood: string | null;         // Card ID
    learningTopic: string | null; // Card ID
    learningCards: string[];     // Card IDs
}

// 스토리 생성용 인터페이스
export interface GeneratedStory {
    id: string;
    title: string;
    summary: string;
    pages: StoryPage[];
    learningCards: string[];
    createdAt: Date;
}

export interface StoryPage {
    pageNumber: number;
    content: string;
    narration?: string;
    learningHighlight?: string;
}
