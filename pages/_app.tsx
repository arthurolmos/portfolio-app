import { SideMenu, TopMenu } from "../src/components/menus";
import type { AppProps /*, AppContext */ } from "next/app";
import styled from "styled-components";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ height: "100%" }}>
      <SideMenu />
      <TopMenu />
      <Component {...pageProps} />
    </div>
  );
}
