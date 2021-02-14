import { IPortfolioItem } from "../../interfaces/IPortfolioItem";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { useEffect } from "react";

interface PortfolioItemProps {
  item: IPortfolioItem;
  index: number;
  y: number;
}

export function PortfolioListItem({ item, index, y }: PortfolioItemProps) {
  const { backgroundImage, title, text } = item;

  return (
    <ItemContainer>
      <Background background={backgroundImage} />
      <Content>
        <TitleContainer>
          <h1>{title}</h1>
        </TitleContainer>

        <ButtonContainer>
          <Link href={`/portfolio/${title.toLowerCase()}`}>
            <Button>Ver Mais</Button>
          </Link>
        </ButtonContainer>
      </Content>
    </ItemContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  flex: 1;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  ${({ background }) =>
    background &&
    `
    background: url(${background}) 50%/ cover
                border-box
                padding-box;
  `};

  border: solid 2.5em rgba(0, 0, 0, 0.03);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2), 2px 2px 17px rgba(0, 0, 0, 0.35),
    2px 2px 25px rgba(0, 0, 0, 0.5);

  &::before {
    z-index: -1;
    position: absolute;
    top: -2.5em;
    right: -2.5em;
    bottom: -2.5em;
    left: -2.5em;
    border: inherit;
    border-color: transparent;
    background: inherit;
    background-clip: border-box;
    filter: blur(3px);
    clip-path: inset(0);
    content: "";
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: white;
    content: "";
    opacity: 0.5;
  }
`;

const ItemContainer = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  z-index: 1;

  @media (max-width: 600px) {
    margin-top: 80px;
  }
`;

const Content = styled.div`
  padding: 15px;
  color: black;
  display: flex;
  flex-direction: column;
  opacity: 1;
  position: absolute;
  top: 2.5em;
  right: 2.5em;
  bottom: 2.5em;
  left: 2.5em;
  z-index: 99;

  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
`;

const Button = styled.button`
  background: black;
  color: white;
  border: none;
  border-radius: 15px;
  text-transform: uppercase;
  cursor: pointer;
  width: 100px;
  height: 40px;
  transition: all 0.3s ease;
  font-weight: bold;

  &:hover {
    background: white;
    color: black;
  }

  &:focus {
    decoration: none;
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 30px;
`;
