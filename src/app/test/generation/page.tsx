"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { toPng } from "html-to-image";
import { Upload, Image as ImageIcon } from "lucide-react";

export default function TestGenerationPage() {
    const sceneRef = useRef<HTMLDivElement>(null);
    const [storyText, setStoryText] = useState("A brave hero finds a magical sword in the forest.");
    const [resultImage, setResultImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [mode, setMode] = useState<"compose" | "upload">("compose");

    // Custom Assets State
    const [bgImage, setBgImage] = useState<string | null>(null);
    const [charImage, setCharImage] = useState<string | null>(null);
    const [itemImage, setItemImage] = useState<string | null>(null);
    const [fullSceneImage, setFullSceneImage] = useState<string | null>(null);

    // Positions (percentage)
    const [charPos, setCharPos] = useState({ x: 30, y: 60 });
    const [itemPos, setItemPos] = useState({ x: 70, y: 60 });

    const addLog = (msg: string) => setLogs(prev => [...prev, msg]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string) => void) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => setter(ev.target?.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleGenerate = async () => {
        setLoading(true);
        setResultImage(null);
        setLogs([]);
        addLog("1. Starting generation process...");

        try {
            let referenceImage = null;

            if (mode === "upload" && fullSceneImage) {
                addLog("2. Using uploaded full scene image...");
                referenceImage = fullSceneImage.replace(/^data:image\/png;base64,/, "").replace(/^data:image\/jpeg;base64,/, "");
            } else {
                // 1. Capture Scene
                addLog("2. Capturing scene...");
                if (!sceneRef.current) throw new Error("Scene ref is null");
                const dataUrl = await toPng(sceneRef.current, { cacheBust: true });
                referenceImage = dataUrl.replace(/^data:image\/png;base64,/, "");
                addLog("Scene captured successfully.");
            }

            // 2. Prepare Payload
            const payload = {
                page: {
                    pageNumber: 1,
                    imagePrompt: storyText,
                    content: storyText
                },
                context: {
                    characterName: "Custom Character",
                    characterDescription: "A character in the scene",
                    styleId: "storybook",
                    background: "Custom Background",
                    items: ["Custom Item"],
                    objects: [],
                    referenceImage: referenceImage
                },
                type: "page"
            };

            addLog("3. Sending to API...");

            // 3. Call API
            const res = await fetch("/api/story/generate-single-image", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: { "Content-Type": "application/json" }
            });

            if (!res.ok) throw new Error(`API Error: ${res.status}`);

            const data = await res.json();
            addLog("4. API response received.");

            if (data.success && data.data.page?.imageUrl) {
                setResultImage(data.data.page.imageUrl);
                addLog("SUCCESS: Image generated!");
            } else {
                addLog(`FAILED: ${JSON.stringify(data)}`);
            }

        } catch (e: any) {
            addLog(`ERROR: ${e.message}`);
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 max-w-6xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold mb-6">Create Custom Scene & Generate</h1>

            {/* Mode Switcher */}
            <div className="flex gap-4 mb-4">
                <button
                    onClick={() => setMode("compose")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${mode === "compose" ? "bg-purple-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                >
                    Layer Composition
                </button>
                <button
                    onClick={() => setMode("upload")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${mode === "upload" ? "bg-purple-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                >
                    Upload Full Scene
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left: Controls & Scene */}
                <div className="space-y-6">

                    {/* Scene Preview / Upload Area */}
                    <div className="space-y-2">
                        <label className="font-semibold text-lg flex justify-between">
                            1. Scene Input
                            <span className="text-sm font-normal text-gray-500">
                                {mode === "compose" ? "Arrange your scene" : "Upload a completed image"}
                            </span>
                        </label>

                        {mode === "compose" ? (
                            <div
                                ref={sceneRef}
                                className="w-full aspect-video bg-gray-100 rounded-xl relative overflow-hidden border-4 border-gray-200 shadow-sm group"
                            >
                                {/* Background Layer */}
                                {bgImage ? (
                                    <img src={bgImage} alt="bg" className="absolute inset-0 w-full h-full object-cover z-0" />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold text-2xl z-0">
                                        No Background
                                    </div>
                                )}

                                {/* Character Layer */}
                                {charImage && (
                                    <div
                                        className="absolute z-10 w-[25%]"
                                        style={{
                                            left: `${charPos.x}%`,
                                            top: `${charPos.y}%`,
                                            transform: "translate(-50%, -50%)"
                                        }}
                                    >
                                        <img src={charImage} alt="char" className="w-full h-auto drop-shadow-lg" />
                                    </div>
                                )}

                                {/* Item Layer */}
                                {itemImage && (
                                    <div
                                        className="absolute z-10 w-[15%]"
                                        style={{
                                            left: `${itemPos.x}%`,
                                            top: `${itemPos.y}%`,
                                            transform: "translate(-50%, -50%)"
                                        }}
                                    >
                                        <img src={itemImage} alt="item" className="w-full h-auto drop-shadow-md" />
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="w-full aspect-video bg-gray-50 rounded-xl border-4 border-dashed border-gray-300 flex flex-col items-center justify-center relative overflow-hidden hover:bg-gray-100 transition-colors">
                                {fullSceneImage ? (
                                    <>
                                        <img src={fullSceneImage} alt="full" className="w-full h-full object-contain" />
                                        <button
                                            onClick={() => setFullSceneImage(null)}
                                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full text-xs"
                                        >
                                            Remove
                                        </button>
                                    </>
                                ) : (
                                    <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                                        <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
                                        <p className="text-gray-500 font-medium">Click to upload full scene image</p>
                                        <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, setFullSceneImage)} />
                                    </label>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Upload Controls for Compose Mode */}
                    {mode === "compose" && (
                        <div className="grid grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Background</label>
                                <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <Upload className="w-6 h-6 text-gray-400" />
                                            <p className="text-xs text-gray-500 mt-1">Upload</p>
                                        </div>
                                        <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, setBgImage)} />
                                    </label>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Character</label>
                                <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <Upload className="w-6 h-6 text-gray-400" />
                                            <p className="text-xs text-gray-500 mt-1">Upload</p>
                                        </div>
                                        <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, setCharImage)} />
                                    </label>
                                </div>
                                {/* Simple Position Control */}
                                <div className="flex gap-2 text-xs">
                                    <input
                                        type="range" min="0" max="100" value={charPos.x}
                                        onChange={(e) => setCharPos({ ...charPos, x: Number(e.target.value) })}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Item</label>
                                <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <Upload className="w-6 h-6 text-gray-400" />
                                            <p className="text-xs text-gray-500 mt-1">Upload</p>
                                        </div>
                                        <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, setItemImage)} />
                                    </label>
                                </div>
                                {/* Simple Position Control */}
                                <div className="flex gap-2 text-xs">
                                    <input
                                        type="range" min="0" max="100" value={itemPos.x}
                                        onChange={(e) => setItemPos({ ...itemPos, x: Number(e.target.value) })}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="font-semibold text-lg">2. Story Prompt</label>
                        <textarea
                            className="w-full p-4 border rounded-xl resize-none h-32 text-lg"
                            placeholder="Describe the scene..."
                            value={storyText}
                            onChange={e => setStoryText(e.target.value)}
                        />
                    </div>

                    <Button
                        onClick={handleGenerate}
                        disabled={loading}
                        className="w-full h-14 text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg rounded-xl"
                    >
                        {loading ? "✨ Generating Art..." : "✨ Generate Illustration"}
                    </Button>

                    <div className="bg-slate-900 text-green-400 p-4 rounded-xl text-sm font-mono h-48 overflow-y-auto shadow-inner">
                        {logs.map((log, i) => <div key={i} className="mb-1">{log}</div>)}
                    </div>
                </div>

                {/* Right: Result */}
                <div className="space-y-4">
                    <label className="font-semibold text-lg">3. Result Illustration</label>
                    <div className="w-full aspect-video bg-white rounded-xl border-4 border-dashed border-gray-200 flex items-center justify-center relative overflow-hidden shadow-sm group hover:border-purple-200 transition-colors">
                        {resultImage ? (
                            <img
                                src={resultImage}
                                alt="Generated"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="text-center text-gray-400">
                                <div className="text-6xl mb-4">🎨</div>
                                <p>Generated illustration will appear here</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
