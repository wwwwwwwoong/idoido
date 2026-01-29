"use client";

import { useState, useRef } from "react";
import { Button } from "@/components";
import { Volume2, Loader2, Square } from "lucide-react";

interface Props {
    text: string;
    label?: string;
    autoPlay?: boolean;
}

export default function ReadAloudButton({ text, label = "전체 읽기", autoPlay = false }: Props) {
    const [isLoading, setIsLoading] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handlePlay = async () => {
        if (isPlaying) {
            audioRef.current?.pause();
            audioRef.current = null;
            setIsPlaying(false);
            return;
        }

        setIsLoading(true);

        try {
            const res = await fetch("/api/tts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to synthesize speech");
            }

            if (data.audioContent) {
                const audio = new Audio(`data:audio/mp3;base64,${data.audioContent}`);
                audioRef.current = audio;

                audio.onended = () => setIsPlaying(false);
                audio.onpause = () => setIsPlaying(false);
                audio.onplay = () => setIsPlaying(true);

                await audio.play();
            }
        } catch (error) {
            console.error("TTS Playback Error:", error);
            alert("음성 재생 중 오류가 발생했습니다.");
            setIsPlaying(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button
            variant={isPlaying ? "outline" : "primary"}
            onClick={handlePlay}
            disabled={isLoading || !text}
        >
            {isLoading ? (
                <Loader2 className="animate-spin mr-2" size={18} />
            ) : isPlaying ? (
                <Square className="mr-2" size={18} fill="currentColor" />
            ) : (
                <Volume2 className="mr-2" size={18} />
            )}
            {isPlaying ? "멈추기" : label}
        </Button>
    );
}
