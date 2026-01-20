
import {
    Briefcase, Star, Heart, Sparkles, Cloud, Music,
    Search, Circle, Droplets, Gift, Megaphone, Mail, Phone, MessageCircle, Pencil,
    Shirt, Fan, Wind, Lamp, CircleDot,
    Rocket, FlaskConical, Magnet, Settings,
    Flower2, TreeDeciduous, CloudRain, Bird, Sun,
    TreePine, Waves, Castle, Home, Mountain, GraduationCap, Candy
} from "lucide-react";

// 배경들
export const backgrounds = [
    { id: "forest", name: "신비로운 숲", Icon: TreePine, color: "#22C55E", bg: "#DCFCE7", bgImage: "linear-gradient(to bottom, #86efac, #22c55e)", imagePath: "/images/backgrounds/bg_place_forest.webp" },
    { id: "ocean", name: "깊은 바다", Icon: Waves, color: "#0EA5E9", bg: "#E0F2FE", bgImage: "linear-gradient(to bottom, #7dd3fc, #0ea5e9)", imagePath: "/images/backgrounds/bg_place_ocean.webp" },
    { id: "sky", name: "하늘 궁전", Icon: Castle, color: "#8B5CF6", bg: "#EDE9FE", bgImage: "linear-gradient(to bottom, #c4b5fd, #8b5cf6)", imagePath: "/images/backgrounds/bg_place_palace.webp" },
    { id: "village", name: "작은 마을", Icon: Home, color: "#F59E0B", bg: "#FEF3C7", bgImage: "linear-gradient(to bottom, #fde68a, #f59e0b)", imagePath: "/images/backgrounds/bg_place_village.webp" },
    { id: "mountain", name: "구름 산", Icon: Mountain, color: "#6B7280", bg: "#F3F4F6", bgImage: "linear-gradient(to bottom, #d1d5db, #6b7280)", imagePath: "/images/backgrounds/bg_place_mountain.webp" },
    { id: "school", name: "마법 학교", Icon: GraduationCap, color: "#6366F1", bg: "#E0E7FF", bgImage: "linear-gradient(to bottom, #c7d2fe, #6366f1)", imagePath: "/images/backgrounds/bg_place_school.webp" },
    { id: "space", name: "반짝이는 우주", Icon: Rocket, color: "#1E3A8A", bg: "#DBEAFE", bgImage: "linear-gradient(to bottom, #1e3a8a, #0f172a)", imagePath: "/images/backgrounds/bg_place_space.webp" },
    { id: "candy", name: "달콤한 과자 마을", Icon: Candy, color: "#F472B6", bg: "#FDF2F8", bgImage: "linear-gradient(to bottom, #f9a8d4, #f472b6)", imagePath: "/images/backgrounds/bg_place_candy.webp" },
];

// 아이템들 (카테고리별)
export const allItems = [
    // === 공용 (기본) ===
    { id: "magic_bag", name: "요술 보따리", Icon: Briefcase, color: "#8B5CF6", category: "common", imagePath: "/images/items/magic_bag.webp" },
    { id: "star", name: "별", Icon: Star, color: "#FBBF24", category: "common", imagePath: "/images/items/item_star.webp" },
    { id: "heart", name: "하트", Icon: Heart, color: "#EF4444", category: "common", imagePath: "/images/items/item_heart.webp" },
    { id: "sparkle", name: "반짝이", Icon: Sparkles, color: "#D946EF", category: "common", imagePath: "/images/items/item_sparkle.webp" },
    { id: "cloud", name: "구름", Icon: Cloud, color: "#9CA3AF", category: "common", imagePath: "/images/items/item_cloud.webp" },
    { id: "note", name: "음표", Icon: Music, color: "#3B82F6", category: "common", imagePath: "/images/items/note.webp" },

    // === 감정 탐험 (topic-emotion) ===
    { id: "mirror", name: "거울", Icon: Search, color: "#0EA5E9", category: "object", relatedTopic: "topic-emotion", imagePath: "/images/items/mirror.webp" },
    { id: "mask", name: "가면", Icon: Circle, color: "#A855F7", category: "object", relatedTopic: "topic-emotion", imagePath: "/images/items/mask.webp" },
    { id: "tears", name: "눈물", Icon: Droplets, color: "#3B82F6", category: "object", relatedTopic: "topic-emotion", imagePath: "/images/items/tears.webp" },
    { id: "gift_box", name: "선물 상자", Icon: Gift, color: "#F472B6", category: "object", relatedTopic: "topic-emotion", imagePath: "/images/items/gift_box.webp" },
    { id: "balloon", name: "풍선", Icon: Circle, color: "#EF4444", category: "object", relatedTopic: "topic-emotion", imagePath: "/images/items/balloon.webp" },

    // === 말하기 연습 (topic-expression) ===
    { id: "megaphone", name: "확성기", Icon: Megaphone, color: "#F59E0B", category: "object", relatedTopic: "topic-expression", imagePath: "/images/items/megaphone.webp" },
    { id: "letter", name: "편지", Icon: Mail, color: "#E5E7EB", category: "object", relatedTopic: "topic-expression", imagePath: "/images/items/letter.webp" },
    { id: "phone", name: "전화기", Icon: Phone, color: "#10B981", category: "object", relatedTopic: "topic-expression", imagePath: "/images/items/phone.webp" },
    { id: "speech_bubble", name: "말풍선", Icon: MessageCircle, color: "#6B7280", category: "object", relatedTopic: "topic-expression", imagePath: "/images/items/speech_bubble.webp" },
    { id: "pencil", name: "연필", Icon: Pencil, color: "#FBBF24", category: "object", relatedTopic: "topic-expression", imagePath: "/images/items/pencil.webp" },

    // === 우리 문화 (topic-culture) ===
    { id: "hanbok_boy", name: "남자 한복", Icon: Shirt, color: "#3B82F6", category: "object", relatedTopic: "topic-culture", imagePath: "/images/items/hanbok_boy.webp" },
    { id: "hanbok_girl", name: "여자 한복", Icon: Shirt, color: "#E91E63", category: "object", relatedTopic: "topic-culture", imagePath: "/images/items/hanbok_girl.webp" },
    { id: "fan", name: "부채", Icon: Fan, color: "#F472B6", category: "object", relatedTopic: "topic-culture", imagePath: "/images/items/fan.webp" },
    { id: "kite", name: "연", Icon: Wind, color: "#60A5FA", category: "object", relatedTopic: "topic-culture", imagePath: "/images/items/kite.webp" },
    { id: "lantern", name: "청사초롱", Icon: Lamp, color: "#EF4444", category: "object", relatedTopic: "topic-culture", imagePath: "/images/items/item_lantern.webp" },
    { id: "drum", name: "북", Icon: CircleDot, color: "#78350F", category: "object", relatedTopic: "topic-culture", imagePath: "/images/items/drum.webp" },

    // === 과학 탐구 (topic-science) ===
    { id: "rocket", name: "로켓", Icon: Rocket, color: "#EF4444", category: "object", relatedTopic: "topic-science", imagePath: "/images/items/item_spaceship.webp" },
    { id: "telescope", name: "망원경", Icon: Search, color: "#1E40AF", category: "object", relatedTopic: "topic-science", imagePath: "/images/items/telescope.webp" },
    { id: "flask", name: "플라스크", Icon: FlaskConical, color: "#10B981", category: "object", relatedTopic: "topic-science", imagePath: "/images/items/flask.webp" },
    { id: "magnet", name: "자석", Icon: Magnet, color: "#EF4444", category: "object", relatedTopic: "topic-science", imagePath: "/images/items/magnet.webp" },
    { id: "gear", name: "톱니바퀴", Icon: Settings, color: "#6B7280", category: "object", relatedTopic: "topic-science", imagePath: "/images/items/gear.webp" },

    // === 자연 친구 (topic-nature) ===
    { id: "flower", name: "꽃", Icon: Flower2, color: "#EC4899", category: "nature", relatedTopic: "topic-nature", imagePath: "/images/items/item_flower.webp" },
    { id: "tree", name: "나무", Icon: TreeDeciduous, color: "#166534", category: "nature", relatedTopic: "topic-nature", imagePath: "/images/items/item_tree.webp" },
    { id: "watering_can", name: "물뿌리개", Icon: CloudRain, color: "#3B82F6", category: "nature", relatedTopic: "topic-nature", imagePath: "/images/items/watering_can.webp" },
    { id: "bird", name: "새", Icon: Bird, color: "#06B6D4", category: "nature", relatedTopic: "topic-nature", imagePath: "/images/items/item_bird.webp" },
    { id: "sun", name: "해님", Icon: Sun, color: "#F59E0B", category: "nature", relatedTopic: "topic-nature", imagePath: "/images/items/sun.webp" },
];
