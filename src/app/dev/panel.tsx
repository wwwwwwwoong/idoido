"use client";

import { useState } from "react";

export default function DevPanel() {
    const [out, setOut] = useState<string>("");

    async function getCharacters() {
        const res = await fetch("/api/characters");
        setOut(JSON.stringify(await res.json(), null, 2));
    }

    async function createCharacter() {
        const res = await fetch("/api/characters", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "테스트 캐릭터",
                doodlePath: "doodles/test.png",
                renderPath: "renders/test.png",
                styleId: "storybook",
            }),
        });
        setOut(JSON.stringify(await res.json(), null, 2));
    }

    async function getScenes() {
        const res = await fetch("/api/scenes");
        setOut(JSON.stringify(await res.json(), null, 2));
    }

    return (
        <section style={{ display: "grid", gap: 10, maxWidth: 520 }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button onClick={getCharacters}>GET /api/characters</button>
                <button onClick={createCharacter}>POST /api/characters</button>
                <button onClick={getScenes}>GET /api/scenes</button>
            </div>

            <pre style={{ background: "#111", color: "#0f0", padding: 12, borderRadius: 8, minHeight: 220 }}>
                {out}
            </pre>
        </section>
    );
}
