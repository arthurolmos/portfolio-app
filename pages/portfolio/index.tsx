import { portfolioItems } from "../../src/data/items";
import { PortfolioItem } from "../../src/components/portfolio/PortfolioItem";
import {
  DefaultLayout,
  TitleAndBodyLayout,
} from "../../src/components/screen-layouts";
import Head from "next/head";
import styled from "styled-components";

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
              return <PortfolioItem key={i} item={item} />;
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
