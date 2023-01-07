import React from 'react'
import { Event } from '@prisma/client'

type Props = {
    classes: string;
    event: Event;
}

function ColoredDiv({ classes, event }: Props) {
    return (
        <div className={classes + ` bg-[${event.color}]`}></div>
    )
}

export default ColoredDiv