// pages/api/edit/[id].ts
import prisma from '@/utils/prismadb';

// PUT /api/edit/:id
export default async function handle(req, res) {
    const eventId = req.query.id;
    const { title, description, due, isRecurring, isCompleted, color, labels } = req.body;

    const event = await prisma.event.update({
        where: {
            id: eventId
        },
        data: {
            title: title,
            description: description,
            due: due,
            color: color,
            labels: labels,
            isRecurring: isRecurring,
            isCompleted: isCompleted,
        },
    });
    res.json(event);
}
