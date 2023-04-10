import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import Header from "@/components/Header";
import { Roboto_Serif } from "next/font/google";

const roboto = Roboto_Serif({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className={roboto.className}>
          <Header />
          <Component {...pageProps} />
      </div>
  );
}
