import { MonthEvents, SelectedDay } from "@/pages/_app";
import { Event } from "@prisma/client";
import { format, isSameDay, parseISO } from "date-fns";
import React, { useEffect, useState } from "react";
import EventItem from "./EventItem";
import sampleEvents from "../../data/sampleEvents";

type Props = {};

function EventsArea({ }: Props) {
    const { selectedDayValue, setSelectedDay } = SelectedDay.useContainer();
    const { monthEvents, setMonthEvents } = MonthEvents.useContainer();
    const [selectedDayEvents, setSelectedDayEvents] = useState<Event[]>([]);

    // TODO swap sample events
    const getDayEvents = (day: Date) => sampleEvents.filter((event) => isSameDay(event.due, day));

    useEffect(() => {
        setSelectedDayEvents(getDayEvents(selectedDayValue));
    }, [selectedDayValue]);

    return (
        <div className="flex flex-col container max-w-5xl mx-8 outline outline-2 px-4 py-4 rounded-lg outline-neutral-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            <h2 className="font-semibold text-lg px-2 text-gray-400"><span className="select-none">Schedule for </span><time dateTime={format(selectedDayValue, "yyyy-MM-dd")}>{format(selectedDayValue, "MMM dd, yyy")}</time>
            </h2>
            {/* Events Portion */}
            <section className="">
                <ol className="flex flex-col gap-2 mt-5 text-sm leading-6">
                    {selectedDayEvents.length > 0 ? (
                        selectedDayEvents.map((event) => (
                            <EventItem key={event.id} event={event} />
                        ))
                    ) : (
                            <p className="ml-4 text-lg text-neutral-400">No events for today.</p>
                    )}
                </ol>
            </section>
        </div>
    );
}

export default EventsArea;
