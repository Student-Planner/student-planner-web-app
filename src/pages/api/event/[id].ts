// pages/api/event/[id].ts
import prisma from '@/utils/prismadb'

// DELETE /api/event/:id
export default async function handle(req, res) {
    const eventId = req.query.id;
    if (req.method === 'DELETE') {
        const event = await prisma.event.delete({
            where: { id: eventId },
        });
        res.json(event);
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`,
        );
    }
}