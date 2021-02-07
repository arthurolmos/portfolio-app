import { useState, useEffect, useRef } from "react";
import { portfolioItems } from "../../src/data/portfolioItems";
import { PortfolioListItem } from "../../src/components/portfolio/PortfolioListItem";
import styled from "styled-components";

interface Props {}

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
      <RightMenu>
        {portfolioItems.map((item, index) => {
          return (
            <RighMenuItem
              key={index}
              active={index === y}
              onClick={(e) => setY(index)}
            />
          );
        })}
      </RightMenu>
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
  // height: 100vh;
  height: 100%;
  scroll-behavior: smooth;
  overflow: hidden;

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
  box-sizing: border-box;

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
  box-sizing: border-box;
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
