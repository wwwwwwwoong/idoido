"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components";

type DeleteCharacterButtonProps = {
    characterId: string;
    characterName: string | null;
};

export default function DeleteCharacterButton({
    characterId,
    characterName,
}: DeleteCharacterButtonProps) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = useCallback(async () => {
        const name = characterName ?? "이름 없는 캐릭터";
        if (!confirm(`"${name}"를 정말 삭제할까요? 😢\n(관련 Scene도 함께 삭제됩니다)`)) {
            return;
        }

        setIsDeleting(true);
        try {
            const res = await fetch(`/api/characters/${characterId}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                const json = await res.json();
                throw new Error(json?.error ?? "삭제 실패");
            }

            router.refresh();
        } catch (e) {
            const message = e instanceof Error ? e.message : String(e);
            alert(`삭제 실패: ${message}`);
        } finally {
            setIsDeleting(false);
        }
    }, [characterId, characterName, router]);

    return (
        <Button
            variant="danger"
            size="sm"
            onClick={handleDelete}
            disabled={isDeleting}
            isLoading={isDeleting}
        >
            삭제
        </Button>
    );
}

