"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 도우미 캐릭터 5종
export const helperCharacters = {
    whirlwind: {
        id: "whirlwind",
        name: "회오리",
        image: "/helpers/whirlwind.webp",
        color: "#9B59B6",
    },
    droplet: {
        id: "droplet",
        name: "물방울",
        image: "/helpers/droplet.webp",
        color: "#3498DB",
    },
    pebble: {
        id: "pebble",
        name: "돌멩이",
        image: "/helpers/pebble.webp",
        color: "#7F8C8D",
    },
    flame: {
        id: "flame",
        name: "불꽃이",
        image: "/helpers/flame.webp",
        color: "#E74C3C",
    },
    leaf: {
        id: "leaf",
        name: "나뭇잎",
        image: "/helpers/leaf.webp",
        color: "#27AE60",
    },
};

export type HelperType = keyof typeof helperCharacters;

interface HelperProps {
    character: HelperType;
    message: string;
    position?: "left" | "right";
    style?: React.CSSProperties;
    compact?: boolean;
}

export default function Helper({ character, message, position = "left", style, compact = false }: HelperProps) {
    const helper = helperCharacters[character];
    const isLeft = position === "left";

    return (
        <div
            style={{
                display: "flex",
                flexDirection: compact ? "column" : (isLeft ? "row" : "row-reverse"),
                alignItems: "center",
                justifyContent: compact ? "center" : "flex-start",
                gap: compact ? "0.25rem" : "0.75rem",
                padding: compact ? "0" : "0.5rem 0",
                width: compact ? "100%" : "auto",
                ...style,
            }}
        >
            {/* 캐릭터 - 원형 테두리 없이 자연스럽게 */}
            <motion.div
                animate={{
                    y: [0, -6, 0],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    width: compact ? "48px" : "80px",
                    height: compact ? "48px" : "80px",
                    flexShrink: 0,
                    transition: "width 0.3s, height 0.3s"
                }}
            >
                <Image
                    src={helper.image}
                    alt={helper.name}
                    width={compact ? 48 : 80}
                    height={compact ? 48 : 80}
                    style={{
                        objectFit: "contain",
                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
                        width: "100%",
                        height: "100%"
                    }}
                />
            </motion.div>

            {/* 말풍선 (compact 모드 아닐 때만 표시) */}
            {!compact && (
                <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.3 }}
                    style={{
                        position: "relative",
                        backgroundColor: "white",
                        padding: "0.75rem 1rem",
                        borderRadius: "16px",
                        borderTopLeftRadius: isLeft ? "4px" : "16px",
                        borderTopRightRadius: isLeft ? "16px" : "4px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                        border: "1px solid #E5E7EB",
                        maxWidth: "280px",
                        overflow: "hidden",
                    }}
                >
                    <p style={{
                        fontSize: "0.9rem",
                        color: "#374151",
                        lineHeight: 1.4,
                        fontWeight: 500,
                        wordBreak: "keep-all",
                        overflowWrap: "break-word",
                        whiteSpace: "normal",
                        margin: 0,
                    }}>
                        {message}
                    </p>
                </motion.div>
            )}
        </div>
    );
}
