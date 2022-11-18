import Task, { Due } from "../data/Task";
const dueTime: Due = {
	date: "16-09-2020",
	dateTime: "2022-10-25T12:00:00Z",
	isRecurring: false,
	timezone: "asia/riyadh",
};
const sampleTasks: Task[] = [
	new Task(
		"01",
		"Eu officia eu ad consectetur ad voluptate.",

		"Irure minim qui exercitation do ipsum est. Culpa aliquip esse reprehenderit pariatur. Excepteur adipisicing id dolore magna aliquip labore consequat cillum duis non pariatur exercitation tempor ullamco. ",
		{
			date: "25-10-2022",
			dateTime: "2022-10-26T12:00:00Z",
			isRecurring: false,
			timezone: "asia/riyadh",
		},
		false,
		["Proident quis nostrud cillum "]
	),
	new Task(
		"02",
		"Cupidatat in ipsum non nisi labore.",

		"Dolor est proident commodo magna culpa exercitation reprehenderit ex ex fugiat incididunt. Lorem minim non est ex cillum laboris aliqua tempor dolor culpa consectetur. ",
		{
			date: "16-09-2020",
			dateTime: "2022-10-26T12:00:00Z",
			isRecurring: false,
			timezone: "asia/riyadh",
		},
		false,
		["Ea excepteur "]
	),
	new Task(
		"05",
		"Occaecat culpa incididunt id cupidatat pariatur amet sint ",

		"Cillum sint laboris esse dolor labore nisi elit et labore nostrud laborum cupidatat.Amet sint nulla in esse eu laboris qui aute in nulla eiusmod eiusmod.",
		{
			date: "2022-09-02",
			dateTime: "2022-10-26T12:00:00Z",
			isRecurring: false,
			timezone: "asia/riyadh",
		},
		false,
		["Nostrud occaecat", "fugiat"]
	),
	new Task(
		"93",
		"Voluptate deserunt ullamco pariatur",

		"Do do dolor nisi nulla culpa ullamco ullamco laborum adipisicing duis amet.Elit est occaecat pariatur ut commodo velit commodo et.",
		{
			date: "2022-10-01",
			dateTime: "2022-08-25T12:00:00Z",
			isRecurring: false,
			timezone: "asia/riyadh",
		},
		false,
		["Veniam", "incididunt esse", "aliqua velit"]
	),
	new Task(
		"69",
		"Mollit id cupidatat ipsum ea culpa nisi ",

		"Dolore excepteur voluptate id aliquip adipisicing nulla.Et labore consectetur fugiat aliquip consequat do in id.",
		{
			date: "2022-09-22",
			dateTime: "2022-08-25T12:00:00Z",
			isRecurring: false,
			timezone: "asia/riyadh",
		},
		false,
		["Velit "]
	),
];

export default sampleTasks;
