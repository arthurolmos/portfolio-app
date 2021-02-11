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
      <Background background={backgroundImage}>
        <Backdrop>
          <Content>
            <Header>
              <LineContainer>
                <Line active={index === y} />
              </LineContainer>
              <Title>
                <h1>{title}</h1>
              </Title>
            </Header>

            <div>{text}</div>
          </Content>

          <ButtonContainer>
            <Link href={`/portfolio/${title.toLowerCase()}`}>
              <Button>Ver Mais</Button>
            </Link>
          </ButtonContainer>
        </Backdrop>
      </Background>
    </ItemContainer>
  );
}

const Header = styled.div`
  display: flex;
`;

const Title = styled.div`
  display: inline-flex;
  margin-left: 30px;
  justify-content: flex-end;
  color: black;
`;

const LineContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  border-top: 5px solid black;
  border-radius: 0 25px 25px 0;
  width: 0;
  transition: all 1s ease;

  ${({ active }) =>
    active &&
    `
    width: 100%;
  `}
`;

const Background = styled.div`
  width: 100%;
  height: 100%;

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
    top: 0;
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
  display: block;
  max-height: 350px;
  margin-bottom: 20px;

  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 2.5em;
  right: 2.5em;
  bottom: 2.5em;
  left: 2.5em;
  background: white;
  content: "";
  opacity: 0.9;
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

  &:hover {
    background: gray;
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
