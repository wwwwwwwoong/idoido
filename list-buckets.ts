
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
    console.log("Listing buckets...");
    const { data, error } = await supabase.storage.listBuckets();

    if (error) {
        console.error("Error listing buckets:", error);
    } else {
        console.log("Buckets:", data.map(b => ({ name: b.name, public: b.public })));

        if (!data.find(b => b.name === "doodles")) {
            console.log("Creating 'doodles' bucket...");
            const { data: bucket, error: createError } = await supabase.storage.createBucket("doodles", {
                public: false, // Private bucket for signed URLs
                fileSizeLimit: 10485760, // 10MB
                allowedMimeTypes: ["image/png", "image/jpeg", "image/webp"]
            });

            if (createError) {
                console.error("Error creating bucket:", createError);
            } else {
                console.log("Bucket 'doodles' created successfully.");
            }
        } else {
            console.log("'doodles' bucket already exists.");
        }
    }
}

main();
