import React, { useRef } from 'react'
import {
    format,
    getDay,
    isEqual,
    isSameMonth,
    isToday,
} from "date-fns";
import { classNames } from '@/utils/utils';
import { SelectedDay } from '../../pages/_app';
import { Event } from '@prisma/client';
import gsap from 'gsap'




type Props = {
    day: Date;
    dayIndx: number;
    firstDayOfMonth: Date;
    dayEvents: Event[];
    magnetProps: any;
}


const CalendarDay = ({ day, dayIndx, firstDayOfMonth, dayEvents, magnetProps: { children,
    className,
    props,
    speed = 1,
    tollerance = 0.8,
    scale = 1.2,
    borderRadius = 0,
    debug = false, } }: Props) => {
    const { selectedDayValue, setSelectedDay } = SelectedDay.useContainer()

    const $root = useRef(null)
    const $item = useRef(null)
    const $hover = useRef(null)
    const rootBound = useRef(null)
    const itemBound = useRef(null)
    const diffBound = useRef({ x: 0, y: 0 })

    const handleMouseEnter = () => {
        if (!$root.current || !$item.current) return
        gsap.killTweensOf($item.current)
        gsap.set($hover.current, {
            scale: scale,
            borderRadius,
            background: debug ? 'rgba(0, 125, 255, .4)' : 'transparent',
        })

        rootBound.current = $root.current.getBoundingClientRect()
        itemBound.current = $item.current.getBoundingClientRect()
        diffBound.current.x = (rootBound.current.width * scale - rootBound.current.width) / 2
        diffBound.current.y = (rootBound.current.height * scale - rootBound.current.height) / 2
    }

    const handleMouseLeave = () => {
        gsap.killTweensOf($item.current)
        gsap.to($item.current, {
            x: 0,
            y: 0,
            ease: 'elastic.out(1.1, .4)',
            duration: 1.2
        })
        gsap.set($hover.current, {
            scale: 1
        })
    }

    const handleMouseMove = (e) => {
        const x = e.clientX || e.touches[0].clientX
        const y = e.clientY || e.touches[0].clientY

        const maxX = (rootBound.current.width - itemBound.current.width) / 2 * tollerance
        const maxY = (rootBound.current.height - itemBound.current.height) / 2 * tollerance

        const newX = gsap.utils.mapRange(
            0,
            rootBound.current.width * scale,
            -maxX,
            maxX,
            x - rootBound.current.x + diffBound.current.x
        )

        const newY = gsap.utils.mapRange(
            0,
            rootBound.current.height * scale,
            -maxY,
            maxY,
            y - rootBound.current.y + diffBound.current.y
        )

        gsap.killTweensOf($item.current)
        gsap.to($item.current, {
            x: newX,
            y: newY,
            ease: 'power3.out',
            duration: speed
        })
    }

    return (
        <div
            key={day.toString()}
            className={classNames(
                dayIndx === 0 &&
                colStartClasses[getDay(day)],
                "mt-4"
            )}>


            <button
                ref={$root}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onTouchMove={handleMouseMove}
                onTouchStart={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchEnd={handleMouseLeave}

                type="button"
                onClick={() => setSelectedDay(day)}
                className={classNames(
                    'magnetic-button cursor-pointer relative z-1 touch-none ', className + ' ',
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


                <span ref={$item} className="magnetic-button--item inline-block">
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                        {format(day, "d")}
                    </time>
                </span>
                <span className="magnetic-button--hover inline-block absolute z-minus-1 top-0 left-0 h-full w-full" ref={$hover} />
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