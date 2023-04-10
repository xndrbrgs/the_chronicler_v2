import Header from "@/components/Header";
import Head from "next/head";
import localFont from "next/font/local";
import Tester from "@/components/Tester";


// If loading a variable font, you don't need to specify the font weight
const myFont = localFont({ src: "./fonts/PPMori-Regular.otf", weight: "400" });

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Chronicler</title>
      </Head>

      <Header />
      <Tester />
    </div>
  );
}
