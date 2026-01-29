"use client";

import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Deterministic random for SSR consistency
const pseudoRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
};

// 풀 웨이브 구분선 (풍성한 버전)
export function GrassWave({ color = "#4CAF50" }: { color?: string }) {
    return (
        <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{
                width: "100%",
                height: "100px",
                display: "block",
                marginBottom: "-1px", // 틈새 방지
            }}
        >
            <defs>
                <linearGradient id="grassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={color} stopOpacity="1" />
                    <stop offset="100%" stopColor="#2E7D32" stopOpacity="1" />
                </linearGradient>
            </defs>

            {/* 뒤쪽 풀 (연한 색, 느린 움직임) */}
            {Array.from({ length: 45 }).map((_, i) => {
                const h = (40 + pseudoRandom(i * 10) * 30).toFixed(2);
                const dur = (6 + pseudoRandom(i * 10 + 1) * 3).toFixed(2);
                return (
                    <path
                        key={`back-${i}`}
                        d={`M${25 * i} 120 Q${25 * i + 10} ${120 - parseFloat(h)} ${25 * i + 20} 120`}
                        fill="#A5D6A7"
                        opacity="0.6"
                        style={{
                            animation: `gentleSway ${dur}s ease-in-out infinite alternate`,
                            transformOrigin: "bottom",
                        }}
                    />
                );
            })}

            {/* 중간 풀 (중간 색) */}
            {Array.from({ length: 40 }).map((_, i) => {
                const h = (60 + pseudoRandom(i * 20) * 40).toFixed(2);
                const dur = (5 + pseudoRandom(i * 20 + 1) * 2).toFixed(2);
                return (
                    <path
                        key={`mid-${i}`}
                        d={`M${30 * i + 10} 120 Q${30 * i + 20} ${120 - parseFloat(h)} ${30 * i + 30} 120`}
                        fill="#66BB6A"
                        opacity="0.8"
                        style={{
                            animation: `gentleSway ${dur}s ease-in-out infinite alternate`,
                            transformOrigin: "bottom",
                        }}
                    />
                );
            })}

            {/* 앞쪽 풀 (진한 색, 빠른 움직임) */}
            {Array.from({ length: 35 }).map((_, i) => {
                const h = (80 + pseudoRandom(i * 30) * 50).toFixed(2);
                const dur = (4 + pseudoRandom(i * 30 + 1) * 2).toFixed(2);
                return (
                    <path
                        key={`front-${i}`}
                        d={`M${35 * i} 120 Q${35 * i + 15} ${120 - parseFloat(h)} ${35 * i + 30} 120`}
                        fill={color}
                        style={{
                            animation: `gentleSway ${dur}s ease-in-out infinite alternate`,
                            transformOrigin: "bottom",
                        }}
                    />
                );
            })}
        </svg>
    );
}

// 파도 웨이브 구분선
export function WaveDivider({ color = "#64B5F6", backgroundColor = "transparent" }: { color?: string; backgroundColor?: string }) {
    return (
        <div style={{ backgroundColor }}>
            <svg
                viewBox="0 0 1200 60"
                preserveAspectRatio="none"
                style={{
                    width: "100%",
                    height: "60px",
                    display: "block",
                }}
            >
                <path
                    d="M0,30 Q150,0 300,30 T600,30 T900,30 T1200,30 L1200,60 L0,60 Z"
                    fill={color}
                    style={{
                        animation: "waveSwell 4s ease-in-out infinite alternate",
                        transformOrigin: "bottom",
                    }}
                />
                <path
                    d="M0,40 Q150,15 300,40 T600,40 T900,40 T1200,40 L1200,60 L0,60 Z"
                    fill={color}
                    opacity="0.6"
                    style={{
                        animation: "waveSwell 6s ease-in-out infinite alternate-reverse",
                        transformOrigin: "bottom",
                    }}
                />
            </svg>
        </div>
    );
}

// 서비스 설명 섹션
export function ServiceDescriptionSection() {
    return (
        <section style={{
            padding: "4rem 1.5rem",
            backgroundColor: "#FFFEF5",
        }}>
            <div style={{
                maxWidth: "900px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "3rem",
                flexWrap: "wrap",
                justifyContent: "center",
            }}>
                {/* 왼쪽 텍스트 */}
                <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            color: "#1F2937",
                            marginBottom: "1rem",
                            lineHeight: 1.4,
                        }}
                    >
                        아이의 낙서가<br />
                        <span style={{ color: "#8B5CF6" }}>동화책</span>이 되는 마법 ✨
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: "1rem",
                            color: "#4B5563",
                            lineHeight: 1.8,
                            marginBottom: "1.5rem",
                        }}
                    >
                        아이두는 아이가 그린 그림 한 장으로 시작해요.
                        AI가 멋진 캐릭터로 변환하고, 함께 고른 재료로
                        세상에 하나뿐인 동화책을 완성해요.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            display: "flex",
                            gap: "0.75rem",
                            flexWrap: "wrap",
                        }}
                    >
                        {["5분만에 완성", "100% 맞춤형", "PDF 다운로드"].map((tag) => (
                            <span
                                key={tag}
                                style={{
                                    padding: "0.5rem 1rem",
                                    backgroundColor: "#F3E8FF",
                                    color: "#7C3AED",
                                    borderRadius: "20px",
                                    fontSize: "0.85rem",
                                    fontWeight: 600,
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* 오른쪽 헬퍼 캐릭터 */}
                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{ flex: "0 0 auto" }}
                >
                    <Image
                        src="/helpers/pebble.webp"
                        alt="Helper character"
                        width={160}
                        height={160}
                        style={{ objectFit: "contain" }}
                    />
                </motion.div>
            </div>
        </section>
    );
}

// 리뷰/후기 섹션
export function ReviewsSection() {
    const reviews = [
        {
            name: "민지맘",
            rating: 5,
            text: "아이가 직접 그린 그림이 주인공이 되니까 정말 좋아해요! 매일 자기 전에 읽어달라고 해요.",
            avatar: "👩",
        },
        {
            name: "준서아빠",
            rating: 5,
            text: "생각보다 퀄리티가 좋아서 놀랐어요. 할머니 할아버지께 선물로 드렸더니 정말 좋아하셨어요.",
            avatar: "👨",
        },
        {
            name: "서연맘",
            rating: 5,
            text: "아이의 상상력이 동화가 되는 게 신기해요. 만드는 과정도 재미있고, 완성품도 예뻐요!",
            avatar: "👩‍🦰",
        },
    ];

    return (
        <section style={{
            padding: "3rem 1.5rem",
            backgroundColor: "#FFFEF5",
        }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#1F2937",
                        textAlign: "center",
                        marginBottom: "2rem",
                    }}
                >
                    부모님들의 후기 💬
                </motion.h3>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1.25rem",
                }}>
                    {reviews.map((review, i) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                padding: "1.5rem",
                                backgroundColor: "white",
                                border: "2px solid #E5E7EB",
                                borderRadius: "12px",
                            }}
                        >
                            {/* 별점 */}
                            <div style={{ display: "flex", gap: "2px", marginBottom: "0.75rem" }}>
                                {Array.from({ length: review.rating }).map((_, j) => (
                                    <Star key={j} size={16} fill="#FBBF24" color="#FBBF24" />
                                ))}
                            </div>

                            {/* 리뷰 텍스트 */}
                            <p style={{
                                fontSize: "0.9rem",
                                color: "#4B5563",
                                lineHeight: 1.6,
                                marginBottom: "1rem",
                            }}>
                                "{review.text}"
                            </p>

                            {/* 작성자 */}
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span style={{ fontSize: "1.5rem" }}>{review.avatar}</span>
                                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#374151" }}>
                                    {review.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 씨앗 충전소 섹션 (게임 재화 컨셉)
export function CurrencyShopSection() {
    return (
        <section style={{
            padding: "5rem 1.5rem",
            backgroundColor: "#FFFEF5",
            backgroundImage: "radial-gradient(#FFF8E1 20%, transparent 20%)",
            backgroundSize: "20px 20px",
        }}>
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "3rem" }}
                >
                    <span style={{
                        display: "inline-block",
                        padding: "0.5rem 1rem",
                        borderRadius: "20px",
                        backgroundColor: "#FFF3E0",
                        color: "#F57C00",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        marginBottom: "1rem"
                    }}>
                        상상력 충전소 ⚡️
                    </span>
                    <h3 style={{
                        fontSize: "2rem",
                        fontWeight: 800,
                        color: "#1F2937",
                        marginBottom: "1rem",
                    }}>
                        씨앗(Seed)을 충전하세요 🌱
                    </h3>
                    <p style={{ color: "#6B7280", fontSize: "1.1rem" }}>
                        씨앗으로 동화책을 만들고, PDF를 다운로드할 수 있어요.
                    </p>
                </motion.div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "1.5rem",
                    justifyContent: "center",
                    marginBottom: "4rem",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}>
                    {/* 소량 */}
                    <div style={{ width: "100%" }}>
                        <CurrencyCard
                            title="씨앗 한 줌"
                            amount="5개"
                            price="1,000원"
                            icon="🌱"
                            color="#81C784"
                            delay={0.1}
                        />
                    </div>

                    {/* 중량 (인기) */}
                    <div style={{ width: "100%" }}>
                        <CurrencyCard
                            title="씨앗 주머니"
                            amount="30개"
                            price="5,500원"
                            limit="약 10% 할인"
                            icon="💰"
                            color="#43A047"
                            isPopular
                            delay={0.2}
                        />
                    </div>

                    {/* 대량 */}
                    <div style={{ width: "100%" }}>
                        <CurrencyCard
                            title="씨앗 상자"
                            amount="100개"
                            price="16,000원"
                            limit="약 20% 할인"
                            icon="📦"
                            color="#2E7D32"
                            delay={0.3}
                        />
                    </div>

                    {/* B2B / 단체 문의 (4번째 카드) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ y: -5 }}
                        style={{
                            background: "white",
                            borderRadius: "24px",
                            padding: "2rem",
                            width: "100%",
                            border: "2px dashed #E5E7EB",
                            boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            position: "relative",
                            overflow: "hidden",
                            height: "100%",
                        }}
                    >
                        <div style={{
                            fontSize: "3rem",
                            marginBottom: "1.5rem",
                            background: "#F3F4F6",
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            🏫
                        </div>

                        <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#374151", marginBottom: "0.5rem", textAlign: "center" }}>
                            단체 이용 문의
                        </h4>
                        <p style={{ fontSize: "0.9rem", color: "#6B7280", textAlign: "center", marginBottom: "auto" }}>
                            유치원, 학교, 기관<br />대량 구매 혜택
                        </p>

                        <a
                            href="mailto:contact@ido.com"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                padding: "1rem",
                                marginTop: "1.5rem",
                                backgroundColor: "#1F2937",
                                color: "white",
                                borderRadius: "12px",
                                textDecoration: "none",
                                fontWeight: 700,
                                transition: "background 0.2s",
                            }}
                        >
                            문의하기
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function CurrencyCard({ title, amount, price, limit, icon, color, isPopular, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            whileHover={{ y: -5 }}
            style={{
                background: "white",
                borderRadius: "24px",
                padding: "2rem",
                width: "100%",
                height: "100%", // 높이 꽉 차게
                border: isPopular ? `3px solid ${color}` : "2px solid #E5E7EB",
                boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
            }}
            onClick={() => window.location.href = "/payment"}
        >
            {isPopular && (
                <div style={{
                    position: "absolute",
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: color,
                    color: "white",
                    padding: "4px 12px",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                }}>
                    BEST
                </div>
            )}

            <div style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                background: "#F1F8E9",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                {icon}
            </div>

            <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#374151", marginBottom: "0.5rem" }}>{title}</h4>
            <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1F2937", marginBottom: "0.25rem" }}>{amount}</div>

            {limit && (
                <span style={{
                    fontSize: "0.8rem",
                    color: "white",
                    backgroundColor: "#EF5350",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    fontWeight: 600,
                    marginBottom: "1rem"
                }}>
                    {limit}
                </span>
            )}

            <div style={{ flex: 1 }}></div>

            <div style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: color,
                marginTop: "1rem",
                borderTop: "2px dashed #E5E7EB",
                width: "100%",
                textAlign: "center",
                paddingTop: "1rem"
            }}>
                {price}
            </div>
        </motion.div>
    );
}

// FAQ 섹션
export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "무료로 사용할 수 있나요?",
            answer: "가입 시 기본 씨앗을 드려요. 씨앗을 모두 사용하면 충전소에서 추가로 구매할 수 있습니다.",
        },
        {
            question: "그림 실력이 없어도 되나요?",
            answer: "물론이죠! 아이가 대충 그린 낙서도 AI가 예쁘게 변환해 줘요. 완벽한 그림이 아니어도 괜찮아요.",
        },
        {
            question: "만든 동화책은 어디서 볼 수 있나요?",
            answer: "'내 동화책' 메뉴에서 언제든지 볼 수 있어요. 다운로드하거나 공유할 수도 있어요.",
        },
    ];

    return (
        <section style={{
            padding: "3rem 1.5rem",
            backgroundColor: "#FFFEF5",
        }}>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                <h3 style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#1F2937",
                    marginBottom: "1.25rem",
                    textAlign: "center",
                }}>
                    자주 묻는 질문 ❓
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{
                                border: "2px solid #E5E7EB",
                                borderRadius: "8px",
                                overflow: "hidden",
                                backgroundColor: "white",
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                style={{
                                    width: "100%",
                                    padding: "1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    cursor: "pointer",
                                    textAlign: "left",
                                }}
                            >
                                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#374151" }}>
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown size={18} color="#9CA3AF" />
                                </motion.div>
                            </button>
                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === idx ? "auto" : 0,
                                    opacity: openIndex === idx ? 1 : 0,
                                }}
                                style={{ overflow: "hidden" }}
                            >
                                <p style={{
                                    padding: "0 1rem 1rem",
                                    fontSize: "0.85rem",
                                    color: "#6B7280",
                                    lineHeight: 1.6,
                                }}>
                                    {faq.answer}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 마법의 상점 (굿즈) 섹션
export function MagicShopSection() {
    return (
        <section style={{
            padding: "5rem 1.5rem",
            backgroundColor: "#F3E8FF", // 연한 보라색 배경
            position: "relative",
            overflow: "hidden",
        }}>
            {/* 배경 장식 */}
            <div style={{
                position: "absolute",
                top: -50,
                right: -50,
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.4)",
                filter: "blur(40px)",
            }} />
            <div style={{
                position: "absolute",
                bottom: -30,
                left: -30,
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "rgba(139, 92, 246, 0.1)",
                filter: "blur(30px)",
            }} />

            <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <span style={{
                        display: "inline-block",
                        padding: "0.5rem 1rem",
                        borderRadius: "20px",
                        backgroundColor: "#FFFFFF",
                        color: "#8B5CF6",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        marginBottom: "1rem",
                        boxShadow: "0 4px 6px rgba(139, 92, 246, 0.1)"
                    }}>
                        New! 마법의 상점 🔮
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: "2.25rem",
                            fontWeight: 800,
                            color: "#1F2937",
                            marginBottom: "1rem",
                            lineHeight: 1.3,
                        }}
                    >
                        내 캐릭터가 <span style={{ color: "#8B5CF6" }}>굿즈</span>로 탄생해요
                    </motion.h2>
                    <p style={{ color: "#4B5563", fontSize: "1.1rem" }}>
                        세상에 하나뿐인 나만의 캐릭터로<br />
                        키링, 스티커, 그립톡을 만들어보세요.
                    </p>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "2rem",
                    marginBottom: "3rem",
                }}>
                    {/* 카드 1: 키링 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            backgroundColor: "white",
                            borderRadius: "24px",
                            padding: "2rem",
                            textAlign: "center",
                            boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)",
                            border: "1px solid rgba(139, 92, 246, 0.1)"
                        }}
                    >
                        <div style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>🔑</div>
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>아크릴 키링</h3>
                        <p style={{ color: "#6B7280" }}>가방에 달고 다니면<br />인기 만점!</p>
                    </motion.div>

                    {/* 카드 2: 스티커 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            backgroundColor: "white",
                            borderRadius: "24px",
                            padding: "2rem",
                            textAlign: "center",
                            boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)",
                            border: "1px solid rgba(139, 92, 246, 0.1)"
                        }}
                    >
                        <div style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>🏷️</div>
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>방수 스티커</h3>
                        <p style={{ color: "#6B7280" }}>노트북, 캐리어 어디든<br />착착 붙여요</p>
                    </motion.div>

                    {/* 카드 3: 스마트톡 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        style={{
                            backgroundColor: "white",
                            borderRadius: "24px",
                            padding: "2rem",
                            textAlign: "center",
                            boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)",
                            border: "1px solid rgba(139, 92, 246, 0.1)"
                        }}
                    >
                        <div style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>📱</div>
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>스마트톡</h3>
                        <p style={{ color: "#6B7280" }}>내 손안에 쏙 들어오는<br />귀여운 친구</p>
                    </motion.div>
                </div>

                <div style={{ textAlign: "center" }}>
                    <a
                        href="/shop"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "1rem 2.5rem",
                            backgroundColor: "#8B5CF6",
                            color: "white",
                            borderRadius: "9999px",
                            textDecoration: "none",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)",
                            transition: "transform 0.2s",
                        }}
                    >
                        마법의 상점 구경하기 ✨
                    </a>
                </div>
            </div>
        </section>
    );
}

// CSS 애니메이션 (더 부드러운 움직임 - 위아래)
export function LandingSectionStyles() {
    return (
        <style jsx global>{`
            @keyframes gentleSway {
                0% { transform: translateY(0px); }
                100% { transform: translateY(-8px); }
            }
            @keyframes waveSwell {
                0% { transform: scaleY(1); }
                100% { transform: scaleY(1.3); }
            }
        `}</style>
    );
}
