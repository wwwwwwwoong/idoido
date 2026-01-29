import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { Header } from "@/components";
import ShopClient from "./ShopClient";

interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ShopPage({ searchParams }: Props) {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
        redirect("/login");
    }

    const userId = data.user.id;
    const params = await searchParams;
    // 모든 캐릭터 조회
    const characters = await prisma.character.findMany({
        where: { userId: userId },
        orderBy: { createdAt: "desc" },
    });

    const charId = params.charId as string;

    // 만약 캐릭터가 하나도 없으면 만들기 페이지로 안내? 일단은 빈 상태로 진입

    // 각 캐릭터에 대해 이미지 URL 서명 처리
    const clientCharacters = await Promise.all(
        characters.map(async (c) => {
            let imageUrl = c.renderPath || c.doodlePath;
            if (imageUrl && !imageUrl.startsWith("data:") && !imageUrl.startsWith("http") && !imageUrl.startsWith("/")) {
                const cleanPath = imageUrl.replace(/^\/+/, "");
                const { data: signedData } = await supabase.storage
                    .from("doodles")
                    .createSignedUrl(cleanPath, 3600);

                if (signedData?.signedUrl) {
                    imageUrl = signedData.signedUrl;
                }
            }
            return {
                id: c.id,
                name: c.name,
                imageUrl: imageUrl,
            };
        })
    );

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#FFFEF5" }}>
            <Header user={data.user} />
            <ShopClient characters={clientCharacters} initialCharId={charId} />
        </div>
    );
}
