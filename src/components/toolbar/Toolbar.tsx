import React from 'react'
import ToolbarButton from './ToolbarButton'
import { BsPlusLg } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import CreateEventModule from '../popups/CreateEventModule';
import { FaCalendar, FaEdit } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import { Event } from '@prisma/client';
import { useCreatingEvent, useMonthEvents, useSelectedEvent } from '@/utils/zustand';

type Props = {}

function Toolbar({ }: Props) {
    const { selectedEvent, setSelectedEvent } = useSelectedEvent()
    const { creatingEvent, setCreatingEvent } = useCreatingEvent()
    const { monthEvents, setMonthEvents } = useMonthEvents()


    function addEvent(e: any): void {
        setCreatingEvent(!(creatingEvent));
    }

    async function deleteEvent(e) {
        e.preventDefault();
        try {
            const deletedEvent = await fetch(`/api/event/${selectedEvent.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            }).then((promiseResponse) => {
                return promiseResponse.json();
            }).then((jsonResponse) => {
                return jsonResponse as Event;
            });
            setMonthEvents(monthEvents.filter(event => !(event.id === deletedEvent.id)));
        } catch (error) {
            console.log(error)
        }
    }
    function editItem(e: any): void {
        throw new Error('Function not implemented.');
    }

    function reScheduleItem(e: any): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div className="flex flex-col items-center justify-between container min-w-fit max-w-fit mx-0 outline outline-2 px-1 py-1 rounded-lg select-none outline-neutral-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            <div className="top">
                <ToolbarButton className='text-2xl' icon={<BsPlusLg />} onClick={addEvent} />
                <ToolbarButton className='text-2xl' icon={<FiEdit2 />} onClick={editItem} />
                <ToolbarButton className='text-2xl' icon={<FaCalendar />} onClick={reScheduleItem} />
            </div>

            <div className="bottom">
                <ToolbarButton className='text-3xl hover:bg-red-500 bg-opacity-30 transition-colors hover:bg-opacity-100' icon={<MdDelete />} onClick={async (e) => await deleteEvent(e)} />

            </div>
        </div>
    )
}

export default Toolbar