import React from 'react'
import {
    format,
    getDay,
    isEqual,
    isSameMonth,
    isToday,
    startOfToday,
} from "date-fns";
import { classNames } from '@/utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { selectedDayValue, changeSelectedDay } from '../../../lib/redux/calendarSelectedDay';
import { SelectedDay } from '../../pages/_app';
import { Event } from '@prisma/client';
import { concatenate } from '../../utils/utils';
import ColoredDiv from './ColoredDiv';

type Props = {
    day: Date;
    dayIndx: number;
    firstDayOfMonth: Date;
    dayEvents: Event[];
}


const CalendarDay = ({ day, dayIndx, firstDayOfMonth, dayEvents }: Props) => {
    const { selectedDayValue, setSelectedDay } = SelectedDay.useContainer()

    return (
        <div
            key={day.toString()}
            className={classNames(
                dayIndx === 0 &&
                colStartClasses[getDay(day)],
                "mt-4 px-auto"
            )}>
            <button
                type="button"
                onClick={() => setSelectedDay(day)}
                className={classNames(
                    // == Common Day in Month == 

                    // When NOT Selected
                    !isEqual(day, selectedDayValue) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayOfMonth) &&
                    "text-neutral-300",

                    // Days of other month
                    !isEqual(day, selectedDayValue) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayOfMonth) &&
                    "text-neutral-500",

                    // When Selected
                    isEqual(day, selectedDayValue) &&
                    !isToday(day) &&
                    "bg-neutral-600",

                    // On Hover
                    !isEqual(day, selectedDayValue) &&
                    "hover:bg-neutral-700",
                    // =========================

                    // == Today == 

                    // When NOT Selected
                    !isEqual(day, selectedDayValue) &&
                    isToday(day) &&
                    "text-red-500 hover:bg-neutral-700",

                    // When Selected
                    isEqual(day, selectedDayValue) &&
                    isToday(day) &&
                    "bg-red-500",
                    // =========================

                    // Bolden Selected Day & Today 
                    (isEqual(day, selectedDayValue) || isToday(day)) &&
                    "font-normal",

                    // Other common styles
                    'mx-auto flex h-16 w-16 items-center justify-center rounded-full transition-all duration-100'
                )}>
                <time dateTime={format(day, "yyyy-MM-dd")}>
                    {format(day, "d")}
                </time>
            </button>

            <div className="flex flex-row mt-1 h-3 text-base justify-center">
                {dayEvents.map((event, eventIndex) => (
                    (eventIndex < 3) &&
                    <div key={event.id} style={{ backgroundColor: event.color }} className={`${eventIndex === 0 ? "" : "ml-1.5"} h-2 w-2 rounded-full`}></div>
                ))}
            </div>
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