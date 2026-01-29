import { createClient } from "@/lib/supabase/server";
import { successResponse, handleApiError } from "@/lib/apiResponse";

export const runtime = "nodejs";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { path } = body;

        if (!path || typeof path !== "string") {
            throw new Error("Invalid path");
        }

        const supabase = await createClient();

        // Check if path is actually a URL (fallback)
        if (path.startsWith("http")) {
            return successResponse({ signedUrl: path });
        }

        // Remove prefix if present (defensive)
        const cleanPath = path.replace(/^\/+/, "");

        // Sign URL (1 hour validity)
        const { data, error } = await supabase.storage
            .from("doodles")
            .createSignedUrl(cleanPath, 3600);

        if (error) {
            console.error("Sign API Error:", error);
            throw error;
        }

        return successResponse({ signedUrl: data.signedUrl });
    } catch (error) {
        return handleApiError(error);
    }
}
