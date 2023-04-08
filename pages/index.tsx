import Header from "@/components/Header";
import Head from "next/head";
import localFont from "next/font/local";
import { Merriweather_Sans } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const myFont = localFont({ src: "./fonts/PPMori-Regular.otf", weight: "400" });
const merry = Merriweather_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={merry.className}>
      <Head>
        <title>The Chronicler</title>
      </Head>

      <Header />
    </div>
  );
}
