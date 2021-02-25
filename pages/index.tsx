import Head from "next/head";
import { DefaultLayout } from "../src/components/layout";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arthur Wosniaki - FullStack Dev</title>
      </Head>

      <DefaultLayout>
        <Container>
          <GreetingsBig>
            <h1>Olá! Eu sou o Arthur,</h1>
            <h2>
              <span style={{ fontWeight: 300 }}>desenvolvedor </span>JS
              FullStack.
            </h2>
          </GreetingsBig>

          <GreetingsSmall>
            <LeftColumn>
              <h2>Olá! Eu sou o Arthur,</h2>
              <h3>
                <span style={{ fontWeight: 300 }}>desenvolvedor </span>JS
                FullStack.
              </h3>
            </LeftColumn>

            <RightColumn>
              <PictureRound>
                <Avatar
                  src="/images/profile/pp.jpg"
                  width="125px"
                  height="125px"
                />
              </PictureRound>
            </RightColumn>
          </GreetingsSmall>

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

          <Link href="/portfolio">
            <Button>Portfolio</Button>
          </Link>
        </Container>
      </DefaultLayout>
    </>
  );
}

const GreetingsBig = styled.div`
  margin-top: 120px;
  margin-bottom: 60px;

  @media (max-width: 601px) {
    display: none;
    margin-bottom: 25px;
  }
`;

const GreetingsSmall = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  display: none;

  @media (max-width: 600px) {
    display: flex;
    margin-bottom: 25px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  padding: 0 20px 0 0;
`;

const RightColumn = styled.div`
  flex: 1;
  padding: 20px 0 0 20px;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 30px;
`;

const Introduction = styled.div``;

const PictureRound = styled.div`
  background: white;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  overflow: hidden;
`;

const Avatar = styled.img`
  cursor: pointer;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border: 2px solid white;
  border-radius: 15px;
  background: transparent;
  color: white;
  width: 100px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: black;
    background: white;
  }
`;
