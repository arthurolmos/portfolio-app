import React from "react";
import { ITechonologyItem } from "../../interfaces";
import { ItemLayout } from "../layout";
import { GaugeItem } from "./GaugeItem";
import styled from "styled-components";

export function TechonologyItem({ item }: ITechonologyItem) {
  const { name, values } = item;

  return (
    <ItemLayout>
      <Content>
        <Name>{name}</Name>

        <GridContainer>
          {values.map((value, index) => {
            const { title, level, description } = value;

            return (
              <GaugeItem
                key={index}
                title={title}
                level={level}
                description={description}
              />
            );
          })}
        </GridContainer>
      </Content>
    </ItemLayout>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Name = styled.h2`
  text-transform: capitalize;
`;

const Content = styled.div`
  padding: 15px;
  color: black;
  display: block;
  height: 100%;
`;
