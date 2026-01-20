"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Mic, Play, Pause, RotateCcw, Check, BookOpen, GraduationCap, ChevronRight, Home, Volume2, StopCircle, Trash2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import StoryFlowLayout from "@/components/layout/StoryFlowLayout";
import Helper from "@/components/create/Helper";
import { useRecorder } from "@/hooks/useRecorder";

// Mock 데이터 (원래는 이전 단계 데이터에서 생성해야 함)
const mockLearningWords = [
    { id: 1, word: "용기", meaning: "무서워도 해내는 마음" },
    { id: 2, word: "친구", meaning: "함께하면 행복해지는 사람" },
    { id: 3, word: "모험", meaning: "새로운 곳을 탐험하는 것" },
];

const mockPagesFallback = [
    { id: 1, text: "토토가 숲 속을 걸었어요." },
    { id: 2, text: "나무 사이에서 반짝이는 것이 보였어요." },
    { id: 3, text: "용기를 내서 다가가 보았어요." },
    { id: 4, text: "행복하게 마무리되었답니다." },
];

export default function CreateRecordPage() {
    const router = useRouter();
    const { isRecording, startRecording, stopRecording, audioUrl, clearAudio, error: recorderError } = useRecorder();

    const [characterName, setCharacterName] = useState("토토");
    const [storyTitle, setStoryTitle] = useState("나의 동화책");
    const [storyPages, setStoryPages] = useState<{ id: number; text: string }[]>([]);

    const [activeTab, setActiveTab] = useState<"audiobook" | "words">("audiobook");

    // 녹음 상태 관리
    const [currentRecordId, setCurrentRecordId] = useState<number | null>(null);
    const [currentRecordType, setCurrentRecordType] = useState<"page" | "word" | null>(null);

    // 저장된 오디오 (ID -> Blob URL)
    const [pageAudios, setPageAudios] = useState<Record<number, string>>({});
    const [wordAudios, setWordAudios] = useState<Record<number, string>>({});

    // 재생 상태
    const [playingId, setPlayingId] = useState<number | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const charData = localStorage.getItem("create_character");
        if (charData) {
            const parsed = JSON.parse(charData);
            setCharacterName(parsed.name || "토토");
        }
        const storyData = localStorage.getItem("create_story");
        if (storyData) {
            const parsed = JSON.parse(storyData);
            setStoryTitle(parsed.title || "나의 동화책");
            if (parsed.pages && Array.isArray(parsed.pages)) {
                setStoryPages(parsed.pages.map((p: any, idx: number) => ({ id: idx + 1, text: p.content })));
            } else {
                setStoryPages(mockPagesFallback);
            }
        } else {
            setStoryPages(mockPagesFallback);
        }
    }, []);

    // 녹음 완료 후 URL 처리
    useEffect(() => {
        if (audioUrl && currentRecordId !== null && currentRecordType) {
            if (currentRecordType === "page") {
                setPageAudios(prev => ({ ...prev, [currentRecordId]: audioUrl }));
            } else {
                setWordAudios(prev => ({ ...prev, [currentRecordId]: audioUrl }));
            }
            // 상태 초기화는 하지 않음 (UI 반영)
        }
    }, [audioUrl, currentRecordId, currentRecordType]);

    const handleStartRecord = async (id: number, type: "page" | "word") => {
        if (playingId) handleStopPlay();

        setCurrentRecordId(id);
        setCurrentRecordType(type);
        await startRecording();
    };

    const handleStopRecord = async () => {
        stopRecording();
        // audioUrl 업데이트는 useEffect에서 처리
    };

    const handlePlay = (id: number, type: "page" | "word") => {
        if (playingId) handleStopPlay();

        const url = type === "page" ? pageAudios[id] : wordAudios[id];
        if (url) {
            const audio = new Audio(url);
            audio.onended = () => setPlayingId(null);
            audio.play();
            audioRef.current = audio;
            setPlayingId(id);
        }
    };

    const handleStopPlay = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
        setPlayingId(null);
    };

    const handleDeleteAudio = (id: number, type: "page" | "word") => {
        if (type === "page") {
            const newAudios = { ...pageAudios };
            // URL.revokeObjectURL(newAudios[id]); // 메모리 해제
            delete newAudios[id];
            setPageAudios(newAudios);
        } else {
            const newAudios = { ...wordAudios };
            delete newAudios[id];
            setWordAudios(newAudios);
        }
    };

    const audiobookProgress = Object.keys(pageAudios).length;
    const wordsProgress = Object.keys(wordAudios).length;

    const totalPages = storyPages.length;

    return (
        <StoryFlowLayout
            currentStep={6}
            title="목소리 입히기"
            subtitle="동화책에 생명을 불어넣어봐!"
            backHref="/create/complete"
            helper={
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Helper
                        character="pebble"
                        message={isRecording ? "녹음 중이야! 크게 읽어봐~" : recorderError ? "오런, 마이크가 안 되네?" : playingId ? "잘 들어봐~" : audiobookProgress === totalPages ? "와우! 모든 페이지를 녹음했어!" : `${characterName}의 이야기를 직접 읽어줘!`}
                        position="right"
                        style={{ marginBottom: 0 }}
                    />
                </motion.div>
            }
        >
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "600px",
                margin: "0 auto",
                padding: "1rem 1rem",
            }}>


                {recorderError && (
                    <div style={{ padding: "0.75rem", backgroundColor: "#FEF2F2", color: "#B91C1C", borderRadius: "8px", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                        <AlertCircle size={16} /> {recorderError}
                    </div>
                )}

                {/* 탭 선택 */}
                <div style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                    backgroundColor: "#F3F4F6",
                    borderRadius: "12px",
                    padding: "0.25rem",
                }}>
                    <button
                        onClick={() => setActiveTab("audiobook")}
                        style={{
                            flex: 1,
                            padding: "0.75rem",
                            borderRadius: "10px",
                            border: "none",
                            backgroundColor: activeTab === "audiobook" ? "white" : "transparent",
                            fontWeight: 600,
                            fontSize: "0.9rem",
                            color: activeTab === "audiobook" ? "#8B5CF6" : "#6B7280",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.375rem",
                            boxShadow: activeTab === "audiobook" ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                        }}
                    >
                        <BookOpen size={16} />
                        오디오북
                        {audiobookProgress > 0 && (
                            <span style={{
                                backgroundColor: "#8B5CF6",
                                color: "white",
                                padding: "0.125rem 0.375rem",
                                borderRadius: "9999px",
                                fontSize: "0.7rem",
                            }}>
                                {audiobookProgress}/{totalPages}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab("words")}
                        style={{
                            flex: 1,
                            padding: "0.75rem",
                            borderRadius: "10px",
                            border: "none",
                            backgroundColor: activeTab === "words" ? "white" : "transparent",
                            fontWeight: 600,
                            fontSize: "0.9rem",
                            color: activeTab === "words" ? "#F59E0B" : "#6B7280",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.375rem",
                            boxShadow: activeTab === "words" ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                        }}
                    >
                        <GraduationCap size={16} />
                        학습 카드
                        {wordsProgress > 0 && (
                            <span style={{
                                backgroundColor: "#F59E0B",
                                color: "white",
                                padding: "0.125rem 0.375rem",
                                borderRadius: "9999px",
                                fontSize: "0.7rem",
                            }}>
                                {wordsProgress}/{mockLearningWords.length}
                            </span>
                        )}
                    </button>
                </div>

                {/* 오디오북 탭 */}
                <AnimatePresence mode="wait">
                    {activeTab === "audiobook" && (
                        <motion.div
                            key="audiobook"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
                        >
                            {storyPages.map((page) => {
                                const audio = pageAudios[page.id];
                                const isRecorded = !!audio;
                                const isCurrentRecording = isRecording && currentRecordId === page.id && currentRecordType === "page";
                                const isPlaying = playingId === page.id && currentRecordType === "page"; // 재생 타입 구분 필요하지만 간단히 ID로

                                return (
                                    <motion.div
                                        key={page.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        style={{
                                            padding: "1rem",
                                            backgroundColor: isRecorded ? "#F3F4F6" : "white",
                                            border: isCurrentRecording ? "2px solid #EF4444" : "1.5px solid #E5E7EB",
                                            borderRadius: "12px",
                                        }}
                                    >
                                        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                                            <span style={{
                                                width: "24px",
                                                height: "24px",
                                                borderRadius: "50%",
                                                backgroundColor: isRecorded ? "#22C55E" : "#E5E7EB",
                                                color: isRecorded ? "white" : "#6B7280",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "0.75rem",
                                                fontWeight: 600,
                                                flexShrink: 0,
                                            }}>
                                                {isRecorded ? <Check size={14} /> : page.id}
                                            </span>
                                            <div style={{ flex: 1 }}>
                                                <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.5 }}>
                                                    {page.text}
                                                </p>
                                            </div>

                                            <div style={{ display: "flex", gap: "0.5rem" }}>
                                                {/* 녹음/정지 버튼 */}
                                                <button
                                                    onClick={() => isCurrentRecording ? handleStopRecord() : handleStartRecord(page.id, "page")}
                                                    disabled={isRecording && !isCurrentRecording}
                                                    style={{
                                                        width: "40px",
                                                        height: "40px",
                                                        borderRadius: "50%",
                                                        border: "none",
                                                        backgroundColor: isCurrentRecording ? "#EF4444" : isRecorded ? "#E5E7EB" : "#8B5CF6",
                                                        color: isCurrentRecording ? "white" : isRecorded ? "#6B7280" : "white",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        cursor: isRecording && !isCurrentRecording ? "not-allowed" : "pointer",
                                                        opacity: isRecording && !isCurrentRecording ? 0.3 : 1,
                                                    }}
                                                >
                                                    {isCurrentRecording ? (
                                                        <StopCircle size={20} />
                                                    ) : (
                                                        <Mic size={20} />
                                                    )}
                                                </button>

                                                {/* 재생 버튼 (녹음된 경우만) */}
                                                {isRecorded && !isCurrentRecording && (
                                                    <>
                                                        <button
                                                            onClick={() => isPlaying ? handleStopPlay() : handlePlay(page.id, "page")}
                                                            style={{
                                                                width: "40px",
                                                                height: "40px",
                                                                borderRadius: "50%",
                                                                border: "1px solid #E5E7EB",
                                                                backgroundColor: "white",
                                                                color: isPlaying ? "#8B5CF6" : "#4B5563",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteAudio(page.id, "page")}
                                                            style={{
                                                                width: "40px",
                                                                height: "40px",
                                                                borderRadius: "50%",
                                                                border: "none",
                                                                backgroundColor: "transparent",
                                                                color: "#EF4444",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}

                    {/* 학습 카드 탭 (생략 없이 동일 로직 적용) */}
                    {activeTab === "words" && (
                        <motion.div
                            key="words"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "0.75rem",
                            }}
                        >
                            {mockLearningWords.map((word) => {
                                const audio = wordAudios[word.id];
                                const isRecorded = !!audio;
                                const isCurrentRecording = isRecording && currentRecordId === word.id && currentRecordType === "word";
                                const isPlaying = playingId === word.id && !currentRecordType; // word 타입 구분 필요

                                return (
                                    <motion.div
                                        key={word.id}
                                        style={{
                                            padding: "1rem",
                                            backgroundColor: isRecorded ? "#FEF3C7" : "white",
                                            border: isCurrentRecording ? "2px solid #EF4444" : isRecorded ? "2px solid #F59E0B" : "1.5px solid #E5E7EB",
                                            borderRadius: "16px",
                                            textAlign: "center",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            gap: "0.5rem"
                                        }}
                                    >
                                        <p style={{ fontWeight: 700, fontSize: "1.1rem", color: "#374151" }}>
                                            {word.word}
                                        </p>
                                        <p style={{ fontSize: "0.75rem", color: "#6B7280" }}>
                                            {word.meaning}
                                        </p>

                                        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                                            <button
                                                onClick={() => isCurrentRecording ? handleStopRecord() : handleStartRecord(word.id, "word")}
                                                className="record-btn"
                                                disabled={isRecording && !isCurrentRecording}
                                                style={{
                                                    width: "36px",
                                                    height: "36px",
                                                    borderRadius: "50%",
                                                    border: "none",
                                                    backgroundColor: isCurrentRecording ? "#EF4444" : isRecorded ? "#F59E0B" : "#F3F4F6",
                                                    color: isCurrentRecording ? "white" : isRecorded ? "white" : "#6B7280",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                {isCurrentRecording ? <StopCircle size={16} /> : <Mic size={16} />}
                                            </button>

                                            {isRecorded && !isCurrentRecording && (
                                                <button
                                                    onClick={() => {
                                                        const audio = new Audio(wordAudios[word.id]);
                                                        audio.play();
                                                    }}
                                                    style={{
                                                        width: "36px",
                                                        height: "36px",
                                                        borderRadius: "50%",
                                                        backgroundColor: "white",
                                                        border: "1px solid #E5E7EB",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        cursor: "pointer"
                                                    }}
                                                >
                                                    <Volume2 size={16} color="#F59E0B" />
                                                </button>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 버튼들 */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "2rem" }}>
                    <Link href="/my">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                                variant="primary"
                                size="lg"
                                style={{
                                    width: "100%",
                                    height: "52px",
                                    borderRadius: "14px",
                                    background: "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)",
                                }}
                            >
                                <BookOpen size={20} /> 마이 페이지로 가기 <ChevronRight size={18} />
                            </Button>
                        </motion.div>
                    </Link>

                    <Link href="/">
                        <Button variant="ghost" style={{ width: "100%", height: "44px", borderRadius: "12px" }}>
                            <Home size={18} /> 홈으로
                        </Button>
                    </Link>
                </div>
            </div>
        </StoryFlowLayout>
    );
}
