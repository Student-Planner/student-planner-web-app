import Calendar from '@/components/calendar/Calendar';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function Home(props) {
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
