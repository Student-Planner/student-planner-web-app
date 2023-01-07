import React from "react";
import {
    format,
} from "date-fns";
import { FaCalendarDay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CalendarHeaderButton } from './CalendaryHeaderButton';


type Props = {
    firstDayCurrentMonth: Date;
    goToCurrentMonth: () => void;
    previousMonth: () => void;
    nextMonth: () => void;
}

function CalendarHeader({ firstDayCurrentMonth, goToCurrentMonth, previousMonth, nextMonth, }: Props) {
    return (
        <div className="flex justify-items-center outline outline-2 rounded-lg pl-6  outline-neutral-700 transition-colors hover:bg-neutral-800 duration-300 shadow-md hover:shadow-lg min-h-fit h-[4.5rem]">
            <h2 className="flex-auto font-semibold md:text-3xl text-xl place-self-center items-center justify-center my-auto text-gray-200">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
            </h2>

            <CalendarHeaderButton icon={<FaCalendarDay />} accessTxt='Current month' clickFunction={goToCurrentMonth} prominent={true} />
            <CalendarHeaderButton icon={<FaChevronLeft />} accessTxt='Previous month' clickFunction={previousMonth} prominent={false} />
            <CalendarHeaderButton icon={<FaChevronRight />} accessTxt='Next month' clickFunction={nextMonth} prominent={false} />

        </div>
    )
}

export default CalendarHeader