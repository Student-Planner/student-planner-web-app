import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import Head from 'next/head';
import Calendar from '@/components/calendar/Calendar';
import Navbar from '@/components/Navbar';

type Props = {

}

export default function Home({ }) {
    const { data: session, status } = useSession()

    useEffect(() => {
        if (!(status === 'authenticated')) {
            Router.push('/login')
        }
    }, [session, status])

    return (
        <div className=''>
            <Head>
                <title>Home</title>
                <body className='bg-neutral-900' />
            </Head>

            <Navbar />
            <Calendar />


        </div>
    )
}
