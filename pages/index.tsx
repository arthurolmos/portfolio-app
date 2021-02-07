import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { DefaultLayout } from "../src/components/layout/DefaultLayout";

export default function Home() {
  return (
    <div style={{ height: "100%" }}>
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
    </div>
  );
}

const Greetings = styled.div`
  margin-top: 120px;
  margin-bottom: 60px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    margin-bottom: 25px;
    box-sizing: border-box;
  }
`;

const Introduction = styled.div`
  box-sizing: border-box;
`;
