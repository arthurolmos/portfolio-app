import styled from "styled-components";
import { ISocialNetworkItem } from "../../interfaces";

interface Props {
  invert?: boolean;
}

interface SocialNetworkItemProps {
  item: ISocialNetworkItem;
  invert: boolean;
}

const socialNetworkItems: ISocialNetworkItem[] = [
  {
    url: "https://www.linkedin.com/in/arthurolmos/",
    src: [`/images/snlogos/ln.svg`, `/images/snlogos/ln_w.png`],
    alt: "linkedin",
  },

  {
    url: "https://github.com/arthurolmos",
    src: [`/images/snlogos/gh.svg`, `/images/snlogos/gh_w.png`],
    alt: "github",
  },

  {
    url: "mailto:arthur.olmos@gmail.com",
    src: [`/images/snlogos/email.svg`, `/images/snlogos/email_w.png`],
    alt: "email",
  },
];

export function SocialNetworkItem({ item, invert }: SocialNetworkItemProps) {
  const { url, src, alt } = item;

  return (
    <LinkStyled href={url} target="_blank">
      <SocialNetworkLogo src={src[0]} alt={alt} invert={invert} />
    </LinkStyled>
  );
}

export function SocialNetwork(props: Props) {
  const { invert = false } = props;

  return (
    <Container>
      {socialNetworkItems.map((item, index) => {
        return <SocialNetworkItem key={index} item={item} invert={invert} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const SocialNetworkLogo = styled.img`
  width: 30px;
  height: auto;
  margin: 0 10px;
  cursor: pointer;
  filter: ${({ invert }) => invert && "invert(1)"};

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 800px) {
    width: 20px;
    height: auto;
    margin: 0 5px;
  }
`;

const LinkStyled = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
