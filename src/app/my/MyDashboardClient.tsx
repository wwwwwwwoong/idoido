"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Card } from "@/components";
import { BookOpen, Users, Layers, Plus, Trash2, X, Check, Store, Edit2 } from "lucide-react";
import FlipCardItem from "@/components/learning/FlipCardItem";

type Tab = "books" | "characters" | "cards";

interface Book {
    id: string;
    title: string | null;
    status: string;
    sceneCount: number;
    updatedAt: string;
    coverUrl: string | null;
}

interface Character {
    id: string;
    name: string | null;
    imageUrl: string | null;
    doodleUrl: string | null; // 원본 그림 URL
}

interface CardItem {
    id: string;
    type: string;
    name: string;
    desc: string | null;
    color: string | null;
    imagePath: string | null;
}

interface Props {
    books: Book[];
    characters: Character[];
    cards: CardItem[];
}

export default function MyDashboardClient({ books: initialBooks, characters, cards }: Props) {
    const router = useRouter();
    const [tab, setTab] = useState<Tab>("books");

    // Books state
    const [books, setBooks] = useState(initialBooks);
    const [isSelectMode, setIsSelectMode] = useState(false);
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [isDeleting, setIsDeleting] = useState(false);
    const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

    // Characters state
    const [isCharSelectMode, setIsCharSelectMode] = useState(false);
    const [characterList, setCharacterList] = useState(characters);
    const [selectedCharIds, setSelectedCharIds] = useState<Set<string>>(new Set());
    const [isDeletingChars, setIsDeletingChars] = useState(false);
    const [editingCharId, setEditingCharId] = useState<string | null>(null);
    const [editName, setEditName] = useState("");

    // Character handlers
    const startEditing = (char: Character) => {
        setEditingCharId(char.id);
        setEditName(char.name || "");
    };

    const cancelEditing = () => {
        setEditingCharId(null);
        setEditName("");
    };

    const saveCharacterName = async (id: string) => {
        if (!editName.trim()) return;
        try {
            const res = await fetch(`/api/characters/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: editName }),
            });
            if (!res.ok) throw new Error("Update failed");

            // 로컬 상태 업데이트
            setCharacterList(prev => prev.map(c => c.id === id ? { ...c, name: editName } : c));
            setEditingCharId(null);
            router.refresh();
        } catch (error) {
            alert("이름 수정에 실패했습니다.");
        }
    };

    // Cards state
    const [cardList, setCardList] = useState(cards);
    const [isCardSelectMode, setIsCardSelectMode] = useState(false);
    const [selectedCardIds, setSelectedCardIds] = useState<Set<string>>(new Set());
    const [isDeletingCards, setIsDeletingCards] = useState(false);

    const tabs = [
        { id: "books" as Tab, label: "동화책", Icon: BookOpen, count: books.length },
        { id: "characters" as Tab, label: "캐릭터", Icon: Users, count: characterList.length },
        { id: "cards" as Tab, label: "카드", Icon: Layers, count: cardList.length },
    ];

    // Character handlers
    const toggleCharSelect = (id: string) => {
        const newSet = new Set(selectedCharIds);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setSelectedCharIds(newSet);
    };

    const handleDeleteChars = async () => {
        if (selectedCharIds.size === 0) return;
        if (!confirm(`선택한 ${selectedCharIds.size}개의 캐릭터를 삭제할까요?`)) return;
        setIsDeletingChars(true);
        try {
            await Promise.all(Array.from(selectedCharIds).map((id) => fetch(`/api/characters/${id}`, { method: "DELETE" })));
            setCharacterList(characterList.filter((c) => !selectedCharIds.has(c.id)));
            setSelectedCharIds(new Set());
            setIsCharSelectMode(false);
            router.refresh();
        } catch {
            alert("삭제 중 오류가 발생했습니다.");
        } finally {
            setIsDeletingChars(false);
        }
    };

    // Card handlers
    const toggleCardSelect = (id: string) => {
        const newSet = new Set(selectedCardIds);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setSelectedCardIds(newSet);
    };

    const handleDeleteCards = async () => {
        if (selectedCardIds.size === 0) return;
        if (!confirm(`선택한 ${selectedCardIds.size}개의 카드를 삭제할까요?`)) return;
        setIsDeletingCards(true);
        try {
            await Promise.all(Array.from(selectedCardIds).map((id) => fetch(`/api/cards/${id}`, { method: "DELETE" })));
            setCardList(cardList.filter((c) => !selectedCardIds.has(c.id)));
            setSelectedCardIds(new Set());
            setIsCardSelectMode(false);
            router.refresh();
        } catch {
            alert("삭제 중 오류가 발생했습니다.");
        } finally {
            setIsDeletingCards(false);
        }
    };

    const toggleSelect = (id: string) => {
        const newSet = new Set(selectedIds);
        if (newSet.has(id)) {
            newSet.delete(id);
        } else {
            newSet.add(id);
        }
        setSelectedIds(newSet);
    };

    const handleDelete = async () => {
        if (selectedIds.size === 0) return;

        if (!confirm(`선택한 ${selectedIds.size}개의 동화책을 삭제할까요?`)) return;

        setIsDeleting(true);
        try {
            await Promise.all(
                Array.from(selectedIds).map((id) =>
                    fetch(`/api/books/${id}`, { method: "DELETE" })
                )
            );
            setBooks(books.filter((b) => !selectedIds.has(b.id)));
            setSelectedIds(new Set());
            setIsSelectMode(false);
            router.refresh();
        } catch {
            alert("삭제 중 오류가 발생했습니다.");
        } finally {
            setIsDeleting(false);
        }
    };

    const cancelSelectMode = () => {
        setIsSelectMode(false);
        setSelectedIds(new Set());
    };

    return (
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1.5rem" }}>
            {/* 탭 네비게이션 */}
            <div
                style={{
                    display: "flex",
                    gap: "0.25rem",
                    padding: "0.25rem",
                    backgroundColor: "var(--muted)",
                    borderRadius: "12px",
                    marginBottom: "1.5rem",
                }}
            >
                {tabs.map((t) => {
                    const isActive = tab === t.id;
                    const IconComponent = t.Icon;
                    return (
                        <button
                            key={t.id}
                            onClick={() => setTab(t.id)}
                            style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "0.5rem",
                                padding: "0.75rem 1rem",
                                border: "none",
                                borderRadius: "10px",
                                backgroundColor: isActive ? "var(--card)" : "transparent",
                                color: isActive ? "var(--foreground)" : "var(--muted-foreground)",
                                fontWeight: isActive ? 600 : 500,
                                cursor: "pointer",
                                boxShadow: isActive ? "var(--shadow-sm)" : "none",
                                transition: "all 150ms ease",
                            }}
                        >
                            <IconComponent size={18} />
                            {t.label}
                            <span
                                style={{
                                    fontSize: "0.75rem",
                                    padding: "0.125rem 0.5rem",
                                    backgroundColor: isActive ? "var(--muted)" : "transparent",
                                    borderRadius: "9999px",
                                }}
                            >
                                {t.count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* 동화책 탭 - 책꽂이 스타일 */}
            {tab === "books" && (
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: 600 }}>내 책꽂이</h2>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            {isSelectMode ? (
                                <>
                                    <Button variant="ghost" size="sm" onClick={cancelSelectMode}>
                                        <X size={16} /> 취소
                                    </Button>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        onClick={handleDelete}
                                        disabled={selectedIds.size === 0 || isDeleting}
                                        isLoading={isDeleting}
                                        style={{ backgroundColor: "#E53935" }}
                                    >
                                        <Trash2 size={16} /> 삭제 ({selectedIds.size})
                                    </Button>
                                </>
                            ) : (
                                <>
                                    {books.length > 0 && (
                                        <Button variant="ghost" size="sm" onClick={() => setIsSelectMode(true)}>
                                            <Trash2 size={16} /> 선택
                                        </Button>
                                    )}
                                    <Link href="/create/draw">
                                        <Button variant="primary" size="sm">
                                            <Plus size={16} /> 새로 만들기
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                    {books.length === 0 ? (
                        <EmptyState message="아직 동화책이 없어요" action="/create/draw" actionLabel="첫 동화책 만들기" />
                    ) : (
                        <div style={{
                            display: "flex",
                            gap: "1.5rem",
                            minHeight: "400px",
                        }}>
                            <div style={{
                                flex: "0 0 320px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "1.5rem",
                                backgroundColor: "var(--muted)",
                                borderRadius: "16px",
                            }}>
                                {selectedBookId ? (
                                    (() => {
                                        const book = books.find(b => b.id === selectedBookId);
                                        if (!book) return null;
                                        const colors = ["#F472B6", "#60A5FA", "#A78BFA", "#34D399", "#FBBF24", "#FB923C"];
                                        const colorIndex = books.indexOf(book) % colors.length;
                                        // 표지 유무와 상관없이 가로형(3:2)으로 통일 (삽화 비율과 일치)
                                        const width = "240px";
                                        const height = "160px";

                                        return (
                                            <>
                                                {/* 책 표지 */}
                                                <div style={{
                                                    width: width,
                                                    height: height,
                                                    background: `linear-gradient(135deg, ${colors[colorIndex]} 0%, ${colors[(colorIndex + 1) % colors.length]} 100%)`, // 기본 배경 (로딩 전/이미지 없을 때)
                                                    borderRadius: "4px 12px 12px 4px", // 책 모양 살림
                                                    boxShadow: "10px 10px 20px rgba(0,0,0,0.15)", // 그림자 강화
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    justifyContent: "flex-end", // 텍스트 하단 배치
                                                    padding: "0",
                                                    marginBottom: "1.5rem",
                                                    position: "relative",
                                                    overflow: "hidden",
                                                    transition: "all 0.3s ease"
                                                }}>
                                                    {/* 표지 이미지 (img 태그 사용으로 변경) */}
                                                    {book.coverUrl && (
                                                        <img
                                                            src={book.coverUrl}
                                                            alt="Book Cover"
                                                            style={{
                                                                position: "absolute",
                                                                top: 0,
                                                                left: 0,
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "cover",
                                                                zIndex: 0
                                                            }}
                                                        />
                                                    )}
                                                    {/* 책등 효과 (왼쪽) - 하드커버 느낌 */}
                                                    <div style={{
                                                        position: "absolute",
                                                        left: 0,
                                                        top: 0,
                                                        bottom: 0,
                                                        width: "16px",
                                                        background: "rgba(0,0,0,0.15)",
                                                        boxShadow: "inset -1px 0 2px rgba(255,255,255,0.3), inset 1px 0 2px rgba(0,0,0,0.2)",
                                                        zIndex: 10,
                                                    }} />

                                                    {/* 책 펼침 효과 (오른쪽 끝) */}
                                                    <div style={{
                                                        position: "absolute",
                                                        right: 0,
                                                        top: 0,
                                                        bottom: 0,
                                                        width: "4px",
                                                        background: "linear-gradient(to left, rgba(0,0,0,0.1), transparent)",
                                                        zIndex: 10,
                                                    }} />

                                                    {/* 텍스트 가독성을 위한 그라데이션 오버레이 (이미지 있을 때만) */}
                                                    {book.coverUrl && (
                                                        <div style={{
                                                            position: "absolute",
                                                            inset: 0,
                                                            background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)",
                                                            zIndex: 1,
                                                        }} />
                                                    )}

                                                    {/* 콘텐츠 영역 */}
                                                    <div style={{
                                                        position: "relative",
                                                        zIndex: 2,
                                                        width: "100%",
                                                        padding: "1rem 1rem 1rem 1.5rem", // 왼쪽 패딩(책등) 고려
                                                        textAlign: "center",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        height: book.coverUrl ? "auto" : "100%",
                                                    }}>
                                                        {!book.coverUrl && (
                                                            <BookOpen size={32} color="white" style={{ marginBottom: "0.5rem", opacity: 0.9 }} />
                                                        )}

                                                        <div style={{
                                                            color: "white",
                                                            fontWeight: 700,
                                                            fontSize: "1.1rem",
                                                            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                                                            wordBreak: "keep-all",
                                                            lineHeight: 1.3,
                                                            marginBottom: "0.25rem"
                                                        }}>
                                                            {book.title || "제목 없음"}
                                                        </div>

                                                        <div style={{
                                                            color: "rgba(255,255,255,0.9)",
                                                            fontSize: "0.8rem",
                                                            fontWeight: 500,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "0.25rem"
                                                        }}>

                                                            {book.status === "COMPLETED" && (
                                                                <span style={{ backgroundColor: "rgba(255,255,255,0.2)", padding: "2px 6px", borderRadius: "10px", fontSize: "0.7rem" }}>완성</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* 버튼 */}
                                                <Button
                                                    variant="primary"
                                                    onClick={() => router.push(`/story/${book.id}/view`)}
                                                    style={{ width: "100%", borderRadius: "12px", height: "48px", fontSize: "1rem", fontWeight: 600 }}
                                                >
                                                    <BookOpen size={18} style={{ marginRight: "0.5rem" }} />
                                                    동화책 펼치기
                                                </Button>
                                            </>
                                        );
                                    })()
                                ) : (
                                    <div style={{ textAlign: "center", color: "var(--muted-foreground)" }}>
                                        <div style={{
                                            width: "80px",
                                            height: "80px",
                                            backgroundColor: "rgba(0,0,0,0.05)",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: "0 auto 1rem auto"
                                        }}>
                                            <BookOpen size={32} style={{ opacity: 0.3 }} />
                                        </div>
                                        <p style={{ fontWeight: 500 }}>오른쪽 책꽂이에서<br />책을 선택해주세요</p>
                                    </div>
                                )}
                            </div>

                            {/* 오른쪽: 책꽂이 (책등들) */}
                            <div style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "flex-end",
                                gap: "4px",
                                padding: "1rem",
                                background: "linear-gradient(to top, rgba(139,69,19,0.3) 0%, transparent 100%)",
                                borderRadius: "8px",
                                overflowX: "auto",
                            }}>
                                {books.map((book, index) => {
                                    const colors = ["#F472B6", "#60A5FA", "#A78BFA", "#34D399", "#FBBF24", "#FB923C", "#EF4444", "#14B8A6"];
                                    const color = colors[index % colors.length];
                                    const isSelected = selectedBookId === book.id || selectedIds.has(book.id);
                                    const height = 200 + (book.sceneCount * 10); // 페이지 수에 따라 높이 변화

                                    return (
                                        <div
                                            key={book.id}
                                            onClick={() => isSelectMode ? toggleSelect(book.id) : setSelectedBookId(book.id)}
                                            style={{
                                                width: "50px",
                                                height: `${Math.min(height, 320)}px`,
                                                background: `linear-gradient(to right, ${color} 0%, ${color}dd 50%, ${color}aa 100%)`,
                                                borderRadius: "4px 4px 0 0",
                                                cursor: "pointer",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "flex-start",
                                                paddingTop: "1rem",
                                                transition: "transform 150ms ease, box-shadow 150ms ease",
                                                transform: isSelected ? "translateY(-8px)" : "none",
                                                boxShadow: isSelected ? "0 8px 16px rgba(0,0,0,0.3)" : "2px 0 4px rgba(0,0,0,0.1)",
                                                border: isSelectMode && selectedIds.has(book.id) ? "3px solid #E53935" : "none",
                                                position: "relative",
                                            }}
                                        >
                                            {/* 책 제목 (세로) */}
                                            <div style={{
                                                writingMode: "vertical-rl",
                                                textOrientation: "mixed",
                                                color: "white",
                                                fontWeight: 600,
                                                fontSize: "0.75rem",
                                                textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                                                maxHeight: "70%",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap",
                                            }}>
                                                {book.title || "제목 없음"}
                                            </div>
                                            {/* 상태 표시 */}
                                            <div style={{
                                                position: "absolute",
                                                bottom: "8px",
                                                fontSize: "0.625rem",
                                                color: "rgba(255,255,255,0.8)",
                                            }}>
                                                {book.status === "COMPLETED" ? "✓" : "..."}
                                            </div>
                                            {isSelectMode && selectedIds.has(book.id) && (
                                                <div style={{
                                                    position: "absolute",
                                                    top: "4px",
                                                    right: "4px",
                                                    width: "16px",
                                                    height: "16px",
                                                    borderRadius: "50%",
                                                    backgroundColor: "#E53935",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}>
                                                    <Check size={10} color="white" />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* 캐릭터 탭 */}
            {tab === "characters" && (
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: 600 }}>내 캐릭터</h2>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => router.push("/shop")}
                                style={{ borderColor: "#8B5CF6", color: "#8B5CF6", backgroundColor: "white" }}
                            >
                                <Store size={16} style={{ marginRight: "0.4rem" }} />
                                마법의 상점
                            </Button>
                            {characterList.length > 0 && (
                                <>
                                    {isCharSelectMode ? (
                                        <>
                                            <Button variant="ghost" size="sm" onClick={() => { setIsCharSelectMode(false); setSelectedCharIds(new Set()); }}>
                                                <X size={16} /> 취소
                                            </Button>
                                            <Button
                                                variant="primary"
                                                size="sm"
                                                onClick={handleDeleteChars}
                                                disabled={selectedCharIds.size === 0 || isDeletingChars}
                                                isLoading={isDeletingChars}
                                                style={{ backgroundColor: "#E53935" }}
                                            >
                                                <Trash2 size={16} /> 삭제 ({selectedCharIds.size})
                                            </Button>
                                        </>
                                    ) : (
                                        <Button variant="ghost" size="sm" onClick={() => setIsCharSelectMode(true)}>
                                            <Trash2 size={16} /> 선택
                                        </Button>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                    {characterList.length === 0 ? (
                        <EmptyState message="아직 캐릭터가 없어요" action="/create/draw" actionLabel="동화책 만들며 캐릭터 추가" />
                    ) : (
                        // 그리드 사이즈 확대 (120 -> 150) - 모바일 2열 가능하도록 조정
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1rem" }}>
                            {characterList.map((char) => {
                                const isSelected = selectedCharIds.has(char.id);
                                return (
                                    <div
                                        key={char.id}
                                        onClick={() => isCharSelectMode && toggleCharSelect(char.id)}
                                        style={{ cursor: isCharSelectMode ? "pointer" : "default", position: "relative" }}
                                    >
                                        <Card padding="none" style={{ border: isSelected ? "2px solid #E53935" : undefined, overflow: "hidden" }}>
                                            {isCharSelectMode && (
                                                <div style={{ position: "absolute", top: 8, right: 8, zIndex: 10 }}>
                                                    <div
                                                        style={{
                                                            width: "24px",
                                                            height: "24px",
                                                            borderRadius: "4px",
                                                            border: isSelected ? "none" : "2px solid rgba(255,255,255,0.8)",
                                                            backgroundColor: isSelected ? "#E53935" : "rgba(0,0,0,0.3)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color: "white",
                                                        }}
                                                    >
                                                        {isSelected && <Check size={16} />}
                                                    </div>
                                                </div>
                                            )}

                                            {/* 이미지 영역 */}
                                            <div style={{ aspectRatio: "1", backgroundColor: "var(--muted)", overflow: "hidden", position: "relative" }}>
                                                {char.imageUrl ? (
                                                    <img
                                                        src={char.imageUrl}
                                                        alt={char.name || "캐릭터"}
                                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                    />
                                                ) : (
                                                    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>🎨</div>
                                                )}
                                            </div>

                                            {/* 하단 정보 및 굿즈 버튼 */}
                                            <div style={{ padding: "1rem", textAlign: "center" }}>
                                                {editingCharId === char.id ? (
                                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "center", marginBottom: "0.75rem" }}>
                                                        <input
                                                            type="text"
                                                            value={editName}
                                                            onChange={(e) => setEditName(e.target.value)}
                                                            style={{
                                                                width: "100%",
                                                                padding: "0.25rem 0.5rem",
                                                                borderRadius: "4px",
                                                                border: "1px solid #8B5CF6",
                                                                fontSize: "0.9rem",
                                                                textAlign: "center"
                                                            }}
                                                            autoFocus
                                                            onKeyDown={(e) => {
                                                                if (e.key === "Enter") saveCharacterName(char.id);
                                                                if (e.key === "Escape") cancelEditing();
                                                            }}
                                                            onClick={(e) => e.stopPropagation()}
                                                        />
                                                        <Button size="sm" onClick={(e) => { e.stopPropagation(); saveCharacterName(char.id); }} style={{ padding: "0.25rem 0.5rem", minWidth: "auto" }}>
                                                            <Check size={14} />
                                                        </Button>
                                                    </div>
                                                ) : (
                                                    <div
                                                        style={{
                                                            fontWeight: 600,
                                                            fontSize: "1rem",
                                                            marginBottom: "0.75rem",
                                                            color: "#1F2937",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            gap: "0.5rem",
                                                            cursor: "pointer"
                                                        }}
                                                        onClick={(e) => {
                                                            if (!isCharSelectMode) {
                                                                e.stopPropagation();
                                                                startEditing(char);
                                                            }
                                                        }}
                                                        title="클릭하여 이름 수정"
                                                    >
                                                        {char.name || "이름 없음"}
                                                        {!isCharSelectMode && <Edit2 size={12} color="#9CA3AF" />}
                                                    </div>
                                                )}
                                            </div>
                                        </Card>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}

            {/* 카드 탭 */}
            {tab === "cards" && (
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: 600 }}>배운 단어</h2>
                        {cardList.length > 0 && (
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                                {isCardSelectMode ? (
                                    <>
                                        <Button variant="ghost" size="sm" onClick={() => { setIsCardSelectMode(false); setSelectedCardIds(new Set()); }}>
                                            <X size={16} /> 취소
                                        </Button>
                                        <Button
                                            variant="primary"
                                            size="sm"
                                            onClick={handleDeleteCards}
                                            disabled={selectedCardIds.size === 0 || isDeletingCards}
                                            isLoading={isDeletingCards}
                                            style={{ backgroundColor: "#E53935" }}
                                        >
                                            <Trash2 size={16} /> 삭제 ({selectedCardIds.size})
                                        </Button>
                                    </>
                                ) : (
                                    <Button variant="ghost" size="sm" onClick={() => setIsCardSelectMode(true)}>
                                        <Trash2 size={16} /> 선택
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                    {cardList.length === 0 ? (
                        <EmptyState message="아직 배운 단어가 없어요" action="/create/draw" actionLabel="동화책 만들며 단어 배우기" />
                    ) : (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "1rem" }}>
                            {/* 예시 카드 (Tutorial) */}
                            <div style={{ height: "100%", aspectRatio: "3/4" }}>
                                <FlipCardItem
                                    card={{
                                        id: "tutorial-card",
                                        name: "눌러보세요!",
                                        type: "튜토리얼",
                                        color: "#F59E0B",
                                        imagePath: null, // 기본 아이콘 표시됨
                                    }}
                                    isTutorial={true}
                                />
                            </div>

                            {cardList.map((card) => {
                                const isSelected = selectedCardIds.has(card.id);
                                return (
                                    <div key={card.id} style={{ height: "100%", aspectRatio: "3/4" }}>
                                        <FlipCardItem
                                            card={card}
                                            isSelected={isSelected}
                                            isSelectMode={isCardSelectMode}
                                            onToggleSelect={() => toggleCardSelect(card.id)}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}
        </main>
    );
}

function EmptyState({ message, action, actionLabel }: { message: string; action: string; actionLabel: string }) {
    return (
        <div style={{ textAlign: "center", padding: "3rem", border: "2px dashed var(--border)", borderRadius: "12px" }}>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "1rem" }}>{message}</p>
            <Link href={action}>
                <Button variant="primary">{actionLabel}</Button>
            </Link>
        </div>
    );
}
