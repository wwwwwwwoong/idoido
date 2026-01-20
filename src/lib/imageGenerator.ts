
export interface ImageGenerationRequest {
    prompt: string;
    style?: string;
    width?: number;
    height?: number;
}

export interface GeneratedImage {
    url: string;
}

// Generate image for a story page
export async function generateStoryImage(prompt: string): Promise<string> {
    try {
        const response = await fetch("/api/story/image-generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt }),
        });

        if (!response.ok) {
            throw new Error("Failed to generate image");
        }

        const data = await response.json();
        return data.url;
    } catch (error) {
        console.error("Image generation error:", error);
        // Fallback to placeholder or null
        return "/images/placeholder_story.png";
    }
}
