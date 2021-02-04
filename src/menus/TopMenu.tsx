import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

interface Props {}

interface OptionItemProps {
  link: string;
  text: string;
}

function OptionItem(props: OptionItemProps) {
  const { link, text } = props;

  return (
    <ListItem>
      <Link href={link}>
        <LinkText>{text}</LinkText>
      </Link>
    </ListItem>
  );
}

export function TopMenu(props: Props) {
  const {} = props;

  const [open, setOpen] = useState(false);

  useEffect(() => console.log(open), [open]);

  return (
    <Wrapper>
      <Container>
        <Content>
          <ContactContainer>
            <SocialNetworkLogo src="/images/snlogos/ln.svg" alt="linkedin" />
            <SocialNetworkLogo src="/images/snlogos/gh.svg" alt="github" />
            <SocialNetworkLogo src="/images/snlogos/email.svg" alt="email" />
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
        <OptionsContainer>
          <OptionItem link="/" text="PORTFOLIO" />
          <OptionItem link="/" text="BLOG" />
          <OptionItem link="/" text="CONTATO" />
        </OptionsContainer>

        <OptionsContainer>
          <OptionItem link="/" text="CV" />
          <OptionItem link="/" text="BLOG" />
        </OptionsContainer>
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
  height: 80px;
  background: white;
  padding: 25px;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  box-sizing: border-box;
  z-index: 999;

  @media (max-width: 360px) {
    visibility: visible;
  }
`;

const CollapsableContainer = styled.div<{ open: boolean }>`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  visibility: hidden;
  height: 0;

  @media (max-width: 360px) {
    visibility: visible;
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

const OptionsContainer = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  display: inline-block;
  box-sizing: border-box;
  flex: 1;
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
