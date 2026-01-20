// OpenAI Client for Story Generation
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

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

// 스토리 초안 3개 생성
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
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            response_format: { type: "json_object" },
            temperature: 0.9,
        });

        const content = response.choices[0].message.content;
        if (!content) throw new Error("No response from OpenAI");

        const parsed = JSON.parse(content);
        return Array.isArray(parsed) ? parsed : parsed.outlines || [];
    } catch (error) {
        console.error("Story outline generation failed:", error);
        throw error;
    }
}

// 전체 페이지 원고 생성
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
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [{ role: "user", content: prompt }],
            response_format: { type: "json_object" },
            temperature: 0.7,
        });

        const content = response.choices[0].message.content;
        if (!content) throw new Error("No response from OpenAI");

        return JSON.parse(content);
    } catch (error) {
        console.error("Manuscript generation failed:", error);
        throw error;
    }
}

export default openai;
