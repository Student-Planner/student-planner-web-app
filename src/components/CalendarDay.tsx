import React from 'react'
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    startOfWeek,
    format,
    isSameDay,
    parse,
    parseISO,
    startOfToday,
    getDay,
    isEqual,
    isSameMonth,
    isToday,
} from "date-fns";
import { classNames } from '../utils/utils';
import Task from '../data/Task';


type Props = {
    day: Date;
    dayIndx: number;
    setSelectedDay: CallableFunction;
    selectedDay: Date;
    firstDayCurrentMonth: Date;
    dayEvents: Task[];
}


const CalendarDay = ({ day, dayIndx, setSelectedDay, selectedDay, firstDayCurrentMonth, dayEvents }: Props) => {
    return (
        <div
            key={day.toString()}
            className={classNames(
                dayIndx === 0 &&
                colStartClasses[getDay(day)],
                "mt-2.5 px-auto"
            )}>
            <button
                type="button"
                onClick={() => setSelectedDay(day)}
                className={classNames(
                    // == Common Day in Month == 

                    // When NOT Selected
                    !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    "text-gray-400",

                    // When Selected
                    isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    "bg-gray-600",

                    // On Hover
                    !isEqual(day, selectedDay) &&
                    "hover:bg-gray-600",
                    // =========================

                    // == Today == 

                    // When NOT Selected
                    !isEqual(day, selectedDay) &&
                    isToday(day) &&
                    "text-red-500 hover:bg-gray-700",

                    // When Selected
                    isEqual(day, selectedDay) &&
                    isToday(day) &&
                    "bg-red-500",
                    // =========================

                    // Bolden Selected Day & Today 
                    (isEqual(day, selectedDay) || isToday(day)) &&
                    "font-semibold",

                    // Other common styles
                    "mx-auto mb-1 flex h-11 w-11 items-center justify-center rounded-full transition duration-200"
                )}>
                <time dateTime={format(day, "yyyy-MM-dd")}>
                    {format(day, "d")}
                </time>
            </button>

            <div className="flex flex-row mt-0.5 h-1.5 text-xs justify-center">
                {dayEvents.map((event, eventIndex) => (
                    <div
                        key={eventIndex}
                        className={classNames(
                            eventIndex === 0 ?
                                "" : "ml-1",
                            "bg-red-600 h-1.5 w-1.5 rounded-full")}></div>
                ))}
            </div>
            {/* <div className="w-1 h-1 mx-auto mt-1">
                {sampleMeetings.some((meeting) =>
                    isSameDay(
                        parseISO(meeting.startDatetime),
                        day
                    )
                ) && (
                        <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
            </div> */}
        </div>
    )
}

const colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
];

export default CalendarDay