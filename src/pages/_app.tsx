import { store } from '@/redux/store';
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux";
import '@/styles/globals.scss'
import '@/styles/navbar.scss'


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
