import { NextResponse } from "next/server";
import { z } from "zod";

// 입력 검증 스키마
const TTSRequestSchema = z.object({
    text: z.string().min(1).max(5000), // 5000자 제한
    languageCode: z.string().default("ko-KR"),
    gender: z.enum(["MALE", "FEMALE"]).default("FEMALE"),
});

// 간단한 메모리 캐시 (동일 텍스트 중복 요청 방지)
const audioCache = new Map<string, { audioContent: string; timestamp: number }>();
const CACHE_TTL = 10 * 60 * 1000; // 10분

function getCacheKey(text: string, languageCode: string, gender: string) {
    return `${languageCode}:${gender}:${text.slice(0, 100)}:${text.length}`;
}

function cleanOldCache() {
    const now = Date.now();
    for (const [key, value] of audioCache.entries()) {
        if (now - value.timestamp > CACHE_TTL) {
            audioCache.delete(key);
        }
    }
    // 캐시 크기 제한 (최대 50개)
    if (audioCache.size > 50) {
        const firstKey = audioCache.keys().next().value;
        if (firstKey) audioCache.delete(firstKey);
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const parseResult = TTSRequestSchema.safeParse(body);

        if (!parseResult.success) {
            return NextResponse.json({
                error: "Invalid request",
                details: parseResult.error.issues
            }, { status: 400 });
        }

        const { text, languageCode, gender } = parseResult.data;

        // 캐시 확인
        const cacheKey = getCacheKey(text, languageCode, gender);
        const cached = audioCache.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
            return NextResponse.json({ audioContent: cached.audioContent, cached: true });
        }

        const apiKey = process.env.GOOGLE_AI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "API Key is missing" }, { status: 500 });
        }

        const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

        // Voice selection based on gender/language
        const voiceName = gender === "MALE" ? "ko-KR-Neural2-C" : "ko-KR-Neural2-A";

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                input: { text },
                voice: {
                    languageCode,
                    name: voiceName,
                    ssmlGender: gender,
                },
                audioConfig: {
                    audioEncoding: "MP3",
                    speakingRate: 0.9,
                    pitch: 1.0,
                },
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error("TTS API Error:", error);
            // Fallback to standard voice
            if (error.error?.code === 400 || error.error?.code === 403) {
                const fallbackResponse = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        input: { text },
                        voice: { languageCode, name: "ko-KR-Standard-A" },
                        audioConfig: { audioEncoding: "MP3" },
                    })
                });
                if (fallbackResponse.ok) {
                    const fallbackData = await fallbackResponse.json();
                    // 캐시 저장
                    cleanOldCache();
                    audioCache.set(cacheKey, {
                        audioContent: fallbackData.audioContent,
                        timestamp: Date.now()
                    });
                    return NextResponse.json({ audioContent: fallbackData.audioContent });
                }
            }
            return NextResponse.json({ error: error.error?.message || "TTS Request failed" }, { status: response.status });
        }

        const data = await response.json();

        // 캐시 저장
        cleanOldCache();
        audioCache.set(cacheKey, { audioContent: data.audioContent, timestamp: Date.now() });

        return NextResponse.json({ audioContent: data.audioContent });

    } catch (error) {
        console.error("TTS Handler Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
