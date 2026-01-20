import Link from "next/link";
import { Card, Button } from "@/components";

interface EmptyStateProps {
    emoji: string;
    title: string;
    description: string;
    action?: {
        href: string;
        label: string;
    };
}

export function EmptyState({ emoji, title, description, action }: EmptyStateProps) {
    return (
        <Card padding="lg" className="empty-state">
            <div className="empty-state-emoji">{emoji}</div>
            <div className="empty-state-title">{title}</div>
            <div className="empty-state-description">{description}</div>
            {action && (
                <Link href={action.href}>
                    <Button variant="primary">{action.label}</Button>
                </Link>
            )}
        </Card>
    );
}

// 자주 쓰는 빈 상태 프리셋
export function EmptyCharacters() {
    return (
        <EmptyState
            emoji="🌱"
            title="아직 캐릭터가 없어요"
            description="첫 번째 씨앗을 심어 나만의 캐릭터를 만들어보세요!"
            action={{ href: "/create", label: "씨앗 심기" }}
        />
    );
}

export function EmptyScenes() {
    return (
        <EmptyState
            emoji="📖"
            title="아직 장면이 없어요"
            description="캐릭터와 함께 첫 번째 이야기를 만들어보세요!"
            action={{ href: "/scene/create", label: "장면 만들기" }}
        />
    );
}

export function EmptyBooks() {
    return (
        <EmptyState
            emoji="📚"
            title="아직 동화책이 없어요"
            description="새 동화책을 시작해서 나만의 이야기를 만들어보세요!"
            action={{ href: "/books/new", label: "동화책 만들기" }}
        />
    );
}

export function EmptyCards() {
    return (
        <EmptyState
            emoji="🔤"
            title="아직 언어카드가 없어요"
            description="장면을 만들면 언어카드가 자동으로 수집돼요!"
            action={{ href: "/scene/create", label: "장면 만들기" }}
        />
    );
}
