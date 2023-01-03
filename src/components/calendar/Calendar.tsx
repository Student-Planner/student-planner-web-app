import React, { useCallback, useState } from "react";
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
} from "date-fns";
import { faCalendarDay, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import sampleTasks from '@/data/sampleTasks';
import CalendarDay from "./CalendarDay";
import { CalendarHeaderButton } from './CalendaryHeaderButton';

import { useDispatch, useSelector } from "react-redux";
import { selectedDayValue, changeSelectedDay } from "@/redux/calendarSelectedDay";

export default function Calendar() {
  const dispatch = useDispatch()
  const today = startOfToday();
  const selectedDay = useSelector(selectedDayValue)
  const setSelectedDay = (day: Date) => dispatch(changeSelectedDay(day))

  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  // As options to modify
  const [showDaysOutOfMonth, setShowDaysOutOfMonth] = useState(false)

  const days = eachDayOfInterval({
    start: showDaysOutOfMonth ? startOfWeek(firstDayCurrentMonth) : firstDayCurrentMonth,
    end: showDaysOutOfMonth ? endOfWeek(endOfMonth(firstDayCurrentMonth)) : endOfMonth(firstDayCurrentMonth),
  });

  function goToCurrentMonth() {
    setCurrentMonth(format(today, "MMM-yyyy"));
    setSelectedDay(today)
  }

  function previousMonth() {
    const firstDayPreviousMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayPreviousMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }
  function getPreviousMonth() {
    const firstDayPreviousMonth = add(firstDayCurrentMonth, { months: -1 });
    return firstDayPreviousMonth;
  }

  function getNextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    return firstDayNextMonth;
  }

  // Filter for task of current day
  const selectedDayEvents = sampleTasks.filter((evnet) =>
    isSameDay(parseISO(evnet.Due.dateTime), selectedDay)
  );

  const getDayEvents = (day: Date) => (sampleTasks.filter((evnet) =>
    isSameDay(parseISO(evnet.Due.dateTime), day)
  ));

  return (
    <div className="md:max-w-4xl max-w-md max-h- mx-auto my-auto md:px-6 px-2 md:py-6 py-2 select-none lg:text-xl md:text-lg">
      <div className="grid md:grid-cols-2 grid-cols-1 md:divide-x md:divide-gray-600">
        <div className="mb-4">

          {/* Control Header */}
          <div className="flex justify-items-center outline outline-2 rounded-lg outline-neutral-700 transition-colors hover:bg-neutral-800 duration-300 shadow-md hover:shadow-lg h-14">
            <h2 className="flex-auto font-semibold md:text-2xl text-2xl place-self-center items-center justify-center my-auto mx-4 text-gray-200">
              {format(firstDayCurrentMonth, "MMMM yyyy")}
            </h2>

            <CalendarHeaderButton icon={faCalendarDay} accessTxt='Current month' clickFunction={goToCurrentMonth} prominent={true} />
            <CalendarHeaderButton icon={faChevronLeft} accessTxt='Previous month' clickFunction={previousMonth} prominent={false} />
            <CalendarHeaderButton icon={faChevronRight} accessTxt='Next month' clickFunction={nextMonth} prominent={false} />

          </div>

          {/* === Headers for Days === */}
          <div className="grid grid-cols-7 mt-2 text-sm leading-8 text-center text-gray-500 cursor-default">
            <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
          </div>

          {/* === Days === */}
          <div className="grid grid-cols-7 mt-0 text-md">
            {days.map((day, dayIndx) => (
              <CalendarDay
                key={day.toString()}
                day={day}
                dayIndx={dayIndx}
                firstDayCurrentMonth={firstDayCurrentMonth}
                dayEvents={getDayEvents(day)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

