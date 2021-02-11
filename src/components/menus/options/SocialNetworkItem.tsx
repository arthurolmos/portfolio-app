import styled from "styled-components";
import { ISocialNetworkItem } from "../../../interfaces";

interface Props {
  item: ISocialNetworkItem;
}

export function SocialNetworkItem({ item }: Props) {
  const { url, src, alt } = item;

  return (
    <LinkStyled href={url} target="_blank">
      <SocialNetworkLogo src={src} alt={alt} />
    </LinkStyled>
  );
}

const SocialNetworkLogo = styled.img`
  width: 30px;
  height: auto;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 600px) {
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
