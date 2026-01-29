"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Volume2, RotateCw } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { allLibraryCards, getCardById } from "@/lib/libraryCards";
import { LibraryCard } from "@/lib/types/library";

interface Props {
    card: {
        id: string;
        name: string;
        desc?: string | null;
        color?: string | null;
        imagePath?: string | null;
        type?: string;
    };
    isSelected?: boolean;
    isSelectMode?: boolean;
    isTutorial?: boolean; // 튜토리얼 모드 추가
    onToggleSelect?: () => void;
}

// 라이브러리에 없는 일반 단어 번역 (임시 사전) - 최대한 많이 추가
const commonTranslations: Record<string, string> = {
    // 과일/음식
    "사과": "Apple", "바나나": "Banana", "포도": "Grape", "수박": "Watermelon", "딸기": "Strawberry",
    "오렌지": "Orange", "복숭아": "Peach", "토마토": "Tomato", "당근": "Carrot", "우유": "Milk",
    "빵": "Bread", "케이크": "Cake", "사탕": "Candy", "초콜릿": "Chocolate", "아이스크림": "Ice Cream",
    "쿠키": "Cookie", "피자": "Pizza", "햄버거": "Hamburger", "물": "Water",

    // 동물
    "강아지": "Puppy", "개": "Dog", "고양이": "Cat", "토끼": "Rabbit", "다람쥐": "Squirrel",
    "호랑이": "Tiger", "사자": "Lion", "곰": "Bear", "코끼리": "Elephant", "기린": "Giraffe",
    "원숭이": "Monkey", "돼지": "Pig", "소": "Cow", "말": "Horse", "양": "Sheep", "닭": "Chicken",
    "오리": "Duck", "새": "Bird", "독수리": "Eagle", "부엉이": "Owl", "펭귄": "Penguin",
    "물고기": "Fish", "상어": "Shark", "고래": "Whale", "돌고래": "Dolphin", "거북이": "Turtle",
    "개구리": "Frog", "공룡": "Dinosaur", "나비": "Butterfly", "벌": "Bee",

    // 탈것
    "자동차": "Car", "버스": "Bus", "택시": "Taxi", "트럭": "Truck", "기차": "Train",
    "비행기": "Airplane", "헬리콥터": "Helicopter", "배": "Ship", "보트": "Boat", "잠수함": "Submarine",
    "자전거": "Bicycle", "오토바이": "Motorcycle", "경찰차": "Police Car", "소방차": "Fire Truck",
    "구급차": "Ambulance", "로켓": "Rocket", "우주선": "Spaceship",

    // 자연
    "해": "Sun", "달": "Moon", "별": "Star", "구름": "Cloud", "비": "Rain", "눈": "Snow",
    "바람": "Wind", "무지개": "Rainbow", "하늘": "Sky", "바다": "Sea", "산": "Mountain",
    "강": "River", "숲": "Forest", "나무": "Tree", "꽃": "Flower", "장미": "Rose", "해바라기": "Sunflower",
    "돌": "Stone", "불": "Fire",

    // 사물/기타
    "책": "Book", "연필": "Pencil", "지우개": "Eraser", "가방": "Bag", "학교": "School",
    "공": "Ball", "인형": "Doll", "로봇": "Robot", "장난감": "Toy", "풍선": "Balloon",
    "모자": "Hat", "신발": "Shoes", "양말": "Socks", "우산": "Umbrella", "시계": "Clock",
    "안경": "Glasses", "컵": "Cup", "침대": "Bed", "의자": "Chair", "책상": "Desk",
    "텔레비전": "Television", "전화기": "Phone", "컴퓨터": "Computer", "카메라": "Camera",
    "거울": "Mirror", "열쇠": "Key", "선물": "Gift", "왕관": "Crown", "반지": "Ring",

    // 사람/호칭
    "친구": "Friend", "선생님": "Teacher", "엄마": "Mom", "아빠": "Dad", "할머니": "Grandma",
    "할아버지": "Grandpa", "아기": "Baby", "왕자": "Prince", "공주": "Princess", "왕": "King", "여왕": "Queen",
    "경찰관": "Police Officer", "소방관": "Firefighter", "의사": "Doctor", "요리사": "Chef",

    // 감정/상태 (혹시 몰라서)
    "행복": "Happy", "슬픔": "Sad", "화남": "Angry", "졸림": "Sleepy", "배고픔": "Hungry",
    "사랑": "Love", "용기": "Courage", "꿈": "Dream", "희망": "Hope",

    // 앱 내 용어 / 칭호
    "꼬마작가": "Little Writer", "요술보따리": "Magic Bag", "이야기 박사": "Story Doctor",
    "상상 대장": "Captain Imagination", "모험가": "Adventurer", "마법사": "Wizard",
    "첫 걸음": "First Step", "시작": "Start", "끝": "End", "성공": "Success",
    "실패": "Failure", "도전": "Challenge", "레벨": "Level", "경험치": "EXP",

    // 기타 누락되기 쉬운 단어들
    "집": "House", "놀이터": "Playground", "공원": "Park", "도서관": "Library",
    "마트": "Supermarket", "병원": "Hospital", "약국": "Pharmacy",
    "버스 정류장": "Bus Stop", "지하철": "Subway", "신호등": "Traffic Light"
};

export default function FlipCardItem({ card, isSelected, isSelectMode, isTutorial, onToggleSelect }: Props) {
    const [isFlipped, setIsFlipped] = useState(false);

    // 1. ID로 찾기
    let libraryCard = getCardById(card.id);

    // 2. ID로 못 찾으면 이름으로 찾기
    if (!libraryCard) {
        libraryCard = allLibraryCards.find(c => c.name === card.name);
    }

    // 화면에 표시할 데이터
    const displayCard = libraryCard || card;
    const learningContent = (displayCard as LibraryCard).learningContent;

    // 텍스트 결정 로직
    let koreanText = learningContent?.korean || displayCard.name;
    // 영어 텍스트: 라이브러리 -> 공통 사전 순으로 검색
    let englishText = learningContent?.english || commonTranslations[displayCard.name] || commonTranslations[displayCard.name.replace(/\s+/g, '')] || "";
    // 공백 제거 매칭도 시도 (예: "아기 상어" -> "아기상어" 사전에 있으면 매칭)

    // 튜토리얼 카드 특수 처리
    if (isTutorial) {
        koreanText = "참 잘했어요!";
        englishText = "Great Job!";
    }

    // 카테고리 표시용
    const categoryLabel = isTutorial ? "튜토리얼" : ((displayCard as any).category || (displayCard as any).type || "카드");

    // 카테고리 한글화 맵
    const categoryMap: Record<string, string> = {
        personality: "성격", role: "역할", place: "장소", event: "사건", mood: "분위기",
        learning: "단어", learningTopic: "주제", object: "사물", tutorial: "연습"
    };
    const displayCategory = categoryMap[categoryLabel] || categoryLabel;

    const handleCardClick = () => {
        // 튜토리얼 모드면 선택 모드 무시하고 무조건 Flip
        if (isTutorial) {
            setIsFlipped(!isFlipped);
            return;
        }

        if (isSelectMode) {
            onToggleSelect?.();
        } else {
            setIsFlipped(!isFlipped);
        }
    };

    const handleSpeak = (e: React.MouseEvent) => {
        e.stopPropagation();

        if (!window.speechSynthesis) return;

        const uttrKo = new SpeechSynthesisUtterance(koreanText);
        uttrKo.lang = "ko-KR";
        uttrKo.rate = 0.9;

        if (englishText) {
            const uttrEn = new SpeechSynthesisUtterance(englishText);
            uttrEn.lang = "en-US";
            uttrEn.rate = 0.8;

            window.speechSynthesis.speak(uttrKo);
            window.speechSynthesis.speak(uttrEn);
        } else {
            window.speechSynthesis.speak(uttrKo);
        }
    };

    return (
        <div
            onClick={handleCardClick}
            className="relative w-full h-full cursor-pointer perspective-1000"
            style={{ perspective: "1000px" }}
        >
            <div
                className="w-full h-full relative transition-all duration-500 preserve-3d"
                style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    height: "100%",
                }}
            >
                {/* Front Side (Image + Text) */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden"
                    style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                    <Card
                        padding="none"
                        style={{
                            border: isSelected ? "2px solid #E53935" : (isTutorial ? "2px dashed #F59E0B" : `1px solid ${card.color || "#e5e7eb"}`),
                            overflow: "hidden",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "white",
                        }}
                    >
                        {/* 이미지 영역 */}
                        <div style={{
                            width: "100%",
                            flex: 1, // 남은 공간 모두 차지
                            backgroundColor: isTutorial ? "#FFF7ED" : (`${card.color}10` || "#f3f4f6"),
                            position: "relative",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            {/* 뒤집기 힌트 아이콘 */}
                            <div style={{
                                position: "absolute", top: 8, right: 8, zIndex: 10,
                                opacity: isTutorial ? 1 : 0.6,
                                backgroundColor: "rgba(255,255,255,0.7)",
                                borderRadius: "50%",
                                padding: "4px",
                                animation: isTutorial ? "spin 3s linear infinite" : "none"
                            }}>
                                <RotateCw size={14} color={card.color || "#666"} />
                            </div>

                            {isTutorial ? (
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", color: "#F59E0B" }}>
                                    <span style={{ fontSize: "2.5rem" }}>👆</span>
                                    <span style={{ fontSize: "0.9rem", fontWeight: 700 }}>눌러보세요!</span>
                                </div>
                            ) : (
                                displayCard.imagePath ? (
                                    <Image
                                        src={displayCard.imagePath}
                                        alt={displayCard.name}
                                        fill
                                        unoptimized
                                        style={{ objectFit: "cover" }}
                                        onError={(e: any) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement.innerHTML = `<div style="font-size:2.5rem">🃏</div>`;
                                        }}
                                    />
                                ) : (
                                    <div style={{ fontSize: "2.5rem" }}>🃏</div>
                                )
                            )}
                        </div>

                        {/* 하단 텍스트 (이름표) */}
                        <div style={{
                            padding: "0.75rem",
                            textAlign: "center",
                            height: "auto",
                            minHeight: "60px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            borderTop: `1px solid ${card.color ? card.color + '20' : '#f3f4f6'}`,
                            backgroundColor: "white"
                        }}>
                            <div style={{ fontSize: "0.7rem", color: card.color || "#6B7280", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                {displayCategory}
                            </div>
                            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1F2937", wordBreak: "keep-all", marginTop: "0.1rem" }}>
                                {displayCard.name}
                            </div>
                        </div>
                    </Card>

                    {/* 선택 모드 체크박스 */}
                    {isSelectMode && !isTutorial && ( // 튜토리얼은 선택 불가
                        <div style={{ position: "absolute", top: 8, left: 8, zIndex: 20 }}>
                            <div
                                style={{
                                    width: "24px",
                                    height: "24px",
                                    borderRadius: "50%",
                                    backgroundColor: isSelected ? "#E53935" : "white",
                                    border: isSelected ? "none" : "2px solid #E5E7EB",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                }}
                            >
                                {isSelected && <span>✓</span>}
                            </div>
                        </div>
                    )}
                </div>

                {/* Back Side (Text + TTS) */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden"
                    style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                    }}
                >
                    <Card
                        padding="none"
                        style={{
                            border: `2px solid ${card.color || "#e5e7eb"}`,
                            boxShadow: `0 4px 12px ${card.color}40`,
                            overflow: "hidden",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#fff",
                            backgroundImage: `linear-gradient(135deg, #fff 0%, ${card.color}10 100%)`,
                            padding: "1rem",
                            textAlign: "center"
                        }}
                    >
                        <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1F2937", marginBottom: "0.25rem" }}>
                            {koreanText}
                        </h3>

                        {/* 영어 단어 */}
                        {englishText ? (
                            <p style={{ fontSize: "1.2rem", fontWeight: 600, color: card.color || "#4B5563", marginBottom: "0.5rem", fontFamily: "sans-serif" }}>
                                {englishText}
                            </p>
                        ) : null}

                        <div style={{ marginTop: "1.5rem" }}>
                            <button
                                onClick={handleSpeak}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "56px",
                                    height: "56px",
                                    borderRadius: "50%",
                                    backgroundColor: card.color || "#3B82F6",
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                                    transition: "transform 0.1s"
                                }}
                                onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.95)"}
                                onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
                            >
                                <Volume2 size={28} />
                            </button>
                            <p style={{ fontSize: "0.75rem", color: "#9CA3AF", marginTop: "0.5rem", fontWeight: 500 }}>듣기</p>
                        </div>
                    </Card>
                </div>
            </div>

            {/* 회전 애니메이션 스타일 */}
            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
