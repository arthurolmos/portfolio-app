import { SideMenu, TopMenu } from "../src/components/menus";
import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SideMenu />
      <TopMenu />
      <Component {...pageProps} />
    </>
  );
}
