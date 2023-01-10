import { store } from "../utils/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { createContainer } from "unstated-next";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import "@/styles/globals.scss";
import "@/styles/navbar.scss";
import { useState } from "react";
import { startOfToday } from "date-fns";
import Head from "next/head";
import { Event } from "@prisma/client";
import { trpc } from '../utils/trpc'
import { AppProps } from 'next/app';
import { Session } from "next-auth";

function useSelectedDay(initialState: Date) {
  const [selectedDay, setSelectedDay] = useState<Date>(initialState);
  return { selectedDayValue: selectedDay, setSelectedDay };
}

function useMonthEvents(initialState: Event[]) {
  const [monthEvents, setMonthEvents] = useState<Event[]>(initialState);
  return { monthEvents, setMonthEvents };
}

function useCreatingEvent(initialState: boolean) {
  const [creatingEvent, setCreatingEvent] = useState<boolean>(initialState);
  return { creatingEvent, setCreatingEvent };
}

export const SelectedDay = createContainer(useSelectedDay);
export const MonthEvents = createContainer(useMonthEvents);
export const CreatingEvent = createContainer(useCreatingEvent);

function MyApp({ Component, pageProps }: AppProps<{ session: Session; }>) {
  return (
    <SelectedDay.Provider initialState={startOfToday()}>
      <MonthEvents.Provider initialState={[]}>
        <CreatingEvent.Provider initialState={false}>
          <SessionProvider session={pageProps.session}>
          <Provider store={store}>
            <RadixTooltip.Provider>
              <Head>
                <title>Student Planner</title>
                <meta name="description" content="" />
              </Head>
              <Component {...pageProps} />
            </RadixTooltip.Provider>
          </Provider>
        </SessionProvider>
        </CreatingEvent.Provider>
      </MonthEvents.Provider>
    </SelectedDay.Provider>
  );
}

export default trpc.withTRPC(MyApp);
