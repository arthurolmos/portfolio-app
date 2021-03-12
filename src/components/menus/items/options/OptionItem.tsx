import Link from "next/link";
import styled from "styled-components";

interface OptionItemProps {
  link: string;
  text: string;
  active: boolean;
  close?: () => void;
}

export function OptionItem(props: OptionItemProps) {
  const { link, text, active, close } = props;

  return (
    <ListItem onClick={close}>
      <Link href={link}>
        <LinkText active={active}>{text}</LinkText>
      </Link>
    </ListItem>
  );
}

const ListItem = styled.li`
  color: black;
  // color: white;
  padding: 0;
  margin: auto;
  display: block;
  flex: 1;

  @media (max-width: 700px) {
    margin: 0;
    padding: 0 20px;
  }
`;

const LinkText = styled.p`
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;

  ${({ active }) =>
    active &&
    `
    font-weight: bold;
    
    &::after {
      content:  " >";
    }
  `}

  &:hover {
    opacity: 0.5;
  }

  &:hover:after {
    content: " >";
  }

  @media (max-width: 700px) {
    text-align: right;
  }
`;
