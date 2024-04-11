CREATE TABLE `algorithmState` (
	`startTime` integer NOT NULL,
	`algorithmIntervalPeriodId` text NOT NULL,
	`ohlvcPeriodId` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `timeFrame` (
	`id` integer PRIMARY KEY NOT NULL,
	`startTime` integer NOT NULL,
	`endTime` integer NOT NULL,
	`startRate` integer NOT NULL,
	`endRate` integer NOT NULL,
	`averageRate` integer NOT NULL
);
