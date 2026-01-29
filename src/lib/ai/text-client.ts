import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_AI_API_KEY || "";

if (!apiKey) {
    console.warn("⚠️ GOOGLE_AI_API_KEY is not set. Story features will not work.");
}

const genAI = new GoogleGenerativeAI(apiKey);

// Models
const FAST_MODEL = "gemini-2.5-flash-lite"; // Ultra-fast model for outlines
const PRO_MODEL = "gemini-2.5-flash";   // Balanced high-performance model for manuscripts

export const getTextModel = (modelName: string = FAST_MODEL) => {
    if (!apiKey) {
        throw new Error("GOOGLE_AI_API_KEY is not configured");
    }
    return genAI.getGenerativeModel({ model: modelName });
};

// Interfaces
export interface StoryOutline {
    id: number;
    title: string;
    logline: string;
    acts: string[];
}

export interface PageData {
    pageNumber: number;
    beatType: "SETUP" | "INCITING" | "TRY_FAIL" | "TURN" | "CLIMAX" | "RESOLUTION";
    textKo: string;
    textEn?: string;
    sceneHint: string;
    learningTags: {
        keywords: string[];
        emotion: string;
        pattern?: string;
    };
}

export interface GeneratedStory {
    storyBible: {
        tone: string;
        lesson: string;
        setting: string;
        avoid: string[];
    };
    characters: Array<{ name: string; role: string; traits: string[] }>;
    objects: string[];
    pages: PageData[];
}

// 1. 스토리 초안 생성
export async function generateStoryOutlines(
    mixer: {
        tale: string;
        culture: string;
        setting: string;
        tone: string;
        lesson: string;
        pack: string;
    },
    seedType: string,
    ageRange: string,
    pageLength: number
): Promise<StoryOutline[]> {
    const model = getTextModel(FAST_MODEL);

    const prompt = `당신은 어린이 동화책 작가입니다. 다음 조건으로 동화 초안 3개를 만들어주세요.

조건:
- 배경: ${mixer.tale} / ${mixer.setting}
- 문화요소: ${mixer.culture}
- 분위기: ${mixer.tone}
- 교훈: ${mixer.lesson}
- 대상 연령: ${ageRange}세
- 페이지 수: ${pageLength}페이지
- 아이가 그린 그림 유형: ${seedType}

각 초안은 다음 형식으로 작성:
1. 제목 (짧고 기억에 남는)
2. 로그라인 (한 문장 요약)
3. 3막 구조 (시작-중간-끝 각 한 문장)

JSON 형식으로 응답해주세요:
[
  { "id": 1, "title": "제목", "logline": "로그라인", "acts": ["시작", "중간", "끝"] },
  { "id": 2, "title": "제목", "logline": "로그라인", "acts": ["시작", "중간", "끝"] },
  { "id": 3, "title": "제목", "logline": "로그라인", "acts": ["시작", "중간", "끝"] }
]`;

    try {
        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: "application/json" }
        });

        const responseText = result.response.text();
        const parsed = JSON.parse(responseText);
        return Array.isArray(parsed) ? parsed : parsed.outlines || [];
    } catch (error) {
        console.error("Story outline generation failed:", error);
        throw error;
    }
}

// 2. 전체 원고 생성
export async function generateManuscript(
    outline: StoryOutline,
    mixer: {
        tale: string;
        culture: string;
        setting: string;
        tone: string;
        lesson: string;
        pack: string;
    },
    ageRange: string,
    pageLength: number,
    language: string
): Promise<GeneratedStory> {
    const model = getTextModel(PRO_MODEL); // Use Pro for better storytelling

    const beatTypes = {
        8: ["SETUP", "SETUP", "INCITING", "TRY_FAIL", "TURN", "CLIMAX", "RESOLUTION", "RESOLUTION"],
        12: ["SETUP", "SETUP", "SETUP", "INCITING", "TRY_FAIL", "TRY_FAIL", "TURN", "TURN", "CLIMAX", "RESOLUTION", "RESOLUTION", "RESOLUTION"],
        16: ["SETUP", "SETUP", "SETUP", "SETUP", "INCITING", "INCITING", "TRY_FAIL", "TRY_FAIL", "TRY_FAIL", "TURN", "TURN", "CLIMAX", "CLIMAX", "RESOLUTION", "RESOLUTION", "RESOLUTION"],
    };

    const beats = beatTypes[pageLength as keyof typeof beatTypes] || beatTypes[8];

    const prompt = `당신은 어린이 동화책 작가입니다. 다음 초안을 바탕으로 ${pageLength}페이지 동화를 작성해주세요.

초안:
- 제목: ${outline.title}
- 로그라인: ${outline.logline}
- 3막: ${outline.acts.join(" → ")}

설정:
- 배경: ${mixer.tale} / ${mixer.setting}
- 문화요소: ${mixer.culture}
- 분위기: ${mixer.tone}
- 교훈: ${mixer.lesson}
- 대상 연령: ${ageRange}세
- 언어: ${language === "both" ? "한국어 + 영어" : language === "ko" ? "한국어만" : "영어만"}

각 페이지의 beat_type: ${beats.join(", ")}

JSON 형식으로 응답:
{
  "storyBible": { "tone": "분위기", "lesson": "교훈", "setting": "배경", "avoid": [] },
  "characters": [{ "name": "이름", "role": "주인공/조력자", "traits": ["특성"] }],
  "objects": ["핵심소재1", "핵심소재2"],
  "pages": [
    {
      "pageNumber": 1,
      "beatType": "SETUP",
      "textKo": "한국어 텍스트",
      ${language !== "ko" ? '"textEn": "English text",' : ""}
      "sceneHint": "이미지 힌트",
      "learningTags": { "keywords": ["단어1"], "emotion": "감정", "pattern": null }
    }
  ]
}

주의:
- 각 페이지는 1-3문장 (${ageRange}세 수준)
- 학습키워드는 한국문화, 감정, 행동 관련 단어 포함
- sceneHint는 그림 생성용 간단한 장면 설명`;

    try {
        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: "application/json" }
        });

        const responseText = result.response.text();
        return JSON.parse(responseText);
    } catch (error) {
        console.error("Manuscript generation failed:", error);
        throw error;
    }
}

// Helper: Translate
export async function translateToEnglish(koreanWord: string): Promise<string> {
    const model = getTextModel(FAST_MODEL);

    const prompt = `다음 한국어 단어의 영어 번역을 알려줘. 단어만 응답해줘.

한국어: ${koreanWord}
영어:`;

    try {
        const result = await model.generateContent(prompt);
        return result.response.text().trim();
    } catch (error) {
        console.error("Translation error:", error);
        return "";
    }
}
