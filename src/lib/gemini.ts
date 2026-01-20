import { GoogleGenerativeAI } from "@google/generative-ai";

// API 키 확인
const apiKey = process.env.GOOGLE_AI_API_KEY || "";
if (!apiKey) {
    console.warn("⚠️ GOOGLE_AI_API_KEY is not set. AI features will not work.");
}

// Gemini 클라이언트 생성
const genAI = new GoogleGenerativeAI(apiKey);

// 텍스트 생성 모델 (gemini-flash-latest 사용 - 무료 티어 최적화)
export const getGeminiModel = (modelName: string = "gemini-flash-latest") => {
    if (!apiKey) {
        throw new Error("GOOGLE_AI_API_KEY is not configured");
    }
    return genAI.getGenerativeModel({ model: modelName });
};

// 동화 스토리 생성
export async function generateFairyTale({
    characterName,
    place,
    event,
    mood,
    pageCount = 5,
}: {
    characterName: string;
    place: string;
    event: string;
    mood: string;
    pageCount?: number;
}) {
    const model = getGeminiModel();

    const prompt = `너는 유아용 동화 작가야. 다음 설정으로 ${pageCount}페이지짜리 동화를 만들어줘.

주인공: ${characterName}
장소: ${place}
사건: ${event}
분위기: ${mood}

규칙:
1. 각 페이지는 1-2문장으로 짧게
2. 4-6세 어린이가 이해할 수 있는 쉬운 단어 사용
3. 긍정적이고 교훈적인 내용
4. 각 페이지에서 학습할 수 있는 키워드 1-2개 포함

JSON 형식으로 응답해줘:
{
  "title": "동화 제목",
  "pages": [
    {
      "pageNumber": 1,
      "content": "첫 번째 페이지 내용",
      "keywords": ["학습키워드1", "학습키워드2"],
      "emotion": "happy"
    }
  ]
}`;

    try {
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        // JSON 추출
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
        throw new Error("Failed to parse story JSON");
    } catch (error) {
        console.error("Gemini story generation error:", error);
        throw error;
    }
}

// 이미지 분석 (캐릭터 그림에서 특징 추출)
export async function analyzeDrawing(imageBase64: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `이 어린이 그림을 분석해서 캐릭터의 특징을 설명해줘.

JSON 형식으로 응답:
{
  "description": "캐릭터 설명 (영어)",
  "colors": ["주요 색상들"],
  "features": ["특징들"],
  "style": "그림 스타일"
}`;

    try {
        const result = await model.generateContent([
            prompt,
            {
                inlineData: {
                    mimeType: "image/png",
                    data: imageBase64,
                },
            },
        ]);

        const text = result.response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
        throw new Error("Failed to parse analysis JSON");
    } catch (error) {
        console.error("Gemini image analysis error:", error);
        throw error;
    }
}

// 학습 카드용 영어 번역
export async function translateToEnglish(koreanWord: string): Promise<string> {
    const model = getGeminiModel();

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
