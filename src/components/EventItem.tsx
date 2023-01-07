import React from 'react'
import { Event } from '@prisma/client';


type Props = {
    event: Event
}

{/* Huge button to open detals */ }
{/* Checkbox button */ }
function EventItem({ event }: Props) {
    return (
        <button className='hover:bg-neutral-700 container w-full max-h-16 my-1 mx-0 outline outline-2 px-4 py-4 rounded-xl outline-neutral-700 transition-colors duration-150 shadow-md hover:shadow-lg' role="checkbox" type='button' aria-checked>

            {/* Event content */}
            <div className="pl-2">
                {/* {"Math Study 11.6"} */}
                {event.title}
            </div>

            {/* Event Description */}
            <p className="m-2 max-h-4 max-w-full text-xs truncate">
                {/* {"Slides on G-Drive, also from kuhaili"} */}
                {event.description}
            </p>

            {/* Tages: Maybe colors to indicate course */}

        </button>
    )
}


export default EventItem