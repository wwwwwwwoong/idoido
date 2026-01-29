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

        // Supabase Storage 경로 추출 및 삭제
        console.log(`Deleting character ${characterId}. Paths:`, {
            doodle: character.doodlePath,
            render: character.renderPath
        });

        const getStoragePath = (path: string | null) => {
            if (!path) return null;
            if (path.startsWith("data:")) return null; // Base64 스킵

            // 로컬 에셋(/assets, /images)은 제외
            if (path.startsWith("/assets") || path.startsWith("/items") || path.startsWith("/backgrounds")) return null;

            if (path.startsWith("http")) {
                const parts = path.split("/doodles/");
                if (parts.length > 1) {
                    try {
                        return decodeURIComponent(parts[1].split('?')[0]);
                    } catch {
                        return parts[1];
                    }
                }
                // 다른 버킷일 수도 있지만, 현재는 doodles만 사용
                return null;
            }
            // "/scenes/..." 처럼 앞에 /가 있는 경우 제거 (Supabase API는 상대경로 선호)
            if (path.startsWith("/")) return path.substring(1);

            return path;
        };

        const doodleStoragePath = getStoragePath(character.doodlePath);
        const renderStoragePath = getStoragePath(character.renderPath);

        const { createClient } = await import("@/lib/supabase/server");
        const supabase = await createClient();

        // 병렬 삭제 시도 (하나가 실패해도 다른 하나는 시도)
        await Promise.all([
            doodleStoragePath ? (async () => {
                console.log("Deleting doodle:", doodleStoragePath);
                const { error } = await supabase.storage.from("doodles").remove([doodleStoragePath]);
                if (error) console.error("Error deleting doodle:", error);
                else console.log("Deleted doodle success");
            })() : Promise.resolve(),

            renderStoragePath && renderStoragePath !== doodleStoragePath ? (async () => {
                console.log("Deleting render:", renderStoragePath);
                const { error } = await supabase.storage.from("doodles").remove([renderStoragePath]);
                if (error) console.error("Error deleting render:", error);
                else console.log("Deleted render success");
            })() : Promise.resolve()
        ]);

        // 캐릭터 삭제 (장면의 characterId는 SetNull로 자동 처리)
        await prisma.character.delete({
            where: { id: characterId },
        });

        return successResponse({ message: "캐릭터가 삭제되었습니다. 장면은 유지됩니다." });
    } catch (error) {
        return handleApiError(error);
    }
}

/**
 * PATCH /api/characters/[characterId]
 * 캐릭터 정보 수정 (이름 변경 등)
 */
export async function PATCH(req: Request, { params }: RouteParams) {
    try {
        const userId = await requireUserId();
        const { characterId } = await params;
        const body = await req.json();
        const { name } = body;

        if (!name || typeof name !== "string") {
            return new Response(JSON.stringify({ error: "Name is required" }), { status: 400 });
        }

        const character = await prisma.character.findFirst({
            where: { id: characterId, userId },
        });

        if (!character) {
            return notFoundResponse("Character");
        }

        const updatedCharacter = await prisma.character.update({
            where: { id: characterId },
            data: { name },
        });

        return successResponse(updatedCharacter);
    } catch (error) {
        return handleApiError(error);
    }
}
