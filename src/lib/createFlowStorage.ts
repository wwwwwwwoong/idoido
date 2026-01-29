/**
 * 동화책 만들기 플로우에서 사용하는 로컬스토리지 관리 유틸
 */

// 로컬스토리지 키 목록
export const CREATE_STORAGE_KEYS = {
    CHARACTER: "create_character",
    RECIPE: "create_recipe",
    SCENE: "create_scene",
    STORY: "create_story",
} as const;

// 세션스토리지 키 목록
export const CREATE_SESSION_KEYS = {
    CACHED_STORY: "cached_story",
    SHOULD_GENERATE: "should_generate_story",
} as const;

/**
 * 동화책 만들기 플로우의 모든 임시 데이터 정리
 * @param options 
 *  - keepCharacter: 캐릭터 데이터는 유지 (다음 동화에서 재사용)
 */
export function clearCreateFlowData(options?: { keepCharacter?: boolean }) {
    const { keepCharacter = false } = options || {};

    // 로컬스토리지 정리
    if (!keepCharacter) {
        localStorage.removeItem(CREATE_STORAGE_KEYS.CHARACTER);
    }
    localStorage.removeItem(CREATE_STORAGE_KEYS.RECIPE);
    localStorage.removeItem(CREATE_STORAGE_KEYS.SCENE);
    localStorage.removeItem(CREATE_STORAGE_KEYS.STORY);

    // 세션스토리지 정리
    sessionStorage.removeItem(CREATE_SESSION_KEYS.CACHED_STORY);
    sessionStorage.removeItem(CREATE_SESSION_KEYS.SHOULD_GENERATE);

    console.log("[CreateFlow] Temporary data cleared", { keepCharacter });
}

/**
 * 특정 단계의 데이터만 가져오기 (타입 안전)
 */
export function getCreateFlowData<T>(key: keyof typeof CREATE_STORAGE_KEYS): T | null {
    try {
        const data = localStorage.getItem(CREATE_STORAGE_KEYS[key]);
        return data ? JSON.parse(data) : null;
    } catch {
        return null;
    }
}

/**
 * 특정 단계의 데이터 저장 (try-catch 포함)
 */
export function setCreateFlowData<T>(key: keyof typeof CREATE_STORAGE_KEYS, data: T): boolean {
    try {
        localStorage.setItem(CREATE_STORAGE_KEYS[key], JSON.stringify(data));
        return true;
    } catch (e) {
        console.error(`[CreateFlow] Failed to save ${key}:`, e);
        return false;
    }
}

/**
 * 로컬스토리지 용량 확인 (대략적)
 */
export function getStorageUsage(): { used: number; max: number; percentage: number } {
    let total = 0;
    for (const key of Object.values(CREATE_STORAGE_KEYS)) {
        const data = localStorage.getItem(key);
        if (data) {
            total += data.length * 2; // UTF-16 = 2 bytes per char
        }
    }

    const maxStorage = 5 * 1024 * 1024; // 5MB (typical limit)

    return {
        used: total,
        max: maxStorage,
        percentage: Math.round((total / maxStorage) * 100),
    };
}
