// Google AI에서 사용 가능한 모델 목록 확인
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GOOGLE_AI_API_KEY;

if (!apiKey) {
    console.error("GOOGLE_AI_API_KEY가 설정되지 않았습니다.");
    process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function listModels() {
    console.log("=== 사용 가능한 모델 ===\n");

    try {
        const models = await ai.models.list();

        const modelList = [];
        for await (const model of models) {
            modelList.push(model.name);
        }

        // 이미지 관련 모델 필터링
        const imageModels = modelList.filter(name =>
            name.includes("image") ||
            name.includes("imagen") ||
            name.includes("2.0") ||
            name.includes("2.5")
        );

        console.log("이미지 생성 가능 모델:");
        imageModels.forEach(m => console.log("  - " + m));

        console.log("\n전체 모델 수:", modelList.length);
    } catch (error) {
        console.error("에러:", error.message);
    }
}

listModels();
