import React, { useEffect, useState } from 'react'
import { Event } from '@prisma/client';
import { classNames, concatenate } from '../../utils/utils';
import { CalendarHeaderButton } from './CalendaryHeaderButton';
import { BsFillCalendar2EventFill } from 'react-icons/bs'
import { FaCalendar, FaEdit } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import EventItemButton from './EventItemButton';
import ColoredDiv from './ColoredDiv';

type Props = {
    event: Event
}

{/* Huge button to open detals */ }
{/* Checkbox button */ }
function EventItem({ event }: Props) {
    function reScheduleItem(e): void {
        throw new Error('Function not implemented.');
    }

    function editItem(e: any): void {
        throw new Error('Function not implemented.');
    }

    function onEventClick(e): void {
        throw new Error('Function not implemented.');
    }

    return (
        <a className='group/event-item flex flex-row justify-between hover:bg-neutral-700 container min-h-fit w-full max-h-16 h-16 mx-0 outline outline-2 rounded-md px-1 outline-neutral-700 transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer' onClick={onEventClick} aria-checked>

            <div className="content flex flex-row ml-4 gap-4 my-auto">
                <div style={{ backgroundColor: event.color }} className="coloredItem h-5 w-5 my-auto rounded-md"></div>
                {/* <ColoredDiv classes='h-5 w-5 my-auto rounded-md' event={event} /> */}
                <div className="text-2xl my-auto">
                    {/* {"Math Study 11.6"} */}
                    {event.title}
                </div>

                <p className="text-base my-auto max-w-sm truncate text-neutral-500 group-hover/event-item:text-neutral-300">
                    {/* {"Slides on G-Drive, also from kuhaili Slides on G-Drive, also from kuhaili Slides on G-Drive, also from kuhaili Slides on G-Drive, also from kuhaili "} */}
                    {event.description}
                </p>

                {/* Tages: Maybe colors to indicate course */}
            </div>

            <div className="buttons flex flex-row gap-2 my-auto">
                <EventItemButton icon={<FiEdit2 />} onClick={editItem} />
                <EventItemButton icon={<FaCalendar />} onClick={reScheduleItem} />
            </div>

        </a>
    )
}


export default EventItem