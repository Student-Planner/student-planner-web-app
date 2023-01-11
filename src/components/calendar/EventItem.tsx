import React, { useEffect, useState } from 'react'
import { Event } from '@prisma/client';
import { classNames } from '../../utils/utils';
import EventItemButton from './EventItemButton';
import { useSelectedEvent } from '@/utils/zustand';

type Props = {
    event: Event
}

{/* Huge button to open detals */ }
{/* Checkbox button */ }
function EventItem({ event }: Props) {
    const [expanded, setExpanded] = useState(false);
    const { selectedEvent, setSelectedEvent } = useSelectedEvent()


    function reScheduleItem(e) {
        throw new Error('Function not implemented.');
    }

    function editItem(e: any) {
        throw new Error('Function not implemented.');
    }

    function onEventClick(e) {
        if (!expanded)
            setSelectedEvent(event);
        else if (expanded)
            setSelectedEvent(null);
    }

    useEffect(() => {
        if (selectedEvent !== event) {
            setExpanded(false)
        }
        else if (selectedEvent === event) {
            setExpanded(true)
        }
    }, [selectedEvent])

    return (
        <a className={classNames('group/event-item flex flex-row justify-between hover:bg-neutral-700 container min-h-fit w-full mx-0 outline outline-2 rounded-md px-4 py-0 transition-all duration-200 outline-neutral-700 shadow-md hover:shadow-lg cursor-pointer select-none',
            (expanded ? 'h-40 bg-neutral-800' : 'h-16 hover:outline-none'))} onClick={onEventClick} aria-checked>

            <div className={classNames('content flex flex-shrink flex-grow-0 w-full', expanded ? 'flex-col justify-center items-start mt-0 gap-0' : 'flex-row my-auto gap-4')} >

                <div className={classNames('heading-content flex flex-row flex-shrink flex-grow-0 gap-4 max-h-min', expanded ? 'max-w-full w-full mt-4' : '')}>
                    <div style={{ backgroundColor: event.color }} className='coloredItem h-5 w-5 my-auto rounded-md'></div>
                    <div className='text-2xl my-auto max-w-sm flex-shrink truncate'>
                        {/* {'Math Study 11.6'} */}
                        {event.title}
                    </div>
                </div>

                <p className={classNames('my-auto flex-shrink max-w-full', expanded ? 'text-lg h-24 text-white overflow-auto scroll-smooth'
                    : 'text-base max-w-lg truncate text-neutral-500 group-hover/event-item:text-neutral-300')}>

                    {/* {'Slides on G-Drive, also from kuhaili Slides on G-Drive, also from kuhaili Slides on G-Drive, also from kuhaili Slides on G-Drive, also from kuhaili Slides on G-Drive Slides on G-Drive, also from kuhaili Slides on G-Drive, also from kuhaili Slides on G-Drive, also from kuhaili Slides on G-Drive, also from kuhaili Slides on G-Drive'} */}
                    {event.description}
                </p>

                {/* Tages: Maybe colors to indicate course */}
            </div>

            {/* <div className='buttons flex flex-row gap-2 my-auto'></div> */}

        </a>
    )
}


export default EventItem