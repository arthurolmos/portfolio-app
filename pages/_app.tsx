import React from "react";
import { SideMenu, TopMenu } from "../src/components/menus";
import type { AppProps } from "next/app";
import "../src/assets/styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SideMenu />
      <TopMenu />
      <Component {...pageProps} />
    </>
  );
}
