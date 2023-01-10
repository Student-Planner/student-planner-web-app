import { useEffect, useState } from "react";
import Router from "next/router";
import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import EventsArea from "@/components/calendar/EventsArea";
import { Event } from "@prisma/client";
import Calendar from "@/components/calendar/Calendar";
import Toolbar from '../components/toolbar/Toolbar';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useSession, getSession } from 'next-auth/react';
import prisma from '@/utils/prismadb'
import { trpc } from "@/utils/trpc";
import { MonthEvents } from './_app';
import {
    startOfMonth,
    startOfToday,
    endOfMonth,
    startOfWeek,
    endOfWeek,
} from "date-fns";


export default function Home({ }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { data: session, status } = useSession();
    const { monthEvents, setMonthEvents } = MonthEvents.useContainer();


    useEffect(() => {
        if ((!(status === "authenticated") || !session)) {
            Router.push("/login");
        }
        const monthEvents = trpc.events.useQuery({ firstDayOfMonth: startOfMonth(startOfToday()) });
        setMonthEvents(requestMonthEvents.map((event: Event) => ({
            ...event,
            due: new Date(event.due),
            created: new Date(event.updated),
            updated: new Date(event.updated),
        } as Event)))

        console.log('These are the events for the month ', monthEvents)
    }, [status, session]);

    if (!monthEvents) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Navbar />
            <div className="flex flex-row place-content-center gap-2">
                <Calendar />
                <EventsArea />
                <Toolbar />
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const session = await getSession({ req });
    if (!session) {
        res.statusCode = 403;
        return { props: { monthEvents: [] } };
    }

    const monthEvents = await prisma.event.findMany({
        where: {
            User: { email: session.user?.email },
            AND: [{ due: { gte: startOfWeek(startOfMonth(startOfToday())) } }, { due: { lte: endOfWeek(endOfMonth(startOfToday())) } }]
        },
        orderBy: [{ due: 'asc' },],
    });
    return {
        props: {
            monthEvents: monthEvents.map((event: Event) => ({
                ...event,
                due: event.due.toISOString(),
                created: event.updated.toISOString(),
                updated: event.updated.toISOString(),
            })),
        },
    };
};