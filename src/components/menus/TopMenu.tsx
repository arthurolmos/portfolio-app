import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { MenuOptions } from "./MenuOptions";
import { SocialNetwork } from "./SocialNetwork";

interface Props {}

export function TopMenu(props: Props) {
  const {} = props;

  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <Container open={open}>
        <SocialNetwork />

        <Link href="/">
          <LogoContainer>Arthur Wosniaki</LogoContainer>
        </Link>

        <ButtonContainer>
          <CollapseButton onClick={() => setOpen(!open)}>
            <FaBars />
          </CollapseButton>
        </ButtonContainer>
      </Container>

      <CollapsableContainer isOpen={open}>
        <MenuOptions close={close} color="black" />
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
  z-index: 999;
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  box-shadow: 0 0 10px black;

  flex-direction: row;

  @media (max-width: 800px) {
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
  box-shadow: 0 0 10px black;

  @media (max-width: 800px) {
    display: flex;
    max-height: ${({ isOpen }) => (isOpen ? "240px" : "0")};
    transition: max-height 0.5s;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const CollapseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 5px;
  background: transparent;
  border-radius: 15%;

  &:focus {
    outline: none;
  }
`;

const LogoContainer = styled.div`
  flex: 2;
  align-items: center;
  justify-content: center;
  color: black;
  display: flex;
  cursor: pointer;
`;
