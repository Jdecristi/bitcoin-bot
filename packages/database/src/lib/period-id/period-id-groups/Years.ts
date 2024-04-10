import { z } from "zod";

import {
  DAYS_PER_YEAR,
  HOURS_PER_DAY,
  MILLISECONDS_PER_SECOND,
  MINUTES_PER_HOUR,
  SECONDS_PER_MINUTE,
} from "@src/lib/constants/Intervals";

type PeriodIdYears = z.infer<typeof yearsSchema>;

const years = {
  milliSecondPerGroup:
    MILLISECONDS_PER_SECOND *
    SECONDS_PER_MINUTE *
    MINUTES_PER_HOUR *
    HOURS_PER_DAY *
    DAYS_PER_YEAR,
  periodIds: {
    1: "1YRS",
    2: "2YRS",
    3: "3YRS",
    4: "4YRS",
    5: "5YRS",
  },
} as const;

const yearsSchema = z.union([
  z.literal(years.periodIds[1]),
  z.literal(years.periodIds[2]),
  z.literal(years.periodIds[3]),
  z.literal(years.periodIds[4]),
  z.literal(years.periodIds[5]),
]);

export { years, yearsSchema };

export type { PeriodIdYears };
