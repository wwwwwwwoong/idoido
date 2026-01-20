// Image Generation Client - DALL-E + Gemini (Nano Banana)
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export type ImageProvider = "dalle" | "gemini";

export interface GenerationResult {
    url: string;
    provider: ImageProvider;
}

// DALL-E 3 이미지 생성 (표지/키씬)
export async function generateWithDalle(
    prompt: string,
    size: "1024x1024" | "1792x1024" | "1024x1792" = "1024x1024",
    style: "vivid" | "natural" = "vivid"
): Promise<GenerationResult> {
    try {
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: `어린이 동화책 일러스트 스타일, 따뜻하고 친근한 분위기, 밝은 색상: ${prompt}`,
            n: 1,
            size,
            style,
            quality: "standard",
        });

        if (!response.data || response.data.length === 0) {
            throw new Error("No image data returned");
        }
        const url = response.data[0]?.url;
        if (!url) throw new Error("No image URL returned");

        return { url, provider: "dalle" };
    } catch (error) {
        console.error("DALL-E generation failed:", error);
        throw error;
    }
}

// Gemini (Nano Banana) 이미지 생성 (캐릭터팩/소재팩)
export async function generateWithGemini(
    prompt: string,
    referenceImages?: string[]
): Promise<GenerationResult> {
    const apiKey = process.env.GOOGLE_AI_API_KEY;

    if (!apiKey) {
        throw new Error("GOOGLE_AI_API_KEY not configured");
    }

    try {
        // Gemini Imagen API 호출
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `Create a children's book illustration: ${prompt}. Style: warm, friendly, colorful, suitable for ages 3-7.`
                        }]
                    }],
                    generationConfig: {
                        responseModalities: ["image", "text"],
                        responseMimeType: "image/png"
                    }
                }),
            }
        );

        if (!response.ok) {
            throw new Error(`Gemini API error: ${response.status}`);
        }

        const data = await response.json();
        const imageData = data.candidates?.[0]?.content?.parts?.find(
            (p: { inlineData?: { mimeType: string; data: string } }) => p.inlineData?.mimeType?.startsWith("image/")
        );

        if (!imageData?.inlineData?.data) {
            throw new Error("No image data in response");
        }

        // Base64 데이터를 data URL로 변환
        const url = `data:${imageData.inlineData.mimeType};base64,${imageData.inlineData.data}`;
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
    switch (type) {
        case "cover":
            return generateWithDalle(prompt, options?.size || "1024x1792", "vivid");

        case "keyscene":
            return generateWithDalle(prompt, options?.size || "1792x1024", "vivid");

        case "character":
        case "object":
            // Gemini (Nano Banana) 우선, 실패 시 DALL-E fallback
            try {
                return await generateWithGemini(prompt, options?.referenceImages);
            } catch {
                console.warn("Gemini failed, falling back to DALL-E");
                return generateWithDalle(prompt, "1024x1024", "natural");
            }

        default:
            return generateWithDalle(prompt);
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
