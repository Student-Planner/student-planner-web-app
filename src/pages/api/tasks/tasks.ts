// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import sampleEvents from "@/data/sampleEvents";
import { Event } from "@prisma/client";

export default function handler(req, res) {
	const events: Event[] = sampleEvents;
	res.status(200).json(events);
}
