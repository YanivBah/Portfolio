import type { AppProps } from "next/app";
import { wrapper } from "../redux/store";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, hebrewTheme, theme } from "../assets/css/GlobalStyle";
import "../assets/css/_app.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
