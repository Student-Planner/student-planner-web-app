import { Task } from "@prisma/client";
import sampleTasksJson from "./sampleTasks.json";

const sampleTasks: Task[] = [];

for (let i = 0; i < sampleTasksJson.length; i++) {
	const element = sampleTasksJson[i];
	sampleTasks.push({
		id: element.id,
		title: element.title,
		description: element.description,
		due: new Date(element.due.dateTime),
		created: new Date(),
		updated: new Date(),
		isRecurring: element.due.isRecurring,
		isCompleted: element.isCompleted,
		color: "#98999b",
		labels: element.labels,
	});
}

export default sampleTasks;
