import styled from "styled-components";
import Link from "next/link";
import { MenuOptions, SocialNetwork } from "./items";

interface Props {}

export function SideMenu(props: Props) {
  const {} = props;

  return (
    <Container>
      <Content>
        <Profile>
          <Link href="/">
            <PictureRound>
              <Avatar
                src="/images/profile/pp.jpg"
                width="165px"
                height="165px"
              />
            </PictureRound>
          </Link>

          <Name>Arthur Wosniaki</Name>
        </Profile>

        <MenuOptions />
        <SocialNetwork />
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
  color: black;
  padding: 50px 25px;
  justify-content: center;
  align-items: center;
  z-index: 999;
  display: flex;
  background: white;

  @media (max-width: 600px) {
    display: none;
  }

  // &::before {
  //   z-index: -1;
  //   content: "";
  //   opacity: 0.4; //para caso tenha um bg diferente
  //   background: black;
  //   position: fixed;
  //   top: 0;
  //   bottom: 0;
  //   left: 0;
  //   width: 300px;
  //   margin: 0;
  // }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media (max-width: 600px) {
    display: none;
  }
`;

const PictureRound = styled.div`
  background: white;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;

  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Avatar = styled.img`
  cursor: pointer;
`;

const Name = styled.h2`
  text-transform: uppercase;
`;
