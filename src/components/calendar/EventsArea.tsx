import { MonthEvents, SelectedDay } from '@/pages/_app'
import { Event } from '@prisma/client'
import { format, isSameDay } from 'date-fns'
import React, { useEffect, useState } from 'react'
import TaskItem from '../TaskItem'
import sampleEvents from '@/data/sampleEvents';

type Props = {
}

function EventsArea({ }: Props) {
    const { selectedDayValue, setSelectedDay } = SelectedDay.useContainer()
    const { monthEvents, setMonthEvents } = MonthEvents.useContainer()
    const [dayEvents, setDayEvents] = useState<Event[]>([])

    const getDayEvents = (day: Date) => (monthEvents.filter((event) => isSameDay(event.due, day)));

    useEffect(() => {
        setDayEvents(getDayEvents(selectedDayValue))
    }, [selectedDayValue])


    return (
        <div className='flex container max-w-xl mx-8 outline outline-2 px-2 py-4 rounded-lg outline-neutral-700 transition-colors duration-300 shadow-md hover:shadow-lg'>
            {/* Events Portion */}
            <section className="mt-12 md:mt-0 md:pl-6" >
                <h2 className="font-semibold text-lg text-gray-400">
                    <>Schedule for </>
                    <time dateTime={format(selectedDayValue, "yyyy-MM-dd")}>
                        {format(selectedDayValue, "MMM dd, yyy")}
                    </time>
                </h2>
                <ol className="flex flex-col mt-4  text-sm leading-6">
                    {/* {dayEvents.length > 0 ? (
                        dayEvents.map((event) => (
                            <TaskItem key={event.id} event={event} />
                            ))
                            ) : (
                                <p>No meetings for today.</p>
                            )} */}
                    <TaskItem event={{
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
                    }} />
                </ol>
            </section>
        </div>
    )
}



export default EventsArea