import { SessionProvider } from "next-auth/react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import "@/styles/globals.scss";
import "@/styles/navbar.scss";
import Head from "next/head";


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RadixTooltip.Provider>
        <Head>
          <title>Student Planner</title>
          <meta name="description" content="" />
        </Head>
        <Component {...pageProps} />
      </RadixTooltip.Provider>
    </SessionProvider>
  );
}

export default MyApp;
