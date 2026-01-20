import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * GET /api/test-gemini
 * Gemini API 연결 테스트
 */
export async function GET() {
    const apiKey = process.env.GOOGLE_AI_API_KEY;

    if (!apiKey) {
        return NextResponse.json({
            success: false,
            error: "API key not configured",
            hint: "Add GOOGLE_AI_API_KEY to .env.local"
        });
    }

    // REST API로 모델 목록 조회 시도
    let availableModels: string[] = [];
    let listError = null;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const data = await response.json();

        if (!response.ok) {
            listError = data.error || data;
        } else {
            availableModels = (data.models || []).map((m: any) => m.name.replace('models/', ''));
        }
    } catch (e: any) {
        listError = e.message;
    }

    // 모델 목록이 있으면 그 중 테스트 가능한 모델 선택 (embedding 제외)
    // 우선순위: gemini-flash-latest, gemini-pro, 그 외
    let modelsToTry = ["gemini-flash-latest"];

    if (availableModels.length > 0) {
        const generationModels = availableModels.filter(m =>
            !m.includes("embedding") &&
            !m.includes("aqa") &&
            !m.includes("robotics")
        );

        if (generationModels.length > 0) {
            // gemini-flash-latest가 있으면 그걸로, 없으면 첫 번째 모델로
            if (generationModels.includes("gemini-flash-latest")) {
                modelsToTry = ["gemini-flash-latest"];
            } else {
                modelsToTry = [generationModels[0]];
            }
        }
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const results: Record<string, string> = {};

    for (const modelName of modelsToTry) {
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent("Hello");
            const text = result.response.text();
            results[modelName] = `✅ 성공: ${text.substring(0, 50)}...`;
        } catch (error: any) {
            results[modelName] = `❌ 실패: ${error.message?.substring(0, 100) || String(error)}`;
        }
    }

    return NextResponse.json({
        success: true,
        apiKeyPrefix: apiKey.substring(0, 4) + "...",
        listModelsResponse: availableModels.length > 0 ? "SUCCESS" : "FAILED",
        availableModels,
        listError,
        modelResults: results,
    });
}
