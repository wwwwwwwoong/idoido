"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Button, Input, Card } from "@/components";
import StoryFlowLayout from "@/components/layout/StoryFlowLayout";
import { Eraser, Pencil, ChevronRight, ChevronLeft, RotateCcw, Undo2, User, Heart, Smile, Zap, Edit3 } from "lucide-react";
import { topicSentencesMap, applySentenceTemplate, SentenceOption, PhaseOptions } from "@/data/sentenceOptions";

// 역할 옵션
const roles = [
    { id: "hero", name: "주인공", emoji: "👶", desc: "이야기의 중심 캐릭터", color: "#FFB74D" },
    { id: "helper", name: "도우미", emoji: "🤝", desc: "주인공을 도와주는 친구", color: "#64B5F6" },
];

// 성격 옵션
const personalities = [
    { id: "brave", name: "용감해요", emoji: "🦁" },
    { id: "shy", name: "부끄러워요", emoji: "🙈" },
    { id: "playful", name: "장난꾸러기", emoji: "😜" },
    { id: "kind", name: "착해요", emoji: "💕" },
    { id: "curious", name: "궁금해요", emoji: "🔍" },
];

// 배경 옵션
const backgrounds = [
    { name: "숲", value: "forest", emoji: "🌲" },
    { name: "바다", value: "ocean", emoji: "🌊" },
    { name: "집", value: "home", emoji: "🏠" },
    { name: "하늘", value: "sky", emoji: "☁️" },
    { name: "꿈나라", value: "dream", emoji: "🌙" },
];

// 소품 옵션
const items = [
    { name: "공", value: "ball", emoji: "⚽" },
    { name: "꽃", value: "flower", emoji: "🌸" },
    { name: "별", value: "star", emoji: "⭐" },
    { name: "사과", value: "apple", emoji: "🍎" },
];

// 동작 옵션
const actions = [
    { name: "달리다", value: "run", emoji: "🏃" },
    { name: "먹다", value: "eat", emoji: "🍽️" },
    { name: "놀다", value: "play", emoji: "🎮" },
    { name: "자다", value: "sleep", emoji: "😴" },
];

// 색상 팔레트
const colors = ["#2D2D2D", "#E53935", "#FB8C00", "#FDD835", "#43A047", "#1E88E5", "#8E24AA", "#6D4C41", "#F48FB1", "#4DD0E1"];

// 브러시 크기
const brushSizes = [4, 8, 12, 20];

// 단어 카드 생성
function generateCards(bg: string, item: string, action: string) {
    const bgKo: Record<string, string> = { forest: "숲", ocean: "바다", home: "집", sky: "하늘", dream: "꿈나라" };
    const bgEn: Record<string, string> = { forest: "forest", ocean: "ocean", home: "home", sky: "sky", dream: "dreamland" };
    const itemKo: Record<string, string> = { ball: "공", flower: "꽃", star: "별", apple: "사과" };
    const itemEn: Record<string, string> = { ball: "ball", flower: "flower", star: "star", apple: "apple" };
    const actionKo: Record<string, string> = { run: "달리다", eat: "먹다", play: "놀다", sleep: "자다" };
    const actionEn: Record<string, string> = { run: "run", eat: "eat", play: "play", sleep: "sleep" };
    return [
        { ko: bgKo[bg] || bg, en: bgEn[bg] || bg, order: 0 },
        { ko: itemKo[item] || item, en: itemEn[item] || item, order: 1 },
        { ko: actionKo[action] || action, en: actionEn[action] || action, order: 2 },
    ];
}

function dataUrlToBlob(dataUrl: string): Blob {
    const [meta, base64] = dataUrl.split(",");
    const mime = /data:(.*?);base64/.exec(meta)?.[1] ?? "image/png";
    const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
    return new Blob([bytes], { type: mime });
}

type InnerStep = "role" | "draw" | "scene";

export default function NewScenePage() {
    const router = useRouter();
    const params = useParams();
    const bookId = params.bookId as string;

    const [innerStep, setInnerStep] = useState<InnerStep>("role");
    const [characterId, setCharacterId] = useState<string | null>(null);
    const [existingCharacters, setExistingCharacters] = useState<{ id: string; name: string; role: string | null; imageUrl?: string }[]>([]);
    const [bookTitle, setBookTitle] = useState<string>("");
    const [bookLesson, setBookLesson] = useState<string>("");
    const [sceneCount, setSceneCount] = useState(0);
    const [targetSceneCount, setTargetSceneCount] = useState(5);
    const [previousScenes, setPreviousScenes] = useState<{ id: string; summary?: string; backgroundId?: string; itemId?: string; verbId?: string }[]>([]);
    const [storyOutline, setStoryOutline] = useState<{ phase: string; emoji: string; description: string }[]>([]);
    const [topicId, setTopicId] = useState<string | null>(null);

    // 문장 선택 모드
    const [sentenceMode, setSentenceMode] = useState<"select" | "custom">("select");
    const [selectedSentence, setSelectedSentence] = useState<SentenceOption | null>(null);

    // 캐릭터 정보
    const [characterRole, setCharacterRole] = useState("");
    const [characterName, setCharacterName] = useState("");
    const [characterPersonality, setCharacterPersonality] = useState("");

    // 그리기 상태
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const historyRef = useRef<ImageData[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [selectedColor, setSelectedColor] = useState("#2D2D2D");
    const [brushSize, setBrushSize] = useState(8);
    const [isEraser, setIsEraser] = useState(false);

    // 장면 선택 상태
    const [background, setBackground] = useState("");
    const [item, setItem] = useState("");
    const [action, setAction] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [userId, setUserId] = useState<string | null>(null);

    const supabase = useMemo(() => createClient(), []);

    // 유저 및 기존 캐릭터 로드
    useEffect(() => {
        async function init() {
            const { data } = await supabase.auth.getUser();
            if (!data.user) {
                router.push("/login");
                return;
            }

            if (bookId === "new") {
                router.replace("/create/draw");
                return;
            }

            setUserId(data.user.id);

            const [charRes, bookRes] = await Promise.all([
                fetch("/api/characters"),
                fetch(`/api/books/${bookId}`),
            ]);

            if (charRes.ok) {
                const { characters } = await charRes.json();
                setExistingCharacters(characters || []);
            }
            if (bookRes.ok) {
                const { book } = await bookRes.json();
                setBookTitle(book?.title || "");
                setBookLesson(book?.lesson || "");
                setSceneCount((book?.scenes?.length || 0) + 1); // 새 장면 번호
                setTargetSceneCount(book?.targetSceneCount || 5);
                // 이전 장면들 저장
                if (book?.scenes?.length > 0) {
                    setPreviousScenes(book.scenes.map((s: { id: string; storyText?: string; backgroundId?: string; itemId?: string; verbId?: string }) => ({
                        id: s.id,
                        summary: s.storyText,
                        backgroundId: s.backgroundId,
                        itemId: s.itemId,
                        verbId: s.verbId,
                    })));
                }
                // 스토리 뼈대 저장
                if (book?.outline && Array.isArray(book.outline)) {
                    setStoryOutline(book.outline);
                }
                // 주제 ID 저장
                if (book?.topicId) {
                    setTopicId(book.topicId);
                }
            }
        }
        init();
    }, [supabase, router, bookId]);

    // 캔버스 초기화
    const initCanvas = useCallback(() => {
        const c = canvasRef.current;
        if (!c) return;
        const ctx = c.getContext("2d");
        if (!ctx) return;
        ctx.fillStyle = "#FFFEFA";
        ctx.fillRect(0, 0, c.width, c.height);
        // 히스토리 초기화
        historyRef.current = [ctx.getImageData(0, 0, c.width, c.height)];
        setHistoryIndex(0);
    }, []);

    // 히스토리 저장
    const saveHistory = useCallback(() => {
        const c = canvasRef.current;
        if (!c) return;
        const ctx = c.getContext("2d");
        if (!ctx) return;
        const imageData = ctx.getImageData(0, 0, c.width, c.height);
        const newHistory = historyRef.current.slice(0, historyIndex + 1);
        newHistory.push(imageData);
        if (newHistory.length > 20) newHistory.shift(); // 최대 20개
        historyRef.current = newHistory;
        setHistoryIndex(newHistory.length - 1);
    }, [historyIndex]);

    // Undo
    const undo = useCallback(() => {
        if (historyIndex <= 0) return;
        const c = canvasRef.current;
        if (!c) return;
        const ctx = c.getContext("2d");
        if (!ctx) return;
        const newIndex = historyIndex - 1;
        ctx.putImageData(historyRef.current[newIndex], 0, 0);
        setHistoryIndex(newIndex);
    }, [historyIndex]);

    useEffect(() => {
        if (innerStep === "draw" && !characterId) initCanvas();
    }, [innerStep, characterId, initCanvas]);

    // 캔버스 그리기
    useEffect(() => {
        const c = canvasRef.current;
        if (!c || innerStep !== "draw" || characterId) return;

        let isDrawing = false;
        let lastX = 0, lastY = 0;

        const getCoords = (e: MouseEvent | TouchEvent) => {
            const rect = c.getBoundingClientRect();
            const scaleX = c.width / rect.width;
            const scaleY = c.height / rect.height;
            if ("touches" in e) {
                return { x: (e.touches[0].clientX - rect.left) * scaleX, y: (e.touches[0].clientY - rect.top) * scaleY };
            }
            return { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY };
        };

        const start = (e: MouseEvent | TouchEvent) => { isDrawing = true; const { x, y } = getCoords(e); lastX = x; lastY = y; };
        const draw = (e: MouseEvent | TouchEvent) => {
            if (!isDrawing) return;
            e.preventDefault();
            const ctx = c.getContext("2d");
            if (!ctx) return;
            const { x, y } = getCoords(e);
            ctx.lineWidth = isEraser ? brushSize * 2 : brushSize;
            ctx.lineCap = "round";
            ctx.strokeStyle = isEraser ? "#FFFEFA" : selectedColor;
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.stroke();
            lastX = x; lastY = y;
        };
        const stop = () => {
            if (isDrawing) {
                saveHistory();
            }
            isDrawing = false;
        };

        c.addEventListener("mousedown", start);
        c.addEventListener("mousemove", draw);
        c.addEventListener("mouseup", stop);
        c.addEventListener("mouseleave", stop);
        c.addEventListener("touchstart", start, { passive: false });
        c.addEventListener("touchmove", draw, { passive: false });
        c.addEventListener("touchend", stop);

        return () => {
            c.removeEventListener("mousedown", start);
            c.removeEventListener("mousemove", draw);
            c.removeEventListener("mouseup", stop);
            c.removeEventListener("mouseleave", stop);
            c.removeEventListener("touchstart", start);
            c.removeEventListener("touchmove", draw);
            c.removeEventListener("touchend", stop);
        };
    }, [innerStep, characterId, selectedColor, isEraser, brushSize, saveHistory]);

    // 캐릭터 저장
    const saveCharacter = async () => {
        if (!userId || !characterName.trim()) {
            setError("캐릭터 이름을 입력해주세요.");
            return;
        }
        const c = canvasRef.current;
        if (!c) return;

        setIsLoading(true);
        setError("");

        try {
            const dataUrl = c.toDataURL("image/png");
            const blob = dataUrlToBlob(dataUrl);
            const randomStr = Math.random().toString(36).substring(2, 8);
            const fileName = `${userId}/${Date.now()}_${randomStr}.png`;

            const { error: uploadError } = await supabase.storage
                .from("doodles")
                .upload(fileName, blob, { cacheControl: "3600", upsert: false });
            if (uploadError) throw uploadError;

            const res = await fetch("/api/characters", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: characterName.trim(),
                    doodlePath: fileName,
                    role: characterRole,
                    personality: characterPersonality,
                }),
            });
            if (!res.ok) throw new Error("캐릭터 생성 실패");

            const { character } = await res.json();
            setCharacterId(character.id);
            setInnerStep("scene");
        } catch (err) {
            setError(err instanceof Error ? err.message : "오류 발생");
        } finally {
            setIsLoading(false);
        }
    };

    // 장면 저장
    const saveScene = async () => {
        if (!characterId || !background || !item || !action) return;

        setIsLoading(true);
        setError("");

        try {
            const cards = generateCards(background, item, action);
            const res = await fetch("/api/scenes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    characterId,
                    backgroundId: background,
                    itemId: item,
                    verbId: action,
                    resultChoice: "SUCCESS",
                    bookId,
                    cards,
                }),
            });
            if (!res.ok) throw new Error("장면 생성 실패");

            const { scene } = await res.json();

            // 문장 선택 모드면 선택한 문장을 직접 저장, 나만의 문장 모드면 LLM 생성
            const selectedChar = existingCharacters.find(c => c.id === characterId);
            const charName = selectedChar?.name || characterName || "주인공";

            if (sentenceMode === "select" && selectedSentence) {
                // 선택한 문장을 직접 저장
                const storyText = applySentenceTemplate(selectedSentence.text, charName);
                await fetch(`/api/scenes/${scene.id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ storyText }),
                });
                console.log("Saved sentence:", storyText);
            } else {
                // LLM 스토리 텍스트 생성 (나만의 문장 모드)
                const storyRes = await fetch("/api/story/generate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        bookId,
                        sceneId: scene.id,
                        characterName: charName,
                        characterRole: selectedChar?.role || characterRole,
                        backgroundId: background,
                        itemId: item,
                        verbId: action,
                        lesson: bookLesson,
                        scenePhase: storyOutline[sceneCount - 1]?.phase || null,
                        scenePhaseHint: storyOutline[sceneCount - 1]?.description || null,
                        previousScenes: previousScenes.map(s => ({ summary: s.summary })),
                    }),
                });

                if (storyRes.ok) {
                    const storyData = await storyRes.json();
                    console.log("Generated story:", storyData.storyText);
                }
            }

            router.push(`/story/${bookId}`);
        } catch (err) {
            setError(err instanceof Error ? err.message : "오류 발생");
        } finally {
            setIsLoading(false);
        }
    };

    const currentFlowStep = innerStep === "role" ? 2 : innerStep === "draw" ? 2 : 3;

    const getStepTitle = () => {
        if (innerStep === "role") return "캐릭터 역할 선택";
        if (innerStep === "draw") return "캐릭터 그리기";
        return "장면 만들기";
    };

    const getStepSubtitle = () => {
        if (innerStep === "role") return "이야기에서 어떤 역할을 할까요?";
        if (innerStep === "draw") return "캔버스에 캐릭터를 그려주세요";
        return "배경, 소품, 동작을 선택해주세요";
    };

    return (
        <StoryFlowLayout
            currentStep={currentFlowStep}
            title={getStepTitle()}
            subtitle={getStepSubtitle()}
            backHref={`/story/${bookId}`}
            bookTitle={bookTitle}
            sceneInfo={sceneCount > 0 ? { current: sceneCount, total: targetSceneCount } : undefined}
        >
            {/* 교훈 표시 */}
            {bookLesson && innerStep === "role" && (
                <div
                    style={{
                        padding: "0.75rem 1rem",
                        backgroundColor: "#E8F5E9",
                        borderRadius: "8px",
                        marginBottom: "1.25rem",
                        fontSize: "0.8rem",
                        color: "#2E7D32",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}
                >
                    💡 <span style={{ fontWeight: 500 }}>이야기의 교훈:</span> {bookLesson}
                </div>
            )}

            {/* 이전 장면 컨텍스트 표시 */}
            {previousScenes.length > 0 && innerStep === "role" && (
                <div
                    style={{
                        padding: "0.875rem 1rem",
                        backgroundColor: "#FFF8E1",
                        border: "1px solid #FFE082",
                        borderRadius: "10px",
                        marginBottom: "1.25rem",
                    }}
                >
                    <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#F57C00", marginBottom: "0.5rem" }}>
                        📖 지금까지의 이야기 ({previousScenes.length}장면)
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#5D4037", lineHeight: 1.5 }}>
                        {previousScenes.slice(-2).map((scene, i) => (
                            <div key={scene.id} style={{ display: "flex", gap: "0.375rem", marginBottom: i < previousScenes.slice(-2).length - 1 ? "0.375rem" : 0 }}>
                                <span style={{ opacity: 0.6 }}>{previousScenes.length - 1 + i - previousScenes.slice(-2).length + 2}.</span>
                                <span>
                                    {scene.summary || `${backgrounds.find(b => b.value === scene.backgroundId)?.name || scene.backgroundId}에서 ${items.find(it => it.value === scene.itemId)?.name || scene.itemId}을 가지고 ${actions.find(a => a.value === scene.verbId)?.name || scene.verbId}`}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "#8D6E63", marginTop: "0.5rem", fontStyle: "italic" }}>
                        이어서 장면 {sceneCount}을(를) 만들어주세요!
                    </div>
                </div>
            )}
            {innerStep === "role" && !characterId && (
                <>
                    {/* 기존 캐릭터 선택 - 수평 스크롤 캐러셀 */}
                    {existingCharacters.length > 0 && (
                        <section style={{ marginBottom: "1.5rem" }}>
                            <h3 style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.75rem", color: "#666" }}>
                                기존 캐릭터 사용
                            </h3>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "0.75rem",
                                    overflowX: "auto",
                                    paddingBottom: "0.5rem",
                                    scrollSnapType: "x mandatory",
                                    WebkitOverflowScrolling: "touch",
                                }}
                            >
                                {existingCharacters.map((char) => (
                                    <button
                                        key={char.id}
                                        onClick={() => { setCharacterId(char.id); setInnerStep("scene"); }}
                                        style={{
                                            flexShrink: 0,
                                            width: "80px",
                                            padding: "0.5rem",
                                            border: "2px solid #E5E5E5",
                                            borderRadius: "12px",
                                            backgroundColor: "#FFF",
                                            cursor: "pointer",
                                            textAlign: "center",
                                            scrollSnapAlign: "start",
                                            transition: "all 150ms ease",
                                        }}
                                    >
                                        {/* 캐릭터 이미지 */}
                                        <div
                                            style={{
                                                width: "56px",
                                                height: "56px",
                                                margin: "0 auto 0.375rem",
                                                borderRadius: "8px",
                                                backgroundColor: "#F5F5F5",
                                                overflow: "hidden",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            {char.imageUrl ? (
                                                <img
                                                    src={char.imageUrl}
                                                    alt={char.name || ""}
                                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                />
                                            ) : (
                                                <span style={{ fontSize: "1.5rem" }}>
                                                    {char.role === "hero" ? "👶" : char.role === "helper" ? "🤝" : "🎨"}
                                                </span>
                                            )}
                                        </div>
                                        {/* 캐릭터 이름 */}
                                        <div style={{ fontSize: "0.7rem", fontWeight: 500, color: "#333", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                            {char.name || "이름 없음"}
                                        </div>
                                        {/* 역할 */}
                                        <div style={{ fontSize: "0.6rem", color: "#999" }}>
                                            {char.role === "hero" && "주인공"}
                                            {char.role === "helper" && "도우미"}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* 새 캐릭터 만들기 - 역할 선택 */}
                    <section style={{ marginBottom: "1.5rem" }}>
                        <h3 style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.75rem", color: "#666" }}>
                            {existingCharacters.length > 0 ? "새 캐릭터 만들기" : "역할 선택"}
                        </h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}>
                            {roles.map((role) => {
                                const isSelected = characterRole === role.id;
                                return (
                                    <button
                                        key={role.id}
                                        onClick={() => setCharacterRole(role.id)}
                                        style={{
                                            padding: "1rem",
                                            border: isSelected ? `2px solid ${role.color}` : "2px solid var(--border)",
                                            borderRadius: "12px",
                                            backgroundColor: isSelected ? `${role.color}15` : "var(--card)",
                                            cursor: "pointer",
                                            textAlign: "center",
                                        }}
                                    >
                                        <div style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>{role.emoji}</div>
                                        <div style={{ fontWeight: 600, fontSize: "0.9rem", color: isSelected ? role.color : "var(--foreground)" }}>{role.name}</div>
                                        <div style={{ fontSize: "0.7rem", color: "var(--muted-foreground)" }}>{role.desc}</div>
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    {/* 성격 선택 */}
                    <section style={{ marginBottom: "1.5rem" }}>
                        <h3 style={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.75rem" }}>
                            성격 (선택)
                        </h3>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {personalities.map((p) => {
                                const isSelected = characterPersonality === p.id;
                                return (
                                    <button
                                        key={p.id}
                                        onClick={() => setCharacterPersonality(isSelected ? "" : p.id)}
                                        style={{
                                            padding: "0.5rem 0.875rem",
                                            border: isSelected ? "2px solid var(--foreground)" : "2px solid var(--border)",
                                            borderRadius: "9999px",
                                            backgroundColor: isSelected ? "var(--foreground)" : "var(--card)",
                                            color: isSelected ? "var(--background)" : "var(--foreground)",
                                            cursor: "pointer",
                                            fontSize: "0.8rem",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {p.emoji} {p.name}
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => setInnerStep("draw")}
                        disabled={!characterRole}
                        style={{ width: "100%" }}
                    >
                        캐릭터 그리기 <ChevronRight size={18} />
                    </Button>
                </>
            )}

            {/* 그리기 단계 */}
            {innerStep === "draw" && !characterId && (
                <>
                    {/* 도구 바 */}
                    <div style={{ display: "flex", gap: "0.375rem", marginBottom: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
                        {/* 펜/지우개 */}
                        <button onClick={() => setIsEraser(false)} style={{ padding: "0.5rem", border: "2px solid var(--border)", borderRadius: "8px", backgroundColor: !isEraser ? "var(--foreground)" : "var(--card)", color: !isEraser ? "var(--background)" : "var(--foreground)", cursor: "pointer" }}>
                            <Pencil size={16} />
                        </button>
                        <button onClick={() => setIsEraser(true)} style={{ padding: "0.5rem", border: "2px solid var(--border)", borderRadius: "8px", backgroundColor: isEraser ? "var(--foreground)" : "var(--card)", color: isEraser ? "var(--background)" : "var(--foreground)", cursor: "pointer" }}>
                            <Eraser size={16} />
                        </button>

                        <div style={{ width: "1px", height: "20px", backgroundColor: "var(--border)", margin: "0 0.25rem" }} />

                        {/* 브러시 크기 */}
                        {brushSizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setBrushSize(size)}
                                style={{
                                    width: "28px",
                                    height: "28px",
                                    border: brushSize === size ? "2px solid var(--foreground)" : "2px solid var(--border)",
                                    borderRadius: "6px",
                                    backgroundColor: "var(--card)",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <div style={{ width: size, height: size, borderRadius: "50%", backgroundColor: "var(--foreground)" }} />
                            </button>
                        ))}

                        <div style={{ width: "1px", height: "20px", backgroundColor: "var(--border)", margin: "0 0.25rem" }} />

                        {/* Undo */}
                        <button onClick={undo} disabled={historyIndex <= 0} style={{ padding: "0.5rem", border: "2px solid var(--border)", borderRadius: "8px", backgroundColor: "var(--card)", color: historyIndex <= 0 ? "var(--muted-foreground)" : "var(--foreground)", cursor: historyIndex <= 0 ? "not-allowed" : "pointer" }}>
                            <Undo2 size={16} />
                        </button>

                        {/* 초기화 */}
                        <button onClick={initCanvas} style={{ padding: "0.5rem", border: "2px solid var(--border)", borderRadius: "8px", backgroundColor: "var(--card)", cursor: "pointer" }}>
                            <RotateCcw size={16} />
                        </button>
                    </div>

                    {/* 색상 팔레트 */}
                    <div style={{ display: "flex", gap: "0.25rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                        {colors.map((c) => (
                            <button
                                key={c}
                                onClick={() => { setSelectedColor(c); setIsEraser(false); }}
                                style={{
                                    width: "26px",
                                    height: "26px",
                                    borderRadius: "50%",
                                    backgroundColor: c,
                                    border: selectedColor === c && !isEraser ? "3px solid var(--foreground)" : "2px solid var(--border)",
                                    cursor: "pointer",
                                }}
                            />
                        ))}
                    </div>

                    {/* 캔버스 */}
                    <div style={{ border: "2px solid var(--border)", borderRadius: "12px", overflow: "hidden", marginBottom: "0.75rem" }}>
                        <canvas ref={canvasRef} width={400} height={320} style={{ width: "100%", height: "auto", touchAction: "none", cursor: isEraser ? "cell" : "crosshair", display: "block" }} />
                    </div>

                    {/* 캐릭터 이름 */}
                    <Input
                        type="text"
                        placeholder="캐릭터 이름"
                        value={characterName}
                        onChange={(e) => setCharacterName(e.target.value)}
                        style={{ width: "100%", marginBottom: "0.75rem", textAlign: "center" }}
                    />

                    {/* AI 렌더링 플레이스홀더 (향후 구현) */}
                    <div
                        style={{
                            padding: "1rem",
                            backgroundColor: "#FFF3E0",
                            border: "2px dashed #FFB74D",
                            borderRadius: "12px",
                            marginBottom: "0.75rem",
                            textAlign: "center",
                        }}
                    >
                        <div style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>✨</div>
                        <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "#E65100", marginBottom: "0.25rem" }}>
                            AI 캐릭터 변환 (준비중)
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "#F57C00" }}>
                            🌱 씨앗 1개로 낙서를 귀여운 캐릭터로!
                        </div>
                    </div>

                    {error && <p style={{ color: "red", fontSize: "0.875rem", marginBottom: "0.75rem" }}>{error}</p>}

                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        <Button variant="ghost" onClick={() => setInnerStep("role")} style={{ flex: 1 }}>
                            <ChevronLeft size={16} /> 이전
                        </Button>
                        <Button variant="primary" onClick={saveCharacter} disabled={!characterName.trim() || isLoading} isLoading={isLoading} style={{ flex: 2 }}>
                            다음 <ChevronRight size={16} />
                        </Button>
                    </div>
                </>
            )}

            {/* 장면 단계 */}
            {innerStep === "scene" && (
                <>
                    {/* 이전 장면 요약 */}
                    {previousScenes.length > 0 && previousScenes[previousScenes.length - 1]?.summary && (
                        <div
                            style={{
                                padding: "0.75rem 1rem",
                                backgroundColor: "#FFF3E0",
                                border: "1px solid #FFB74D",
                                borderRadius: "12px",
                                marginBottom: "0.75rem",
                            }}
                        >
                            <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#E65100", marginBottom: "0.25rem" }}>
                                📖 지난 이야기 (장면 {sceneCount - 1})
                            </div>
                            <p style={{ fontSize: "0.8rem", color: "#BF360C", lineHeight: 1.4, margin: 0 }}>
                                "{previousScenes[previousScenes.length - 1].summary}"
                            </p>
                        </div>
                    )}

                    {/* 스토리 가이드 - 현재 장면의 힌트 */}
                    {storyOutline.length > 0 && sceneCount <= storyOutline.length && (
                        <div
                            style={{
                                padding: "0.75rem 1rem",
                                backgroundColor: "#E3F2FD",
                                border: "1px solid #90CAF9",
                                borderRadius: "12px",
                                marginBottom: "1rem",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span style={{ fontSize: "1.25rem" }}>{storyOutline[sceneCount - 1]?.emoji}</span>
                                <div>
                                    <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#1565C0" }}>
                                        장면 {sceneCount}: {storyOutline[sceneCount - 1]?.phase}
                                    </div>
                                    <div style={{ fontSize: "0.7rem", color: "#42A5F5" }}>
                                        {storyOutline[sceneCount - 1]?.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 문장 선택 안내 */}
                    <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem" }}>
                        이 장면에서 무슨 일이 일어날까요?
                    </div>

                    {/* 문장 선택 모드 */}
                    {sentenceMode === "select" && topicId && topicSentencesMap[topicId] && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                            {(() => {
                                const currentPhase = storyOutline[sceneCount - 1]?.phase;
                                const phaseData = topicSentencesMap[topicId]?.find(p => p.phase === currentPhase);
                                const sentences = phaseData?.sentences || [];
                                const charName = existingCharacters.find(c => c.id === characterId)?.name || characterName || "주인공";

                                return sentences.map((sentence) => {
                                    const isSelected = selectedSentence?.id === sentence.id;
                                    const displayText = applySentenceTemplate(sentence.text, charName);

                                    return (
                                        <button
                                            key={sentence.id}
                                            onClick={() => {
                                                setSelectedSentence(sentence);
                                                setBackground(sentence.backgroundId);
                                                setItem(sentence.itemId);
                                                setAction(sentence.verbId);
                                            }}
                                            style={{
                                                padding: "1rem",
                                                border: isSelected ? "2px solid #2D8B5E" : "2px solid var(--border)",
                                                borderRadius: "12px",
                                                backgroundColor: isSelected ? "#E8F5E9" : "var(--card)",
                                                cursor: "pointer",
                                                textAlign: "left",
                                                transition: "all 150ms ease",
                                            }}
                                        >
                                            <p style={{ fontSize: "0.9rem", fontWeight: 500, lineHeight: 1.5, color: isSelected ? "#2E7D32" : "var(--foreground)" }}>
                                                "{displayText}"
                                            </p>
                                            {isSelected && (
                                                <div style={{ marginTop: "0.5rem", fontSize: "0.7rem", color: "#43A047" }}>
                                                    ✓ 선택됨
                                                </div>
                                            )}
                                        </button>
                                    );
                                });
                            })()}

                            {/* 문장 데이터가 없을 때 */}
                            {!topicSentencesMap[topicId]?.find(p => p.phase === storyOutline[sceneCount - 1]?.phase)?.sentences?.length && (
                                <div style={{ padding: "1rem", backgroundColor: "var(--muted)", borderRadius: "8px", textAlign: "center", fontSize: "0.85rem", color: "var(--muted-foreground)" }}>
                                    이 단계의 문장 옵션이 아직 없어요.<br />
                                    <button onClick={() => setSentenceMode("custom")} style={{ marginTop: "0.5rem", color: "#1976D2", textDecoration: "underline", background: "none", border: "none", cursor: "pointer" }}>
                                        나만의 문장 만들기로 전환
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* 문장 데이터가 없는 주제 */}
                    {(!topicId || !topicSentencesMap[topicId]) && (
                        <div style={{ padding: "1.5rem", backgroundColor: "var(--muted)", borderRadius: "12px", textAlign: "center" }}>
                            <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>
                                이 주제의 문장이 아직 준비 중이에요. 😊
                            </p>
                        </div>
                    )}

                    {/* 선택된 문장 미리보기 (문장 선택 모드) */}
                    {sentenceMode === "select" && selectedSentence && (
                        <div style={{ padding: "1rem", backgroundColor: "#E8F5E9", border: "1px solid #A5D6A7", borderRadius: "12px", marginTop: "1rem", marginBottom: "1rem" }}>
                            <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#2E7D32", marginBottom: "0.375rem" }}>선택한 문장</div>
                            <p style={{ fontWeight: 500, fontSize: "0.9rem", color: "#1B5E20" }}>
                                "{applySentenceTemplate(selectedSentence.text, existingCharacters.find(c => c.id === characterId)?.name || characterName || "주인공")}"
                            </p>
                        </div>
                    )}

                    {error && <p style={{ color: "red", fontSize: "0.875rem", marginBottom: "0.75rem" }}>{error}</p>}

                    <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
                        <Button
                            variant="ghost"
                            onClick={() => {
                                setCharacterId(null);
                                setInnerStep("role");
                            }}
                            style={{ flex: 1 }}
                        >
                            <ChevronLeft size={16} /> 이전
                        </Button>
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={saveScene}
                            disabled={!selectedSentence || isLoading}
                            isLoading={isLoading}
                            style={{ flex: 2 }}
                        >
                            장면 저장하기
                        </Button>
                    </div>
                </>
            )}
        </StoryFlowLayout>
    );
}
