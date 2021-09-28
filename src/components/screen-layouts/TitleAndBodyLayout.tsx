import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  children: React.ReactNode;
}

export function TitleAndBodyLayout(props: Props) {
  const { title, children } = props;

  return (
    <Container>
      <Title>
        <h1>{title}</h1>
      </Title>

      <Body>{children}</Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  padding: 35px;
  text-transform: uppercase;
  text-align: center;

  h1 {
    background-color: #7ed957;
    color: white;
    padding: 0.5rem;
    width: 100%;
    display: flex;
  }
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 35px;

  @media (max-width: 800px) {
    padding: 15px;
  }
`;
