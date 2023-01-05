import { store } from '../../lib/redux/store';
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux";
import { createContainer } from "unstated-next";
import * as RadixTooltip from '@radix-ui/react-tooltip';
import '@/styles/globals.scss'
import '@/styles/navbar.scss'
import { useState } from 'react';
import { startOfToday } from 'date-fns';



function useSelectedDay(initialState: Date) {
  const [selectedDay, setSelectedDay] = useState(initialState)
  return { selectedDay, setSelectedDay }
}

export const SelectedDay = createContainer(useSelectedDay)


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SelectedDay.Provider initialState={startOfToday()}>
      <SessionProvider session={session}>
        <Provider store={store}>
          <RadixTooltip.Provider>
            <Component {...pageProps} />
          </RadixTooltip.Provider>
        </Provider>
      </SessionProvider>
    </SelectedDay.Provider>
  )
}

export default MyApp
