import Head from "next/head";
import { useDispatch } from "react-redux";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import { LanguageLocale } from "../config/constants";
import { setLanguage } from "../redux/actions/language";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Yaniv Bahalker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {/* <Hero /> */}

      <button onClick={() => dispatch(setLanguage(LanguageLocale.Hebrew))}>
        Click Me To Test
      </button>
      <main></main>

      <footer></footer>
    </>
  );
}
