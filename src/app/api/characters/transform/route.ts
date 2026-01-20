import { NextRequest } from "next/server";
import { successResponse, handleApiError, errorResponse } from "@/lib/apiResponse";
import { transformCharacter, ART_STYLES, type ArtStyleId } from "@/lib/characterTransform";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const TransformSchema = z.object({
    imageBase64: z.string().min(1, "Image data is required"),
    styleId: z.enum(["watercolor", "cartoon", "crayon", "storybook", "pixel"]),
    characterName: z.string().min(1, "Character name is required"),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const parsed = TransformSchema.safeParse(body);

        if (!parsed.success) {
            const firstError = parsed.error.issues[0];
            return errorResponse(firstError?.message || "Validation error", 400);
        }

        const { imageBase64, styleId, characterName } = parsed.data;

        console.log(`Transforming character "${characterName}" with style "${styleId}"`);

        // Gemini로 변환
        const result = await transformCharacter({
            imageBase64,
            styleId: styleId as ArtStyleId,
            characterName,
        });

        if (!result.success || !result.imageBase64) {
            console.error("Transform failed:", result.error);

            // 실패 시 원본 이미지 반환 (폴백)
            return successResponse({
                transformed: false,
                message: result.error || "Transformation failed, using original",
                imageUrl: null,
                styleId,
            });
        }

        // 성공 시 Supabase에 업로드
        const supabase = await createClient();
        const fileName = `transformed_${Date.now()}_${Math.random().toString(36).substring(7)}.png`;

        // Base64를 Blob으로 변환
        const imageBuffer = Buffer.from(result.imageBase64, "base64");

        const { data: uploadData, error: uploadError } = await supabase.storage
            .from("doodles")
            .upload(fileName, imageBuffer, {
                contentType: "image/png",
                upsert: false,
            });

        if (uploadError) {
            console.error("Upload error:", uploadError);
            // 업로드 실패해도 base64 이미지는 반환
            return successResponse({
                transformed: true,
                imageBase64: result.imageBase64,
                imageUrl: null,
                styleId,
            });
        }

        // Public URL 생성
        const { data: urlData } = supabase.storage
            .from("doodles")
            .getPublicUrl(uploadData.path);

        return successResponse({
            transformed: true,
            imageUrl: urlData?.publicUrl || null,
            imageBase64: result.imageBase64,
            imagePath: uploadData.path,
            styleId,
        });
    } catch (error) {
        console.error("Transform API error:", error);
        return handleApiError(error);
    }
}

// 사용 가능한 스타일 목록 반환
export async function GET() {
    return successResponse({
        styles: Object.values(ART_STYLES),
    });
}
