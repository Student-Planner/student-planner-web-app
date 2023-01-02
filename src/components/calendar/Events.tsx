import { format } from 'date-fns'
import React from 'react'

type Props = {}

function Events({ }: Props) {
    // TODO: Fix the states using redux
    return (
        <div>
            {/* Events Portion */}
            <section className="mt-12 md:mt-0 md:pl-6" >
                <h2 className="font-semibold text-gray-400">
                    Schedule for{" "}
                    <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                        {format(selectedDay, "MMM dd, yyy")}
                    </time>
                </h2>
                <ol className="flex flex-col mt-4  text-sm leading-6">
                    {selectedDayEvents.length > 0 ? (
                        selectedDayEvents.map((event) => (
                            <TaskItem key={event.Id} task={event} />
                        ))
                    ) : (
                        <p>No meetings for today.</p>
                    )}
                </ol>
            </section>
        </div>
    )
}

export default Events