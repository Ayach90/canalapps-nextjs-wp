import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "src/theme";
import Script from "next/script";
import Ganalytics4 from "src/Ganalytics4";
import Header from "src/layout/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Ganalytics4 />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
