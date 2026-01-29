/**
 * AI 제공자 통합 클라이언트
 * 환경변수 AI_PROVIDER로 쉽게 전환 가능
 * 
 * AI_PROVIDER=openai  → OpenAI 사용
 * AI_PROVIDER=gemini  → Google Gemini 사용 (기본값)
 */

import * as openai from "./openai-client";
import * as gemini from "./image-client";
import { getTextModel } from "./text-client";

export type AIProvider = "openai" | "gemini";

// 환경변수에서 AI 제공자 결정
export const AI_PROVIDER: AIProvider =
    (process.env.AI_PROVIDER as AIProvider) || "openai";

console.log(`🤖 AI Provider: ${AI_PROVIDER}`);

/**
 * 이미지 생성 (통합)
 */
export async function generateImage(prompt: string, options?: { size?: string }): Promise<string> {
    if (AI_PROVIDER === "openai") {
        return openai.generateImage(prompt, options as any);
    } else {
        return gemini.generateImageWithImagen(prompt);
    }
}

/**
 * 이미지 생성 (Reference/Sketch 활용)
 */
export async function generateImageWithReference(
    prompt: string,
    referenceImageBase64: string,
    options?: { size?: string }
): Promise<string> {
    if (AI_PROVIDER === "openai") {
        return openai.generateImageWithReference(prompt, referenceImageBase64, options as any);
    } else {
        // Gemini implementation or fallback
        console.warn("Gemini provider does not support reference image yet, falling back to text-to-image");
        return gemini.generateImageWithImagen(prompt);
    }
}

/**
 * 텍스트(스토리) 생성 (통합)
 */
export async function generateStoryText(
    prompt: string,
    options?: { jsonMode?: boolean }
): Promise<string> {
    if (AI_PROVIDER === "openai") {
        return openai.generateText(prompt, {
            systemPrompt: "당신은 어린이 동화책 작가입니다. 창의적이고 따뜻한 이야기를 만들어주세요.",
            jsonMode: options?.jsonMode,
            maxTokens: 3000,
        });
    } else {
        // Gemini 사용
        const model = getTextModel();
        const result = await model.generateContent(prompt);
        return result.response.text();
    }
}

/**
 * 이미지 분석 (통합)
 */
export async function analyzeDrawing(imageBase64: string): Promise<any> {
    if (AI_PROVIDER === "openai") {
        const text = await openai.analyzeImage(imageBase64, `이 어린이 그림을 분석해서 캐릭터의 특징을 설명해줘.

JSON 형식으로 응답:
{
  "description": "캐릭터 설명 (영어)",
  "colors": ["주요 색상들"],
  "features": ["특징들"],
  "style": "그림 스타일"
}`);
        // JSON 파싱
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
        throw new Error("Failed to parse analysis");
    } else {
        return gemini.analyzeDrawing(imageBase64);
    }
}

// 현재 사용 중인 모델 정보
export function getCurrentModels() {
    if (AI_PROVIDER === "openai") {
        return openai.OPENAI_MODELS;
    } else {
        return {
            text: "gemini-2.5-flash",
            image: "gemini-2.0-flash-exp",
        };
    }
}
