import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_AI_API_KEY || "";

// 아트 스타일 정의
export const ART_STYLES = {
    watercolor: {
        id: "watercolor",
        name: "수채화",
        emoji: "🎨",
        description: "부드럽고 몽환적인 수채화 스타일",
        prompt: "soft watercolor illustration, pastel colors, dreamy, gentle brush strokes, isolated on solid white background, no shadow",
        color: "#87CEEB",
    },
    cartoon: {
        id: "cartoon",
        name: "만화",
        emoji: "✏️",
        description: "활기찬 만화 스타일",
        prompt: "cute cartoon character, bold outlines, vibrant colors, playful, animated style, expressive, isolated on solid white background, no shadow",
        color: "#FFD93D",
    },
    crayon: {
        id: "crayon",
        name: "크레파스",
        emoji: "🖍️",
        description: "따뜻한 크레파스 질감",
        prompt: "crayon textured illustration, childlike warmth, soft edges, colorful and textured, handmade feel, isolated on solid white background, no shadow",
        color: "#FF6B6B",
    },
    storybook: {
        id: "storybook",
        name: "동화책",
        emoji: "📖",
        description: "클래식 동화책 일러스트",
        prompt: "classic children's book illustration, detailed, warm colors, fairytale aesthetic, magical, isolated on solid white background, no shadow",
        color: "#C9B1FF",
    },
    pixel: {
        id: "pixel",
        name: "픽셀아트",
        emoji: "👾",
        description: "레트로 픽셀 아트",
        prompt: "pixel art style, 16-bit aesthetic, retro game character, cute and colorful pixels, isolated on solid white background, no shadow",
        color: "#4ECDC4",
    },
} as const;

export type ArtStyleId = keyof typeof ART_STYLES;

// 1. Gemini로 낙서 분석 및 프롬프트 생성
async function generatePromptFromDoodle(imageBase64: string, characterName: string, stylePrompt: string): Promise<string> {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `Look at this children's drawing.
    1. Identify what the character is (e.g., a rabbit, a robot, a girl).
    2. Describe its key features (colors, shapes, accessories).
    3. Determine the character's pose and expression.
    
    Based on this, create a detailed image generation prompt for an AI image generator.
    Target Art Style: ${stylePrompt}
    Character Name: ${characterName}
    
    Output ONLY the English prompt string. Do not include any other text.
    The prompt should start with: "A high quality illustration of..." and MUST end with "isolated on a solid white background, no shadow".`;

    const result = await model.generateContent([
        prompt,
        {
            inlineData: {
                mimeType: "image/png",
                data: imageBase64,
            },
        },
    ]);

    return result.response.text().trim();
}

// 2. Pollinations.ai로 이미지 생성 (API 키 불필요, 무료 - Google API 대체)
async function generateImageWithImagen(prompt: string): Promise<string> {
    // Google Imagen API 접근 권한 문제(404)로 인해 Pollinations.ai로 우회
    // Flux 모델 사용 (고품질)
    const encodedPrompt = encodeURIComponent(prompt);
    // nologo=true: 로고 제거, private=true: 비공개, model=flux (고품질), enhance=false
    const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&private=true&model=flux`;

    console.log("Generating image via Pollinations:", url);

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Pollinations API Error: ${response.status} ${response.statusText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer).toString("base64");
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
}): Promise<{ success: boolean; imageBase64?: string; error?: string }> {
    if (!apiKey) {
        return { success: false, error: "GOOGLE_AI_API_KEY is not configured" };
    }

    const style = ART_STYLES[styleId];
    if (!style) {
        return { success: false, error: "Invalid style ID" };
    }

    try {
        console.log("Analyzing doodle...");
        const imagePrompt = await generatePromptFromDoodle(imageBase64, characterName, style.prompt);
        console.log("Generated Prompt:", imagePrompt);

        console.log("Generating image...");
        const generatedImageBase64 = await generateImageWithImagen(imagePrompt);

        return { success: true, imageBase64: generatedImageBase64 };

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
