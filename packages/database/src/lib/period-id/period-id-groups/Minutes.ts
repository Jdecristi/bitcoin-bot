import { z } from "zod";

import {
  MILLISECONDS_PER_SECOND,
  SECONDS_PER_MINUTE,
} from "@src/lib/constants/Intervals";

type PeriodIdMinutes = z.infer<typeof minutesSchema>;

const minutes = {
  milliSecondPerGroup: MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE,
  periodIds: {
    1: "1MIN",
    2: "2MIN",
    3: "3MIN",
    4: "4MIN",
    5: "5MIN",
    6: "6MIN",
    10: "10MIN",
    15: "15MIN",
    20: "20MIN",
    30: "30MIN",
  },
} as const;

const minutesSchema = z.union([
  z.literal(minutes.periodIds[1]),
  z.literal(minutes.periodIds[2]),
  z.literal(minutes.periodIds[3]),
  z.literal(minutes.periodIds[4]),
  z.literal(minutes.periodIds[5]),
  z.literal(minutes.periodIds[6]),
  z.literal(minutes.periodIds[10]),
  z.literal(minutes.periodIds[15]),
  z.literal(minutes.periodIds[20]),
  z.literal(minutes.periodIds[30]),
]);

export { minutes, minutesSchema };

export type { PeriodIdMinutes };
