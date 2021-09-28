import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

export function DefaultLayout(props: Props) {
  const { children } = props;

  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

const Container = styled.div`
  margin-left: 300px;

  @media (max-width: 800px) {
    margin-left: 0;
  }
`;

const Content = styled.div`
  width: 100%;

  @media (max-width: 800px) {
    padding-top: 80px;
  }
`;
