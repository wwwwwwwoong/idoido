"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageContainer, PageTitle, Card, Button, Input } from "@/components";

export default function NewBookPage() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [isCreating, setIsCreating] = useState(false);

    const handleCreate = async () => {
        if (isCreating) return;
        setIsCreating(true);

        try {
            const res = await fetch("/api/books", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: title.trim() || "나의 동화책" }),
            });

            if (res.ok) {
                const data = await res.json();
                router.push(`/books/${data.book.id}`);
            }
        } catch (error) {
            console.error("Failed to create book:", error);
        } finally {
            setIsCreating(false);
        }
    };

    return (
        <PageContainer maxWidth="sm">
            <PageTitle description="새로운 이야기를 시작해요! ✨">
                새 동화책 만들기
            </PageTitle>

            <Card padding="lg">
                <div style={{ marginBottom: "var(--space-4)" }}>
                    <label
                        style={{
                            display: "block",
                            fontWeight: "var(--font-semibold)",
                            marginBottom: "var(--space-2)",
                        }}
                    >
                        동화책 제목
                    </label>
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="예: 토끼의 모험"
                        style={{ width: "100%" }}
                    />
                </div>

                <div
                    style={{
                        padding: "var(--space-4)",
                        backgroundColor: "var(--color-cream-dark)",
                        borderRadius: "var(--radius-md)",
                        marginBottom: "var(--space-5)",
                    }}
                >
                    <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>
                        💡 동화책을 만든 후 장면을 추가할 수 있어요!
                    </div>
                </div>

                <div style={{ display: "flex", gap: "var(--space-3)" }}>
                    <Button
                        variant="outline"
                        onClick={() => router.back()}
                        style={{ flex: 1 }}
                    >
                        취소
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleCreate}
                        disabled={isCreating}
                        isLoading={isCreating}
                        style={{ flex: 1 }}
                    >
                        만들기
                    </Button>
                </div>
            </Card>
        </PageContainer>
    );
}
