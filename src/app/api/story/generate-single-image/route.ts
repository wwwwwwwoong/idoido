import { generateImage, generateImageWithReference } from "@/lib/ai/unified-client";
import { createClient } from "@/lib/supabase/server";
import { successResponse, handleApiError } from "@/lib/apiResponse";

export const runtime = "nodejs";

// 스타일별 프롬프트 매핑
const stylePrompts: Record<string, string> = {
    storybook: "classic children's book illustration, detailed, warm colors, fairytale aesthetic",
    watercolor: "soft watercolor illustration, pastel colors, dreamy, gentle brush strokes",
    cartoon: "cute cartoon style, bold outlines, vibrant colors, playful animated style",
    crayon: "crayon textured illustration, childlike warmth, soft edges, colorful",
    pixel: "pixel art style, 16-bit aesthetic, retro game character, cute pixels"
};

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { page, context, type = "page" } = body;

        if (!page && type !== "cover") {
            throw new Error("Invalid page data");
        }

        // 이미지가 이미 생성되어 있거나(URL), 프롬프트가 없으면 스킵
        const imagePrompt = type === "cover" ? body.coverImagePrompt : page?.imagePrompt;
        const existingUrl = type === "cover" ? body.coverImageUrl : page?.imageUrl;

        if (!imagePrompt || (existingUrl && !existingUrl.startsWith("data:"))) {
            return successResponse({
                page: page || null,
                coverImageUrl: existingUrl || null,
                skipped: true
            });
        }

        // 프롬프트 보강
        let finalPrompt = imagePrompt;
        if (context) {
            // 1. 페이지별 카메라 앵글 정의 (시네마틱 구성 - 배경 중심이면서 구도 다양화)
            // 지루하지 않게 다양한 앵글을 사용하되, 배경이 잘 보이는 앵글 위주로 선정
            const cameraAngles: Record<number, string> = {
                0: "Book cover design, central composition, eye-level shot",
                1: "Wide shot, establishing the scene, symmetrical composition", // 1p: 도입 (안정감)
                2: "Medium-long shot, side view, rule of thirds", // 2p: 탐색 (측면)
                3: "Low angle shot, dynamic perspective, looking up", // 3p: 위기/절정 (역동성)
                4: "High angle shot, looking down, slight tilt", // 4p: 해결 (새로운 시각)
                5: "Wide atmospheric shot, cinematic lighting, distant view" // 5p: 결말 (여운)
            };

            const pageNum = type === "cover" ? 0 : (page?.pageNumber || 1);
            const cameraAngle = cameraAngles[pageNum] || cameraAngles[1];
            const styleStr = stylePrompts[context.styleId] || stylePrompts.storybook;

            // 아이템과 배경을 '배치' 관점에서 설명
            let sceneDescription = "";
            let itemsStr = "";

            if (context.objects && context.objects.length > 0) {
                // 좌표 기반 위치 설명 (앵글에 따라 자연스럽게 해석되도록 유도)
                const objectDescriptions = context.objects.map((obj: any) => {
                    let hPos = "center"; // 기본

                    // 앵글에 따라 위치 설명 미세 조정 (프롬프트가 너무 경직되지 않게)
                    if (obj.x < 35) hPos = "left";
                    else if (obj.x > 65) hPos = "right";
                    else hPos = "center";

                    let vPos = "";
                    if (obj.y < 30) vPos = ", floating high"; // 하늘
                    else if (obj.y > 70) vPos = ", on the ground"; // 땅

                    const objName = obj.type === "character"
                        ? (context.characterName || "character")
                        : (obj.itemId || "object");

                    return `${objName} at ${hPos}${vPos}`;
                });
                sceneDescription = objectDescriptions.join(", ");
            } else {
                itemsStr = context.items && context.items.length > 0
                    ? `with ${context.items.join(", ")}`
                    : "";
            }

            const bgStr = context.background ? `Detailed full background of ${context.background}, clear environment` : "Detailed fantasy background";

            // 캐릭터 묘사 (최적화: 핵심만)
            const charName = "the character";
            const charDesc = context.characterDescription && context.characterDescription.length > 10
                ? `${charName} (${context.characterDescription.slice(0, 150)})`
                : charName;

            // 최종 프롬프트 재구성: [스타일/앵글] + [배경] + [캐릭터/액션] + [부정]

            // 핵심 부정 프롬프트 (가장 강력하게 적용하기 위해 구체적인 사물 나열)
            // AI는 'text'라는 개념보다 'speech bubble', 'sign' 같은 객체를 더 잘 이해함
            const negativeInstruction = "Clean image without text. NO speech bubbles, NO thinking bubbles, NO signs, NO labels, NO guidebooks, NO name tags, NO watermarks, NO signature, NO korean text. Pure visual illustration.";

            // 통일감 지시 (최적화)
            const consistency = `Consistent ${context.styleId || "storybook"} style.`;

            if (type === "cover") {
                // 표지
                finalPrompt = `${negativeInstruction} ${styleStr}, ${cameraAngle}. ${bgStr}. ${charDesc} posing. ${sceneDescription || itemsStr}. 
                [COVER ACTION]: ${imagePrompt}
                ${consistency} High quality cover art.`;
            } else {
                // 내지
                const pageInfo = `Page ${pageNum}`;

                finalPrompt = `${negativeInstruction} Wide view, ${styleStr}, ${cameraAngle}. ${bgStr}. ${imagePrompt}. ${charDesc}. ${sceneDescription || itemsStr}. 
                ${consistency} High quality illustration, full scenery.`;
            }
        }

        // 프롬프트 길이 제한 (최적화되었으므로 1200자 정도로 충분)
        const MAX_PROMPT_LENGTH = 1200;
        if (finalPrompt.length > MAX_PROMPT_LENGTH) {
            console.warn(`Prompt too long (${finalPrompt.length}), truncating...`);
            finalPrompt = finalPrompt.slice(0, MAX_PROMPT_LENGTH - 3) + "...";
        }

        console.log(`Generating ${type} image (${finalPrompt.length} chars)...`);

        // 이미지 생성 (Reference or Standard)
        let base64;
        const referenceImageBase64 = context?.referenceImage;

        // Retry Helper
        const generateWithRetry = async (fn: () => Promise<string>, retries = 3, delay = 1000): Promise<string> => {
            try {
                return await fn();
            } catch (err) {
                if (retries <= 1) throw err;
                console.log(`Generation failed. Retrying in ${delay}ms... (${retries - 1} attempts left)`);
                await new Promise(res => setTimeout(res, delay));
                return generateWithRetry(fn, retries - 1, delay * 2);
            }
        };

        if (referenceImageBase64) {
            // Reference/Sketch -> Image (ControlNet-like behavior)
            console.log("Using reference sketch for generation (Sketch-to-Image)...");

            // Vision Analysis to enhance prompt
            let enhancedPrompt = finalPrompt;

            // 1. Analyze Character Reference (if provided)
            if (context.characterImage) {
                console.log("Analyzing character reference image for consistency...");
                try {
                    const { analyzeImage } = await import("@/lib/ai/openai-client");

                    let charBase64 = context.characterImage;
                    // If URL, fetch and convert to base64
                    if (charBase64.startsWith("http")) {
                        const res = await fetch(charBase64);
                        const arrayBuffer = await res.arrayBuffer();
                        charBase64 = Buffer.from(arrayBuffer).toString("base64");
                    } else if (charBase64.startsWith("data:")) {
                        charBase64 = charBase64.split(",")[1];
                    }

                    const visualDescription = await analyzeImage(
                        charBase64,
                        "Analyze ONLY the character in this image. Describe their face, hair, clothes, body shape, and colors in high detail. IGNORE the background. Output ONLY the visual description."
                    );

                    console.log("Character Visual Description:", visualDescription);

                    if (visualDescription && visualDescription.length > 10) {
                        // Reinforce character description
                        enhancedPrompt = `Character appearance reference: ${visualDescription}. ${finalPrompt}`;
                    }
                } catch (e) {
                    console.error("Failed to analyze character image:", e);
                }
            }

            // Try Sketch-to-Image
            base64 = await generateWithRetry(() =>
                generateImageWithReference(enhancedPrompt, referenceImageBase64, { size: "1536x1024" })
            );
        } else {
            // Standard Generation (Text-to-Image)
            base64 = await generateWithRetry(() =>
                generateImage(finalPrompt, { size: "1536x1024" })
            );
        }

        // Supabase Upload
        const supabase = await createClient();
        const imageBuffer = Buffer.from(base64, "base64");
        const folder = type === "cover" ? "covers" : "scenes";
        const fileName = `${folder}/${Date.now()}_${type === "cover" ? "cover" : page.pageNumber}_${Math.random().toString(36).substring(7)}.webp`;

        const { data, error } = await supabase.storage
            .from("doodles")
            .upload(fileName, imageBuffer, {
                contentType: "image/webp",
                upsert: false
            });

        if (error) throw error;

        console.log(`${type} image generated (path):`, data.path);

        if (type === "cover") {
            return successResponse({ coverImageUrl: data.path });
        } else {
            return successResponse({ page: { ...page, imageUrl: data.path } });
        }

    } catch (error) {
        console.error("Single image generation error:", error);
        return handleApiError(error);
    }
}
