import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CalendarModule from '../src/components/CalendarMonth';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="Homepage" content="Main Stuff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
