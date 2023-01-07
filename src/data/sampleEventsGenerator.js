const { Event } = require("@prisma/client");
const sampleEventsJson = require("./sampleTasks.json");
const { hex } = require("@vid3v/random-color");
const fs = require("fs");

const sampleEvents = [];

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
		color: hex(),
		labels: element.labels,
		userId: "clci8v99k0000lk5gx93ehels",
	});
}

async function writeJSONToFile(data, fileName) {
	const dataAsString = JSON.stringify(data, null, 2);
	await fs.promises.writeFile(fileName, dataAsString);
}

writeJSONToFile(sampleEvents, "./events.json");
