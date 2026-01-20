import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/auth";
import { addWaterDrops, grantSignupBonus } from "@/lib/wallet";
import {
    successResponse,
    createdResponse,
    handleApiError,
    validationErrorResponse,
} from "@/lib/apiResponse";

export const runtime = "nodejs";

const CreateCharacterSchema = z.object({
    name: z.string().min(1).max(40).optional(),
    doodlePath: z.string().min(1),
    renderPath: z.string().min(1).optional(),
    styleId: z.string().min(1).optional(),
    role: z.string().optional(),
    personality: z.string().optional(),
});

export async function GET() {
    try {
        const userId = await requireUserId();

        const characters = await prisma.character.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
        });

        // Supabase signed URLs 생성
        const { createClient } = await import("@/lib/supabase/server");
        const supabase = await createClient();

        const charactersWithUrls = await Promise.all(
            characters.map(async (char) => {
                let imageUrl: string | undefined;

                // renderPath 우선 사용 (변환된 이미지), 없으면 doodlePath
                const imagePath = char.renderPath || char.doodlePath;

                if (imagePath) {
                    // Base64 데이터인 경우 그대로 사용
                    if (imagePath.startsWith("data:")) {
                        imageUrl = imagePath;
                    }
                    // 외부 URL이거나 로컬 public 파일인 경우 그대로 사용
                    else if (imagePath.startsWith("http") || imagePath.startsWith("/")) {
                        imageUrl = imagePath;
                    } else {
                        // Supabase Storage 경로인 경우 signed URL 생성
                        try {
                            const { data } = await supabase.storage
                                .from("doodles")
                                .createSignedUrl(imagePath, 3600);
                            imageUrl = data?.signedUrl;
                        } catch (e) {
                            console.error("Signed URL error:", e);
                        }
                    }
                }
                return {
                    ...char,
                    imageUrl,
                };
            })
        );

        return successResponse({ characters: charactersWithUrls });
    } catch (error) {
        return handleApiError(error);
    }
}

export async function POST(req: Request) {
    try {
        const userId = await requireUserId();
        const body = await req.json();

        const parseResult = CreateCharacterSchema.safeParse(body);
        if (!parseResult.success) {
            return validationErrorResponse(parseResult.error);
        }
        const input = parseResult.data;

        // Profile 생성 (없으면)
        await prisma.profile.upsert({
            where: { id: userId },
            update: {},
            create: { id: userId },
        });

        // 신규 가입 보너스 체크 및 지급
        const signupResult = await grantSignupBonus(userId);

        const created = await prisma.character.create({
            data: {
                userId,
                name: input.name,
                doodlePath: input.doodlePath,
                renderPath: input.renderPath,
                styleId: input.styleId,
                role: input.role,
                personality: input.personality,
            },
        });

        // 💧 물방울 보상: 캐릭터 생성 +5
        const { balance: waterDrops, delta } = await addWaterDrops(userId, "scene_created", 5);

        return createdResponse({
            character: created,
            rewards: {
                waterDrops: { earned: delta, balance: waterDrops },
                ...(signupResult.alreadyGranted
                    ? {}
                    : { magicSeeds: { earned: 5, reason: "signup_bonus" } }),
            },
        });
    } catch (error) {
        return handleApiError(error);
    }
}


