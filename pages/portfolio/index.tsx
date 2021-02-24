import { useState, useEffect, useRef } from "react";
import { portfolioItems } from "../../src/data/items/portfolioItems";
import { PortfolioListItem } from "../../src/components/portfolio/PortfolioListItem";
import { DefaultLayout, TitleAndBodyLayout } from "../../src/components/layout";
import Head from "next/head";
import { throttle } from "../../src/helpers";
import styled from "styled-components";
import { FaFileExport } from "react-icons/fa";

interface Props {}

export default function Index(props: Props) {
  return (
    <>
      <Head>
        <title>Arthur Wosniaki - Portfolio</title>
      </Head>

      <DefaultLayout>
        <TitleAndBodyLayout title="Portfolio">
          <PortfolioLayout>
            {portfolioItems.map((item, i) => {
              return <PortfolioListItem key={i} item={item} />;
            })}
          </PortfolioLayout>
        </TitleAndBodyLayout>
      </DefaultLayout>
    </>
  );
}

const PortfolioLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
