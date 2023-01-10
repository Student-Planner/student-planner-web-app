import { z } from 'zod';
import { procedure, router } from '../trpc';
import prisma from '@/utils/prismadb'
import { startOfWeek, startOfMonth, startOfToday, endOfWeek, endOfMonth } from 'date-fns';

export const appRouter = router({
    events: procedure
        .input(
            z.object({
                firstDayOfMonth: z.date(),
            }),
        )
        .query(async ({ input }) => {
            const session = await getSession({ req });
            const monthEvents = await prisma.event.findMany({
                where: {
                    User: { email: session.user?.email },
                    AND: [{ due: { gte: startOfWeek(startOfMonth(startOfToday())) } }, { due: { lte: endOfWeek(endOfMonth(startOfToday())) } }]
                },
                orderBy: [{ due: 'asc' },],
            });
            return {
                greeting: `hello ${input.firstDayOfMonth}`,
            };
        }),
});

// export type definition of API
export type AppRouter = typeof appRouter;