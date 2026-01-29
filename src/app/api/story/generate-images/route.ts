import { generateImage } from "@/lib/ai/unified-client";
import { createClient } from "@/lib/supabase/server";
import { successResponse, handleApiError } from "@/lib/apiResponse";

export const runtime = "nodejs";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { pages, context } = body;

        if (!pages || !Array.isArray(pages)) {
            throw new Error("Invalid pages data");
        }

        console.log(`Generating images for ${pages.length} pages...`);

        const updatedPages = await Promise.all(pages.map(async (page: any, index: number) => {
            // 이미지가 이미 생성되어 있거나(URL), 프롬프트가 없으면 스킵
            if (!page.imagePrompt || (page.imageUrl && !page.imageUrl.startsWith("data:"))) {
                return page;
            }

            try {
                // 스타일별 프롬프트 매핑 (색상/일관성 강화)
                const stylePrompts: Record<string, string> = {
                    storybook: "classic children's book illustration, detailed, vibrant full color, warm colors, fairytale aesthetic, no black and white",
                    watercolor: "soft watercolor illustration, pastel colors, dreamy, gentle brush strokes, full color, no monochrome",
                    cartoon: "cute cartoon style, bold outlines, vibrant colors, playful animated style, full color",
                    crayon: "crayon textured illustration, childlike warmth, soft edges, colorful, full color drawing",
                    pixel: "pixel art style, 16-bit aesthetic, retro game character, cute pixels, vibrant colors"
                };

                // 프롬프트 보강 (Context Injection) - 캐릭터 설명 최우선 배치
                let finalPrompt = page.imagePrompt;
                if (context) {
                    const styleStr = stylePrompts[context.styleId] || stylePrompts.storybook;
                    const itemsStr = context.items && context.items.length > 0
                        ? `, Story items: ${context.items.join(", ")}` // "holding" -> "Story items" (맥락 완화)
                        : "";
                    const bgStr = context.background ? `, Setting: ${context.background}` : ""; // "at" -> "Setting"
                    const charDesc = context.characterDescription || context.characterName;

                    // 구조 변경: [스타일] -> [장면 행동] -> [캐릭터 설명] -> [배경/소품]
                    // Page Prompt(행동)를 앞세워서 각 장면의 차별성을 부각
                    finalPrompt = `${styleStr} style. Scene action: ${page.imagePrompt}. Character: A cute ${charDesc}. Context: ${bgStr}${itemsStr}. Ensure the character performs the specific scene action. Full color, high quality, detailed. Do not include any text, words, letters, or numbers in the image.`;
                }

                // 통합 클라이언트로 이미지 생성 (Retry 로직 추가)
                const generateWithRetry = async (retries = 3, delay = 1000): Promise<string> => {
                    try {
                        return await generateImage(finalPrompt, { size: "1536x1024" });
                    } catch (err) {
                        if (retries <= 1) throw err;
                        console.log(`Image gen failed for page ${index + 1}. Retrying in ${delay}ms... (${retries - 1} attempts left)`);
                        await new Promise(res => setTimeout(res, delay));
                        return generateWithRetry(retries - 1, delay * 2);
                    }
                };

                const base64 = await generateWithRetry();

                // Supabase Upload
                const supabase = await createClient();
                const imageBuffer = Buffer.from(base64, "base64");
                const fileName = `scenes/${Date.now()}_${page.pageNumber}_${Math.random().toString(36).substring(7)}.webp`;

                const { data, error } = await supabase.storage
                    .from("doodles")
                    .upload(fileName, imageBuffer, {
                        contentType: "image/webp",
                        upsert: false
                    });

                if (error) throw error;

                // 성공 시 경로 반환 (상대 경로)
                return { ...page, imageUrl: data.path };

            } catch (e) {
                console.error(`Image gen failed for page ${index + 1} after retries`, e);
                // 실패해도 페이지 데이터는 유지 (이미지 없이)
                return page;
            }
        }));

        // 표지 이미지 생성
        let coverImageUrl: string | null = null;
        const { coverImagePrompt } = body;

        if (coverImagePrompt) {
            try {
                console.log("Generating cover image...");
                const stylePrompts: Record<string, string> = {
                    storybook: "classic children's book illustration, detailed, warm colors, fairytale aesthetic",
                    watercolor: "soft watercolor illustration, pastel colors, dreamy, gentle brush strokes",
                    cartoon: "cute cartoon style, bold outlines, vibrant colors, playful animated style",
                    crayon: "crayon textured illustration, childlike warmth, soft edges, colorful",
                    pixel: "pixel art style, 16-bit aesthetic, retro game character, cute pixels"
                };

                const styleStr = context?.styleId ? (stylePrompts[context.styleId] || stylePrompts.storybook) : stylePrompts.storybook;
                const finalCoverPrompt = `${styleStr} style, ${coverImagePrompt}, beautiful book cover, high quality, detailed. Do not include any text, words, letters, or numbers in the image.`;

                // 표지도 재시도 로직 추가
                const generateCoverWithRetry = async (retries = 3, delay = 1000): Promise<string> => {
                    try {
                        return await generateImage(finalCoverPrompt, { size: "1536x1024" });
                    } catch (err) {
                        if (retries <= 1) throw err;
                        console.log(`Cover gen failed. Retrying in ${delay}ms... (${retries - 1} attempts left)`);
                        await new Promise(res => setTimeout(res, delay));
                        return generateCoverWithRetry(retries - 1, delay * 2);
                    }
                };

                const coverBase64 = await generateCoverWithRetry();

                const supabase = await createClient();
                const coverFileName = `covers/${Date.now()}_cover_${Math.random().toString(36).substring(7)}.webp`;
                const coverBuffer = Buffer.from(coverBase64, "base64");

                const { data: coverData, error: coverError } = await supabase.storage
                    .from("doodles")
                    .upload(coverFileName, coverBuffer, {
                        contentType: "image/webp",
                        upsert: false
                    });

                if (!coverError && coverData) {
                    coverImageUrl = coverData.path;
                    console.log("Cover image generated (path):", coverImageUrl);
                }
            } catch (coverErr) {
                console.error("Cover image generation failed after retries:", coverErr);
            }
        }

        return successResponse({ pages: updatedPages, coverImageUrl });
    } catch (error) {
        return handleApiError(error);
    }
}
