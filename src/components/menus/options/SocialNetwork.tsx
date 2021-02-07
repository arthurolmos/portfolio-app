import styled from "styled-components";
import { SocialNetworkItem } from "./SocialNetworkItem";
import { socialNetworkItems } from "../../../data";

interface Props {}

export function SocialNetwork(props: Props) {
  const {} = props;

  return (
    <Container>
      {socialNetworkItems.map((item, index) => {
        return <SocialNetworkItem key={index} item={item} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  box-sizing: border-box;
`;
