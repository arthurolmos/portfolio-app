import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { MenuOptions, SocialNetwork } from "./options";

interface Props {}

export function TopMenu(props: Props) {
  const {} = props;

  const [open, setOpen] = useState(false);

  useEffect(() => console.log(open), [open]);

  return (
    <Wrapper>
      <Container>
        <Content>
          <ContactContainer>
            <SocialNetwork />
          </ContactContainer>

          <ButtonContainer>
            <CollapseButton
              style={{ boxSizing: "border-box" }}
              onClick={() => setOpen(!open)}
            >
              <FaBars />
            </CollapseButton>
          </ButtonContainer>
        </Content>
      </Container>
      <CollapsableContainer isOpen={open}>
        <MenuOptions />
      </CollapsableContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  margin: 0;
  background: white;
  padding: 25px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 999;
  display: none;

  @media (max-width: 360px) {
    display: block;
    height: 80px;
  }
`;

const CollapsableContainer = styled.div<{ open: boolean }>`
  width: 100%;
  background: white;
  flex-direction: column;
  display: none;
  overflow: hidden;

  @media (max-width: 360px) {
    display: flex;
    height: ${({ isOpen }) => (isOpen ? "240px" : "0")};
    transition: height 0.5s;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  box-sizing: border-box;
`;

const ContactContainer = styled.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
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
`;

const ListItem = styled.li`
  margin: 0;
  padding: 0 20px;
  color: black;
  box-sizing: border-box;
  margin: auto;
  display: block;
`;

const LinkText = styled.p`
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  box-sizing: border-box;
  text-align: right;

  &:hover:before {
    content: "<";
    margin: 0 10px;
  }

  &:hover {
    opacity: 0.5;
  }
`;

const SocialNetworkLogo = styled.img`
  width: 50px;
  height: auto;
`;
