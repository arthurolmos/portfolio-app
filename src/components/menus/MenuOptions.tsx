import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { IMenuItem } from "../../interfaces";

interface Props {
  close?: () => void;
  color?: string;
}

interface OptionItemProps {
  link: string;
  text: string;
  active: boolean;
  close?: () => void;
  color: string;
}

export const menuItems: IMenuItem[] = [
  {
    option: "home",
    url: "/",
  },
  {
    option: "portfolio",
    url: "/portfolio",
  },
  // {
  //   option: "blog",
  //   url: "blog",
  // },
  {
    option: "cv",
    url: "/cv",
  },
  // {
  //   option: "contato",
  //   url: "/contact",
  // },
];

function OptionItem(props: OptionItemProps) {
  const { link, text, active, close, color } = props;

  return (
    <ListItem onClick={close}>
      <Link href={link}>
        <LinkText active={active} color={color}>
          {text}
        </LinkText>
      </Link>
    </ListItem>
  );
}

export function MenuOptions(props: Props) {
  const { close, color = "white" } = props;

  const router = useRouter();
  const path = router.pathname.split("/");
  const mainPath = path[1];

  return (
    <>
      <OptionsContainer>
        {menuItems.map((item) => {
          const { option, url } = item;

          return (
            <OptionItem
              key={option}
              link={url}
              text={option.toUpperCase()}
              active={mainPath === url.replace("/", "").toLowerCase()}
              close={close}
              color={color}
            />
          );
        })}
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
  flex: 2;
`;

const ListItem = styled.li`
  color: black;
  padding: 0;
  margin: auto;
  display: block;
  flex: 1;

  @media (max-width: 800px) {
    margin: 0;
    padding: 0 20px;
  }
`;

const LinkText = styled.p`
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  color: ${({ color }) => color};

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

  @media (max-width: 800px) {
    text-align: right;
  }
`;
