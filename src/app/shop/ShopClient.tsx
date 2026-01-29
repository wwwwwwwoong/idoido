"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ShoppingBag, Wand2 } from "lucide-react";
import { Button, Card } from "@/components";

interface Character {
    id: string;
    name: string | null;
    imageUrl: string | null;
}

interface Props {
    characters: Character[];
    initialCharId?: string;
}

type GoodsType = "keyring" | "sticker" | "griptok";

const GOODS_OPTIONS: { id: GoodsType; name: string; icon: string; desc: string }[] = [
    { id: "keyring", name: "아크릴 키링", icon: "🔑", desc: "가방에 달고 다니기 딱 좋아요!" },
    { id: "sticker", name: "방수 스티커", icon: "🏷️", desc: "노트북이나 캐리어에 붙여보세요." },
    { id: "griptok", name: "스마트톡", icon: "📱", desc: "핸드폰 뒤에 착! 그립감 최고." },
];

export default function ShopClient({ characters, initialCharId }: Props) {
    const router = useRouter();
    const [selectedCharId, setSelectedCharId] = useState<string>(initialCharId || (characters.length > 0 ? characters[0].id : ""));
    const [selectedGoods, setSelectedGoods] = useState<GoodsType>("keyring");

    const character = characters.find(c => c.id === selectedCharId) || { id: "", name: "", imageUrl: null };

    const handleCharacterSelect = (id: string) => {
        setSelectedCharId(id);
    };

    const currentGoods = GOODS_OPTIONS.find(g => g.id === selectedGoods)!;

    const [isLoading, setIsLoading] = useState(false);

    const handlePurchase = () => {
        setIsLoading(true);
        // 실제 연동은 나중에, 지금은 안내 메시지
        setTimeout(() => {
            alert(`'${character.name || "캐릭터"}' ${currentGoods.name} 제작 페이지로 이동합니다.\n(제휴 사이트 연동 예정)`);
            setIsLoading(false);
        }, 800);
    };

    return (
        <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem 1.5rem", minHeight: "100vh" }}>
            {/* 헤더 / 뒤로가기 */}
            <div style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}>
                <Button variant="ghost" onClick={() => router.back()} style={{ marginRight: "1rem" }}>
                    <ChevronLeft size={20} /> 돌아가기
                </Button>
                <h1 style={{ fontSize: "1.5rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Wand2 size={24} color="#8B5CF6" />
                    마법의 상점
                </h1>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }} className="lg:grid-cols-2 md:grid-cols-1">
                {/* 왼쪽: 미리보기 영역 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{
                        width: "100%",
                        aspectRatio: "1",
                        backgroundColor: "#F3F4F6",
                        borderRadius: "24px",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        border: "1px solid #E5E7EB",
                        boxShadow: "inset 0 0 20px rgba(0,0,0,0.05)"
                    }}>
                        {/* 굿즈 목업 배경/프레임 (간단히 표현) */}
                        {selectedGoods === "keyring" && (
                            <div style={{
                                position: "absolute",
                                top: "10%",
                                width: "20px",
                                height: "60px",
                                border: "4px solid #D1D5DB",
                                borderRadius: "10px",
                                borderBottom: "none",
                                zIndex: 10
                            }} />
                        )}

                        {/* 캐릭터 이미지 */}
                        <motion.div
                            key={selectedGoods}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            style={{
                                width: selectedGoods === "sticker" ? "70%" : "60%",
                                height: selectedGoods === "sticker" ? "70%" : "60%",
                                position: "relative",
                                borderRadius: selectedGoods === "sticker" ? "0" : (selectedGoods === "griptok" ? "50%" : "20px"),
                                overflow: "hidden",
                                border: selectedGoods === "sticker" ? "4px solid white" : "none", // 스티커 칼선 느낌
                                boxShadow: selectedGoods === "sticker"
                                    ? "0 4px 8px rgba(0,0,0,0.1)"
                                    : (selectedGoods === "griptok" ? "0 10px 20px rgba(0,0,0,0.2)" : "initial"),
                                filter: selectedGoods === "keyring" ? "drop-shadow(0 10px 10px rgba(0,0,0,0.15))" : "none"
                            }}
                        >
                            {character.imageUrl ? (
                                <img
                                    src={character.imageUrl}
                                    alt={character.name || "Character"}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            ) : (
                                <div style={{ width: "100%", height: "100%", backgroundColor: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    🎨
                                </div>
                            )}

                            {/* 키링 구멍 표현 */}
                            {selectedGoods === "keyring" && (
                                <div style={{ position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)", width: "8px", height: "8px", backgroundColor: "white", borderRadius: "50%", zIndex: 20 }}></div>
                            )}
                        </motion.div>

                        {/* 그립톡 본체 표현 */}
                        {selectedGoods === "griptok" && (
                            <div style={{
                                position: "absolute",
                                width: "65%",
                                height: "65%",
                                borderRadius: "50%",
                                border: "2px solid #E5E7EB",
                                zIndex: -1
                            }} />
                        )}
                    </div>

                    <p style={{ marginTop: "1rem", color: "#6B7280", fontSize: "0.9rem" }}>
                        * 실제 제작 시 이미지 위치를 조정할 수 있어요.
                    </p>
                </div>

                {/* 오른쪽: 옵션 선택 */}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

                    {/* 캐릭터 선택 영역 (캐릭터가 있을 때만 표시) */}
                    {characters.length > 0 && (
                        <div style={{ marginBottom: "1.5rem" }}>
                            <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#4B5563", marginBottom: "0.5rem" }}>
                                캐릭터 선택
                            </h3>
                            <div style={{ display: "flex", gap: "0.5rem", overflowX: "auto", paddingBottom: "0.5rem" }}>
                                {characters.map((char) => (
                                    <button
                                        key={char.id}
                                        onClick={() => handleCharacterSelect(char.id)}
                                        style={{
                                            flexShrink: 0,
                                            width: "60px",
                                            height: "60px",
                                            borderRadius: "12px",
                                            overflow: "hidden",
                                            border: selectedCharId === char.id ? "2px solid #8B5CF6" : "1px solid #E5E7EB",
                                            padding: 0,
                                            cursor: "pointer",
                                            opacity: selectedCharId === char.id ? 1 : 0.6,
                                            transition: "all 0.2s"
                                        }}
                                    >
                                        {char.imageUrl ? (
                                            <img src={char.imageUrl} alt={char.name || ""} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        ) : (
                                            <div style={{ width: "100%", height: "100%", backgroundColor: "#F3F4F6" }} />
                                        )}
                                    </button>
                                ))}
                                <button
                                    onClick={() => router.push("/create/draw")}
                                    style={{
                                        flexShrink: 0,
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "12px",
                                        border: "1px dashed #D1D5DB",
                                        backgroundColor: "#F9FAFB",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        color: "#6B7280"
                                    }}
                                    title="새 캐릭터 만들기"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    )}

                    <div style={{ marginBottom: "2rem" }}>
                        <span style={{ fontSize: "0.9rem", color: "#8B5CF6", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            Special Goods
                        </span>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#1F2937", marginTop: "0.25rem" }}>
                            {character.name || "나만의 캐릭터"} 굿즈
                        </h2>
                        <p style={{ color: "#4B5563", marginTop: "0.5rem" }}>
                            세상에 단 하나뿐인 캐릭터로 특별한 추억을 만들어보세요.
                        </p>
                    </div>

                    {/* 굿즈 리스트 */}
                    <div style={{ display: "grid", gap: "1rem", marginBottom: "2rem" }}>
                        {GOODS_OPTIONS.map((option) => (
                            <div
                                key={option.id}
                                onClick={() => setSelectedGoods(option.id)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "1rem",
                                    borderRadius: "12px",
                                    border: selectedGoods === option.id ? "2px solid #8B5CF6" : "1px solid #E5E7EB",
                                    backgroundColor: selectedGoods === option.id ? "#F5F3FF" : "white",
                                    cursor: "pointer",
                                    transition: "all 0.2s"
                                }}
                            >
                                <div style={{ fontSize: "2rem", marginRight: "1rem" }}>{option.icon}</div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1F2937" }}>{option.name}</h3>
                                    <p style={{ fontSize: "0.85rem", color: "#6B7280" }}>{option.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 하단 액션 */}
                    <div style={{
                        borderTop: "1px solid #E5E7EB",
                        paddingTop: "1.5rem",
                    }}>
                        <Button
                            variant="primary"
                            onClick={handlePurchase}
                            disabled={isLoading}
                            isLoading={isLoading}
                            style={{
                                width: "100%",
                                height: "56px",
                                fontSize: "1.1rem",
                                fontWeight: 700,
                                backgroundColor: "#8B5CF6",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "0.5rem"
                            }}
                        >
                            {!isLoading && <ShoppingBag size={20} />}
                            {isLoading ? "이동 중..." : "제작하러 가기"}
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
