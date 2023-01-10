import { CreatingEvent, MonthEvents, SelectedDay } from "@/pages/_app";
import { Event } from "@prisma/client";
import { format, isSameDay, isToday, parseISO, startOfToday } from "date-fns";
import React, { useEffect, useState } from "react";
import EventItem from "./EventItem";
import CreateEventModule from '../popups/CreateEventModule';

type Props = {};

function EventsArea({ }: Props) {
    const { selectedDayValue, setSelectedDay } = SelectedDay.useContainer();
    const { monthEvents, setMonthEvents } = MonthEvents.useContainer();
    const { creatingEvent, setCreatingEvent } = CreatingEvent.useContainer();
    const [selectedDayEvents, setSelectedDayEvents] = useState<Event[]>([]);

    const getDayEvents = (day: Date) => monthEvents.filter((event) => isSameDay(event.due, day));

    useEffect(() => {
        console.log('render triggered')
        setSelectedDayEvents(getDayEvents(selectedDayValue));
    }, [selectedDayValue, monthEvents]);

    const copyText = async (e) => {
        const anchor = e.target as HTMLButtonElement
        const range = document.createRange()
        range.selectNode(anchor)
        window.getSelection()?.addRange(range)

        try {
            await navigator.clipboard.writeText(anchor.textContent)
            console.log('Link copied to clipboard')
        } catch (err) {
            console.error('Unable to copy link: ', err)
        }
    }


    return (
        <div className="flex flex-col container max-w-5xl ml-4 outline outline-2 px-4 py-4 rounded-lg select-none outline-neutral-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            <h2 className="font-semibold text-lg px-2 text-gray-400"><span>Schedule for</span><time dateTime={format(selectedDayValue, "yyyy-MM-dd")}><button className={`bg-transparent hover:bg-neutral-800 hover:shadow-lg rounded-lg px-1.5 py-0.5 ${isToday(selectedDayValue) ? "text-red-500" : ""}`} onClick={copyText}>{format(selectedDayValue, "MMM dd, yyy")}</button></time>
            </h2>
            {/* Events Portion */}
            <div className="content h-full flex flex-col justify-between">
                <ol className="flex flex-col gap-2 mt-5 text-sm leading-6">
                    {selectedDayEvents.length > 0 ? (
                        selectedDayEvents.map((event) => (
                            <EventItem key={event.id} event={event} />
                        ))
                    ) : (
                            <p className="ml-4 text-lg text-neutral-400">No events for today.</p>
                    )}
                </ol>

                <div className="create-event-popup-area">
                    {creatingEvent && <CreateEventModule />}
                </div>
            </div>

        </div>
    );
}

export default EventsArea;
