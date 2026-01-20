// POST /api/create/outline - Generate 3 story outlines
import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUserId } from "@/lib/auth";

const OutlineRequestSchema = z.object({
    mixer: z.object({
        tale: z.string(),
        culture: z.string(),
        setting: z.string(),
        tone: z.string(),
        lesson: z.string(),
        pack: z.string(),
    }),
    seedType: z.string(),
    ageRange: z.string(),
    pageLength: z.number(),
});

// 목업 데이터 (API 키 없을 때 사용)
const mockOutlines = [
    {
        id: 1,
        title: "토리의 용기",
        logline: "화가 난 토리가 친구와 화해하는 이야기",
        acts: [
            "토리가 친구 미미와 즐겁게 놀고 있어요",
            "미미가 토리의 장난감을 빼앗아서 토리가 화가 나요",
            "토리가 용기를 내어 말로 표현하고, 둘은 화해해요",
        ]
    },
    {
        id: 2,
        title: "마법의 복주머니",
        logline: "소중한 것을 지키는 법을 배우는 이야기",
        acts: [
            "할머니가 토리에게 특별한 복주머니를 선물해요",
            "친구가 복주머니를 가져가려 해서 토리가 슬퍼해요",
            "토리가 나눔의 의미를 알고 함께 행복해져요",
        ]
    },
    {
        id: 3,
        title: "화가 난 날",
        logline: "감정을 다스리는 방법을 찾는 이야기",
        acts: [
            "토리는 오늘 기분이 좋지 않아요",
            "작은 일에도 화가 나서 친구들이 멀어져요",
            "숨을 크게 쉬며 마음을 진정하고 친구들과 다시 웃어요",
        ]
    }
];

export async function POST(req: Request) {
    try {
        await requireUserId();

        const body = await req.json();
        const parsed = OutlineRequestSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid request", details: parsed.error.flatten() },
                { status: 400 }
            );
        }

        // OpenAI API 키 체크
        if (!process.env.OPENAI_API_KEY) {
            console.log("OPENAI_API_KEY not set, using mock data");
            return NextResponse.json({ outlines: mockOutlines });
        }

        // API 키 있으면 실제 생성 시도
        try {
            const { generateStoryOutlines } = await import("@/lib/openai");
            const { mixer, seedType, ageRange, pageLength } = parsed.data;
            const outlines = await generateStoryOutlines(mixer, seedType, ageRange, pageLength);
            return NextResponse.json({ outlines });
        } catch (apiError) {
            console.warn("OpenAI API failed, falling back to mock:", apiError);
            return NextResponse.json({ outlines: mockOutlines });
        }
    } catch (error) {
        console.error("Outline generation error:", error);
        return NextResponse.json(
            { error: "스토리 생성에 실패했습니다." },
            { status: 500 }
        );
    }
}
