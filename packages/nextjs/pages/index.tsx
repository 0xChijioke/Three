import Head from "next/head";
import type { NextPage } from "next";
import  { Customizer, Hero } from "~~/components/";
import dynamic from "next/dynamic";
const CanvasModel  = dynamic(
  () => import("~~/components/canvas/CanvasModel"),
  { ssr: false }
);
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Scaffold-ETH 2 App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
      </Head>

      <div className="h-fit w-full">
        <Hero />
        <CanvasModel />
        <Customizer />       
      </div>
    </>
  );
};

export default Home;
