import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, hint, id, style, ...props }, ref) => {
        const inputId = id ?? `input-${Math.random().toString(36).slice(2, 9)}`;

        return (
            <div style={{ display: "grid", gap: "var(--space-2)" }}>
                {label && (
                    <label
                        htmlFor={inputId}
                        style={{
                            fontSize: "var(--text-sm)",
                            fontWeight: "var(--font-semibold)",
                            color: "var(--color-text-primary)",
                        }}
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    style={{
                        padding: "10px 14px",
                        fontSize: "var(--text-base)",
                        borderRadius: "var(--radius-sm)",
                        border: `1px solid ${error ? "var(--color-danger)" : "var(--color-border)"}`,
                        backgroundColor: "var(--color-warm-white)",
                        color: "var(--color-text-primary)",
                        transition: "border-color var(--transition-fast)",
                        outline: "none",
                        ...style,
                    }}
                    onFocus={(e) => {
                        if (!error) {
                            e.currentTarget.style.borderColor = "var(--color-deep-teal)";
                        }
                    }}
                    onBlur={(e) => {
                        e.currentTarget.style.borderColor = error
                            ? "var(--color-danger)"
                            : "var(--color-border)";
                    }}
                    {...props}
                />
                {(error || hint) && (
                    <span
                        style={{
                            fontSize: "var(--text-xs)",
                            color: error ? "var(--color-danger)" : "var(--color-text-muted)",
                        }}
                    >
                        {error || hint}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export { Input };
export type { InputProps };
