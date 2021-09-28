import styled from "styled-components";
import Link from "next/link";
import { ProfilePicture } from "../profile-picture";
import { MenuOptions } from "./MenuOptions";
import { SocialNetwork } from "./SocialNetwork";

interface Props {}

export function SideMenu(props: Props) {
  const {} = props;

  return (
    <Container>
      <Content>
        <Profile>
          <ProfilePicture />

          <h2>Arthur Wosniaki</h2>
          <span>JS FullStack Dev</span>
        </Profile>

        <MenuOptions />
        <SocialNetwork invert={true} />
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
  background: black;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-bottom: 50px;

  h2 {
    text-transform: uppercase;
    color: #7ed957;
  }

  span {
    text-transform: uppercase;
    color: white;
    font-weight: bold;
  }
`;
