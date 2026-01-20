import { createClient } from "@/lib/supabase/server";

export class AuthError extends Error {
    constructor(message: string = "UNAUTHORIZED") {
        super(message);
        this.name = "AuthError";
    }
}

export async function requireUserId(): Promise<string> {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
        throw new AuthError("UNAUTHORIZED");
    }

    return data.user.id;
}

