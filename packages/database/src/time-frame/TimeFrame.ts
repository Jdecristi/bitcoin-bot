import { integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

type InsertTimeFrame = z.infer<typeof insertTimeFrameSchema>;
type TimeFrame = z.infer<typeof timeFrameSchema>;

const timeFrameTable = sqliteTable("timeFrame", {
  id: integer("id").primaryKey(),
  startTime: integer("startTime", { mode: "timestamp" }).notNull(),
  endTime: integer("endTime", { mode: "timestamp" }).notNull(),
  startRate: integer("startRate").notNull(),
  endRate: integer("endRate").notNull(),
  averageRate: integer("averageRate").notNull(),
});

const insertTimeFrameSchema = createInsertSchema(timeFrameTable, {
  startTime: z.date(),
  endTime: z.date(),
  startRate: z.number().positive(),
  endRate: z.number().positive(),
  averageRate: z.number().positive(),
});

const timeFrameSchema = createSelectSchema(timeFrameTable, {
  id: z.number().int().positive(),
  startTime: z.date(),
  endTime: z.date(),
  startRate: z.number().positive(),
  endRate: z.number().positive(),
  averageRate: z.number().positive(),
});

export { insertTimeFrameSchema, timeFrameSchema, timeFrameTable };
export type { InsertTimeFrame, TimeFrame };
