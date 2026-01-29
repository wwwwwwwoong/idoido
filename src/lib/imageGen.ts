// Image Generation Client - DALL-E + Gemini (Nano Banana)
import { generateImageWithImagen } from "@/lib/ai/image-client";

export type ImageProvider = "dalle" | "gemini";

export interface GenerationResult {
    url: string;
    provider: ImageProvider;
}



// Gemini (Nano Banana) 이미지 생성 (캐릭터팩/소재팩)
export async function generateWithGemini(
    prompt: string,
    referenceImages?: string[]
): Promise<GenerationResult> {
    try {
        const enhancedPrompt = `Create a children's book illustration: ${prompt}. Style: warm, friendly, colorful, suitable for ages 3-7.`;
        // referenceImages handling could be added to image-client if needed, but for now ignoring or we add it to client.
        // Assuming generateImageWithImagen handles the prompt details or we pre-process.

        const imageData = await generateImageWithImagen(enhancedPrompt);

        // Base64 데이터를 data URL로 변환 (이미지 클라이언트가 base64를 반환한다고 가정)
        // 만약 image-client가 raw base64를 반환하면 mimeType 확인 필요. 
        // @google/genai는 보통 image/png
        const url = `data:image/png;base64,${imageData}`;
        return { url, provider: "gemini" };
    } catch (error) {
        console.error("Gemini generation failed:", error);
        throw error;
    }
}

// 용도별 이미지 생성 라우터
export async function generateIllustration(
    type: "cover" | "keyscene" | "character" | "object",
    prompt: string,
    options?: {
        referenceImages?: string[];
        size?: "1024x1024" | "1792x1024" | "1024x1792";
    }
): Promise<GenerationResult> {
    // 모두 Gemini (Imagen) 사용
    // DALL-E fallback 로직 제거
    let enhancedPrompt = prompt;

    if (type === "cover" || type === "keyscene") {
        enhancedPrompt = `Children's book illustration, ${type === 'cover' ? 'cover art' : 'key scene'}, detailed, vivid colors, warm atmosphere: ${prompt}`;
    }

    try {
        return await generateWithGemini(enhancedPrompt, options?.referenceImages);
    } catch (error) {
        console.error("Gemini generation failed:", error);
        throw error;
    }
}

// 캐릭터팩 생성 (여러 포즈)
export async function generateCharacterPack(
    characterName: string,
    traits: string[],
    poses: string[] = ["정면", "측면", "뒷모습"]
): Promise<GenerationResult[]> {
    const results: GenerationResult[] = [];

    for (const pose of poses) {
        const prompt = `${characterName}, ${traits.join(", ")}, ${pose} 포즈, 일관된 캐릭터 디자인`;
        const result = await generateIllustration("character", prompt);
        results.push(result);
    }

    return results;
}
