import { RoundChart } from "../charts/RoundChart";
import styled from "styled-components";

interface Props {
  title: string;
  level: number;
  description: string;
}

export function GaugeItem(props: Props) {
  const { title, level, description } = props;

  return (
    <TechnologyContainer>
      <Container>
        <Chart>
          <RoundChart level={level} />
        </Chart>

        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>
      </Container>
    </TechnologyContainer>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TechnologyContainer = styled.div`
  display: block;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Chart = styled.div`
  display: flex;
`;

const Description = styled.div`
  font-style: italic;
  font-size: 12px;
`;

const Title = styled.div`
  display: flex;
  flex: 1;
  font-weight: bold;
`;
