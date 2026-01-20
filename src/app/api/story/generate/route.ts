import { NextRequest } from "next/server";
import { requireUserId } from "@/lib/auth";
import { prisma } from "@/lib/db";
import {
    successResponse,
    notFoundResponse,
    handleApiError,
    validationErrorResponse,
} from "@/lib/apiResponse";
import { z } from "zod";
import { getGeminiModel } from "@/lib/gemini";

export const runtime = "nodejs";

const GenerateStorySchema = z.object({
    bookId: z.string().uuid(),
    sceneId: z.string().uuid().optional(),
    characterName: z.string(),
    characterRole: z.string().optional().nullable(),
    backgroundId: z.string(),
    itemId: z.string(),
    verbId: z.string(),
    lesson: z.string().optional().nullable(),
    scenePhase: z.string().optional().nullable(), // 스토리 뼈대에서 가져온 현재 단계 (시작, 갈등, 해결 등)
    scenePhaseHint: z.string().optional().nullable(), // 현재 단계 힌트 설명
    previousScenes: z.array(z.object({
        summary: z.string().optional().nullable(),
        storyText: z.string().optional().nullable(),
    })).optional(),
    useAI: z.boolean().optional().default(false), // AI 사용 여부
});

// 배경/소품/동작 한글 매핑
const bgKo: Record<string, string> = { forest: "숲", ocean: "바다", home: "집", sky: "하늘", dream: "꿈나라" };
const itemKo: Record<string, string> = { ball: "공", flower: "꽃", star: "별", apple: "사과" };
const actionKo: Record<string, string> = { run: "달리다", eat: "먹다", play: "놀다", sleep: "자다" };

// 단계별 문장 패턴
const phasePatterns: Record<string, string[]> = {
    "시작": [
        "{name}이(가) {bg}에 갔어요. 오늘은 어떤 일이 일어날까요?",
        "어느 날, {name}은(는) {bg}에서 신나게 놀고 있었어요.",
    ],
    "평화": [
        "{name}은(는) {item}을(를) 발견하고 행복했어요.",
        "{bg}에서 {name}은(는) {item}을(를) 가지고 즐겁게 놀았어요.",
    ],
    "갈등": [
        "그런데 갑자기! {name}에게 어려운 일이 생겼어요.",
        "{name}은(는) 속상한 일이 생겼어요. 어떡하죠?",
    ],
    "감정": [
        "{name}의 마음속에 큰 감정이 생겼어요.",
        "{name}은(는) 마음이 복잡해졌어요.",
    ],
    "선택": [
        "{name}은(는) 생각했어요. \"어떻게 하면 좋을까?\"",
        "잠시 멈추고, {name}은(는) 깊은 숨을 쉬었어요.",
    ],
    "해결": [
        "{name}은(는) 용기를 내어 말했어요.",
        "{name}은(는) 좋은 방법을 찾았어요!",
    ],
    "결말": [
        "그렇게 {name}은(는) {bg}에서 행복한 하루를 보냈어요.",
        "{name}은(는) 오늘 소중한 것을 배웠어요.",
    ],
};

/**
 * POST /api/story/generate
 * LLM을 사용하여 장면에 맞는 스토리 문장 생성
 */
export async function POST(req: NextRequest) {
    try {
        const userId = await requireUserId();
        const body = await req.json();

        const parseResult = GenerateStorySchema.safeParse(body);
        if (!parseResult.success) {
            return validationErrorResponse(parseResult.error);
        }
        const input = parseResult.data;

        // 동화책 확인
        const book = await prisma.book.findFirst({
            where: { id: input.bookId, userId },
        });
        if (!book) {
            return notFoundResponse("Book");
        }

        const bg = bgKo[input.backgroundId] || input.backgroundId;
        const item = itemKo[input.itemId] || input.itemId;
        const action = actionKo[input.verbId] || input.verbId;
        const name = input.characterName;
        const phase = input.scenePhase || "";
        const sceneNumber = (input.previousScenes?.length || 0) + 1;
        let storyText = "";

        // 🤖 AI 기반 스토리 생성 (useAI가 true인 경우)
        if (input.useAI) {
            try {
                const model = getGeminiModel();

                // 이전 장면 내용을 문맥에 포함
                const previousContext = input.previousScenes?.map((s, i) =>
                    `장면 ${i + 1}: ${s.storyText || s.summary || ''}`
                ).join('\n') || '첫 번째 장면입니다.';

                const prompt = `너는 유아용 동화 작가야. 다음 설정으로 동화의 한 장면(1-2문장)을 만들어줘.

주인공: ${name}${input.characterRole ? ` (${input.characterRole})` : ''}
장소: ${bg}
사용할 소품: ${item}
행동: ${action}
현재 단계: ${phase || '자유'}${input.scenePhaseHint ? ` (힌트: ${input.scenePhaseHint})` : ''}
${input.lesson ? `교훈: ${input.lesson}` : ''}

이전 장면들:
${previousContext}

규칙:
1. 1-2문장으로 짧게 작성
2. 4-6세 어린이가 이해할 수 있는 쉬운 단어
3. 이전 장면과 자연스럽게 연결
4. 현재 단계(${phase || '자유'})에 맞는 내용

장면 ${sceneNumber}의 스토리 문장만 응답해줘 (따옴표 없이):`;

                const result = await model.generateContent(prompt);
                storyText = result.response.text().trim();

                // 따옴표 제거
                storyText = storyText.replace(/^["']|["']$/g, '').trim();

            } catch (aiError) {
                console.error("Gemini AI error, falling back to template:", aiError);
                // AI 실패 시 템플릿으로 폴백
                input.useAI = false;
            }
        }

        // 📝 템플릿 기반 스토리 생성 (기존 로직)
        if (!input.useAI || !storyText) {

            // 이전 장면 정보 가져오기
            const prevScene = input.previousScenes?.[input.previousScenes.length - 1];
            const prevSummary = prevScene?.summary || "";

            // 장면 연결 전환어
            const transitionsByPhase: Record<string, string[]> = {
                "시작": ["어느 날,", "오늘도", "화창한 날,"],
                "평화": ["그때,", "잠시 후,", "그러던 중,"],
                "갈등": ["그런데 갑자기!", "하지만!", "그때!"],
                "감정": ["그러자", "그 순간", "그래서"],
                "선택": ["잠시 멈추고", "생각해 보니", "그러다가"],
                "해결": ["용기를 내어", "드디어", "그래서"],
                "결말": ["그렇게", "결국", "마침내"],
            };

            const transitions = transitionsByPhase[phase] || ["그리고", "그래서", "그러다가"];
            const transition = sceneNumber > 1 ? transitions[Math.floor(Math.random() * transitions.length)] + " " : "";

            // 단계별 패턴 선택
            const patterns = phasePatterns[phase] || [];
            if (patterns.length > 0) {
                // 패턴 랜덤 선택 후 치환
                const basePattern = patterns[Math.floor(Math.random() * patterns.length)];
                let mainText = basePattern
                    .replace(/{name}/g, name)
                    .replace(/{bg}/g, bg)
                    .replace(/{item}/g, item)
                    .replace(/{action}/g, action);

                // 전환어 + 본문 + 아이 선택
                if (sceneNumber === 1) {
                    storyText = mainText + ` ${name}은(는) ${item}을(를) 가지고 ${action}어요.`;
                } else {
                    storyText = transition + mainText + ` ${name}은(는) ${item}을(를) 가지고 ${action}어요.`;
                }
            } else {
                // 기본 패턴 (연결어 포함)
                if (sceneNumber === 1) {
                    storyText = `${name}이(가) ${bg}에 갔어요. ${name}은(는) ${item}을(를) 발견했어요.`;
                } else {
                    storyText = `${transition}${name}은(는) ${bg}에서 ${item}을(를) 가지고 ${action}어요.`;
                }
            }
        } // 템플릿 로직 끝

        // 장면에 스토리 텍스트 업데이트 (sceneId가 있는 경우)
        if (input.sceneId) {
            await prisma.scene.update({
                where: { id: input.sceneId },
                data: { storyText },
            });
        }

        return successResponse({
            storyText,
            sceneNumber,
            usedAI: input.useAI && storyText.length > 0,
            suggestion: sceneNumber < 5
                ? `다음 장면에서는 ${name}이(가) 어떤 일을 겪을까요?`
                : `마지막 장면이에요! ${name}의 이야기를 마무리해주세요.`,
        });
    } catch (error) {
        return handleApiError(error);
    }
}
