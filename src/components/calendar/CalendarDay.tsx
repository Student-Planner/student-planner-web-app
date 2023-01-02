import React from 'react'
import {
    format,
    getDay,
    isEqual,
    isSameMonth,
    isToday,
    startOfToday,
} from "date-fns";
import { classNames } from '../../utils/utils';
import Task from '../../data/Task';
import { useDispatch, useSelector } from 'react-redux';
import { selectedDayValue, changeSelectedDay } from '../../redux/calendarSelectedDay';


type Props = {
    day: Date;
    dayIndx: number;
    firstDayCurrentMonth: Date;
    dayEvents: Task[];
}


const CalendarDay = ({ day, dayIndx, firstDayCurrentMonth, dayEvents }: Props) => {
    const dispatch = useDispatch()
    const today = startOfToday();
    const selectedDay = useSelector(selectedDayValue)
    const setSelectedDay = (day: Date) => dispatch(changeSelectedDay(day))

    return (
        <div
            key={day.toString()}
            className={classNames(
                dayIndx === 0 &&
                colStartClasses[getDay(day)],
                "mt-[0.6rem] px-auto"
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
                    "text-neutral-400",

                    // When Selected
                    isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    "bg-neutral-600",

                    // On Hover
                    !isEqual(day, selectedDay) &&
                    "hover:bg-neutral-700 hover:text-neutral-300",
                    // =========================

                    // == Today == 

                    // When NOT Selected
                    !isEqual(day, selectedDay) &&
                    isToday(day) &&
                    "text-red-500 hover:bg-neutral-700",

                    // When Selected
                    isEqual(day, selectedDay) &&
                    isToday(day) &&
                    "bg-red-500",
                    // =========================

                    // Bolden Selected Day & Today 
                    (isEqual(day, selectedDay) || isToday(day)) &&
                    "font-medium",

                    // Other common styles
                    'mx-auto mb-1 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-150'
                )}>
                <time dateTime={format(day, "yyyy-MM-dd")}>
                    {format(day, "d")}
                </time>
            </button>

            <div className="flex flex-row mt-0.5 h-1.5 text-xs justify-center">
                {dayEvents.map((event, eventIndex) => (
                    eventIndex < 3 ? <div
                        key={eventIndex}
                        className={classNames(
                            eventIndex === 0 ?
                                "" : "ml-1",
                            "bg-red-600 h-1.5 w-1.5 rounded-full")}></div> : <></>
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