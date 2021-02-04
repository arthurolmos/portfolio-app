import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { DefaultLayout } from "../src/layout/DefaultLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>

      <DefaultLayout>
        <Greetings>
          <h1>Olá! Eu sou o Arthur,</h1>
          <h2>
            <span style={{ fontWeight: 300 }}>desenvolvedor </span>JS FullStack.
          </h2>
        </Greetings>
        <Introduction>
          <h3>
            <span style={{ fontWeight: 300 }}>
              Sou especializado em desenvolvimento{" "}
            </span>
            Frontend e Backend, <br />
            <span style={{ fontWeight: 300 }}>utilizando </span>
            <strong>React, React Native e NodeJS.</strong>
          </h3>
        </Introduction>
      </DefaultLayout>
    </>
  );
}

const Greetings = styled.div`
  margin-bottom: 60px;
  box-sizing: border-box;

  @media (max-width: 360px) {
    margin-bottom: 25px;
    box-sizing: border-box;
  }
`;

const Introduction = styled.div`
  box-sizing: border-box;
`;
