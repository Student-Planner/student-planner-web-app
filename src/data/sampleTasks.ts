import sampleTasksJson from "./sampleTasks.json";
import Task from "./Task";

const sampleTasks: Task[] = [];

for (let i = 0; i < sampleTasksJson.length; i++) {
	const element = sampleTasksJson[i];
	sampleTasks.push(
		new Task(
			element.id,
			element.title,
			element.description,
			element.due,
			element.isCompleted,
			element.labels
		)
	);
}

export default sampleTasks;
