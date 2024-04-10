import { z } from "zod";

import { MILLISECONDS_PER_SECOND } from "@src/lib/constants/Intervals";

type PeriodIdSeconds = z.infer<typeof secondsSchema>;

const seconds = {
  milliSecondPerGroup: MILLISECONDS_PER_SECOND,
  periodIds: {
    1: "1SEC",
    2: "2SEC",
    3: "3SEC",
    4: "4SEC",
    5: "5SEC",
    6: "6SEC",
    10: "10SEC",
    15: "15SEC",
    20: "20SEC",
    30: "30SEC",
  },
} as const;

const secondsSchema = z.union([
  z.literal(seconds.periodIds[1]),
  z.literal(seconds.periodIds[2]),
  z.literal(seconds.periodIds[3]),
  z.literal(seconds.periodIds[4]),
  z.literal(seconds.periodIds[5]),
  z.literal(seconds.periodIds[6]),
  z.literal(seconds.periodIds[10]),
  z.literal(seconds.periodIds[15]),
  z.literal(seconds.periodIds[20]),
  z.literal(seconds.periodIds[30]),
]);

export { seconds, secondsSchema };

export type { PeriodIdSeconds };
