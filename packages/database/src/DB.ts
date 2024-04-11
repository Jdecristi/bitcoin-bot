import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

const client = createClient({ url: "file:local.sqlite" });

const db = drizzle(client);

export { client, db };
