"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    ChevronRight,
    ChevronLeft,
    Sparkles,
    Star,
    TreePine,
    Waves,
    Cloud,
    Home,
    Moon,
    Crown,
    Umbrella,
    Lamp,
    Key,
    Bird,
    Flower2,
    CloudSun,
    X,
    Plus,
    Minus,
    Hammer,
    Shirt,
    Rocket,
    Bot,
    TreeDeciduous,
    Fish,
    Heart,
    Castle,
    Mountain,
    ImageIcon,
    Candy,
    GraduationCap,
    Briefcase,
    Music,
    Search,
    Droplets,
    Gift,
    Circle,
    Megaphone,
    Mail,
    Phone,
    MessageCircle,
    Pencil,
    Fan,
    Wind,
    CircleDot,
    FlaskConical,
    Magnet,
    Settings,
    Sun,
    CloudRain,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import StoryFlowLayout from "@/components/layout/StoryFlowLayout";
import Helper from "@/components/create/Helper";
import Image from "next/image";

import { backgrounds, allItems } from "./data";

interface SceneObject {
    id: string;
    type: "character" | "item";
    itemId?: string;
    x: number;
    y: number;
    scale: number;
    rotation: number;
}

// 드래그 가능한 오브젝트 컴포넌트
function DraggableObject({
    obj,
    isSelected,
    characterImage,
    characterName,
    item,
    canvasRef,
    onSelect,
    onRemove,
    onScale,
    onRotate,
    onPositionChange,
}: {
    obj: SceneObject;
    isSelected: boolean;
    characterImage: string | null;
    characterName: string;
    item: typeof allItems[0] | null;
    canvasRef: React.RefObject<HTMLDivElement | null>;
    onSelect: () => void;
    onRemove: () => void;
    onScale: (delta: number) => void;
    onRotate: (delta: number) => void;
    onPositionChange: (x: number, y: number) => void;
}) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [imgError, setImgError] = useState(false);
    const dragStartPos = useRef({ x: 0, y: 0 });
    const elementStartPos = useRef({ x: 0, y: 0 });
    const rotateInterval = useRef<NodeJS.Timeout | null>(null);

    // 회전 시작
    const startRotating = (delta: number) => {
        onRotate(delta);
        rotateInterval.current = setInterval(() => {
            onRotate(delta);
        }, 80);
    };

    // 회전 멈춤
    const stopRotating = () => {
        if (rotateInterval.current) {
            clearInterval(rotateInterval.current);
            rotateInterval.current = null;
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        dragStartPos.current = { x: e.clientX, y: e.clientY };
        elementStartPos.current = { x: obj.x, y: obj.y };
        onSelect();
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        e.stopPropagation();
        const touch = e.touches[0];
        setIsDragging(true);
        dragStartPos.current = { x: touch.clientX, y: touch.clientY };
        elementStartPos.current = { x: obj.x, y: obj.y };
        onSelect();
    };

    useEffect(() => {
        if (!isDragging) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!canvasRef.current) return;
            const rect = canvasRef.current.getBoundingClientRect();

            // 드래그 거리를 퍼센트로 변환
            const deltaX = ((e.clientX - dragStartPos.current.x) / rect.width) * 100;
            const deltaY = ((e.clientY - dragStartPos.current.y) / rect.height) * 100;

            const newX = Math.max(5, Math.min(95, elementStartPos.current.x + deltaX));
            const newY = Math.max(5, Math.min(95, elementStartPos.current.y + deltaY));

            onPositionChange(newX, newY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!canvasRef.current) return;
            const touch = e.touches[0];
            const rect = canvasRef.current.getBoundingClientRect();

            const deltaX = ((touch.clientX - dragStartPos.current.x) / rect.width) * 100;
            const deltaY = ((touch.clientY - dragStartPos.current.y) / rect.height) * 100;

            const newX = Math.max(5, Math.min(95, elementStartPos.current.x + deltaX));
            const newY = Math.max(5, Math.min(95, elementStartPos.current.y + deltaY));

            onPositionChange(newX, newY);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        const handleTouchEnd = () => {
            setIsDragging(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchmove", handleTouchMove, { passive: false });
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [isDragging, canvasRef, onPositionChange]);

    return (
        <div
            ref={elementRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{
                position: "absolute",
                left: `${obj.x}%`,
                top: `${obj.y}%`,
                width: obj.type === "character" ? "20%" : "13%", // Fixed pixel -> Percentage
                aspectRatio: "1/1",
                transform: "translate(-50%, -50%)",
                zIndex: isSelected ? 100 : (obj.type === "character" ? 5 : 10),
                cursor: isDragging ? "grabbing" : "grab",
                touchAction: "none",
                userSelect: "none",
            }}
        >
            {/* 컨트롤 버튼 */}
            {isSelected && (
                <div
                    onClick={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                    onPointerDown={(e) => e.stopPropagation()}
                    onPointerUp={(e) => e.stopPropagation()}
                    style={{
                        position: "absolute",
                        top: "-60px", // Adjusted for better spacing
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: "4px",
                        backgroundColor: "white",
                        borderRadius: "8px",
                        padding: "4px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                        zIndex: 200,
                        width: "max-content"
                    }}>
                    <button
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={(e) => { e.stopPropagation(); onScale(-0.2); }}
                        style={{ width: 28, height: 28, borderRadius: "6px", border: "none", backgroundColor: "#F3F4F6", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                        <Minus size={16} />
                    </button>
                    <button
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={(e) => { e.stopPropagation(); onScale(0.2); }}
                        style={{ width: 28, height: 28, borderRadius: "6px", border: "none", backgroundColor: "#F3F4F6", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                        <Plus size={16} />
                    </button>
                    <div style={{ width: 1, height: 20, backgroundColor: "#E5E7EB" }} />
                    <button
                        onMouseDown={(e) => { e.stopPropagation(); startRotating(-5); }}
                        onMouseUp={stopRotating}
                        onMouseLeave={stopRotating}
                        onTouchStart={(e) => { e.stopPropagation(); startRotating(-5); }}
                        onTouchEnd={stopRotating}
                        style={{ width: 28, height: 28, borderRadius: "6px", border: "none", backgroundColor: "#E0E7FF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                        title="왼쪽으로 회전 (누르고 있으면 계속)"
                    >
                        <span style={{ fontSize: "12px" }}>↺</span>
                    </button>
                    <button
                        onMouseDown={(e) => { e.stopPropagation(); startRotating(5); }}
                        onMouseUp={stopRotating}
                        onMouseLeave={stopRotating}
                        onTouchStart={(e) => { e.stopPropagation(); startRotating(5); }}
                        onTouchEnd={stopRotating}
                        style={{ width: 28, height: 28, borderRadius: "6px", border: "none", backgroundColor: "#E0E7FF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                        title="오른쪽으로 회전 (누르고 있으면 계속)"
                    >
                        <span style={{ fontSize: "12px" }}>↻</span>
                    </button>
                    <div style={{ width: 1, height: 20, backgroundColor: "#E5E7EB" }} />
                    <button
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={(e) => { e.stopPropagation(); onRemove(); }}
                        style={{ width: 28, height: 28, borderRadius: "6px", border: "none", backgroundColor: "#FEE2E2", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                        <X size={16} color="#EF4444" />
                    </button>
                </div>
            )}

            {/* 콘텐츠 */}
            <div style={{
                transform: `scale(${obj.scale}) rotate(${obj.rotation}deg)`,
                transition: isDragging ? "none" : "transform 0.15s ease",
                width: "100%",
                height: "100%",
            }}>
                {obj.type === "character" ? (
                    <div style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "8px",
                        border: "3px solid transparent",
                        overflow: "hidden",
                    }}>
                        {characterImage ? (
                            <Image
                                src={characterImage}
                                alt={characterName}
                                fill
                                style={{ objectFit: "contain", pointerEvents: "none" }}
                                draggable={false}
                            />
                        ) : (
                            <div style={{
                                width: "100%",
                                height: "100%",
                                backgroundColor: "#EC4899",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "50%",
                            }}>
                                <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "white" }}>
                                    {characterName.charAt(0)}
                                </span>
                            </div>
                        )}
                    </div>
                ) : item ? (
                    <div style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "3px solid transparent",
                        borderRadius: "12px",
                        backgroundColor: imgError ? "rgba(255,255,255,0.8)" : "transparent",
                    }}>
                        {!imgError ? (
                            <Image
                                src={item.imagePath}
                                alt={item.name}
                                fill
                                style={{ objectFit: "contain", pointerEvents: "none" }}
                                draggable={false}
                                onError={() => setImgError(true)}
                                unoptimized
                            />
                        ) : (
                            <item.Icon size={32} color={item.color} />
                        )}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default function CreateScenePage() {
    const router = useRouter();
    const canvasRef = useRef<HTMLDivElement>(null);

    // 전역 상태
    const [characterName, setCharacterName] = useState("토토");
    const [characterImage, setCharacterImage] = useState<string | null>(null);
    const [learningTopic, setLearningTopic] = useState<{ id: string; name: string; relatedItems?: string[] } | null>(null);

    // 장면 편집 상태 (단일 장면)
    const [backgroundId, setBackgroundId] = useState("");
    const [objects, setObjects] = useState<SceneObject[]>([]);
    const [selectedObjectId, setSelectedObjectId] = useState<string | null>(null);
    const [expandedSection, setExpandedSection] = useState<string>("char");

    // 초기 데이터 로드
    useEffect(() => {
        const charData = localStorage.getItem("create_character");
        const recipeData = localStorage.getItem("create_recipe");
        // 저장된 장면 데이터 확인
        const sceneDataStr = localStorage.getItem("create_scene");

        if (charData) {
            const parsed = JSON.parse(charData);
            setCharacterName(parsed.name || "토토");
            setCharacterImage(parsed.imageUrl || parsed.transformedImageUrl || null);
        }

        // 1. 레시피 기반 초기화
        if (recipeData) {
            const recipe = JSON.parse(recipeData);
            if (recipe.learningTopic) {
                setLearningTopic(recipe.learningTopic);
            }

            // 저장된 장면 데이터가 있으면 복원 (우선순위 높음)
            if (sceneDataStr) {
                try {
                    const sceneData = JSON.parse(sceneDataStr);
                    if (sceneData.backgroundId) setBackgroundId(sceneData.backgroundId);
                    if (sceneData.objects && Array.isArray(sceneData.objects)) {
                        setObjects(sceneData.objects);
                    }
                } catch (e) {
                    console.error("Failed to load scene data", e);
                }
            } else {
                // 저장된 데이터가 없으면 레시피 기반 기본 배경 설정
                if (recipe.place) {
                    const placeId = recipe.place.id;
                    if (placeId === "place-forest") setBackgroundId("forest");
                    else if (placeId === "place-ocean") setBackgroundId("ocean");
                    else if (placeId === "place-palace") setBackgroundId("sky");
                    else if (placeId === "place-village") setBackgroundId("village");
                    else if (placeId === "place-mountain") setBackgroundId("mountain");
                    else if (placeId === "place-school") setBackgroundId("school");
                    else if (placeId === "place-space") setBackgroundId("space");
                    else if (placeId === "place-candy") setBackgroundId("candy");
                    else setBackgroundId("forest");
                }
            }
        }
    }, []);

    const currentBg = backgrounds.find(b => b.id === backgroundId);

    // 객체 추가
    const addObject = (type: "character" | "item", itemId?: string) => {
        if (type === "character" && objects.some(o => o.type === "character")) return;
        const newObj: SceneObject = {
            id: `${type}-${Date.now()}`,
            type,
            itemId,
            x: 50,
            y: 50,
            scale: 1,
            rotation: 0,
        };
        setObjects([...objects, newObj]);
    };

    // 객체 제거
    const removeObject = (id: string) => {
        setObjects(objects.filter(obj => obj.id !== id));
        setSelectedObjectId(null);
    };

    // 객체 크기 조절
    const updateObjectScale = (id: string, delta: number) => {
        setObjects(prev => prev.map(obj =>
            obj.id === id
                ? { ...obj, scale: Math.max(0.7, Math.min(2.5, obj.scale + delta)) }
                : obj
        ));
    };

    // 객체 위치 업데이트
    const updateObjectPosition = (id: string, x: number, y: number) => {
        setObjects(prev => prev.map(obj =>
            obj.id === id ? { ...obj, x, y } : obj
        ));
    };

    // 객체 회전
    const updateObjectRotation = (id: string, delta: number) => {
        setObjects(prev => prev.map(obj =>
            obj.id === id
                ? { ...obj, rotation: obj.rotation + delta }
                : obj
        ));
    };

    // 완료 처리
    const handleNext = () => {
        const placedItemIds = objects
            .filter(obj => obj.type === "item" && obj.itemId)
            .map(obj => {
                const item = allItems.find(i => i.id === obj.itemId);
                return item?.name || obj.itemId;
            });

        localStorage.setItem("create_scene", JSON.stringify({
            backgroundId,
            objects,
            placedItemIds,
        }));

        // 버튼 클릭으로 이동할 때만 AI 생성 허용 플래그 설정
        sessionStorage.setItem("should_generate_story", "true");

        // 새로운 이야기를 만들기 위해 캐시 삭제
        sessionStorage.removeItem("cached_story");

        router.push("/create/story");
    };

    const helperMessage = !backgroundId
        ? "먼저 마음에 드는 배경을 골라볼까?"
        : objects.length === 0
            ? characterName + "를 장면에 넣어볼까?"
            : "멋지게 꾸미고 있네! 이야기를 만들러 가자!";

    return (
        <StoryFlowLayout currentStep={3} title="장면 속으로">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    backgroundColor: "white",
                    borderRadius: "24px",
                    padding: "1.5rem",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <Helper character="droplet" message={helperMessage} position="right" />

                {/* 캔버스 영역 */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                    <div
                        ref={canvasRef}
                        onMouseDown={(e) => {
                            // 드래그 가능한 오브젝트가 아닌 영역(배경 등)을 클릭하면 선택 해제
                            // (DraggableObject의 onMouseDown에서 stopPropagation을 하므로 여기 도달하면 배경임)
                            setSelectedObjectId(null);
                        }}
                        style={{
                            width: "100%",
                            aspectRatio: "16 / 9",
                            backgroundColor: "#F3F4F6",
                            borderRadius: "20px",
                            overflow: "hidden",
                            border: "2px solid #E5E7EB",
                            position: "relative",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                        }}
                    >
                        {/* 배경 */}
                        {currentBg ? (
                            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                                <img
                                    src={currentBg.imagePath}
                                    alt={currentBg.name}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    onError={(e) => {
                                        // 이미지 로드 실패 시 그라데이션 표시
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement!.style.background = currentBg.bgImage;
                                    }}
                                />
                            </div>
                        ) : (
                            <div style={{
                                position: "absolute", inset: 0,
                                display: "flex", flexDirection: "column",
                                alignItems: "center", justifyContent: "center",
                                color: "#9CA3AF", gap: "0.5rem",
                            }}>
                                <ImageIcon size={48} strokeWidth={1.5} />
                                <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>배경을 불러오는 중...</span>
                            </div>
                        )}

                        {/* 배치된 오브젝트들 */}
                        {objects.map(obj => {
                            const isSelected = selectedObjectId === obj.id;
                            const item = obj.type === "item" ? allItems.find(i => i.id === obj.itemId) : null;

                            return (
                                <DraggableObject
                                    key={obj.id}
                                    obj={obj}
                                    isSelected={isSelected}
                                    characterImage={characterImage}
                                    characterName={characterName}
                                    item={item || null}
                                    canvasRef={canvasRef}
                                    onSelect={() => setSelectedObjectId(obj.id)}
                                    onRemove={() => removeObject(obj.id)}
                                    onScale={(delta) => updateObjectScale(obj.id, delta)}
                                    onRotate={(delta) => updateObjectRotation(obj.id, delta)}
                                    onPositionChange={(x, y) => updateObjectPosition(obj.id, x, y)}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* 도구 패널 */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>


                    {/* 캐릭터 */}
                    <div style={{ backgroundColor: "#F9FAFB", borderRadius: "12px", border: "1px solid #E5E7EB", overflow: "hidden" }}>
                        <button
                            onClick={() => setExpandedSection(expandedSection === "char" ? "" : "char")}
                            style={{
                                width: "100%", padding: "0.75rem 1rem", display: "flex", alignItems: "center", justifyContent: "space-between",
                                backgroundColor: expandedSection === "char" ? "#FCE7F3" : "#F9FAFB", border: "none", cursor: "pointer"
                            }}
                        >
                            <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#4B5563", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                                <Heart size={16} /> 캐릭터
                            </span>
                            <ChevronRight size={16} style={{ transform: expandedSection === "char" ? "rotate(90deg)" : "rotate(0)", transition: "transform 0.2s" }} color="#9CA3AF" />
                        </button>
                        {expandedSection === "char" && (
                            <div style={{ padding: "0.75rem", borderTop: "1px solid #E5E7EB" }}>
                                <button
                                    onClick={() => addObject("character")}
                                    disabled={!backgroundId || objects.some(o => o.type === "character")}
                                    style={{
                                        width: "100%", padding: "0.75rem", borderRadius: "12px", border: "2px solid #EC4899",
                                        backgroundColor: objects.some(o => o.type === "character") ? "#E5E7EB" : "#FCE7F3",
                                        cursor: !backgroundId || objects.some(o => o.type === "character") ? "not-allowed" : "pointer",
                                        opacity: backgroundId ? 1 : 0.5,
                                        display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                                    }}
                                >
                                    {characterImage ? (
                                        <Image src={characterImage} alt="" width={32} height={32} style={{ borderRadius: "50%", objectFit: "cover" }} />
                                    ) : (
                                        <Plus size={20} color="#EC4899" />
                                    )}
                                    <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#DB2777" }}>
                                        {objects.some(o => o.type === "character") ? "배치 완료!" : `${characterName} 배치하기`}
                                    </span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* 아이템 */}
                    <div style={{ backgroundColor: "#F9FAFB", borderRadius: "12px", border: "1px solid #E5E7EB", overflow: "hidden" }}>
                        <button
                            onClick={() => setExpandedSection(expandedSection === "items" ? "" : "items")}
                            style={{
                                width: "100%", padding: "0.75rem 1rem", display: "flex", alignItems: "center", justifyContent: "space-between",
                                backgroundColor: expandedSection === "items" ? "#FEF3C7" : "#F9FAFB", border: "none", cursor: "pointer"
                            }}
                        >
                            <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#4B5563", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                                <Star size={16} /> 아이템
                            </span>
                            <ChevronRight size={16} style={{ transform: expandedSection === "items" ? "rotate(90deg)" : "rotate(0)", transition: "transform 0.2s" }} color="#9CA3AF" />
                        </button>
                        {expandedSection === "items" && (
                            <div style={{ padding: "0.75rem", borderTop: "1px solid #E5E7EB", maxHeight: "320px", overflowY: "auto" }} className="hide-scrollbar">
                                {/* 학습 주제 아이템 (오늘의 보따리) */}
                                {learningTopic && (
                                    <div style={{ marginBottom: "1.2rem" }}>
                                        <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#EC4899", marginBottom: "0.6rem", display: "flex", alignItems: "center", gap: "0.3rem", paddingLeft: "0.2rem" }}>
                                            <Sparkles size={14} fill="#EC4899" />
                                            <span>오늘의 보따리 : {learningTopic.name}</span>
                                        </div>
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.5rem" }}>
                                            {allItems
                                                .filter(item => item.relatedTopic === learningTopic.id)
                                                .map(item => (
                                                    <button
                                                        key={item.id}
                                                        onClick={() => addObject("item", item.id)}
                                                        disabled={!backgroundId}
                                                        style={{
                                                            width: "100%", aspectRatio: "1/1", borderRadius: "12px",
                                                            backgroundColor: "#FDF2F8",
                                                            border: "2px solid #EC4899",
                                                            cursor: backgroundId ? "pointer" : "not-allowed",
                                                            opacity: backgroundId ? 1 : 0.5,
                                                            display: "flex", flexDirection: "column",
                                                            alignItems: "center", justifyContent: "center", gap: "0.2rem",
                                                            position: "relative",
                                                            boxShadow: "0 2px 4px rgba(236, 72, 153, 0.1)",
                                                            overflow: "hidden",
                                                            padding: "4px"
                                                        }}
                                                    >
                                                        <div style={{ width: "100%", height: "70%", position: "relative" }}>
                                                            <Image
                                                                src={item.imagePath}
                                                                alt={item.name}
                                                                fill
                                                                style={{ objectFit: "contain" }}
                                                                sizes="100px"
                                                                unoptimized
                                                            />
                                                        </div>
                                                        <span style={{ fontSize: "0.55rem", color: "#DB2777", fontWeight: 700, letterSpacing: "-0.02em" }}>{item.name}</span>
                                                    </button>
                                                ))}
                                        </div>
                                    </div>
                                )}

                                {/* 공용 아이템 (기본 꾸미기) */}
                                <div>
                                    <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#6B7280", marginBottom: "0.6rem", display: "flex", alignItems: "center", gap: "0.3rem", paddingLeft: "0.2rem" }}>
                                        <Briefcase size={14} />
                                        <span>기본 꾸미기</span>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.5rem" }}>
                                        {allItems
                                            .filter(item => item.category === "common")
                                            .map(item => (
                                                <button
                                                    key={item.id}
                                                    onClick={() => addObject("item", item.id)}
                                                    disabled={!backgroundId}
                                                    style={{
                                                        width: "100%", aspectRatio: "1/1", borderRadius: "12px",
                                                        backgroundColor: "white",
                                                        border: "1px solid #E5E7EB",
                                                        cursor: backgroundId ? "pointer" : "not-allowed",
                                                        opacity: backgroundId ? 1 : 0.5,
                                                        display: "flex", flexDirection: "column",
                                                        alignItems: "center", justifyContent: "center", gap: "0.2rem",
                                                        position: "relative",
                                                        overflow: "hidden",
                                                        padding: "4px"
                                                    }}
                                                >
                                                    <div style={{ width: "100%", height: "70%", position: "relative" }}>
                                                        <Image
                                                            src={item.imagePath}
                                                            alt={item.name}
                                                            fill
                                                            style={{ objectFit: "contain" }}
                                                            sizes="100px"
                                                            unoptimized
                                                        />
                                                    </div>
                                                    <span style={{ fontSize: "0.55rem", color: "#4B5563", fontWeight: 600, letterSpacing: "-0.02em" }}>{item.name}</span>
                                                </button>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* 하단 버튼 */}
                <div style={{ display: "flex", gap: "0.75rem" }}>
                    <Button
                        variant="ghost"
                        onClick={() => router.push("/create/recipe")}
                        style={{ flex: 1, height: "48px", borderRadius: "12px", border: "1px solid #E5E7EB" }}
                    >
                        <ChevronLeft size={18} /> 이전 단계
                    </Button>

                    <motion.div style={{ flex: 2 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                            variant="primary"
                            onClick={handleNext}
                            disabled={!backgroundId}
                            style={{
                                width: "100%", height: "48px", borderRadius: "12px",
                                background: backgroundId ? "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)" : undefined,
                            }}
                        >
                            이야기 만들기 <Sparkles size={18} />
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </StoryFlowLayout>
    );
}
