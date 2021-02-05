import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

interface Props {}

interface OptionItemProps {
  link: string;
  text: string;
  active: boolean;
}

function OptionItem(props: OptionItemProps) {
  const { link, text, active } = props;

  return (
    <ListItem>
      <Link href={link}>
        <LinkText active={active}>{text}</LinkText>
      </Link>
    </ListItem>
  );
}

export function MenuOptions(props: Props) {
  const {} = props;

  const router = useRouter();
  const path = router.pathname.split("/");
  const mainPath = path[1];

  console.log(path);
  console.log(mainPath);
  console.log(mainPath);

  return (
    <>
      <OptionsContainer>
        <OptionItem
          link="/portfolio"
          text="PORTFOLIO"
          active={mainPath === "portfolio"}
        />
        <OptionItem link="/" text="BLOG" active={mainPath === "blog"} />
        <OptionItem link="/" text="CONTATO" active={mainPath === "contact"} />
      </OptionsContainer>

      <OptionsContainer>
        <OptionItem link="/" text="CV" active={mainPath === "cv"} />
        <OptionItem link="/" text="BLOG" active={mainPath === "blog"} />
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
  color: black;
  padding: 0;
  box-sizing: border-box;
  margin: auto;
  display: block;
  flex: 1;

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

  ${({ active }) =>
    active &&
    `
  @media (min-width: 361px) {
    &::after {
      content:  " >";
    }
  }

  @media (max-width: 360px) {
    &::before { 
      content:  "< ";
    }
  }
  `}

  &:hover {
    opacity: 0.5;

    @media (min-width: 361px) {
      :after {
        content: " >";
      }
    }
  }

  @media (max-width: 360px) {
    text-align: right;
  }
`;
