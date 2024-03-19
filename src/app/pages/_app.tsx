import { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../../../store/store";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar/Index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default MyApp;
