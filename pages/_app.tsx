import type { AppProps } from "next/app";
import { wrapper } from "../redux/store";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../assets/css/GlobalStyle";
import "../assets/css/_app.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

function MyApp({ Component, pageProps }: AppProps) {
  const language = useSelector((state: RootState) => state.language);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme(language)}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
