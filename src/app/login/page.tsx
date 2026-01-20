import Image from "next/image";
import Link from "next/link";
import { signInWithOtp } from "./actions";
import { Button } from "@/components";

export default function LoginPage() {
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "var(--background)"
        }}>
            {/* Header */}
            <header style={{
                padding: "1rem 1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "2px solid var(--border)",
            }}>
                <Link href="/" style={{
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                }}>
                    📚 IDO
                </Link>
            </header>

            {/* Login Form */}
            <main style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
            }}>
                <div style={{
                    width: "100%",
                    maxWidth: "400px",
                    padding: "2rem",
                    backgroundColor: "var(--card)",
                    border: "2px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    boxShadow: "var(--shadow-lg)",
                }}>
                    {/* Logo */}
                    <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                        <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>✨</div>
                        <h1 style={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            marginBottom: "0.5rem"
                        }}>
                            로그인
                        </h1>
                        <p style={{ color: "var(--muted-foreground)", fontSize: "0.9rem" }}>
                            이메일로 간편하게 시작하세요
                        </p>
                    </div>

                    <form action={signInWithOtp} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <input
                            name="email"
                            type="email"
                            placeholder="email@example.com"
                            required
                            style={{
                                padding: "0.875rem 1rem",
                                border: "2px solid var(--border)",
                                borderRadius: "var(--radius-md)",
                                fontSize: "1rem",
                                backgroundColor: "var(--background)",
                                outline: "none",
                            }}
                        />
                        <Button type="submit" variant="primary" size="lg" style={{ width: "100%" }}>
                            📧 이메일로 로그인 링크 받기
                        </Button>
                    </form>

                    <p style={{
                        marginTop: "1rem",
                        color: "var(--muted-foreground)",
                        fontSize: "0.8rem",
                        textAlign: "center"
                    }}>
                        메일로 온 링크를 누르면 자동으로 로그인됩니다.
                    </p>

                    <div style={{
                        marginTop: "1.5rem",
                        paddingTop: "1.5rem",
                        borderTop: "1px solid var(--border)",
                        textAlign: "center"
                    }}>
                        <Link href="/" style={{
                            color: "var(--muted-foreground)",
                            fontSize: "0.9rem",
                        }}>
                            ← 홈으로 돌아가기
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
