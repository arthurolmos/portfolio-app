import React from "react";
import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  open?: boolean;
  children: React.ReactNode;
}

export function ItemLayout(props: Props) {
  const { width, height, children } = props;

  return (
    <Container width={width} height={height}>
      {children}
    </Container>
  );
}

export function CollapsibleItemLayout(props: Props) {
  const { width, height, open, children } = props;

  return (
    <CollapsibleContainer width={width} height={height} open={open}>
      {children}
    </CollapsibleContainer>
  );
}

const Container = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  display: block;
  position: relative;
  margin-bottom: 25px;
  z-index: 0;
  border-radius: 25px;

  &::before {
    z-index: -1;
    background: white;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.6;
    border-radius: 15px;
    transition: all 0.3s ease;

    @media (max-width: 600px) {
      opacity: 0.9;
    }
  }

  @media (min-width: 601px) {
    &:hover:before {
      opacity: 0.9;
    }
  }
`;

const CollapsibleContainer = styled(Container)`
  max-height: ${({ height }) => (height ? height : "100%")};
  overflow: hidden;
  transition: all 0.5s;

  @media (max-width: 600px) {
    max-height: 220px;

    ${({ open }) =>
      open &&
      `
      max-height: 1000px;
    `}
  }
`;
