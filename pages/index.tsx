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
              <PictureRound>
                <Avatar
                  src="/images/profile/pp.jpg"
                  width="125px"
                  height="125px"
                />
              </PictureRound>
            </LeftColumn>

            <RightColumn>
              <h2>Olá! Eu sou o Arthur,</h2>
              <h3>
                <span style={{ fontWeight: 300 }}>desenvolvedor </span>JS
                FullStack.
              </h3>
            </RightColumn>
          </GreetingsSmall>

          <BottomRow>
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

            <ButtonContainer>
              <Link href="/portfolio">
                <Button>Portfolio</Button>
              </Link>
            </ButtonContainer>
          </BottomRow>
        </Container>
      </DefaultLayout>
    </>
  );
}

const BottomRow = styled.div`
  display: block;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
  }

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

const Introduction = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex: 2;
  }
`;

const ButtonContainer = styled.div`
  @media (max-width: 800px) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    display: block;
  }
`;

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
