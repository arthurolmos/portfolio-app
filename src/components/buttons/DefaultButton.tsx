import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  link?: string;
  title?: string;
}

export function DefaultButton(props: Props) {
  const { title, link } = props;

  return (
    <Link href={link}>
      <Button>{title}</Button>
    </Link>
  );
}

const Button = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border: 2px solid white;
  border-radius: 15px;
  background: black;
  color: white;
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid black;

  &:hover {
    color: black;
    background: white;
  }
`;
