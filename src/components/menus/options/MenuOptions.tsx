import Link from "next/link";
import styled from "styled-components";

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

export function MenuOptions(props: Props) {
  const {} = props;

  return (
    <>
      <OptionsContainer>
        <OptionItem link="/portfolio" text="PORTFOLIO" />
        <OptionItem link="/" text="BLOG" />
        <OptionItem link="/" text="CONTATO" />
      </OptionsContainer>

      <OptionsContainer>
        <OptionItem link="/" text="CV" />
        <OptionItem link="/" text="BLOG" />
      </OptionsContainer>
    </>
  );
}

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
  margin: 0 0 10px;
  color: black;
  padding: 0;
  box-sizing: border-box;
  margin: auto;
  display: block;

  @media (max-width: 360px) {
    margin: 0;
    padding: 0 20px;
  }
`;

const LinkText = styled.p`
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  box-sizing: border-box;

  &:hover:after {
    content: ">";
    margin: 0 10px;
  }

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 360px) {
    &:hover:before {
      content: "<";
      margin: 0 10px;
    }
    text-align: right;
  }
`;
