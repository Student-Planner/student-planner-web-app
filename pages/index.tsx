import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CalendarModule from '../src/components/CalendarMonth';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../src/ui/Accordion';
import { classNames } from '../src/utils/utils';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="Homepage" content="Main Stuff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Accordion className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
          <AccordionItem className="AccordionItem" value="item-1">
            <AccordionTrigger className="">Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>

          <AccordionItem className="AccordionItem" value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
              Yes. It's unstyled by default, giving you freedom over the look and feel.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="AccordionItem" value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent className="AccordionContent">
              <div className="AccordionContentText">
                Yes! You can animate the Accordion with CSS or JavaScript.
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
