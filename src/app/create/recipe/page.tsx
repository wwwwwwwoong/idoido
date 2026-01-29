"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui/Button";
import StoryFlowLayout from "@/components/layout/StoryFlowLayout";
import Helper from "@/components/create/Helper";
import {
    personalityCards,
    roleCards,
    placeCards,
    eventCards,
    moodCards,
    learningTopicCards,
} from "@/lib/libraryCards";
import type { LibraryCard } from "@/lib/types/library";

// 도우미 반응 메시지
const helperResponses: Record<string, string> = {
    // 성격
    "pers-brave": "용감한 친구구나! 모험이 기대돼!",
    "pers-kind": "다정한 마음을 가졌네! 따뜻한 이야기가 되겠다~",
    "pers-curious": "뭐든 궁금해하는구나! 재미있는 발견이 있을 거야!",
    "pers-shy": "수줍은 친구도 멋진 주인공이 될 수 있어!",
    "pers-playful": "장난꾸러기! 신나는 이야기가 되겠다!",
    "pers-wise": "똑똑한 친구네! 지혜로운 결정을 하겠다!",
    "pers-energetic": "씩씩한 친구구나! 힘이 넘치겠다!",
    "pers-calm": "차분한 친구네! 여유롭게 해결하겠다!",
    // 역할
    "role-explorer": "탐험가라니! 어디로 떠날까?",
    "role-helper": "도우미! 누구를 도와줄까?",
    "role-friend": "친구가 되어주는 거구나! 따뜻하겠다~",
    "role-hero": "영웅! 멋진 활약이 기대돼!",
    "role-wizard": "마법사! 어떤 마법을 부릴까?",
    "role-inventor": "발명가! 멋진 발명품을 만들겠다!",
    "role-chef": "요리사! 맛있는 음식을 만들겠다!",
    "role-storyteller": "이야기꾼! 재미있는 이야기가 나올 거야!",
    // 장소
    "place-forest": "신비로운 숲에서 무슨 일이 생길까?",
    "place-ocean": "바다 속 모험이라니! 인어를 만날까?",
    "place-palace": "궁전이라니 정말 화려하겠다!",
    "place-village": "아늑한 마을이네! 좋은 이웃들이 있겠다~",
    "place-mountain": "높은 산에서 뭘 발견할까?",
    "place-school": "마법 학교! 신기한 걸 배우겠다!",
    "place-space": "우주라니! 별들을 만날 수 있겠다!",
    "place-candy": "과자 마을! 달콤한 모험이 기대돼!",
    // 사건
    "event-adventure": "두근두근 모험! 신나겠다!",
    "event-friend": "새 친구를 만나는 거야? 설레겠다!",
    "event-mystery": "비밀이라니! 무슨 비밀일까?",
    "event-help": "따뜻한 마음을 가졌구나!",
    "event-magic": "마법 배우기! 신비한 마법을 익히겠다!",
    "event-treasure": "보물찾기! 뭘 찾게 될까?",
    "event-party": "신나는 파티! 즐거운 일이 생기겠다!",
    "event-growth": "성장하는 이야기! 멋진 변화가 있을 거야!",
    // 분위기
    "mood-warm": "따뜻한 이야기가 될 거야~",
    "mood-exciting": "신나는 이야기! 재밌겠다!",
    "mood-calm": "잔잔하고 평화로운 느낌이네!",
    "mood-magical": "마법 같은 일이 일어날 거야!",
    "mood-funny": "웃긴 이야기! 기대돼!",
    "mood-scary": "으스스한 이야기! 긴장되겠다!",
    "mood-mysterious": "신비로운 분위기! 비밀이 많겠다!",
    "mood-flutter": "설레는 이야기! 두근두근 기대된다!",
    // 학습 주제
    "topic-emotion": "감정을 탐험하는 이야기! 함께 느껴보자!",
    "topic-expression": "말하기 연습을 할 거야! 인사도 배우고!",
    "topic-culture": "우리 문화를 배우는 이야기! 신기하다~",
    "topic-science": "과학 탐구! 신비한 발견이 있을 거야!",
    "topic-nature": "자연 친구를 만나는 이야기!",
};


type Category = "personality" | "role" | "place" | "event" | "mood" | "learningTopic";

// Lucide 아이콘 동적 가져오기
const getIcon = (iconName: string) => {
    const icons = LucideIcons as unknown as Record<string, React.ComponentType<any>>;
    return icons[iconName] || LucideIcons.Circle;
};

export default function CreateRecipePage() {
    const router = useRouter();
    const [characterName, setCharacterName] = useState("주인공");
    const [selections, setSelections] = useState<Record<Category, LibraryCard | null>>({
        personality: null,
        role: null,
        place: null,
        event: null,
        mood: null,
        learningTopic: null,
    });
    const [expandedCategory, setExpandedCategory] = useState<Category | null>("personality");
    const [helperMessage, setHelperMessage] = useState("안녕! 나랑 같이 이야기 재료를 골라볼까?");

    useEffect(() => {
        const charData = localStorage.getItem("create_character");
        if (charData) {
            const parsed = JSON.parse(charData);
            const name = parsed.name || "주인공";
            setCharacterName(name);
            setHelperMessage(`안녕! ${name}의 이야기 재료를 골라볼까?`);
        }
    }, []);

    const categories: { key: Category; title: string; cards: LibraryCard[] }[] = [
        { key: "personality", title: `${characterName}의 성격은 어때?`, cards: personalityCards },
        { key: "role", title: `${characterName}는 무슨 역할을 할까?`, cards: roleCards },
        { key: "place", title: `${characterName}는 어디에 있어?`, cards: placeCards },
        { key: "event", title: `거기서 무슨 일이 생길까?`, cards: eventCards },
        { key: "mood", title: `이야기의 분위기는 어때?`, cards: moodCards },
        { key: "learningTopic", title: `오늘은 무엇을 배울까?`, cards: learningTopicCards },
    ];

    const handleSelect = (category: Category, card: LibraryCard) => {
        setSelections((prev) => ({ ...prev, [category]: card }));

        // 헬퍼 메시지 업데이트 (이름 반영)
        if (helperResponses[card.id]) {
            let msg = helperResponses[card.id];
            // 성격/역할 선택 시 이름 넣어주기
            if (category === "personality" || category === "role") {
                msg = `${characterName}! ${msg}`;
            }
            setHelperMessage(msg);
        }

        // 다음 카테고리로 이동
        const currentIdx = categories.findIndex(c => c.key === category);
        if (currentIdx < categories.length - 1 && !selections[categories[currentIdx + 1].key]) {
            setTimeout(() => setExpandedCategory(categories[currentIdx + 1].key), 300);
        }
    };

    const handleNext = () => {
        // 새 레시피 저장 시 이전 장면 데이터 초기화
        localStorage.removeItem("create_scene");

        localStorage.setItem("create_recipe", JSON.stringify({
            personality: selections.personality,
            role: selections.role,
            place: selections.place,
            event: selections.event,
            mood: selections.mood,
            learningTopic: selections.learningTopic,
        }));
        router.push("/create/scene"); // 새 플로우: 레시피 → 꾸미기
    };

    const isComplete = selections.personality && selections.role && selections.place && selections.event && selections.mood && selections.learningTopic;

    const CategorySection = ({ category }: { category: typeof categories[0] }) => {
        const isExpanded = expandedCategory === category.key;
        const selected = selections[category.key];

        return (
            <section style={{ marginBottom: "0.75rem" }}>
                <button
                    onClick={() => setExpandedCategory(isExpanded ? null : category.key)}
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0.75rem 1rem",
                        backgroundColor: selected ? selected.bgColor : "#F9FAFB",
                        border: selected ? `2px solid ${selected.color}` : "1.5px solid #E5E7EB",
                        borderRadius: "12px",
                        cursor: "pointer",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "#374151" }}>
                            {category.title}
                        </span>
                        {selected && (
                            <span style={{
                                padding: "0.25rem 0.5rem",
                                backgroundColor: "white",
                                borderRadius: "6px",
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                color: selected.color,
                                display: "flex",
                                alignItems: "center",
                                gap: "0.25rem",
                            }}>
                                {(() => {
                                    const IconComponent = getIcon(selected.icon);
                                    return <IconComponent size={12} color={selected.color} />;
                                })()}
                                {selected.name}
                            </span>
                        )}
                    </div>
                    {isExpanded ? <ChevronUp size={18} color="#9CA3AF" /> : <ChevronDown size={18} color="#9CA3AF" />}
                </button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ overflow: "hidden" }}
                        >
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                gap: "0.75rem",
                                padding: "0.75rem 0.25rem",
                            }}>
                                {category.cards.map((card) => {
                                    const isSelected = selected?.id === card.id;
                                    const IconComponent = getIcon(card.icon);

                                    // 이미지 경로 생성 (모든 카테고리에 이미지 적용)
                                    const imagePath = card.imagePath;

                                    return (
                                        <motion.button
                                            key={card.id}
                                            onClick={() => handleSelect(category.key, card)}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "flex-start",
                                                height: "100%",
                                                padding: "0",
                                                border: isSelected ? `2px solid ${card.color}` : "2px solid #E5E7EB",
                                                borderRadius: "16px",
                                                backgroundColor: isSelected ? "#fff" : "#fff",
                                                cursor: "pointer",
                                                boxShadow: isSelected ? `0 8px 16px ${card.color}30` : "0 2px 4px rgba(0,0,0,0.05)",
                                                position: "relative",
                                                overflow: "hidden",
                                                transition: "all 0.2s ease"
                                            }}
                                        >
                                            {/* Image/Icon Area (1:1 Ratio) */}
                                            <div style={{
                                                width: "100%",
                                                aspectRatio: "1/1",
                                                position: "relative",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: `${card.color}15` || "#f3f4f6", // Light background
                                                padding: "1rem"
                                            }}>
                                                {/* Image */}
                                                {imagePath ? (
                                                    <img
                                                        src={imagePath}
                                                        alt={card.name}
                                                        onError={(e) => {
                                                            e.currentTarget.style.display = "none";
                                                        }}
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                            position: "relative",
                                                            zIndex: 10
                                                        }}
                                                    />
                                                ) : null}
                                            </div>

                                            {/* Text Area */}
                                            <div style={{
                                                padding: "0.75rem",
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                gap: "0.25rem",
                                                flex: 1
                                            }}>
                                                <span style={{
                                                    fontWeight: 600,
                                                    fontSize: "0.85rem",
                                                    color: isSelected ? "#1F2937" : "#4B5563",
                                                    wordBreak: "keep-all",
                                                    textAlign: "center"
                                                }}>
                                                    {card.name}
                                                </span>
                                            </div>

                                            {/* Selection Overlay */}
                                            {isSelected && (
                                                <div style={{
                                                    position: "absolute",
                                                    top: 0, left: 0, right: 0, bottom: 0,
                                                    backgroundColor: card.color,
                                                    opacity: 0.05,
                                                    zIndex: 0,
                                                    pointerEvents: "none"
                                                }} />
                                            )}

                                            {/* Checkmark */}
                                            {isSelected && (
                                                <div style={{
                                                    position: "absolute",
                                                    top: "0.5rem",
                                                    right: "0.5rem",
                                                    width: "20px",
                                                    height: "20px",
                                                    borderRadius: "50%",
                                                    backgroundColor: card.color,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    zIndex: 20,
                                                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                                }}>
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </div>
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        );
    };

    return (
        <StoryFlowLayout
            currentStep={2}
            title="마법의 레시피"
            subtitle="이야기 재료를 골라봐!"
            backHref="/create/draw"
            helper={
                <AnimatePresence mode="wait">
                    <motion.div
                        key={helperMessage}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Helper
                            character="whirlwind"
                            message={helperMessage}
                            position="right"
                            style={{ marginBottom: 0 }}
                        />
                    </motion.div>
                </AnimatePresence>
            }
        >
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "1rem 0",
            }}>

                {/* 카테고리 섹션들 */}
                {categories.map((category) => (
                    <CategorySection key={category.key} category={category} />
                ))}

                {/* 선택 요약 */}
                <AnimatePresence>
                    {isComplete && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            style={{
                                padding: "1rem",
                                backgroundColor: "#FEF3C7",
                                border: "1.5px solid #FCD34D",
                                borderRadius: "12px",
                                marginTop: "0.5rem",
                                marginBottom: "1rem",
                                textAlign: "center",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.375rem", marginBottom: "0.5rem" }}>
                                <Sparkles size={16} color="#F59E0B" />
                                <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "#92400E" }}>레시피 완성!</span>
                            </div>
                            <p style={{ fontSize: "0.85rem", color: "#78350F", marginBottom: "0.5rem" }}>
                                <strong>{selections.personality?.name}</strong> 성격의 <strong>{selections.role?.name}</strong>가
                            </p>
                            <div style={{ display: "flex", justifyContent: "center", gap: "0.375rem", flexWrap: "wrap" }}>
                                {[selections.place, selections.event, selections.mood].map((card) => card && (
                                    <span key={card.id} style={{
                                        padding: "0.25rem 0.5rem",
                                        backgroundColor: "white",
                                        borderRadius: "6px",
                                        fontSize: "0.75rem",
                                        fontWeight: 500,
                                        color: card.color,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.2rem",
                                    }}>
                                        {(() => {
                                            const IconComponent = getIcon(card.icon);
                                            return <IconComponent size={12} color={card.color} />;
                                        })()}
                                        {card.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 다음 버튼 */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={handleNext}
                        disabled={!isComplete}
                        style={{
                            width: "100%",
                            height: "52px",
                            fontSize: "1rem",
                            borderRadius: "14px",
                            background: isComplete
                                ? "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)"
                                : undefined,
                        }}
                    >
                        <Sparkles size={18} />
                        다음으로 가자!
                        <ChevronRight size={18} />
                    </Button>
                </motion.div>

                {!isComplete && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                            marginTop: "0.75rem",
                            textAlign: "center",
                            fontSize: "0.8rem",
                            color: "#9CA3AF"
                        }}
                    >
                        위에서 하나씩 골라봐!
                    </motion.p>
                )}
            </div>
        </StoryFlowLayout>
    );
}
