import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yaniv Bahalker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main></main>

      <footer></footer>
    </div>
  );
}
