// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import sampleTasks from "../../../src/data/sampleTasks";
import Task from "../../../src/data/Task";

export default function handler(req, res) {
	const tasks: Task[] = sampleTasks;
	res.status(200).json(tasks);
}
