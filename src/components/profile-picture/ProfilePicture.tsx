import React from "react";
import styled from "styled-components";

interface Props {}

export function ProfilePicture(props: Props) {
  const {} = props;

  return (
    <PictureRound>
      <Avatar src="/images/profile/pp2.jpg" width="155px" />
    </PictureRound>
  );
}

const PictureRound = styled.div`
  background: white;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 5px solid white;
  overflow: hidden;
  position: relative;
`;

const Avatar = styled.img`
  // cursor: pointer;
  position: absolute;
  left: -10px;
`;
