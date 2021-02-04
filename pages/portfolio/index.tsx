import { useState, useEffect, useRef } from "react";
import { DefaultLayout } from "../../src/components/layout/DefaultLayout";
import ScrollIntoView from "react-scroll-into-view";
import styled from "styled-components";

interface Props {}

export default function Index(props: Props) {
  const {} = props;

  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

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
      if (y < 2) setY(y + 1);
    }
  };

  useEffect(() => {
    setIndex(-754 * y);
  }, [y]);

  return (
    <Container onWheel={wheelEvent}>
      <Content background="purple" index={index}>
        Im Here!
      </Content>
      <Content background="red" index={index}>
        Im Here!
      </Content>
      <Content background="gray" index={index}>
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
  background: red;
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
  background-color: ${({ background }) => background};
`;
