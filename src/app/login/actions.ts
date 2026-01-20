"use server";

import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";

export async function signInWithOtp(formData: FormData) {
    const email = String(formData.get("email") || "").trim();
    const origin = (await headers()).get("origin") ?? "http://localhost:3000";

    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
            emailRedirectTo: `${origin}/auth/confirm?next=/`,
        },
    });

    if (error) {
        // 간단히 throw (원하면 toast/에러페이지 처리)
        throw new Error(error.message);
    }
}
