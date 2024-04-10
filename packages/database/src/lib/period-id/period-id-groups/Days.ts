import { z } from "zod";

import {
  HOURS_PER_DAY,
  MILLISECONDS_PER_SECOND,
  MINUTES_PER_HOUR,
  SECONDS_PER_MINUTE,
} from "@src/lib/constants/Intervals";

type PeriodIdDays = z.infer<typeof daysSchema>;

const days = {
  milliSecondPerGroup:
    MILLISECONDS_PER_SECOND *
    SECONDS_PER_MINUTE *
    MINUTES_PER_HOUR *
    HOURS_PER_DAY,
  periodIds: {
    1: "1DAY",
    2: "2DAY",
    3: "3DAY",
    5: "5DAY",
    7: "7DAY",
    10: "10DAY",
  },
} as const;

const daysSchema = z.union([
  z.literal(days.periodIds[1]),
  z.literal(days.periodIds[2]),
  z.literal(days.periodIds[3]),
  z.literal(days.periodIds[5]),
  z.literal(days.periodIds[7]),
  z.literal(days.periodIds[10]),
]);

export { days, daysSchema };

export type { PeriodIdDays };
