import { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "default" | "success" | "silly" | "next" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
    default: {
        backgroundColor: "var(--color-cream-dark)",
        color: "var(--color-text-primary)",
    },
    success: {
        backgroundColor: "var(--color-success-light)",
        color: "var(--color-success)",
    },
    silly: {
        backgroundColor: "var(--color-silly-light)",
        color: "var(--color-silly)",
    },
    next: {
        backgroundColor: "var(--color-next-light)",
        color: "var(--color-next)",
    },
    outline: {
        backgroundColor: "transparent",
        color: "var(--color-text-secondary)",
        border: "1px solid var(--color-border)",
    },
};

function Badge({ children, variant = "default", style, ...props }: BadgeProps) {
    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "4px 10px",
                fontSize: "var(--text-xs)",
                fontWeight: "var(--font-semibold)",
                borderRadius: "var(--radius-full)",
                ...variantStyles[variant],
                ...style,
            }}
            {...props}
        >
            {children}
        </span>
    );
}

export { Badge };
export type { BadgeProps, BadgeVariant };
