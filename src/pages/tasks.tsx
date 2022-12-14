import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion'
import React from 'react'
import styles from '@/styles/Home.module.css'

type Props = {}

function Tasks({ }) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Accordion className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
                    <AccordionItem className="AccordionItem" value="item-1">
                        <AccordionTrigger className="">Is it accessible?</AccordionTrigger>
                        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                    </AccordionItem>

                    <AccordionItem className="AccordionItem" value="item-2">
                        <AccordionTrigger>Is it unstyled?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s unstyled by default, giving you freedom over the look and feel.
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

export default Tasks