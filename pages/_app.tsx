import React from "react";
import { SideMenu, TopMenu } from "../src/components/menus";
import type { AppProps } from "next/app";
import "../src/assets/styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  let height;

  React.useEffect(() => {
    height = window.innerHeight;
  }, []);

  return (
    <div style={{ height: height }}>
      <SideMenu />
      <TopMenu />
      <Component {...pageProps} />
    </div>
  );
}
