import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/auth";
import { successResponse, notFoundResponse, handleApiError } from "@/lib/apiResponse";

export const runtime = "nodejs";

interface RouteParams {
    params: Promise<{ characterId: string }>;
}

/**
 * DELETE /api/characters/[characterId]
 * 캐릭터 삭제 (장면은 유지됨, Storage 파일도 삭제)
 */
export async function DELETE(_req: Request, { params }: RouteParams) {
    try {
        const userId = await requireUserId();
        const { characterId } = await params;

        const character = await prisma.character.findFirst({
            where: { id: characterId, userId },
        });

        if (!character) {
            return notFoundResponse("Character");
        }

        // Supabase Storage에서 파일 삭제 (로컬 파일이나 외부 URL은 건너뜀)
        const isStoragePath = (path: string | null) =>
            path && !path.startsWith("http") && !path.startsWith("/");

        if (isStoragePath(character.doodlePath)) {
            try {
                const { createClient } = await import("@/lib/supabase/server");
                const supabase = await createClient();

                console.log("Deleting from storage:", character.doodlePath);
                const { error } = await supabase.storage
                    .from("doodles")
                    .remove([character.doodlePath!]);

                if (error) {
                    console.error("Storage delete error:", error);
                } else {
                    console.log("Storage file deleted:", character.doodlePath);
                }
            } catch (e) {
                console.error("Failed to delete storage file:", e);
            }
        }

        // renderPath도 삭제 (있는 경우)
        if (isStoragePath(character.renderPath)) {
            try {
                const { createClient } = await import("@/lib/supabase/server");
                const supabase = await createClient();

                console.log("Deleting render from storage:", character.renderPath);
                await supabase.storage
                    .from("doodles")
                    .remove([character.renderPath!]);
            } catch (e) {
                console.error("Failed to delete render file:", e);
            }
        }

        // 캐릭터 삭제 (장면의 characterId는 SetNull로 자동 처리)
        await prisma.character.delete({
            where: { id: characterId },
        });

        return successResponse({ message: "캐릭터가 삭제되었습니다. 장면은 유지됩니다." });
    } catch (error) {
        return handleApiError(error);
    }
}

