import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenAI } from "@google/genai";

// Use GOOGLE_AI_API_KEY (Gemini API) - Vertex AI requires OAuth2, not simple API key
const apiKey = process.env.GOOGLE_AI_API_KEY || "";

if (!apiKey) {
    console.warn("⚠️ No API key found. Set GOOGLE_API_KEY or GOOGLE_AI_API_KEY.");
}

// Legacy SDK for Vision (Image Analysis)
const genAI = new GoogleGenerativeAI(apiKey);

// New SDK for Image Generation - 모듈 레벨에서 한 번만 생성 (최적화)
let imageGenAI: GoogleGenAI | null = null;
const getImageGenAI = () => {
    if (!imageGenAI && apiKey) {
        imageGenAI = new GoogleGenAI({ apiKey });
    }
    return imageGenAI;
};

// Models
const VISION_MODEL = "gemini-2.5-flash"; // Latest fast vision model (Multimodal verified)
const IMAGE_GEN_MODEL = "gemini-2.0-flash-exp"; // 2.5-flash is text-only. Reverting to 2.0-flash-exp for images.

// Get model for image analysis (Vision)
export const getImageAnalysisModel = () => {
    if (!apiKey) {
        throw new Error("API key is not configured");
    }
    return genAI.getGenerativeModel({ model: VISION_MODEL });
};

export async function generateImageWithImagen(prompt: string): Promise<string> {
    if (!apiKey) {
        throw new Error("API key is not configured");
    }

    const ai = getImageGenAI();
    if (!ai) {
        throw new Error("Failed to initialize GoogleGenAI");
    }

    console.log(`Generating image via ${IMAGE_GEN_MODEL}...`);

    try {
        const response = await ai.models.generateContent({
            model: IMAGE_GEN_MODEL,
            contents: prompt,
            config: {
                responseModalities: ["IMAGE", "TEXT"],
                // @ts-ignore - SDK type definition shortcoming for exp models
                aspectRatio: "16:9",
            }
        });

        const candidates = response.candidates;
        if (!candidates || candidates.length === 0) {
            throw new Error("No candidates returned");
        }

        const part = candidates[0]?.content?.parts?.[0];
        if (!part) {
            throw new Error("No content parts returned");
        }

        if ((part as any).inlineData) {
            console.log("Image generated successfully");
            return (part as any).inlineData.data;
        }

        throw new Error("No image data found in response");

    } catch (error: any) {
        console.error("Image Generation Error:", error);
        throw error;
    }
}

// Image Analysis Logic
export async function analyzeDrawing(imageBase64: string) {
    const model = getImageAnalysisModel();

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
        console.error("Image analysis error:", error);
        throw error;
    }
}
