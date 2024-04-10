import { z } from "zod";

import { days, daysSchema } from "./period-id-groups/Days";
import { hours, hoursSchema } from "./period-id-groups/Hours";
import { minutes, minutesSchema } from "./period-id-groups/Minutes";
import { months, monthsSchema } from "./period-id-groups/Months";
import { seconds, secondsSchema } from "./period-id-groups/Seconds";
import { years, yearsSchema } from "./period-id-groups/Years";

type PeriodId = z.infer<typeof PeriodIdsSchema>;
type Group = {
  milliSecondPerGroup: number;
  periodIds: (typeof PeriodIds)[keyof typeof PeriodIds];
};

const PeriodIds = {
  Seconds: seconds.periodIds,
  Minutes: minutes.periodIds,
  Hours: hours.periodIds,
  Days: days.periodIds,
  Months: months.periodIds,
  Years: years.periodIds,
} as const;

const PeriodIdsSchema = z.union([
  secondsSchema,
  minutesSchema,
  hoursSchema,
  daysSchema,
  monthsSchema,
  yearsSchema,
]);

export { PeriodIds, PeriodIdsSchema };
export type { Group, PeriodId };
