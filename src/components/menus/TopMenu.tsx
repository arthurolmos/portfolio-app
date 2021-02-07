import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { MenuOptions, SocialNetwork } from "./options";

interface Props {}

export function TopMenu(props: Props) {
  const {} = props;

  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <Container>
        <SocialNetwork />

        <LogoContainer>Arthur Wosniaki</LogoContainer>

        <ButtonContainer>
          <CollapseButton onClick={() => setOpen(!open)}>
            <FaBars />
          </CollapseButton>
        </ButtonContainer>
      </Container>

      <CollapsableContainer isOpen={open}>
        <MenuOptions close={close} />
      </CollapsableContainer>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 0;
  background: white;
  padding: 15px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 999;
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;

  flex-direction: row;
  box-sizing: border-box;

  @media (max-width: 600px) {
    display: flex;
  }
`;

const CollapsableContainer = styled.div`
  width: 100%;
  background: white;
  flex-direction: column;
  display: none;
  overflow: hidden;
  position: fixed;
  top: 80px;
  right: 0;
  left: 0;
  z-index: 998;

  @media (max-width: 600px) {
    display: flex;
    height: ${({ isOpen }) => (isOpen ? "240px" : "0")};
    transition: height 0.5s;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-end;
`;

const CollapseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 5px;
  box-sizing: border-box;
`;

const LogoContainer = styled.div`
  flex: 2;
  align-items: center;
  justify-content: center;
  color: black;
  display: flex;
`;
