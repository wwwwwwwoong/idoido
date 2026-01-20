import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export const runtime = "nodejs";

function safeNext(next: string | null) {
    const n = next ?? "/";
    return n.startsWith("/") ? n : "/";
}

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    const token_hash = url.searchParams.get("token_hash");
    const type = url.searchParams.get("type");
    const next = safeNext(url.searchParams.get("next"));
    const origin = url.origin;

    // redirect response 먼저 만들고, 여기에 쿠키를 setAll로 심는 방식
    let response = NextResponse.redirect(`${origin}${next}`);

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        response.cookies.set(name, value, options);
                    });
                },
            },
        }
    );

    // 1) PKCE: /auth/confirm?code=...
    if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (!error) return response;
        return NextResponse.redirect(`${origin}/login`);
    }

    // 2) OTP hash: /auth/confirm?token_hash=...&type=...
    if (token_hash && type) {
        const { error } = await supabase.auth.verifyOtp({
            type: type as any,
            token_hash,
        });
        if (!error) return response;
        return NextResponse.redirect(`${origin}/login`);
    }

    return NextResponse.redirect(`${origin}/login`);
}
