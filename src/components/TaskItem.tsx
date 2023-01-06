import React from 'react'
import { Event } from '@prisma/client';


type Props = {
    event: Event
}

{/* Huge button to open detals */ }
{/* Checkbox button */ }
function EventItem({ event }: Props) {
    return (
        <button className='rounded-lg ring-gray-600 ring-2 ring-solid hover:bg-gray-700 container w-full max-h-28 my-1 ' role="checkbox" type='button' aria-checked>

            {/* Event content */}
            <div className="pl-2">
                {event.title}
            </div>

            {/* Event Description */}
            <p className="m-2 max-h-4 max-w-full text-xs truncate">
                {event.description}
            </p>

            {/* Tages: Maybe colors to indicate course */}

        </button>
    )
}


export default EventItem