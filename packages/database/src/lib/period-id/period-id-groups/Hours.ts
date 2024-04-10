import { z } from "zod";

import {
  MILLISECONDS_PER_SECOND,
  MINUTES_PER_HOUR,
  SECONDS_PER_MINUTE,
} from "@src/lib/constants/Intervals";

type PeriodIdHours = z.infer<typeof hoursSchema>;
const hours = {
  milliSecondPerGroup:
    MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR,
  periodIds: {
    1: "1HRS",
    2: "2HRS",
    3: "3HRS",
    4: "4HRS",
    5: "5HRS",
    6: "6HRS",
    12: "12HRS",
  },
} as const;

const hoursSchema = z.union([
  z.literal(hours.periodIds[1]),
  z.literal(hours.periodIds[2]),
  z.literal(hours.periodIds[3]),
  z.literal(hours.periodIds[4]),
  z.literal(hours.periodIds[5]),
  z.literal(hours.periodIds[6]),
  z.literal(hours.periodIds[12]),
]);

export { hours, hoursSchema };

export type { PeriodIdHours };
