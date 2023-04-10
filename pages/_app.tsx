import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import Header from "@/components/Header";
import { Roboto_Serif } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const roboto = Roboto_Serif({
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div className={roboto.className}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}
