import Link from "next/link";
import styled from "styled-components";

interface Props {}

export function SocialNetwork(props: Props) {
  const {} = props;

  return (
    <Container>
      <a href="https://github.com/arthurolmos" target="_blank">
        <SocialNetworkLogo src="/images/snlogos/ln.svg" alt="linkedin" />
      </a>
      <a href="https://github.com/arthurolmos" target="_blank">
        <SocialNetworkLogo src="/images/snlogos/gh.svg" alt="github" />
      </a>
      <a href="mailto:arthur.olmos@gmail.com">
        <SocialNetworkLogo src="/images/snlogos/email.svg" alt="email" />
      </a>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
`;

const SocialNetworkLogo = styled.img`
  width: 30px;
  height: auto;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 360px) {
    width: 30px;
    height: auto;
    margin: 0 10px;
  }
`;
