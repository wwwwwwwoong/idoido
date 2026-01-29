export default function Loading() {
    return (
        <div
            style={{
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
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(4px)",
            }}
        >
            <div
                style={{
                    width: 50,
                    height: 50,
                    border: "4px solid #E5E7EB",
                    borderTopColor: "#4F46E5", // indigo-600
                    borderRadius: "50%",
                    marginBottom: "1rem",
                    animation: "spin 0.8s linear infinite",
                }}
            />
            <div style={{
                color: "#4B5563",
                fontSize: "1.1rem",
                fontWeight: 600
            }}>
                로딩 중...
            </div>

            <style>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
