import React from "react";
import { ISocialNetworkItem } from "../../interfaces";
import styled from "styled-components";

export function ContactItem({ item }: { item: ISocialNetworkItem }) {
  const { url, alt, src } = item;

  return (
    <Container>
      <Link href={url} target="_blank">
        <Logo src={src[1]} alt={alt} width={50} />
        <span style={{ textTransform: "uppercase" }}>{alt}</span>
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

  @media (max-width: 600px) {
    padding: 15px;
  }
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
