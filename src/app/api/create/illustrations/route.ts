// POST /api/create/illustrations - Generate illustrations
import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUserId } from "@/lib/auth";
import { generateIllustration } from "@/lib/imageGen";

const IllustrationRequestSchema = z.object({
    type: z.enum(["cover", "keyscene", "character", "object"]),
    prompt: z.string(),
    pageNumber: z.number().optional(),
    characterName: z.string().optional(),
    traits: z.array(z.string()).optional(),
});

export async function POST(req: Request) {
    try {
        await requireUserId();

        const body = await req.json();
        const parsed = IllustrationRequestSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid request", details: parsed.error.flatten() },
                { status: 400 }
            );
        }

        const { type, prompt, pageNumber } = parsed.data;

        // TODO: 🌱 재화 차감 로직 추가
        // Cover: 2 seeds, Keyscene: 3 seeds, Character pack: 5 seeds

        const result = await generateIllustration(type, prompt);

        return NextResponse.json({
            success: true,
            illustration: {
                url: result.url,
                provider: result.provider,
                type,
                pageNumber,
            }
        });
    } catch (error) {
        console.error("Illustration generation error:", error);
        return NextResponse.json(
            { error: "삽화 생성에 실패했습니다." },
            { status: 500 }
        );
    }
}
