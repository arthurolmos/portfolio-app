import { useState, useEffect, useRef } from "react";
import { DefaultLayout } from "../../src/components/layout/DefaultLayout";
import ScrollIntoView from "react-scroll-into-view";
import styled from "styled-components";

interface Props {}

export default function Index(props: Props) {
  const {} = props;

  const h = window.innerHeight;

  const [y, setY] = useState(0);
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
      if (e.deltaY > 0 && y < 2) setY(y + 1);
    }
  };

  useEffect(() => {
    setIndex(-h * y);
  }, [y]);

  return (
    <Container onWheel={wheelEvent}>
      <Content background="/images/portfolio/filosofem.jpg" index={index}>
        Im Here!
      </Content>
      <Content background="/images/portfolio/swamp.jpg" index={index}>
        Im Here!
      </Content>
      <Content background="/images/portfolio/newmoon.jpg" index={index}>
        Im Here!
      </Content>
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

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;

  transition: all 700ms ease 0s;
  transform: ${({ index }) => `translate3d(0, ${index}px, 0)`};

  ${({ background }) =>
    background &&
    `
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `}
`;
