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
      </Content>
    </ItemLayout>
  );
}

const Content = styled.div`
  padding: 15px;
  color: black;
  display: block;
`;
