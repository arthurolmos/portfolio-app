import React from "react";
import { FaChevronLeft, FaGithub, FaGlobeAmericas } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

interface Props {
  site?: string;
  github?: string;
}

export function LinkContainer(props: Props) {
  const { site, github } = props;

  return (
    <Container>
      {site && (
        <a href={site} title={site} target="_blank">
          <FaGlobeAmericas />
        </a>
      )}
      {github && (
        <a href={github} title={github} target="_blank">
          <FaGithub />
        </a>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  a {
    color: black;
    font-size: 30px;
  }

  a:first-child {
    margin-right: 30px;
  }

  a:hover {
    opacity: 0.8;
  }
`;
