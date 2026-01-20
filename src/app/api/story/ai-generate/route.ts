import { getGeminiModel } from "@/lib/gemini";
import { requireUserId } from "@/lib/auth";
import { successResponse, handleApiError, validationErrorResponse } from "@/lib/apiResponse";
import { z } from "zod";

export const runtime = "nodejs";

const AIGenerateSchema = z.object({
    prompt: z.string().min(1),
    recipe: z.object({
        personality: z.string(),
        role: z.string(),
        place: z.string(),
        event: z.string(),
        mood: z.string(),
    }),
    characterName: z.string(),
});

/**
 * POST /api/story/ai-generate
 * Gemini AI를 사용해서 전체 동화 스토리 생성
 */
export async function POST(req: Request) {
    try {
        await requireUserId();

        const body = await req.json();
        const parseResult = AIGenerateSchema.safeParse(body);

        if (!parseResult.success) {
            return validationErrorResponse(parseResult.error);
        }

        const { prompt, recipe, characterName } = parseResult.data;

        // Gemini 모델 호출
        const model = getGeminiModel();

        const result = await model.generateContent(prompt);
        const text = result.response.text();

        // JSON 파싱 시도
        try {
            // JSON 블록 추출 (```json ... ``` 형식 처리)
            let jsonText = text;
            const jsonMatch = text.match(/```json\s*([\s\S]*?)```/);
            if (jsonMatch) {
                jsonText = jsonMatch[1];
            } else {
                // 직접 JSON 객체 찾기
                const directMatch = text.match(/\{[\s\S]*\}/);
                if (directMatch) {
                    jsonText = directMatch[0];
                }
            }

            const parsed = JSON.parse(jsonText);

            // 페이지 형식 정리
            const pages = (parsed.pages || []).map((page: any, index: number) => ({
                pageNumber: page.pageNumber || index + 1,
                content: page.content || "",
                learningHighlight: page.learningHighlight,
                suggestedBackground: getBackgroundFromPlace(recipe.place, index),
            }));

            const story = {
                title: parsed.title || `${characterName}의 ${recipe.place} 모험`,
                summary: parsed.summary || `${recipe.place}에서 ${recipe.event}을 하는 이야기`,
                pages,
                learningWords: parsed.learningWords || [],
                coverColor: getMoodColor(recipe.mood),
                coverStyle: "gradient" as const,
            };

            return successResponse({ story, usedAI: true });
        } catch (parseError) {
            console.error("JSON parse error:", parseError);
            console.log("Raw AI response:", text);

            // 파싱 실패 시 텍스트 그대로 반환
            return successResponse({
                story: null,
                rawText: text,
                usedAI: true,
                parseError: true,
            });
        }
    } catch (error) {
        console.error("AI story generation error:", error);
        return handleApiError(error);
    }
}

// 장소에 따른 배경 추천
function getBackgroundFromPlace(place: string, pageIndex: number): string {
    const placeToBackground: Record<string, string[]> = {
        "숲": ["village", "forest", "forest", "night", "forest", "village"],
        "바다": ["village", "ocean", "ocean", "ocean", "sky", "village"],
        "하늘": ["village", "sky", "sky", "night", "sky", "sky"],
        "마을": ["village", "village", "village", "night", "village", "village"],
        "마법학교": ["village", "village", "night", "night", "sky", "village"],
    };

    const backgrounds = placeToBackground[place] || ["village", "forest", "forest", "night", "forest", "village"];
    return backgrounds[pageIndex % backgrounds.length];
}

// 분위기에 따른 커버 색상
function getMoodColor(mood: string): string {
    const moodColors: Record<string, string> = {
        "따뜻한": "#F472B6", // Pink
        "신나는": "#FBBF24", // Yellow
        "잔잔한": "#60A5FA", // Blue
        "마법같은": "#A78BFA", // Purple
        "웃긴": "#34D399", // Green
    };
    return moodColors[mood] || "#F472B6";
}
