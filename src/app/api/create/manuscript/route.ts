// POST /api/create/manuscript - Generate full story pages
import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUserId } from "@/lib/auth";
import { generateManuscript } from "@/lib/ai/text-client";

const ManuscriptRequestSchema = z.object({
    outline: z.object({
        id: z.number(),
        title: z.string(),
        logline: z.string(),
        acts: z.array(z.string()),
    }),
    mixer: z.object({
        tale: z.string(),
        culture: z.string(),
        setting: z.string(),
        tone: z.string(),
        lesson: z.string(),
        pack: z.string(),
    }),
    ageRange: z.string(),
    pageLength: z.number(),
    language: z.string(),
});

export async function POST(req: Request) {
    try {
        await requireUserId();

        const body = await req.json();
        const parsed = ManuscriptRequestSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid request", details: parsed.error.flatten() },
                { status: 400 }
            );
        }

        const { outline, mixer, ageRange, pageLength, language } = parsed.data;

        // TODO: 💧 재화 차감 로직 추가 (2-3 drops)

        const story = await generateManuscript(outline, mixer, ageRange, pageLength, language);

        return NextResponse.json({ story });
    } catch (error) {
        console.error("Manuscript generation error:", error);
        return NextResponse.json(
            { error: "원고 생성에 실패했습니다." },
            { status: 500 }
        );
    }
}
