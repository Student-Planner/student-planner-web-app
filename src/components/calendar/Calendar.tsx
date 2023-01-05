import React, { createContext, useContext, useState } from "react";
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
import sampleTasks from '@/data/sampleTasks';
import CalendarDay from "./CalendarDay";
import CalendarHeader from './CalendarHeader';

import { useDispatch, useSelector } from "react-redux";
import { useContainer } from "unstated-next";
import { SelectedDay } from '../../pages/_app';

export default function Calendar() {
  const today = startOfToday();
  // const dispatch = useDispatch()
  // const selectedDay = useSelector(selectedDayValue)
  // const setSelectedDay = (day: Date) => dispatch(changeSelectedDay(day))

  const selectedDay = useContainer(SelectedDay)

  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  // As options to modify
  const [showDaysOutOfMonth, setShowDaysOutOfMonth] = useState(true)


  const daysOfMonth = (firstDayOfMonth: Date) => eachDayOfInterval({
    start: showDaysOutOfMonth ? startOfWeek(firstDayOfMonth) : firstDayOfMonth,
    end: showDaysOutOfMonth ? endOfWeek(endOfMonth(firstDayOfMonth)) : endOfMonth(firstDayOfMonth),
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
  function getFirstDayPrevMonth() {
    const firstDayPreviousMonth = add(firstDayCurrentMonth, { months: -1 });
    return firstDayPreviousMonth;
  }

  function getFirstDayNextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    return firstDayNextMonth;
  }

  // Filter for task of current day
  const selectedDayEvents = sampleTasks.filter((event) =>
    isSameDay(event.due, selectedDay)
  );

  const getDayEvents = (day: Date) => (sampleTasks.filter((event) =>
    isSameDay(event.due, day)
  ));

  return (
    <div className="max-w-lg max-h- mx-auto my-auto md:px-6 px-2 md:py-6 py-2 select-none lg:text-xl md:text-lg">
      {/* Header */}
      <div className="grid grid-cols-1 divide-x-8 divide-transparent mb-2">
        <div>
          {/* Control Header */}
          <CalendarHeader
            firstDayCurrentMonth={firstDayCurrentMonth}
            goToCurrentMonth={goToCurrentMonth}
            previousMonth={previousMonth}
            nextMonth={nextMonth} />

          {/* === Headers for Days === */}
          <div className="grid grid-cols-7 mt-2 text-sm leading-8 text-center text-gray-500 cursor-default">
            <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="grid grid-cols-1  divide-x-2 divide-gray-500 divi mb-4">

        <div className="M-Month">
          {/* === Days === */}
          <div className="grid grid-cols-7 mt-0 text-md">
            {daysOfMonth(firstDayCurrentMonth).map((day, dayIndx) => (
              <CalendarDay
                key={day.toString()}
                day={day}
                dayIndx={dayIndx}
                firstDayOfMonth={firstDayCurrentMonth}
                dayEvents={getDayEvents(day)} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

