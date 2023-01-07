import React, { createContext, useContext, useEffect, useState } from "react";
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
import CalendarDay from "./CalendarDay";
import CalendarHeader from "./CalendarHeader";
import { MonthEvents, SelectedDay } from "../../pages/_app";
import { Event } from "@prisma/client";
import { GetServerSideProps } from "next";
import sampleEvents from "../../data/sampleEvents";

type Props = {};

export default function Calendar({ }: Props) {
  const today = startOfToday();
  const { selectedDayValue, setSelectedDay } = SelectedDay.useContainer();
  const { monthEvents, setMonthEvents } = MonthEvents.useContainer();

  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

	// As options to modify
  const [showDaysOutOfMonth, setShowDaysOutOfMonth] = useState(true);

  const daysOfMonth = (firstDayOfMonth: Date) =>
    eachDayOfInterval({
      start: showDaysOutOfMonth
        ? startOfWeek(firstDayOfMonth)
        : firstDayOfMonth,
      end: showDaysOutOfMonth
        ? endOfWeek(endOfMonth(firstDayOfMonth))
        : endOfMonth(firstDayOfMonth),
    });

  function goToCurrentMonth() {
    setCurrentMonth(format(today, "MMM-yyyy"));
    setSelectedDay(today);
  }

  function getFirstDayPrevMonth(): Date {
    const firstDayPreviousMonth = add(firstDayCurrentMonth, { months: -1 });
    return firstDayPreviousMonth;
  }

  function getFirstDayNextMonth(): Date {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    return firstDayNextMonth;
  }

  function previousMonth() {
    setCurrentMonth(format(getFirstDayPrevMonth(), "MMM-yyyy"));
  }

  function nextMonth() {
    setCurrentMonth(format(getFirstDayNextMonth(), "MMM-yyyy"));
  }

  // TODO swap sample events
  const getDayEvents = (day: Date) =>
    sampleEvents.filter((event) =>
      isSameDay(event.due, day)
    );

  return (
    <div className="max-w-xl w-[40rem] md:px-4 md:py-4 select-none lg:text-2xl md:text-xl font-light">
      {/* Header */}
      <div className="grid grid-cols-1 divide-x-8 divide-transparent mb-2">
        <div>
          {/* Control Header */}
          <CalendarHeader
            firstDayCurrentMonth={firstDayCurrentMonth}
            goToCurrentMonth={goToCurrentMonth}
            previousMonth={previousMonth}
            nextMonth={nextMonth}
          />

          {/* === Headers for Days === */}
          <div className="grid grid-cols-7 mt-5 text-lg leading-8 text-center font-normal text-gray-500 cursor-default">
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>
        </div>
      </div>

      {/* Calendar */}
        {/* === Days === */}
      <div className="grid grid-cols-7 mt-0 text-md mb-4">
          {daysOfMonth(firstDayCurrentMonth).map((day, dayIndx) => (
            <CalendarDay
              key={day.toISOString()}
              day={day}
              dayIndx={dayIndx}
              firstDayOfMonth={firstDayCurrentMonth}
              dayEvents={getDayEvents(day)}
            />
          ))}
      </div>
    </div>
  );
}
