import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { portfolioItems } from "../../src/data/portfolioItems";
import { PortfolioItem } from "../../src/interfaces/PortfolioItem";

interface Props {}

interface PortfolioItemProps {
  item: PortfolioItem;
  index: number;
}

function PortfolioListItem({ index, item }: PortfolioItemProps) {
  const { backgroundImage, title, text } = item;

  return (
    <ItemContainer index={index}>
      <Background background={backgroundImage}>
        <Backdrop>
          <Content>
            <h1>{title}</h1>

            <div>{text}</div>
          </Content>
        </Backdrop>
      </Background>
    </ItemContainer>
  );
}

export default function Index(props: Props) {
  const {} = props;

  const [y, setY] = useState(0);
  const [h, setH] = useState(0);
  const [index, setIndex] = useState(0);

  const throttle = 500;
  const time = useRef(-1);

  const wheelEvent = (e: WheelEvent) => {
    const now = Date.now();

    if (time.current !== -1 && now - time.current < throttle) return; // Get out, we haven't waited long enough

    time.current = now;

    if (e.deltaY < 0 && y > 0) {
      setY(y - 1);
    } else {
      if (e.deltaY > 0 && y < portfolioItems.length - 1) setY(y + 1);
    }
  };

  useEffect(() => {
    const h = window.innerHeight;
    setH(h);
  }, []);

  useEffect(() => {
    setIndex(-h * y);
  }, [y]);

  return (
    <Container onWheel={wheelEvent}>
      {portfolioItems.map((item, i) => {
        return <PortfolioListItem key={i} index={index} item={item} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  margin-left: 300px;
  box-sizing: border-box;
  width: 100% - 300px;
  height: 100vh;
  scroll-behavior: smooth;
  overflow: hidden;

  @media (max-width: 360px) {
    margin-left: 0;
  }
`;

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
  height: 100vh;
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
`;
