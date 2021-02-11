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
  height: 100%;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 80px;
    height: calc(100% - 80px);
  }
`;

const Content = styled.div`
  height: 100%;
  width: 100%;

  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
`;

Content.defaultProps = {
  backgroundColor: "transparent",
  color: "white",
};
