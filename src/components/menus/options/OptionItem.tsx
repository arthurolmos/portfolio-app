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
  padding: 0;
  margin: auto;
  display: block;
  flex: 1;

  @media (max-width: 600px) {
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
@media (min-width: 601px) {
  &::after {
    content:  " >";
  }
}

@media (max-width: 600px) {
  &::before { 
    content:  "< ";
  }
}
`}

  &:hover {
    opacity: 0.5;

    @media (min-width: 601px) {
      :after {
        content: " >";
      }
    }
  }

  @media (max-width: 600px) {
    text-align: right;
  }
`;
