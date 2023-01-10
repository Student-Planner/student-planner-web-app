import { getSession } from 'next-auth/react';
import prisma from '@/../../lib/prismadb';

export default async function handle(req, res) {
    const { title, description, due, color, labels } = req.body;

    const session = await getSession({ req });
    const result = await prisma.event.create({
        data: {
            title: title as string,
            description: description as string,
            due: due,
            color: color as string,
            labels: labels as string[],
            User: { connect: { email: session?.user?.email } },
        },
    });
    res.json({ result });
}
