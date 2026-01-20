import { config as dotenvConfig } from "dotenv";
dotenvConfig({ path: ".env.local" });
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  datasource: {
    // ✅ migrate/dev 는 direct URL로
    url: env("DIRECT_URL"),
  },
});
