// pages/api/completed/[id].ts
import prisma from '../../../../../lib/prismadb'

// PUT /api/completed/:id
export default async function handle(req, res) {
    const eventId = req.query.id;
    const { isCompleted } = req.body;

    const event = await prisma.event.update({
        where: {
            id: eventId
        },
        data: {
            isCompleted: isCompleted,
        },
    });
    res.json(event);
}
