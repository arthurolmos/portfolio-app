import React from "react";
import Head from "next/head";
import { DefaultLayout } from "../src/components/screen-layouts";
import { ProfilePicture } from "../src/components/profile-picture";
import { DefaultButton } from "../src/components/buttons";
import styled from "styled-components";

const greetingsText = (
  <>
    <h1>Olá! Eu sou o Arthur,</h1>
    <h2>
      <span style={{ fontWeight: 300 }}>desenvolvedor </span>JS FullStack.
    </h2>
  </>
);

const introduction = (
  <h3>
    <span style={{ fontWeight: 300 }}>
      Sou especializado em desenvolvimento{" "}
    </span>
    Frontend e Backend, <br />
    <span style={{ fontWeight: 300 }}>utilizando </span>
    <strong>React, React Native e NodeJS.</strong>
  </h3>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Arthur Wosniaki - FullStack Dev</title>
      </Head>

      <DefaultLayout>
        <Container>
          <GreetingsBig> {greetingsText}</GreetingsBig>

          {/*Small Screen Layout*/}
          <GreetingsSmall>
            <LeftColumn>
              <ProfilePicture />
            </LeftColumn>

            <RightColumn>{greetingsText}</RightColumn>
          </GreetingsSmall>

          <BottomRow>
            {introduction}

            <DefaultButton link="/portfolio" title="Portfolio" />
          </BottomRow>
        </Container>
      </DefaultLayout>
    </>
  );
}

const BottomRow = styled.div`
  display: block;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const GreetingsBig = styled.div`
  margin-top: 120px;
  margin-bottom: 60px;

  @media (max-width: 801px) {
    display: none;
    margin-bottom: 25px;
  }
`;

const GreetingsSmall = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  display: none;

  @media (max-width: 800px) {
    display: flex;
    margin-bottom: 25px;
  }
`;

const RightColumn = styled.div`
  flex: 2;
  padding: 0 20px 0 0;
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px 0 0;
`;

const Container = styled.div`
  padding: 30px;
`;
