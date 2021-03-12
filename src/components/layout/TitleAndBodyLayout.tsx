import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  children: React.ReactNode;
}

export function TitleAndBodyLayout(props: Props) {
  const { title, children } = props;

  return (
    <Content>
      <Title>
        <h1>{title}</h1>
      </Title>

      <Body>{children}</Body>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 35px;
  text-transform: uppercase;
  text-align: center;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 35px;

  @media (max-width: 700px) {
    padding: 15px;
  }
`;
