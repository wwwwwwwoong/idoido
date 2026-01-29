const fs = require('fs');
const path = require('path');

// Read API Key from .env.local
const envPath = path.join(__dirname, '..', '.env.local');
let apiKey = '';

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/GOOGLE_AI_API_KEY=(.+)/);
    if (match) {
        apiKey = match[1].trim();
    }
} catch (e) {
    console.error("Could not read .env.local");
    process.exit(1);
}

if (!apiKey) {
    console.error("GOOGLE_AI_API_KEY not found in .env.local");
    process.exit(1);
}

async function listModels() {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const data = await response.json();

        if (data.models) {
            console.log("=== Found Models ===");
            const names = data.models.map(m => m.name.replace('models/', ''));
            // Filter mainly for gemini and imagen
            const noteworthy = names.filter(n => n.includes('gemini') || n.includes('imagen') || n.includes('veo') || n.includes('face'));
            console.log(noteworthy.join('\n'));
        } else {
            console.log("No models returned.");
        }

    } catch (e) {
        console.error("Error:", e.message);
    }
}

listModels();
