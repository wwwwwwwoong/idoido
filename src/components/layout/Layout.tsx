import { ReactNode } from "react";
import HeaderClient from "./HeaderClient";

// Header를 named export로 내보내기
export { HeaderClient as Header };

interface PageContainerProps {
    children: ReactNode;
    maxWidth?: "sm" | "md" | "lg" | "content" | "full";
}

export function PageContainer({ children, maxWidth = "content" }: PageContainerProps) {
    const maxWidthMap = {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        content: "1000px",
        full: "100%",
    };

    return (
        <main
            style={{
                maxWidth: maxWidthMap[maxWidth],
                margin: "0 auto",
                padding: "2rem 1.5rem",
            }}
        >
            {children}
        </main>
    );
}

interface PageTitleProps {
    children: ReactNode;
    description?: string;
}

export function PageTitle({ children, description }: PageTitleProps) {
    return (
        <div style={{ marginBottom: "2rem" }}>
            <h1
                style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    marginBottom: description ? "0.5rem" : 0,
                    letterSpacing: "-0.02em",
                }}
            >
                {children}
            </h1>
            {description && (
                <p
                    style={{
                        fontSize: "1rem",
                        color: "var(--muted-foreground)",
                        margin: 0,
                    }}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
