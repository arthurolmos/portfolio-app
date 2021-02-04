import styled from "styled-components";
import Link from "next/link";

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

export function SideMenu(props: Props) {
  const {} = props;

  return (
    <Container>
      <Content>
        <Link href="/">
          <Avatar>
            <ProfilePicture
              src="/images/profile/pp.jpg"
              width="155px"
              height="155px"
            />
          </Avatar>
        </Link>

        <Name>Arthur Wosniaki</Name>

        <OptionsContainer>
          <OptionItem link="/" text="PORTFOLIO" />
          <OptionItem link="/" text="BLOG" />
          <OptionItem link="/" text="CONTATO" />
        </OptionsContainer>

        <OptionsContainer>
          <OptionItem link="/" text="CV" />
          <OptionItem link="/" text="BLOG" />
        </OptionsContainer>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  margin: 0;
  background: white;
  color: black;
  padding: 50px 25px;
  justify-content: center;
  align-items: center;
  visibility: visible;
  z-index: 999;
  box-sizing: border-box;

  @media (max-width: 360px) {
    visibility: hidden;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
`;

const Avatar = styled.div`
  background: white;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
`;

const ProfilePicture = styled.img`
  cursor: pointer;
  box-sizing: border-box;
`;

const Name = styled.h2`
  text-transform: uppercase;
  box-sizing: border-box;
`;

const OptionsContainer = styled.ul`
  margin: 30px 0 0;
  width: 100%;
  list-style: none;
  box-sizing: border-box;
`;

const ListItem = styled.li`
  box-sizing: border-box;
  margin: 0 0 10px;
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
`;
