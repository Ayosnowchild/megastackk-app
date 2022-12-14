import Head from "next/head";
import About from "../components/About";
import Banner from "../components/Banner";
import Case from "../components/Case";
import Footer from "../components/Footer";
// import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MegaStack</title>
        <meta name="megastack app" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Banner />
        <About />
        <Case />
      </main>
      <Footer />
    </div>
  );
}
