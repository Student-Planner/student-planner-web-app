import React, { } from "react";
import {
    format,
} from "date-fns";
import { faCalendarDay, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { CalendarHeaderButton } from './CalendaryHeaderButton';


type Props = {
    firstDayCurrentMonth: Date;
    goToCurrentMonth: () => void;
    previousMonth: () => void;
    nextMonth: () => void;
}

function CalendarHeader({ firstDayCurrentMonth, goToCurrentMonth, previousMonth, nextMonth, }: Props) {
    return (
        <div className="flex justify-items-center outline outline-2 rounded-lg outline-neutral-700 transition-colors hover:bg-neutral-800 duration-300 shadow-md hover:shadow-lg h-14">
            <h2 className="flex-auto font-semibold md:text-2xl text-2xl place-self-center items-center justify-center my-auto mx-4 text-gray-200">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
            </h2>

            <CalendarHeaderButton icon={faCalendarDay} accessTxt='Current month' clickFunction={goToCurrentMonth} prominent={true} />
            <CalendarHeaderButton icon={faChevronLeft} accessTxt='Previous month' clickFunction={previousMonth} prominent={false} />
            <CalendarHeaderButton icon={faChevronRight} accessTxt='Next month' clickFunction={nextMonth} prominent={false} />

        </div>
    )
}

export default CalendarHeader