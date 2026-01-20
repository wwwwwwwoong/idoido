"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Card } from "@/components";
import { BookOpen, Users, Layers, Plus, Trash2, X, Check } from "lucide-react";

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
    const [characterList, setCharacterList] = useState(characters);
    const [isCharSelectMode, setIsCharSelectMode] = useState(false);
    const [selectedCharIds, setSelectedCharIds] = useState<Set<string>>(new Set());
    const [isDeletingChars, setIsDeletingChars] = useState(false);

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
                            {/* 왼쪽: 선택된 책 표지 */}
                            <div style={{
                                flex: "0 0 280px",
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
                                        return (
                                            <>
                                                {/* 책 표지 */}
                                                <div style={{
                                                    width: "180px",
                                                    height: "240px",
                                                    background: `linear-gradient(135deg, ${colors[colorIndex]} 0%, ${colors[(colorIndex + 1) % colors.length]} 100%)`,
                                                    borderRadius: "8px 16px 16px 8px",
                                                    boxShadow: "4px 4px 12px rgba(0,0,0,0.2)",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    padding: "1rem",
                                                    marginBottom: "1rem",
                                                    position: "relative",
                                                    overflow: "hidden",
                                                }}>
                                                    {/* 책등 효과 */}
                                                    <div style={{
                                                        position: "absolute",
                                                        left: 0,
                                                        top: 0,
                                                        bottom: 0,
                                                        width: "12px",
                                                        background: `linear-gradient(to right, rgba(0,0,0,0.2), transparent)`,
                                                        zIndex: 2,
                                                    }} />
                                                    {/* 캐릭터 이미지 (있으면 표시) */}
                                                    {book.coverUrl ? (
                                                        <>
                                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                                            <img
                                                                src={book.coverUrl}
                                                                alt="cover"
                                                                style={{
                                                                    position: "absolute",
                                                                    top: "50%",
                                                                    left: "50%",
                                                                    transform: "translate(-50%, -60%)",
                                                                    width: "120px",
                                                                    height: "120px",
                                                                    objectFit: "contain",
                                                                    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
                                                                    zIndex: 1,
                                                                }}
                                                            />
                                                            <div style={{
                                                                position: "absolute",
                                                                bottom: "1rem",
                                                                color: "white",
                                                                fontWeight: 700,
                                                                fontSize: "1rem",
                                                                textAlign: "center",
                                                                textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                                                                zIndex: 1,
                                                            }}>
                                                                {book.title || "제목 없음"}
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <BookOpen size={32} color="white" style={{ marginBottom: "0.5rem" }} />
                                                            <div style={{
                                                                color: "white",
                                                                fontWeight: 700,
                                                                fontSize: "1rem",
                                                                textAlign: "center",
                                                                textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                                                            }}>
                                                                {book.title || "제목 없음"}
                                                            </div>
                                                            <div style={{
                                                                color: "rgba(255,255,255,0.8)",
                                                                fontSize: "0.75rem",
                                                                marginTop: "0.25rem",
                                                            }}>
                                                                {book.sceneCount}페이지
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                                {/* 버튼 */}
                                                <Button
                                                    variant="primary"
                                                    onClick={() => router.push(`/story/${book.id}/view`)}
                                                    style={{ width: "100%" }}
                                                >
                                                    <BookOpen size={18} style={{ marginRight: "0.5rem" }} />
                                                    동화책 펼치기
                                                </Button>
                                            </>
                                        );
                                    })()
                                ) : (
                                    <div style={{ textAlign: "center", color: "var(--muted-foreground)" }}>
                                        <BookOpen size={48} style={{ marginBottom: "0.5rem", opacity: 0.5 }} />
                                        <p>책을 선택해주세요</p>
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
                        {characterList.length > 0 && (
                            <div style={{ display: "flex", gap: "0.5rem" }}>
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
                            </div>
                        )}
                    </div>
                    {characterList.length === 0 ? (
                        <EmptyState message="아직 캐릭터가 없어요" action="/create/draw" actionLabel="동화책 만들며 캐릭터 추가" />
                    ) : (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "1rem" }}>
                            {characterList.map((char) => {
                                const isSelected = selectedCharIds.has(char.id);
                                return (
                                    <div
                                        key={char.id}
                                        onClick={() => isCharSelectMode && toggleCharSelect(char.id)}
                                        style={{ cursor: isCharSelectMode ? "pointer" : "default" }}
                                    >
                                        <Card padding="sm" style={{ border: isSelected ? "2px solid #E53935" : undefined }}>
                                            {isCharSelectMode && (
                                                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "0.25rem" }}>
                                                    <div
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                            borderRadius: "4px",
                                                            border: isSelected ? "none" : "2px solid var(--border)",
                                                            backgroundColor: isSelected ? "#E53935" : "transparent",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color: "white",
                                                        }}
                                                    >
                                                        {isSelected && <Check size={12} />}
                                                    </div>
                                                </div>
                                            )}
                                            <div style={{ aspectRatio: "1", backgroundColor: "var(--muted)", borderRadius: "8px", marginBottom: "0.5rem", overflow: "hidden" }}>
                                                {char.imageUrl ? (
                                                    <img
                                                        src={char.imageUrl}
                                                        alt={char.name || "캐릭터"}
                                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                    />
                                                ) : (
                                                    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>🎨</div>
                                                )}
                                            </div>
                                            <div style={{ fontWeight: 500, fontSize: "0.875rem", textAlign: "center" }}>{char.name || "이름 없음"}</div>
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
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "1rem" }}>
                            {cardList.map((card) => {
                                const isSelected = selectedCardIds.has(card.id);
                                return (
                                    <div
                                        key={card.id}
                                        onClick={() => isCardSelectMode && toggleCardSelect(card.id)}
                                        style={{
                                            position: "relative",
                                            cursor: isCardSelectMode ? "pointer" : "default"
                                        }}
                                    >
                                        <Card padding="none" style={{
                                            border: isSelected ? "2px solid #E53935" : `1px solid ${card.color || "#e5e7eb"}`,
                                            overflow: "hidden",
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column"
                                        }}>
                                            {isCardSelectMode && (
                                                <div style={{ position: "absolute", top: 8, right: 8, zIndex: 10 }}>
                                                    <div
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                            borderRadius: "4px",
                                                            backgroundColor: isSelected ? "#E53935" : "white",
                                                            border: isSelected ? "none" : "2px solid #E5E7EB",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color: "white",
                                                        }}
                                                    >
                                                        {isSelected && <Check size={12} />}
                                                    </div>
                                                </div>
                                            )}

                                            <div style={{
                                                aspectRatio: "1",
                                                backgroundColor: `${card.color}10` || "#f3f4f6",
                                                padding: "1rem",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}>
                                                {card.imagePath && (card.id.startsWith("pers-") || card.id.startsWith("place-")) ? (
                                                    <img
                                                        src={card.imagePath}
                                                        alt={card.name}
                                                        onError={(e) => {
                                                            e.currentTarget.style.display = 'none';
                                                            e.currentTarget.parentElement!.innerHTML = `<div style="font-size:2rem">🃏</div>`;
                                                        }}
                                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                    />
                                                ) : (
                                                    <div style={{ fontSize: "2.5rem" }}>🃏</div>
                                                )}
                                            </div>

                                            <div style={{ padding: "0.75rem", textAlign: "center", flex: 1, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                                                <div style={{ fontSize: "0.75rem", color: card.color || "#6B7280", fontWeight: 700 }}>{card.type}</div>
                                                <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "#1F2937", wordBreak: "keep-all" }}>{card.name}</div>
                                            </div>
                                        </Card>
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
