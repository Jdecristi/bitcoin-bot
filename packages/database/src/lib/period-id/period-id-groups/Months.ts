import { z } from "zod";

import {
  DAYS_PER_YEAR,
  HOURS_PER_DAY,
  MILLISECONDS_PER_SECOND,
  MINUTES_PER_HOUR,
  MONTHS_PER_YEAR,
  SECONDS_PER_MINUTE,
} from "@src/lib/constants/Intervals";

type PeriodIdMonths = z.infer<typeof monthsSchema>;

const months = {
  milliSecondPerGroup:
    (MILLISECONDS_PER_SECOND *
      SECONDS_PER_MINUTE *
      MINUTES_PER_HOUR *
      HOURS_PER_DAY *
      DAYS_PER_YEAR) /
    MONTHS_PER_YEAR,
  periodIds: {
    1: "1MTH",
    2: "2MTH",
    3: "3MTH",
    4: "4MTH",
    6: "6MTH",
  },
} as const;

const monthsSchema = z.union([
  z.literal(months.periodIds[1]),
  z.literal(months.periodIds[2]),
  z.literal(months.periodIds[3]),
  z.literal(months.periodIds[4]),
  z.literal(months.periodIds[6]),
]);

export { months, monthsSchema };

export type { PeriodIdMonths };
