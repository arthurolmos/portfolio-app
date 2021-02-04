import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

export function DefaultLayout(props: Props) {
  const { children } = props;

  return <Container>{children}</Container>;
}

const Container = styled.div`
  margin-left: 300px;
  padding: 0 40px;
  box-sizing: border-box;

  @media (max-width: 360px) {
    margin-left: 0;
  }
`;
