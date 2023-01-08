import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import EventsArea from "@/components/calendar/EventsArea";
import { Event } from "@prisma/client";
import Calendar from "@/components/calendar/Calendar";
import Toolbar from '../components/toolbar/Toolbar';
import { GetServerSideProps } from 'next';

type Props = {
    events: Event[];
};

export default function Home({ }) {
    const { data: session, status } = useSession();
    const [calledPush, setCalledPush] = useState(false);

    useEffect(() => {
        if ((!(status === "authenticated") || !session) && !calledPush) {
            Router.push("/login");
            setCalledPush(true);
        }
    }, [status, session, calledPush]);

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


