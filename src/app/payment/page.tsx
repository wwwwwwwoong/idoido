import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Header } from "@/components";
import PaymentClient from "./PaymentClient";

export default async function PaymentPage() {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    // 로그인 체크 (로그인 안되어 있으면 로그인 페이지로)
    if (!data.user) {
        redirect("/login");
    }

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#FFFEF5" }}>
            {/* 서버에서 확인된 유저 정보 전달 */}
            <Header user={data.user} />

            <PaymentClient />
        </div>
    );
}
