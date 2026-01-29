const { OpenAI } = require("openai");
require("dotenv").config({ path: ".env.local" });

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function listModels() {
    try {
        const list = await client.models.list();
        const models = list.data.map(m => m.id);

        console.log("Filtered Models (gpt-4):");
        console.log(models.filter(id => id.includes("gpt-4")));

        console.log("\nExact 'gpt-4.1' check:", models.includes("gpt-4.1"));
    } catch (error) {
        console.error("Error:", error.message);
    }
}

listModels();
