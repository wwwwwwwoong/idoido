"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check, CreditCard, Lock, Zap } from "lucide-react";

export default function PaymentClient() {
    const router = useRouter();
    const [selectedPackage, setSelectedPackage] = useState<"small" | "medium" | "large">("medium");
    const [paymentMethod, setPaymentMethod] = useState<"card" | "kakaopay" | "naverpay">("card");
    const [isLoading, setIsLoading] = useState(false);

    const packages = [
        {
            id: "small",
            name: "씨앗 한 줌 🌱",
            amount: 5,
            price: 1000,
            originalPrice: null,
            color: "#81C784",
            desc: "가볍게 시작하기 좋아요"
        },
        {
            id: "medium",
            name: "씨앗 주머니 💰",
            amount: 30,
            price: 5500,
            originalPrice: 6000,
            color: "#43A047",
            desc: "가장 인기 있는 선택!",
            isPopular: true
        },
        {
            id: "large",
            name: "씨앗 상자 📦",
            amount: 100,
            price: 16000,
            originalPrice: 20000,
            color: "#2E7D32",
            desc: "동화책을 많이 만든다면 추천"
        }
    ];

    const currentPackage = packages.find(p => p.id === selectedPackage)!;

    const handlePayment = () => {
        setIsLoading(true);
        // 결제 로직 연동 예정
        setTimeout(() => {
            alert(`'${currentPackage.name}' 결제가 완료되었습니다! (테스트)\n씨앗 ${currentPackage.amount}개가 충전되었습니다.`);
            setIsLoading(false);
            router.push("/dashboard"); // 대시보드로 이동
        }, 1500);
    };

    return (
        <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem 1.5rem" }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#1F2937" }}>
                    씨앗을 충전해 보세요
                </h1>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="lg:grid-cols-2 md:grid-cols-1">
                {/* 왼쪽: 상품 선택 */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#374151", marginBottom: "0.5rem" }}>
                        패키지 선택
                    </h2>

                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            onClick={() => setSelectedPackage(pkg.id as any)}
                            style={{
                                padding: "1.5rem",
                                borderRadius: "16px",
                                border: selectedPackage === pkg.id ? `2px solid ${pkg.color}` : "2px solid #E5E7EB",
                                backgroundColor: selectedPackage === pkg.id ? "#F1F8E9" : "white",
                                cursor: "pointer",
                                transition: "all 0.2s",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}
                        >
                            {pkg.isPopular && (
                                <div style={{
                                    position: "absolute",
                                    top: "-10px",
                                    left: "20px",
                                    backgroundColor: pkg.color,
                                    color: "white",
                                    padding: "2px 8px",
                                    borderRadius: "10px",
                                    fontSize: "0.75rem",
                                    fontWeight: 700
                                }}>
                                    BEST
                                </div>
                            )}
                            <div>
                                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1F2937", marginBottom: "0.25rem" }}>
                                    {pkg.name}
                                </h3>
                                <p style={{ fontSize: "0.9rem", color: "#6B7280" }}>{pkg.desc}</p>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                {pkg.originalPrice && (
                                    <div style={{ textDecoration: "line-through", color: "#9CA3AF", fontSize: "0.9rem" }}>
                                        {pkg.originalPrice.toLocaleString()}원
                                    </div>
                                )}
                                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: pkg.color }}>
                                    {pkg.price.toLocaleString()}원
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* B2B 문의 섹션 */}
                    <div style={{
                        marginTop: "2rem",
                        padding: "1.5rem",
                        backgroundColor: "white",
                        borderRadius: "16px",
                        border: "2px dashed #E5E7EB",
                        textAlign: "center"
                    }}>
                        <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#374151", marginBottom: "0.5rem" }}>
                            🏫 학교/유치원 단체 구매 문의
                        </h4>
                        <p style={{ color: "#6B7280", fontSize: "0.9rem", marginBottom: "1rem" }}>
                            대량 구매 시 특별 할인을 제공해 드려요.
                        </p>
                        <a
                            href="mailto:contact@ido.com"
                            style={{
                                display: "inline-block",
                                padding: "0.5rem 1rem",
                                backgroundColor: "#F3F4F6",
                                color: "#374151",
                                borderRadius: "8px",
                                textDecoration: "none",
                                fontWeight: 600,
                                fontSize: "0.9rem"
                            }}
                        >
                            문의하기
                        </a>
                    </div>
                </div>

                {/* 오른쪽: 결제 정보 */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#374151" }}>결제 확인</h2>

                    <div style={{
                        backgroundColor: "white",
                        padding: "1.5rem",
                        borderRadius: "16px",
                        border: "1px solid #E5E7EB",
                        height: "fit-content"
                    }}>
                        <div style={{ marginBottom: "1.5rem" }}>
                            <span style={{ fontSize: "0.9rem", color: "#6B7280", display: "block", marginBottom: "0.5rem" }}>선택한 패키지</span>
                            <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1F2937", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span>{currentPackage.name}</span>
                                <span style={{ color: currentPackage.color }}>+{currentPackage.amount}개</span>
                            </div>
                        </div>

                        <div style={{ marginBottom: "1.5rem" }}>
                            <span style={{ fontSize: "0.9rem", color: "#6B7280", display: "block", marginBottom: "0.5rem" }}>결제 수단</span>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem" }}>
                                {["card", "kakaopay", "naverpay"].map((method) => (
                                    <button
                                        key={method}
                                        onClick={() => setPaymentMethod(method as any)}
                                        style={{
                                            padding: "0.5rem",
                                            borderRadius: "8px",
                                            border: paymentMethod === method ? "2px solid #1F2937" : "1px solid #E5E7EB",
                                            backgroundColor: paymentMethod === method ? "#F9FAFB" : "white",
                                            color: "#374151",
                                            fontSize: "0.85rem",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                        }}
                                    >
                                        {method === "card" && "카드"}
                                        {method === "kakaopay" && "카카오"}
                                        {method === "naverpay" && "네이버"}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div style={{ borderTop: "2px dashed #E5E7EB", margin: "1rem 0" }}></div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                            <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>총 결제 금액</span>
                            <span style={{ fontWeight: 800, fontSize: "1.5rem", color: currentPackage.color }}>
                                {currentPackage.price.toLocaleString()}원
                            </span>
                        </div>

                        <button
                            onClick={handlePayment}
                            disabled={isLoading}
                            style={{
                                width: "100%",
                                padding: "1.25rem",
                                backgroundColor: "#1F2937",
                                color: "white",
                                borderRadius: "12px",
                                fontSize: "1.1rem",
                                fontWeight: 700,
                                border: "none",
                                cursor: isLoading ? "not-allowed" : "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "0.5rem",
                                opacity: isLoading ? 0.7 : 1,
                                transition: "transform 0.1s",
                            }}
                        >
                            {isLoading ? "충전 중..." : (
                                <>
                                    <Zap size={18} fill="yellow" stroke="none" />
                                    충전하기
                                </>
                            )}
                        </button>
                        <p style={{ textAlign: "center", fontSize: "0.8rem", color: "#9CA3AF", marginTop: "1rem" }}>
                            위 내용은 예시이며 실제 결제는 되지 않습니다.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
