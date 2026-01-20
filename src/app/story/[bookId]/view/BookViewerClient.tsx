"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components";
import BookViewer, { BookData } from "@/components/story/BookViewer";

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

                {/* 책 뷰어 */}
                <div style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "900px",
                    aspectRatio: "16/9",
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
                }}>
                    <Button variant="outline" onClick={() => router.push("/my")}>
                        <ArrowLeft size={16} style={{ marginRight: "0.5rem" }} />
                        책꽂이로 돌아가기
                    </Button>
                </div>
            </main>
        </>
    );
}
