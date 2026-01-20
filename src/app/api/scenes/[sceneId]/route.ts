import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/auth";
import {
    successResponse,
    notFoundResponse,
    handleApiError,
    validationErrorResponse,
} from "@/lib/apiResponse";
import { z } from "zod";

export const runtime = "nodejs";

interface RouteParams {
    params: Promise<{ sceneId: string }>;
}

const UpdateSceneSchema = z.object({
    storyText: z.string().optional(),
    sceneImagePath: z.string().optional(),
});

/**
 * PATCH /api/scenes/[sceneId]
 * 장면 업데이트 (스토리 텍스트 등)
 */
export async function PATCH(req: Request, { params }: RouteParams) {
    try {
        const userId = await requireUserId();
        const { sceneId } = await params;
        const body = await req.json();

        const parseResult = UpdateSceneSchema.safeParse(body);
        if (!parseResult.success) {
            return validationErrorResponse(parseResult.error);
        }
        const input = parseResult.data;

        const scene = await prisma.scene.findFirst({
            where: { id: sceneId, userId },
        });

        if (!scene) {
            return notFoundResponse("Scene");
        }

        const updated = await prisma.scene.update({
            where: { id: sceneId },
            data: input,
        });

        return successResponse({ scene: updated });
    } catch (error) {
        return handleApiError(error);
    }
}

/**
 * DELETE /api/scenes/[sceneId]
 * 장면 삭제
 */
export async function DELETE(_req: Request, { params }: RouteParams) {
    try {
        const userId = await requireUserId();
        const { sceneId } = await params;

        const scene = await prisma.scene.findFirst({
            where: { id: sceneId, userId },
        });

        if (!scene) {
            return notFoundResponse("Scene");
        }

        await prisma.scene.delete({
            where: { id: sceneId },
        });

        return successResponse({ message: "장면이 삭제되었습니다." });
    } catch (error) {
        return handleApiError(error);
    }
}
