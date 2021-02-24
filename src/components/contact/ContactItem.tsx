import React from "react";
import { ISocialNetworkItem } from "../../interfaces";
import styled from "styled-components";

export function ContactItem({ item }: { item: ISocialNetworkItem }) {
  return (
    <Container href={item.url} target="_blank">
      <Link>
        <Logo src={item.src[1]} alt={item.alt} width={50} />
        <span style={{ textTransform: "uppercase" }}>{item.alt}</span>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: inline-flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const Logo = styled.img`
  margin-bottom: 10px;
`;
