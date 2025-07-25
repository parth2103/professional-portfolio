import { defineConfig } from "drizzle-kit";
export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    host: "ep-still-rain-aeri61xp-pooler.c-2.us-east-2.aws.neon.tech",
    port: 5432,
    user: "neondb_owner",
    password: "npg_zjTE6me4grcG",
    database: "neondb",
    ssl: true,
  },
});
