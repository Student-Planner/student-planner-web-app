import React, { Fragment, useState } from "react";
import Meeting, { sampleMeetings as sampleEvents } from "./Meeting";
import Ripples from 'react-ripples'
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCalendarDay, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Task from "../data/Task";
import sampleTasks from '../data/sampleTasks';
import CalendarDay from "./CalendarDay";




export default function CalendarMonth() {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
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

  // Filter for task of current day
  const selectedDayEvents = sampleTasks.filter((evnet) =>
    isSameDay(parseISO(evnet.Due.dateTime), selectedDay)
  );

  const getDayEvents = (day: Date) => (sampleTasks.filter((evnet) =>
    isSameDay(parseISO(evnet.Due.dateTime), day)
  ));

  return (
    <div className="">
      <div className="md:max-w-4xl max-w-md max-h- mx-auto my-auto md:px-6 px-2 md:py-6 py-2">
        <div className="grid md:grid-cols-2 grid-cols-1 md:divide-x md:divide-gray-600">
          <div className="mb-4">

            {/* Control Header */}
            <div className="flex justify-items-center">
              <h2 className="flex-auto font-semibold md:text-2xl text-2xl place-self-center items-center justify-center my-2.5 mx-4 text-gray-200">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>

              <button
                type="button"
                onClick={goToCurrentMonth}
                className="flex flex-none items-center place-self-center justify-center mx-1.5 my-auto hover:bg-gray-700 h-10 w-10 rounded-full text-gray-400 hover:text-red-500">
                <span className="sr-only">Current month</span>
                <FontAwesomeIcon icon={faCalendarDay} />
              </button>
              <button
                type="button"
                onClick={previousMonth}
                className="flex flex-none items-center justify-center mx-1.5 my-auto hover:bg-gray-400 h-10 w-10 rounded-full text-gray-400 hover:text-gray-500">
                <span className="sr-only">Previous month</span>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="flex flex-none items-center justify-center mx-1.5 my-auto hover:bg-gray-400 h-10 w-10 rounded-full text-gray-400 hover:text-gray-500">
                <span className="sr-only">Next month</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            {/* === Headers for Days === */}
            <div className="grid grid-cols-7 mt-2 text-sm leading-8 text-center text-gray-500 cursor-default">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>

            {/* === Days === */}
            <div className="grid grid-cols-7 mt-0 text-md">
              {days.map((day, dayIndx) => (
                <CalendarDay
                  key={day.toString()}
                  day={day}
                  dayIndx={dayIndx}
                  setSelectedDay={setSelectedDay}
                  selectedDay={selectedDay}
                  firstDayCurrentMonth={firstDayCurrentMonth}
                  dayEvents={getDayEvents(day)} />
              ))}
            </div>
          </div>


          {/* Events Portion */}
          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-gray-900">
              Schedule for{" "}
              <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                {format(selectedDay, "MMM dd, yyy")}
              </time>
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayEvents.length > 0 ? (
                selectedDayEvents.map((event) => (
                  <div
                    key={event.Id}>
                    {event.Content}
                  </div>
                ))
              ) : (
                <p>No meetings for today.</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

