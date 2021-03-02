import React from "react";
import { ITechonologyItem } from "../../interfaces";
import { ItemLayout } from "../layout";
import styled from "styled-components";

export function TechonologyItem({ item }: ITechonologyItem) {
  const { name, values } = item;

  return (
    <ItemLayout>
      <Content>
        <Name>{name}</Name>

        {values.map((value, index) => {
          const { title, level, description } = value;

          return (
            <TechnologyContainer index={title}>
              <Header>
                <Title>
                  <h4>{title}</h4>
                </Title>
                <Level>{level}%</Level>
              </Header>

              <LevelBar level={level} />
              <Description>{description}</Description>
            </TechnologyContainer>
          );
        })}
      </Content>
    </ItemLayout>
  );
}

const Name = styled.h2`
  text-transform: capitalize;
`;

const TechnologyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  padding: 15px;
  color: black;
  display: block;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

const Description = styled.div`
  font-style: italic;
  font-size: 12px;
`;

const Title = styled.div`
  display: flex;
  flex: 1;
`;

const Level = styled.h4`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const LevelBar = styled.div`
  border-top: 9px solid black;
  border-radius: 15px;
  width: 100%;
  z-index: 0;
  position: relative;

  &::after {
    position: absolute;
    width: ${({ level }) => (level ? level + "%" : 0)};
    border-top: 9px solid green;
    z-index: 1;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
  }
`;
