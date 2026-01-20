import { HTMLAttributes, forwardRef, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    padding?: "none" | "sm" | "md" | "lg";
    hover?: boolean;
}

const paddingStyles = {
    none: "0",
    sm: "0.75rem",
    md: "1.25rem",
    lg: "2rem",
};

const Card = forwardRef<HTMLElement, CardProps>(
    ({ children, padding = "md", hover = false, className, style, ...props }, ref) => {
        return (
            <article
                ref={ref}
                className={`${hover ? "neo-card-hover" : ""} ${className || ""}`}
                style={{
                    backgroundColor: "var(--card)",
                    color: "var(--card-foreground)",
                    border: "2px solid var(--border)",
                    padding: paddingStyles[padding],
                    boxShadow: "var(--shadow)",
                    transition: "all 150ms ease",
                    ...style,
                }}
                {...props}
            >
                {children}
            </article>
        );
    }
);

Card.displayName = "Card";

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

function CardHeader({ children, style, ...props }: CardHeaderProps) {
    return (
        <div style={{ marginBottom: "1rem", ...style }} {...props}>
            {children}
        </div>
    );
}

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

function CardTitle({ children, style, ...props }: CardTitleProps) {
    return (
        <h3
            style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--card-foreground)",
                margin: 0,
                ...style,
            }}
            {...props}
        >
            {children}
        </h3>
    );
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

function CardContent({ children, style, ...props }: CardContentProps) {
    return (
        <div
            style={{
                color: "var(--muted-foreground)",
                lineHeight: 1.7,
                ...style,
            }}
            {...props}
        >
            {children}
        </div>
    );
}

export { Card, CardHeader, CardTitle, CardContent };
export type { CardProps };
