import sharp from "sharp";
import OpenAI from "openai";

// OpenAI API Key
const apiKey = process.env.OPENAI_API_KEY || "";

if (!apiKey) {
    console.warn("⚠️ OPENAI_API_KEY is not set.");
}

// 싱글톤 인스턴스
let openaiClient: OpenAI | null = null;

const getOpenAIClient = () => {
    if (!openaiClient && apiKey) {
        openaiClient = new OpenAI({ apiKey });
    }
    return openaiClient;
};

// 모델 설정 - gpt-image-1.5 (Low Quality for cost efficiency)
const TEXT_MODEL = process.env.OPENAI_TEXT_MODEL || "gpt-4o-mini";
const IMAGE_MODEL = "gpt-image-1.5"; // Low quality generation (approx $0.01)
const EDIT_MODEL = "gpt-image-1"; // Reference editing / Basic
const IMAGE_SIZE = "1536x1024"; // 16:9 비율

// ... (omitted)

/**
 * OpenAI 텍스트 생성 (스토리, 분석 등)
 */
export async function generateText(
    prompt: string,
    options?: {
        systemPrompt?: string;
        maxTokens?: number;
        temperature?: number;
        jsonMode?: boolean;
    }
): Promise<string> {
    const client = getOpenAIClient();
    if (!client) {
        throw new Error("OpenAI client not initialized");
    }

    const { systemPrompt, maxTokens = 2000, temperature = 0.7, jsonMode = false } = options || {};

    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [];

    if (systemPrompt) {
        messages.push({ role: "system", content: systemPrompt });
    }
    messages.push({ role: "user", content: prompt });

    const response = await client.chat.completions.create({
        model: TEXT_MODEL,
        messages,
        max_tokens: maxTokens,
        temperature,
        response_format: jsonMode ? { type: "json_object" } : undefined,
    });

    return response.choices[0]?.message?.content || "";
}

/**
 * OpenAI 이미지 생성 (gpt-image-1.5)
 */
export async function generateImage(
    prompt: string,
    options?: {
        size?: "1024x1024" | "1536x1024" | "1024x1536";
        quality?: "low"; // 'low' added
        style?: "vivid" | "natural";
    }
): Promise<string> {
    const client = getOpenAIClient();
    if (!client) {
        throw new Error("OpenAI client not initialized");
    }

    const {
        size = IMAGE_SIZE as "1024x1024" | "1536x1024" | "1024x1536",
        quality = "low", // Default to low for gpt-image-1.5
        style = "vivid"
    } = options || {};

    const MAX_PROMPT_LENGTH = 4000;
    let finalPrompt = prompt;
    if (prompt.length > MAX_PROMPT_LENGTH) {
        console.warn(`Prompt too long (${prompt.length}), truncating to ${MAX_PROMPT_LENGTH} chars`);
        finalPrompt = prompt.slice(0, MAX_PROMPT_LENGTH - 3) + "...";
    }

    console.log(`Generating image with ${IMAGE_MODEL} (${size}, ${quality})...`);

    const params: OpenAI.Images.ImageGenerateParams = {
        model: IMAGE_MODEL,
        prompt: finalPrompt,
        n: 1,
        size: size,
        quality: quality as any, // 'low' might not be in the stricter types yet
    };

    // DALL-E 3 전용 설정 (style, response_format)
    if (IMAGE_MODEL.startsWith("dall-e-3")) {
        params.style = style;
        params.response_format = "b64_json";
    }
    // GPT Image 계열
    else if (IMAGE_MODEL.startsWith("gpt-image")) {
        // params.response_format 제거: 기본값(undefined/url) 사용
    }
    // DALL-E 2
    else if ((IMAGE_MODEL as string) === "dall-e-2") {
        delete (params as any).quality; // DALL-E 2 does not support quality
        params.response_format = "b64_json";
    }

    const response = await client.images.generate(params);

    if (!response.data || response.data.length === 0) {
        throw new Error("No image data returned");
    }

    if (response.data[0].b64_json) {
        // base64 -> WebP 변환
        const rawBuffer = Buffer.from(response.data[0].b64_json, "base64");
        const webpBuffer = await sharp(rawBuffer).webp().toBuffer();
        return webpBuffer.toString("base64");
    }

    if (response.data[0].url) {
        console.log("Fetching image from URL to convert to Base64...");
        const imageUrl = response.data[0].url;
        const imageRes = await fetch(imageUrl);

        console.log(`Fetch status: ${imageRes.status}, Type: ${imageRes.headers.get("content-type")}`);

        if (!imageRes.ok) {
            throw new Error(`Failed to fetch image from URL: ${imageRes.statusText}`);
        }
        const arrayBuffer = await imageRes.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        console.log(`Original image buffer size: ${buffer.length}`);

        // Sharp를 사용하여 무조건 WebP로 변환
        const webpBuffer = await sharp(buffer).webp().toBuffer();
        console.log(`Converted WebP buffer size: ${webpBuffer.length}`);

        return webpBuffer.toString("base64");
    }

    throw new Error("No image content (b64 or url) in response");
}

/**
 * 이미지 분석 (Vision) - GPT-4o (혹은 4.1 Vision 가능 시 변경)
 */
export async function analyzeImage(
    imageBase64: string,
    prompt: string = "이 이미지를 분석해주세요."
): Promise<string> {
    const client = getOpenAIClient();
    if (!client) {
        throw new Error("OpenAI client not initialized");
    }

    const response = await client.chat.completions.create({
        model: "gpt-4o", // 현재 최신 Vision 모델
        messages: [
            {
                role: "user",
                content: [
                    { type: "text", text: prompt },
                    {
                        type: "image_url",
                        image_url: {
                            "url": `data:image/jpeg;base64,${imageBase64}`
                        }
                    }
                ]
            }
        ],
        max_tokens: 300
    });
    return response.choices[0]?.message?.content || "";
}

/**
 * 레퍼런스 이미지를 사용한 이미지 생성 (캐릭터 일관성 유지)
 * gpt-image-1 (EDIT_MODEL) 사용
 */
export async function generateImageWithReference(
    prompt: string,
    referenceImageBase64: string,
    options?: {
        size?: "1024x1024" | "1536x1024" | "1024x1536" | "512x512" | "256x256";
        styleReferenceBase64?: string;
        fidelity?: "high" | "standard";
    }
): Promise<string> {
    const client = getOpenAIClient();
    if (!client) {
        throw new Error("OpenAI client not initialized");
    }

    const { size = "1536x1024", styleReferenceBase64, fidelity } = options || {};

    const imageBuffer = Buffer.from(referenceImageBase64, "base64");
    const imageBlob = new Blob([imageBuffer], { type: "image/webp" });
    const imageFile = new File([imageBlob], "doodle.webp", { type: "image/webp" });

    let styleImageFile: File | undefined;
    if (styleReferenceBase64) {
        const styleBuffer = Buffer.from(styleReferenceBase64, "base64");
        const styleBlob = new Blob([styleBuffer], { type: "image/webp" });
        styleImageFile = new File([styleBlob], "style_reference.webp", { type: "image/webp" });
    }

    const MAX_PROMPT_LENGTH = 1000;
    let finalPrompt = prompt;
    if (prompt.length > MAX_PROMPT_LENGTH) {
        finalPrompt = prompt.slice(0, MAX_PROMPT_LENGTH - 3) + "...";
    }

    console.log(`Generating image with reference (${EDIT_MODEL}, ${size})...`);
    if (styleImageFile) {
        console.log("Style reference image provided - using multi-image input");
    }

    try {
        const imageInput = styleImageFile ? [imageFile, styleImageFile] : imageFile;

        // @ts-ignore - OpenAI Node SDK might not strongly type edits for this model yet
        const response = await client.images.edit({
            model: EDIT_MODEL,
            image: imageInput as any,
            prompt: finalPrompt,
            size: size as any, // Use passed size
            response_format: "b64_json",
            // @ts-ignore
            input_fidelity: fidelity || undefined,
        } as any);

        if (!response.data || response.data.length === 0) {
            throw new Error("No image data returned");
        }

        if (response.data[0].b64_json) {
            // OpenAI returns PNG usually, so we convert to WebP to be safe/consistent
            // But b64_json is already string. To convert, we need buffer.
            // Efficient way: Let's trust it or convert if needed. 
            // Ideally we convert everything to WebP before returning.
            const rawBuffer = Buffer.from(response.data[0].b64_json, "base64");
            const webpBuffer = await sharp(rawBuffer).webp().toBuffer();
            return webpBuffer.toString("base64");
        }

        if (response.data[0].url) {
            const imageRes = await fetch(response.data[0].url);
            if (!imageRes.ok) {
                throw new Error(`Failed to fetch image from URL`);
            }
            const arrayBuffer = await imageRes.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            // Sharp 사용 (WebP 변환)
            console.log(`Converting response to WebP...`);
            const webpBuffer = await sharp(buffer).webp().toBuffer();
            return webpBuffer.toString("base64");
        }

        throw new Error("No image content in response");
    } catch (error: any) {
        console.error(`${EDIT_MODEL} edit error:`, error.message);
        console.log("Falling back to standard generation without reference...");
        return generateImage(finalPrompt, { size: "1536x1024" });
    }
}

// Export model info for reference
export const OPENAI_MODELS = {
    text: TEXT_MODEL,
    image: IMAGE_MODEL,
    imageSize: IMAGE_SIZE,
};
