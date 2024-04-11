import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { PeriodIdsSchema } from "@src/lib/period-id/PeriodId";

type InsertAlgorithmState = z.infer<typeof insertAlgorithmStateSchema>;
type AlgorithmState = z.infer<typeof algorithmStateSchema>;

const algorithmStateTable = sqliteTable("algorithmState", {
  startTime: integer("startTime", { mode: "timestamp" }).notNull(),
  algorithmIntervalPeriodId: text("algorithmIntervalPeriodId").notNull(),
  ohlvcPeriodId: text("ohlvcPeriodId").notNull(),
});

const insertAlgorithmStateSchema = createInsertSchema(algorithmStateTable, {
  startTime: z.date(),
  algorithmIntervalPeriodId: PeriodIdsSchema,
  ohlvcPeriodId: PeriodIdsSchema,
});

const algorithmStateSchema = createSelectSchema(algorithmStateTable, {
  startTime: z.date(),
  algorithmIntervalPeriodId: PeriodIdsSchema,
  ohlvcPeriodId: PeriodIdsSchema,
});

export {
  algorithmStateSchema,
  algorithmStateTable,
  insertAlgorithmStateSchema,
};
export type { AlgorithmState, InsertAlgorithmState };
