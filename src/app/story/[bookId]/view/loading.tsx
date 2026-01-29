export default function Loading() {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f0f0f0",
            margin: 0,
            padding: 0,
            gap: "1rem"
        }}>
            <div style={{
                position: "relative",
                width: "80px",
                height: "80px"
            }}>
                <div style={{
                    position: "absolute",
                    inset: 0,
                    border: "4px solid #DDD",
                    borderTopColor: "#8B5CF6", // purple-500
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                }} />
            </div>
            <p style={{
                color: "#6B7280",
                fontSize: "1.1rem",
                fontWeight: 500,
                marginTop: "1rem",
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
            }}>
                동화책을 펼치는 중이에요...
            </p>
            <style>
                {`
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    @keyframes pulse {
                        0%, 100% { opacity: 1; }
                        50% { opacity: .5; }
                    }
                `}
            </style>
        </div>
    );
}
