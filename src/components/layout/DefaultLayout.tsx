import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
}

export function DefaultLayout(props: Props) {
  const { children, backgroundColor, color } = props;

  return (
    <Container>
      <Content backgroundColor={backgroundColor} color={color}>
        {children}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  margin-left: 300px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const Content = styled.div`
  width: 100%;

  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  @media (max-width: 600px) {
    padding-top: 80px;
  }
`;

Content.defaultProps = {
  backgroundColor: "transparent",
  color: "white",
};
