const prisma = require('./lib/prismadb')

prisma.event.deleteMany({});

const doSomething = async function () {
	const Event = await prisma.event.create({
		data: {
			title: "Test Event",
			description: "This is a test event",
			due: new Date(),
			labels: ["test", "event"],
			color: "#A020F0",
			isCompleted: false,
			isRecurring: false,
			userId: "clci8v99k0000lk5gx93ehels",
		},
	});
};

doSomething();
