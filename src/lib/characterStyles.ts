export const ART_STYLES = {
    storybook: {
        id: "storybook",
        name: "동화책",
        emoji: "📖",
        description: "따뜻하고 감성적인 동화책 일러스트",
        prompt: "masterpiece, high quality, hand-drawn watercolor illustration, soft colored pencil texture, cute and rounded character design, full body character, entire character visible from head to toe, wide empty white margins around the character, character in the middle of the frame, full body, not cropped, pastel color palette, whimsical children's book style, adorable 3-head proportion, warm and cozy atmosphere, sketch lines visible, isolated on solid white background, no shadow",
        color: "#C9B1FF",
    },
    watercolor: {
        id: "watercolor",
        name: "수채화",
        emoji: "🎨",
        description: "맑고 투명한 수채화 스타일",
        prompt: "masterpiece, high quality, pen and wash watercolor illustration, loose ink sketch lines, studio ghibli concept art style, soft pastel colors, cute anime character style, full body character, entire character visible from head to toe, wide empty white margins around the character, character in the middle of the frame, full body, not cropped, wet-on-wet technique, artistic, isolated on solid white background, no shadow",
        color: "#87CEEB",
    },
    cartoon: {
        id: "cartoon",
        name: "만화",
        emoji: "✏️",
        description: "디즈니/픽사 스타일의 귀여운 3D",
        prompt: "masterpiece, high quality, retro anime illustration style, clean ink outlines, warm muted color palette, vintage animation cel shading, cute character design, full body character, entire character visible from head to toe, wide empty white margins around the character, character in the middle of the frame, full body, not cropped, expressive eyes, charming, isolated on solid white background, no shadow",
        color: "#FFD93D",
    },
    crayon: {
        id: "crayon",
        name: "크레파스",
        emoji: "🖍️",
        description: "아기자기한 손그림 느낌",
        prompt: "masterpiece, high quality, soft crayon and colored pencil illustration, gentle sketchy outlines, warm earthy color palette, friendly children's book character, textured paper feel, rosy cheeks, adorable expression, full body character, entire character visible from head to toe, wide empty white margins around the character, character in the middle of the frame, full body, not cropped, isolated on solid white background, no shadow",
        color: "#FF6B6B",
    },
    pixel: {
        id: "pixel",
        name: "픽셀아트",
        emoji: "👾",
        description: "깔끔하고 귀여운 도트 그래픽",
        prompt: "cute retro pixel-art sprite, classic indie game character style, big head small body short proportions, simple facial features, thick readable silhouette, crisp pixel edges, no anti-aliasing, no blur, no gradients, no smooth shading, limited 16-32 color palette with 1-2 shadow tones, subtle dithering, full body centered standing idle pose, 128x128 sprite scaled up with nearest-neighbor blocky pixels, plain white background, minimal ground pixels only, avoid realism avoid 3D avoid painterly avoid vector avoid detailed textures avoid complex lighting, no extra objects, no text, no watermark",
        color: "#4ECDC4",
    },
} as const;

export type ArtStyleId = keyof typeof ART_STYLES;
