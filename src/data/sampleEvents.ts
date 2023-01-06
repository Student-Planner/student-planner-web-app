import { Event } from "@prisma/client";
import sampleEventsJson from "./sampleTasks.json";

const sampleEvents: Event[] = [];

for (let i = 0; i < sampleEventsJson.length; i++) {
	const element = sampleEventsJson[i];
	sampleEvents.push({
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
		userId: "clci8v99k0000lk5gx93ehels",
	});
}

export default sampleEvents;
