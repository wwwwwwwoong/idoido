import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
}

// Neo-brutalist 스타일
const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
        backgroundColor: "var(--primary)",
        color: "var(--primary-foreground)",
        border: "2px solid var(--border)",
    },
    secondary: {
        backgroundColor: "var(--secondary)",
        color: "var(--secondary-foreground)",
        border: "2px solid var(--border)",
    },
    outline: {
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        border: "2px solid var(--border)",
    },
    ghost: {
        backgroundColor: "transparent",
        color: "var(--foreground)",
        border: "2px solid transparent",
    },
    danger: {
        backgroundColor: "var(--destructive)",
        color: "var(--destructive-foreground)",
        border: "2px solid var(--border)",
    },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
    sm: {
        padding: "8px 16px",
        fontSize: "0.875rem",
    },
    md: {
        padding: "12px 24px",
        fontSize: "1rem",
    },
    lg: {
        padding: "16px 32px",
        fontSize: "1.125rem",
    },
};

const baseStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 150ms ease",
    fontFamily: "inherit",
    borderRadius: "var(--radius-sm)",
    boxShadow: "var(--shadow-sm)",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            isLoading = false,
            disabled,
            style,
            children,
            className,
            ...props
        },
        ref
    ) => {
        const isDisabled = disabled || isLoading;

        return (
            <button
                ref={ref}
                disabled={isDisabled}
                className={`neo-btn ${className || ""}`}
                style={{
                    ...baseStyles,
                    ...variantStyles[variant],
                    ...sizeStyles[size],
                    opacity: isDisabled ? 0.6 : 1,
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    ...style,
                }}
                {...props}
            >
                {isLoading ? (
                    <>
                        <span
                            style={{
                                width: 16,
                                height: 16,
                                border: "2px solid currentColor",
                                borderTopColor: "transparent",
                                borderRadius: "50%",
                                animation: "spin 0.6s linear infinite",
                            }}
                        />
                        로딩 중...
                    </>
                ) : (
                    children
                )}
                <style>{`
                    .neo-btn:hover:not(:disabled) {
                        transform: translate(-2px, -2px);
                        box-shadow: var(--shadow-md);
                    }
                    .neo-btn:active:not(:disabled) {
                        transform: translate(2px, 2px);
                        box-shadow: var(--shadow-2xs);
                    }
                `}</style>
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };
