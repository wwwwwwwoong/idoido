"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components";
import BookViewer, { BookData } from "@/components/story/BookViewer";
import ReadAloudButton from "@/components/story/ReadAloudButton";

interface Props {
    book: BookData;
    characterImageUrl?: string | null;
    user: any;
}

export default function BookViewerClient({ book, characterImageUrl, user }: Props) {
    const router = useRouter();

    return (
        <>
            <Header user={user} />
            <main style={{
                minHeight: "calc(100vh - 64px)",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                {/* 뒤로가기 */}
                <div style={{ width: "100%", maxWidth: "900px", marginBottom: "1rem" }}>
                    <button
                        onClick={() => router.push("/my")}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            background: "none",
                            border: "none",
                            color: "var(--muted-foreground)",
                            cursor: "pointer",
                            fontSize: "0.875rem",
                        }}
                    >
                        <ArrowLeft size={16} /> 내 책꽂이로
                    </button>
                </div>

                {/* 책 뷰어 - 1536x1024 (3:2) Aspect Ratio */}
                <div style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "900px",
                    aspectRatio: "3/2",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                }}>
                    <BookViewer
                        book={book}
                        characterImageUrl={characterImageUrl}
                    />
                </div>

                {/* 하단 액션 */}
                <div style={{
                    marginTop: "1.5rem",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center"
                }}>
                    <ReadAloudButton
                        text={book.scenes.map(s => s.storyText).filter(Boolean).join(". ")}
                        label="🔊 전체 듣기"
                    />
                    <Button variant="outline" onClick={() => {
                        const url = window.location.href;
                        if (navigator.share) {
                            navigator.share({
                                title: book.title || "나만의 동화책",
                                text: "아이두(IDO)에서 만든 동화책을 구경해보세요!",
                                url: url,
                            }).catch(() => { });
                        } else {
                            navigator.clipboard.writeText(url).then(() => {
                                alert("링크가 복사되었습니다!");
                            });
                        }
                    }}>
                        🔗 공유하기
                    </Button>
                    <Button variant="outline" onClick={() => router.push("/my")}>
                        <ArrowLeft size={16} style={{ marginRight: "0.5rem" }} />
                        책꽂이로 돌아가기
                    </Button>
                </div>
            </main>
        </>
    );
}
