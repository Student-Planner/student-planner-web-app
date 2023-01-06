import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Events from "@/components/calendar/Events";
import { Event } from "@prisma/client";
import Calendar from "@/components/calendar/Calendar";


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
            <Calendar />
            <Events />
        </>
    );
}
