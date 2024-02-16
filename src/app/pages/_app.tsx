import { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../../../store/store";
import "../globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default MyApp;
