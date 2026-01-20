/**
 * 보호자 코-플레이 질문
 * 각 결말에 맞는 질문을 랜덤하게 제공
 */

type ResultChoice = "SUCCESS" | "SILLY" | "NEXT";

// 결말별 질문 목록
const COPLAY_QUESTIONS: Record<ResultChoice, string[]> = {
    SUCCESS: [
        "어떻게 성공할 수 있었을까?",
        "성공해서 기분이 어땠을까?",
        "다음에도 이렇게 하면 좋겠다! 왜 그럴까?",
        "친구가 같은 상황이라면 뭐라고 말해줄까?",
        "성공하려면 어떤 게 필요했을까?",
    ],
    SILLY: [
        "왜 이렇게 엉뚱한 일이 생겼을까?",
        "엉뚱하지만 재미있네! 뭐가 재미있었어?",
        "만약 다르게 했다면 어떻게 됐을까?",
        "이런 일이 진짜 일어나면 어떨까?",
        "엉뚱한 결과도 괜찮아! 왜 그럴까?",
    ],
    NEXT: [
        "다음엔 어떤 일이 일어날까?",
        "주인공은 지금 뭘 생각하고 있을까?",
        "이야기가 계속된다면 어떻게 될까?",
        "다음에 무엇을 해보면 좋을까?",
        "기다리는 동안 뭘 하면 좋을까?",
    ],
};

/**
 * 결말에 맞는 코-플레이 질문 하나를 랜덤하게 반환
 */
export function getCoplayQuestion(resultChoice: ResultChoice): string {
    const questions = COPLAY_QUESTIONS[resultChoice];
    const idx = Math.floor(Math.random() * questions.length);
    return questions[idx];
}

/**
 * 결말에 맞는 코-플레이 질문 목록 전체 반환
 */
export function getAllCoplayQuestions(resultChoice: ResultChoice): string[] {
    return COPLAY_QUESTIONS[resultChoice];
}

// 결말별 스토리 템플릿
const STORY_TEMPLATES: Record<ResultChoice, string[]> = {
    SUCCESS: [
        "{character}이(가) {verb}을(를) 해냈어요! 정말 대단해요! 🎉",
        "와! {character}의 {verb}이(가) 성공했어요! 최고예요! ⭐",
        "{background}에서 {character}이(가) 멋지게 해냈답니다! 👏",
    ],
    SILLY: [
        "어머, {character}이(가) 엉뚱하게 {verb}했어요! 😜",
        "앗, {item}이(가) 이상하게 작동했어요! 재밌네! 🤪",
        "{character}, 이게 뭐야? 엉뚱한 결과가 나왔어요! 🙃",
    ],
    NEXT: [
        "{character}은(는) 조금 더 기다려보기로 했어요... 🌙",
        "아직 끝나지 않았어요. {character}의 이야기는 계속돼요... 📖",
        "다음엔 어떤 일이 일어날까요? 기대되네요! ✨",
    ],
};

type StoryParams = {
    characterName: string;
    backgroundName: string;
    itemName: string;
    verbName: string;
    resultChoice: ResultChoice;
};

/**
 * 결말에 맞는 스토리 텍스트 생성
 */
export function generateStoryText(params: StoryParams): string {
    const templates = STORY_TEMPLATES[params.resultChoice];
    const template = templates[Math.floor(Math.random() * templates.length)];

    return template
        .replace(/{character}/g, params.characterName || "주인공")
        .replace(/{background}/g, params.backgroundName || "어딘가")
        .replace(/{item}/g, params.itemName || "무언가")
        .replace(/{verb}/g, params.verbName || "무언가를");
}

/**
 * 결말 선택에 따른 이모지 반환
 */
export function getResultEmoji(resultChoice: ResultChoice): string {
    const emojis: Record<ResultChoice, string> = {
        SUCCESS: "🎉",
        SILLY: "😜",
        NEXT: "🌙",
    };
    return emojis[resultChoice];
}
