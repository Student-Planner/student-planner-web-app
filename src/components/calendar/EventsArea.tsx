import { MonthEvents, SelectedDay } from "@/pages/_app";
import { Event } from "@prisma/client";
import { format, isSameDay, parseISO } from "date-fns";
import React, { useEffect, useState } from "react";
import EventItem from "../EventItem";
import sampleEvents from '../../data/sampleEvents'

type Props = {};

function EventsArea({ }: Props) {
    const { selectedDayValue, setSelectedDay } = SelectedDay.useContainer();
    const { monthEvents, setMonthEvents } = MonthEvents.useContainer();
    const [dayEvents, setDayEvents] = useState<Event[]>([]);

    // TODO swap sample events
    const getDayEvents = (day: Date) =>
        sampleEvents.filter((event) => isSameDay(parseISO(event.due as string), day));

    useEffect(() => {
        setDayEvents(getDayEvents(selectedDayValue));
    }, [selectedDayValue]);

    return (
        <div className="flex flex-col container max-w-4xl mx-8 outline outline-2 px-4 py-4 rounded-lg outline-neutral-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            <h2 className="font-semibold text-lg px-2 text-gray-400">
                <>Schedule for </>
                <time dateTime={format(selectedDayValue, "yyyy-MM-dd")}>
                    {format(selectedDayValue, "MMM dd, yyy")}
                </time>
            </h2>
            {/* Events Portion */}
            <section className="">
                <ol className="flex flex-col mt-5 text-sm leading-6">
                    {dayEvents.length > 0 ? (
                        dayEvents.map((event) => (
                            <EventItem key={event.id} event={event} />
                            ))
                            ) : (
                                <p>No meetings for today.</p>
                    )}
                    {/* <EventItem
                        event={{
                            id: "id-123",
                            title: "some title",
                            description: "some description",
                            due: new Date(),
                            created: new Date(),
                            updated: new Date(),
                            color: "#151515",
                            isCompleted: false,
                            isRecurring: false,
                            labels: ["some label"],
                            userId: "user-123",
                        }}
                    /> */}
                </ol>
            </section>
        </div>
    );
}

export default EventsArea;
