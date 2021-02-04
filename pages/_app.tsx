import { SideMenu, TopMenu } from "../src/menus";
import type { AppProps /*, AppContext */ } from "next/app";
import styled from "styled-components";
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
