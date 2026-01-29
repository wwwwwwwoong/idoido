import { generateImage, analyzeDrawing as analyzeDrawingUnified, AI_PROVIDER } from "@/lib/ai/unified-client";
import * as openai from "@/lib/ai/openai-client";
import { getImageAnalysisModel } from "@/lib/ai/image-client";

// 아트 스타일 정의 (동화책이 기본값이므로 맨 앞에 배치)
import { ART_STYLES, type ArtStyleId } from "./characterStyles";

export { ART_STYLES, type ArtStyleId };


// 낙서 분석 프롬프트 (원본 충실 - 강력 버전)
const ANALYZE_PROMPT = `You are analyzing a child's drawing. Your ONLY job is to describe EXACTLY what you see. DO NOT INVENT or IMAGINE anything that is NOT in the drawing.

ANIMAL DETECTION (VERY IMPORTANT):
- Look for ROUND EARS = likely a BEAR or MOUSE
- Look for POINTED EARS = likely a CAT, DOG, or FOX
- Look for LONG EARS = likely a RABBIT
- If it has ANIMAL features (ears, snout, paws, tail), it is an ANIMAL, NOT a person
- ONLY output "person" or "human" if the drawing clearly shows a human with NO animal features

ITEM & ACCESSORY DETECTION (CRITICAL):
- Look closely at the hands/paws. Is the character holding anything? (Sword, magic wand, ball, flower, balloon, book, etc.)
- Look for clothing or accessories (Hat, cape, glasses, scarf, crown, armor, etc.)
- YOU MUST DESCRIBE THESE ITEMS. Do not ignore them.

CRITICAL RULES:
- If you see round ears on top of the head → It's a BEAR, not a person
- If you see any animal-like features → Output the animal type
- PRESERVE the exact colors used in the drawing
- If the drawing is abstract or unclear, interpret it as a "cute imaginary creature" or "friendly monster"

STEP 1 - IDENTIFY THE SUBJECT:
- Animal type? (Bear, Cat, Rabbit, etc.) or Human?
- Held items? (Sword, Wand, etc.)
- Clothing/Accessories? (Cape, Hat, etc.)
- Main colors?

STEP 2 - If only a face is drawn, add a simple body matching the SAME animal type and colors.

STEP 3 - Create a prompt. The subject MUST be the correct animal/creature type with ALL items.

Art Style: {{STYLE_PROMPT}}
(IGNORE CHARACTER NAME - Focus ONLY on the drawing)

Output format:
"A high quality illustration of the character, a cute [ANIMAL TYPE/HUMAN] [HOLDING ITEM if any] [WEARING ACCESSORIES if any] with [EXACT colors from drawing], [style keywords], matching the original drawing, super cute, adorable, full body, centered, entirely visible from head to toe with white margins, isolated on a solid white background, no shadow"`;


// 낙서 분석 및 프롬프트 생성 (통합)
async function generatePromptFromDoodle(imageBase64: string, characterName: string, stylePrompt: string): Promise<string> {
    const fullPrompt = ANALYZE_PROMPT
        .replace("{{STYLE_PROMPT}}", stylePrompt);
    // 캐릭터 이름은 프롬프트에 포함하지 않음 (이름의 의미가 외형에 영향을 주지 않도록)

    if (AI_PROVIDER === "openai") {
        // OpenAI Vision 사용
        return openai.analyzeImage(imageBase64, fullPrompt);
    } else {
        // Gemini Vision 사용
        const model = getImageAnalysisModel();
        const result = await model.generateContent([
            fullPrompt,
            {
                inlineData: {
                    mimeType: "image/png",
                    data: imageBase64,
                },
            },
        ]);
        return result.response.text().trim();
    }
}

// 통합 변환 함수
export async function transformCharacter({
    imageBase64,
    styleId,
    characterName,
}: {
    imageBase64: string;
    styleId: ArtStyleId;
    characterName: string;
}): Promise<{ success: boolean; imageBase64?: string; error?: string; imagePrompt?: string }> {
    // API 키 확인
    const hasApiKey = AI_PROVIDER === "openai"
        ? !!process.env.OPENAI_API_KEY
        : !!process.env.GOOGLE_AI_API_KEY;

    if (!hasApiKey) {
        return { success: false, error: `${AI_PROVIDER.toUpperCase()} API Key is not configured` };
    }

    const style = ART_STYLES[styleId];
    if (!style) {
        return { success: false, error: "Invalid style ID" };
    }

    try {
        // console.log(`[${AI_PROVIDER}] Analyzing doodle...`);
        let imagePrompt = await generatePromptFromDoodle(imageBase64, characterName, style.prompt);

        // 분석 결과가 비어있거나 거절 메시지인 경우 폴백 프롬프트 사용
        if (!imagePrompt || imagePrompt.trim().length < 10 || imagePrompt.match(/I'm sorry|I cannot|I can't/i)) {
            console.warn("Analysis failed or refused, using fallback prompt. Response:", imagePrompt);
            imagePrompt = `A high quality illustration of ${characterName}, a cute character resembling the drawing style of ${style.name}, ${style.prompt}, full body, centered, entirely visible from head to toe with white margins, isolated on a solid white background, no shadow`;
        }

        // console.log("Generated Prompt:", imagePrompt);
        // console.log(`[${AI_PROVIDER}] Generating image...`);
        const generatedImageBase64 = await generateImage(imagePrompt, { size: "1024x1024" });

        return { success: true, imageBase64: generatedImageBase64, imagePrompt };

    } catch (error) {
        console.error("Character transformation error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown error"
        };
    }
}

// 이미지 분석 (스타일 추천)
export async function analyzeDrawingForStyle(imageBase64: string): Promise<ArtStyleId> {
    return "storybook";
}

// 하위 호환성을 위해 export (deprecated)
export { generateImage as generateImageWithImagen };

