import { useState, useEffect, useRef } from "react";
import { portfolioItems } from "../../src/data/items/portfolioItems";
import { PortfolioListItem } from "../../src/components/portfolio/PortfolioListItem";
import { DefaultLayout } from "../../src/components/layout/DefaultLayout";
import Head from "next/head";
import { throttle } from "../../src/helpers";
import styled from "styled-components";

interface Props {}

export default function Index(props: Props) {
  const {} = props;

  const [y, setY] = useState(0);
  const [h, setH] = useState(0);
  const [index, setIndex] = useState(0);

  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const wheelEvent = (e: WheelEvent) => {
    if (!!!throttle) return;

    if (e.deltaY < 0) {
      scrollUp();
    } else if (e.deltaY > 0) scrollDown();
  };

  const touchStartEvent = (e: TouchEvent) => {
    touchStart.current = e.touches[0].clientY;
  };

  const touchEndEvent = (e: TouchEvent) => {
    if (!!!throttle) return;

    if (e.changedTouches[0].clientY !== touchEnd.current) {
      touchEnd.current = e.changedTouches[0].clientY;

      if (touchStart.current > touchEnd.current) {
        scrollDown();
      } else if (touchStart.current < touchEnd.current) {
        scrollUp();
      }
    }
  };

  const scrollUp = () => {
    if (y > 0) setY(y - 1);
  };
  const scrollDown = () => {
    if (y < portfolioItems.length - 1) setY(y + 1);
  };

  useEffect(() => {
    const h = window.innerHeight;
    setH(h);
  }, []);

  useEffect(() => {
    setIndex(-h * y);
  }, [y]);

  return (
    <>
      <Head>
        <title>Arthur Wosniaki - Portfolio</title>
      </Head>

      <DefaultLayout>
        <RightMenu>
          {portfolioItems.map((item, index) => {
            return (
              <RighMenuItem
                key={index}
                active={index === y}
                onClick={() => setY(index)}
              />
            );
          })}
        </RightMenu>
        <Container
          onWheel={wheelEvent}
          onTouchStart={touchStartEvent}
          onTouchEnd={touchEndEvent}
          index={index}
        >
          {portfolioItems.map((item, i) => {
            return <PortfolioListItem key={i} item={item} index={i} y={y} />;
          })}
        </Container>
      </DefaultLayout>
    </>
  );
}

const Container = styled.div`
  height: 100%;
  scroll-behavior: smooth;
  touch-action: none;

  transition: all 700ms ease 0s;
  transform: ${({ index }) => `translate3d(0, ${index}px, 0)`};

  @media (max-width: 600px) {
    margin-left: 0;
    height: ;
  }
`;

const RightMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;

  color: red;
  width: 100px;
  height: 100px;
  z-index: 999;
  align-items: flex-end;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

const RighMenuItem = styled.div`
  width: 40px;
  height: 5px;
  background: white;
  transition: all 0.3s ease;
  border-radius: 50px 0 0 50px;
  cursor: pointer;

  &:hover {
    width: 50px;
    transform-origin: right center;
  }

  ${({ active }) =>
    active &&
    `{
    width: 50px;
  }`}
`;
