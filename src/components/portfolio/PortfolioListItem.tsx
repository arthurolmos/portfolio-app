import { IPortfolioItem } from "../../interfaces/IPortfolioItem";
import Link from "next/link";
import styled from "styled-components";

interface PortfolioItemProps {
  item: IPortfolioItem;
  index: number;
}

export function PortfolioListItem({ index, item }: PortfolioItemProps) {
  const { backgroundImage, title, text } = item;

  return (
    <ItemContainer index={index}>
      <Background background={backgroundImage}>
        <Backdrop>
          <Content>
            <h1>{title}</h1>

            <div>{text}</div>
          </Content>

          <Link href={`/portfolio/${title.toLowerCase()}`}>
            <Button>Ver Mais</Button>
          </Link>
        </Backdrop>
      </Background>
    </ItemContainer>
  );
}

const Background = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  ${({ background }) =>
    background &&
    `
    background: url(${background}) 50%/ cover
                border-box
                padding-box;
  `};

  position: relative;
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
    filter: blur(9px);
    clip-path: inset(0);
    content: "";
  }
`;

const ItemContainer = styled.div`
  background: white;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  // height: 100vh;
  transition: all 700ms ease 0s;
  transform: ${({ index }) => `translate3d(0, ${index}px, 0)`};
  z-index: 1;
`;

const Content = styled.div`
  box-sizing: border-box;
  padding: 15px;
  color: black;
  display: block;
  max-height: 500px;

  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: white;
  content: "";
  opacity: 0.8;
  box-sizing: border-box;
`;

const Button = styled.button`
  box-sizing: border-box;

  background: black;
  color: white;
  border: none;
  border-radius: 15px;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 15px;
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
