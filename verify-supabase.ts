
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!; // Or SERVICE_ROLE if available but client usually uses anon?
// Server context usually uses Service Role but let's try strict context
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

console.log("URL:", supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function main() {
    console.log("Testing Supabase Storage...");

    // 1. List files in 'doodles'
    const { data: list, error: listError } = await supabase.storage.from("doodles").list("scenes", { limit: 5 });
    if (listError) {
        console.error("List Error:", listError);
    } else {
        console.log("Files in 'doodles/scenes':", list.map(f => f.name));
    }

    // 2. Try to Sign a URL
    // Use a filename from the list if possible, or the one from the error
    const testFile = "scenes/1769230088014_1_upzeh.png";
    console.log("Attempting to sign:", testFile);

    const { data: sign, error: signError } = await supabase.storage.from("doodles").createSignedUrl(testFile, 3600);

    if (signError) {
        console.error("Sign Error:", signError);
    } else {
        console.log("Signed URL:", sign.signedUrl);
    }

    // 3. Try to get Public URL
    const { data: publicUrl } = supabase.storage.from("doodles").getPublicUrl(testFile);
    console.log("Public URL:", publicUrl.publicUrl);

    // Check if public URL works (head)
    try {
        const res = await fetch(publicUrl.publicUrl, { method: "HEAD" });
        console.log("Public URL Check:", res.status, res.statusText);
    } catch (e) {
        console.error("Public URL Fetch Error:", e);
    }
}

main();
