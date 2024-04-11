import type { Config } from "drizzle-kit";

export default {
  schema: "./src/Schema.ts",
  out: "./out",
  driver: "turso",
  verbose: true,
  strict: true,
  dbCredentials: {
    url: "file:local.sqlite",
  },
} satisfies Config;
