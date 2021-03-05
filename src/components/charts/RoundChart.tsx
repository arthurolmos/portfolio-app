import React from "react";
import { arc } from "d3-shape";
import styled from "styled-components";

interface Props {
  level: number;
}

export function RoundChart(props: Props) {
  const { level } = props;

  function createArc(level = 100) {
    const gauge = arc()
      .innerRadius(26)
      .outerRadius(34)
      .startAngle(0)
      .endAngle(Math.PI * (level / 50))
      .padAngle(0)
      .cornerRadius(0);

    return gauge();
  }

  return (
    <Container>
      <Level>{level}%</Level>

      <Svg width="100" height="100">
        <g style={{ transform: "translate(50%, 50%)" }}>
          <path
            d={createArc()}
            style={{ fill: "black", shapeRendering: "geometricPrecision" }}
          />
          <path
            d={createArc(level)}
            style={{ fill: "green", shapeRendering: "geometricPrecision" }}
          />
        </g>
      </Svg>
    </Container>
  );
}

const Svg = styled.svg``;

const Container = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const Level = styled.h3`
  position: absolute;
  margin: auto;
`;
