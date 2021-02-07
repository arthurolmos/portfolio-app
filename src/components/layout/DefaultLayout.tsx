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
  box-sizing: border-box;
  height: 100%;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const Content = styled.div`
  // height: 100vh;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0 40px;

  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
`;

Content.defaultProps = {
  backgroundColor: "transparent",
  color: "white",
};
