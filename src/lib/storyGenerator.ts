import { LibraryCard } from "./types/library";

interface StoryGenerationRequest {
    personality: LibraryCard;  // 성격
    role: LibraryCard;         // 역할
    place: LibraryCard;
    event: LibraryCard;
    mood: LibraryCard;
    learningCards?: LibraryCard[];
    characterName: string;
    placedItems?: string[];     // 배치된 아이템 이름들
    learningTopic?: LibraryCard; // 학습 주제
}

export interface GeneratedStory {
    title: string;
    summary: string;
    pages: {
        pageNumber: number;
        content: string;
        learningHighlight?: string;
        suggestedBackground?: string; // AI가 추천하는 배경 ID
        imageUrl?: string; // AI가 생성한 삽화 URL
    }[];
    learningWords: string[];
    coverColor: string;
    coverStyle: "pattern" | "gradient" | "solid";
}

// 스토리 생성 프롬프트 구성
function buildPrompt(request: StoryGenerationRequest): string {
    const { personality, role, place, event, mood, learningCards = [], characterName, placedItems = [], learningTopic } = request;

    const learningContent = learningCards.length > 0
        ? `학습 요소: ${learningCards.map(c => `${c.name}(${c.learningContent?.korean || c.description})`).join(", ")}`
        : "";

    const itemsContent = placedItems.length > 0
        ? `
## 배치된 아이템 (이야기에 반드시 등장시켜주세요)
${placedItems.map(item => `- ${item}`).join("\n")}
이 아이템들을 이야기 속에서 자연스럽게 등장시켜주세요. 주인공이 발견하거나, 사용하거나, 함께 모험할 수 있습니다.`
        : "";

    const topicContent = learningTopic
        ? `학습 주제: ${learningTopic.name} - ${learningTopic.description}`
        : "";

    return `
당신은 한국 아이들을 위한 동화 작가입니다. 다음 재료로 6페이지 분량의 동화를 만들어주세요.
(표지 제외 5페이지 + 표지 1페이지 = 총 6페이지)

## 이야기 재료
- 주인공 이름: ${characterName}
- 주인공 성격: ${personality.name} (${personality.description})
- 주인공 역할: ${role.name} (${role.description})
- 장소: ${place.name} (${place.description})
- 사건: ${event.name} (${event.description})
- 분위기: ${mood.name} (${mood.description})
${topicContent}
${learningContent}
${itemsContent}

## 작성 규칙
1. 5-7세 아이들이 이해할 수 있는 쉬운 문장
2. 각 페이지는 2-3문장
3. ${mood.name} 분위기 유지
4. 주인공의 ${personality.name} 성격이 이야기에 반영되어야 함
5. 긍정적인 교훈 포함
6. 한글로 작성
7. 기승전결 구조로 작성 (기-승-전-결)

## 출력 형식 (JSON)
{
    "title": "동화 제목",
    "summary": "한 줄 요약",
    "pages": [
        {"pageNumber": 1, "content": "첫 페이지 내용 (기)"},
        {"pageNumber": 2, "content": "두 번째 페이지 (기)"},
        {"pageNumber": 3, "content": "세 번째 페이지 (승)"},
        {"pageNumber": 4, "content": "네 번째 페이지 (전)"},
        {"pageNumber": 5, "content": "다섯 번째 페이지 (결)"}
    ],
    "learningWords": ["배운 단어1", "배운 단어2"]
}
`.trim();
}

// Gemini API 호출
export async function generateStory(request: StoryGenerationRequest): Promise<GeneratedStory[]> {
    const prompt = buildPrompt(request);

    try {
        // Gemini API 호출
        const response = await fetch("/api/story/ai-generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                prompt,
                recipe: {
                    personality: request.personality.name,
                    role: request.role.name,
                    place: request.place.name,
                    event: request.event.name,
                    mood: request.mood.name,
                },
                characterName: request.characterName,
            }),
        });

        if (!response.ok) {
            console.error("API error, falling back to mock stories");
            return [getMockStories(request)[0]]; // 첫 번째 목업만 반환
        }

        const data = await response.json();

        // API 응답 형식에 따라 변환
        if (data.story) {
            // AI 스토리 1개만 반환
            const aiStory: GeneratedStory = {
                title: data.story.title || `${request.characterName}의 이야기`,
                summary: data.story.summary || `${request.place.name}에서의 모험`,
                pages: data.story.pages || [],
                learningWords: data.story.learningWords || [],
                coverColor: data.story.coverColor || "#F472B6",
                coverStyle: "gradient",
            };
            return [aiStory];
        } else if (data.stories && Array.isArray(data.stories) && data.stories.length > 0) {
            // 배열이면 첫 번째만
            return [data.stories[0]];
        }

        // 파싱 실패 시 목업
        return [getMockStories(request)[0]];
    } catch (error) {
        console.error("Story generation error:", error);
        // 에러 시 목업 스토리 반환
        return [getMockStories(request)[0]];
    }
}

// 목업 스토리 (API 실패 시 또는 개발용)
function getMockStories(request: StoryGenerationRequest & { characterName: string }): GeneratedStory[] {
    const { personality, role, place, event, mood, characterName } = request;

    // 장소 배경 로직
    let mainBg = "forest";
    if (place.id === "place-ocean") mainBg = "ocean";
    else if (place.id === "place-sky") mainBg = "sky";
    else if (place.id === "place-village") mainBg = "village";

    // 시작과 끝은 보통 안전한 장소(마을)이거나 해당 장소의 평화로운 모습
    const startBg = "village";
    const endBg = mainBg === "sky" ? "sky" : "village"; // 하늘 모험이면 하늘 엔딩, 아니면 마을 귀환

    return [
        {
            title: `${characterName}의 ${place.name} 대모험`,
            summary: `${place.name}에서 ${event.name}를 하며 ${personality.name} 마음을 배우는 6쪽 동화`,
            coverColor: "#F472B6", // Pink
            coverStyle: "gradient",
            pages: [
                {
                    pageNumber: 1,
                    content: `어느 화창한 아침이었어요.\n${role.name} ${characterName}(이)는 기지개를 켜며 일어났답니다.\n"오늘은 정말 멋진 일이 일어날 것 같아!"\n${personality.name} 성격의 ${characterName}는 설레는 마음으로 집을 나섰어요.`,
                    suggestedBackground: startBg
                },
                {
                    pageNumber: 2,
                    content: `발길이 닿은 곳은 신비로운 ${place.name}이었어요.\n그곳에는 처음 보는 신기한 식물들이 가득했죠.\n"우와, 여기 정말 멋지다! 저기엔 뭐가 있을까?"\n호기심 가득한 ${characterName}는 씩씩하게 걸음을 옮겼어요.`,
                    suggestedBackground: startBg
                },
                {
                    pageNumber: 3,
                    content: `그런데 갑자기 ${event.name}을(를) 해야 하는 일이 생겼어요!\n모두가 당황했지만, ${characterName}는 침착했어요.\n"내가 한번 해볼게!"\n작은 두 주먹을 불끈 쥐고 용기를 냈답니다.`,
                    suggestedBackground: mainBg
                },
                {
                    pageNumber: 4,
                    content: `일은 생각보다 쉽지 않았어요. 땀이 뻘뻘 났지요.\n하지만 포기하지 않았어요.\n'나는 할 수 있어!' 속으로 세 번 외쳤답니다.\n그러자 마법처럼 힘이 솟아오르는 것 같았어요.`,
                    suggestedBackground: "night"
                },
                {
                    pageNumber: 5,
                    content: `와! 드디어 해냈어요!\n${characterName}의 ${personality.name} 마음 덕분에 문제가 해결되었답니다.\n주변 친구들이 모두 박수를 쳐주었어요.\n"최고야, ${characterName}! 정말 대단해!"`,
                    suggestedBackground: mainBg
                },
                {
                    pageNumber: 6,
                    content: `어느새 해가 뉘엿뉘엿 지고 있었어요.\n"오늘 모험은 정말 잊지 못할 거야."\n${characterName}는 뿌듯한 마음을 안고 집으로 돌아왔답니다.\n꿈속에서도 신나는 모험을 계속했겠죠?`,
                    suggestedBackground: endBg
                },
            ],
            learningWords: ["용기", "모험", "성취감"],
        },
        // 다른 목업들은 이제 사용되지 않으므로 생략해도 되지만 
        // 혹시 몰라 하나 더 유지
        {
            title: `${place.name}의 숨겨진 보물`,
            summary: `호기심 많은 ${characterName}의 신기한 발견`,
            coverColor: "#A78BFA", // Purple
            coverStyle: "gradient",
            pages: [],
            learningWords: ["지혜", "욕심", "행복"],
        }
    ];
}
