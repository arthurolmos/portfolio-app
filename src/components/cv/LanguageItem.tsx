import React from "react";
import { ICvItem } from "../../interfaces";
import { ItemLayout } from "../layout";
import styled from "styled-components";

interface CvItemProps {
  items: ICvItem[];
}

export function LanguageItem({ items }: CvItemProps) {
  return (
    <ItemLayout>
      <Content>
        {items.map((item, index) => {
          const { title, level, description } = item;

          return (
            <TechnologyContainer key={index}>
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
