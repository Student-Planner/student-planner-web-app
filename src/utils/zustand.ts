import { create } from 'zustand'
import { startOfToday } from 'date-fns';
import { Event } from '@prisma/client';

type MonthEventsState = {
    monthEvents: Event[];
    setMonthEvents: (newMonthEvents: Event[]) => void;
}

export const useMonthEvents = create<MonthEventsState>((set) => ({
    monthEvents: [],
    setMonthEvents: (newMonthEvents: Event[]) => set((state) => ({ monthEvents: [...newMonthEvents] })),
}))

type CreatingEventState = {
    creatingEvent: boolean;
    setCreatingEvent: (newCreatingEvent: boolean) => void;
}

export const useCreatingEvent = create<CreatingEventState>((set) => ({
    creatingEvent: false,
    setCreatingEvent: (creatingEventNewValue: boolean) => set((state) => ({ creatingEvent: creatingEventNewValue })),
}))

type SelectedDayState = {
    selectedDay: Date;
    setSelectedDay: (newSelectedDay: Date) => void;
}

export const useSelectedDay = create<SelectedDayState>((set) => ({
    selectedDay: startOfToday(),
    setSelectedDay: (newSelectedDay: Date) => set((state) => ({ selectedDay: newSelectedDay })),
}))

type DisplayedMonthState = {
    displayedMonth: Date;
    setDisplayedMonth: (newDisplayedMonth: Date) => void;
}

export const useDisplayedMonth = create<DisplayedMonthState>((set) => ({
    displayedMonth: startOfToday(),
    setDisplayedMonth: (newDisplayedMonth: Date) => set((state) => ({ displayedMonth: newDisplayedMonth })),
}))

type SelectedEventState = {
    selectedEvent: Event;
    setSelectedEvent: (newSelectedEvent: Event) => void;
}

export const useSelectedEvent = create<SelectedEventState>((set) => ({
    selectedEvent: null,
    setSelectedEvent: (newSelectedEvent: Event) => set((state) => ({ selectedEvent: newSelectedEvent })),
}))
