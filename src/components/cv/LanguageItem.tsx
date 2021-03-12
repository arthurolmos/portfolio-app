import React from "react";
import { ICvItem } from "../../interfaces";
import { ItemLayout } from "../layout";
import { GaugeItem } from "./GaugeItem";
import styled from "styled-components";

interface CvItemProps {
  items: ICvItem[];
}

export function LanguageItem({ items }: CvItemProps) {
  return (
    <ItemLayout>
      <Content>
        <GridContainer>
          {items.map((item, index) => {
            const { title, level, description } = item;

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

const Content = styled.div`
  padding: 15px;
  color: black;
  display: block;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
