import sampleEventsJson from "./events.json";

const sampleEvents = [];

for (let i = 0; i < sampleEventsJson.length; i++) {
	const element = sampleEventsJson[i];
	sampleEvents.push({
		id: element.id,
		title: element.title,
		description: element.description,
		due: element.due,
		created: element.created,
		updated: element.updated,
		isRecurring: element.isRecurring,
		isCompleted: element.isCompleted,
		color: element.color,
		labels: element.labels,
		userId: "clci8v99k0000lk5gx93ehels",
	});
}

export default sampleEvents;
