import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ICvItem } from "../../interfaces";
import styled from "styled-components";

interface CvItemProps {
  item: ICvItem;
}

export function CvItem({ item }: CvItemProps) {
  const { title, subtitle, period, description, logo } = item;

  const [open, setOpen] = React.useState(false);

  const toggle = () => setOpen(!open);

  return (
    <CollapsibleContainer open={open}>
      <Content>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Period>{period}</Period>
        </Header>

        {description && (
          <Info>
            <h3>Descrição:</h3>
            <Description>{description.trim()}</Description>
          </Info>
        )}

        {description && (
          <ButtonContainer>
            {open ? (
              <FaChevronUpStyled onClick={toggle} />
            ) : (
              <FaChevronDownStyled onClick={toggle} />
            )}
          </ButtonContainer>
        )}
      </Content>
    </CollapsibleContainer>
  );
}

const FaChevronUpStyled = styled(FaChevronUp)`
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const FaChevronDownStyled = styled(FaChevronDown)`
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 10px;
  display: none;

  @media (max-width: 600px) {
    display: flex;
  }
`;

const Content = styled.div`
  padding: 15px;
  color: black;
  display: flex;
  flex-direction: row;

  text-overflow: ellipsis;
  word-wrap: break-word;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Header = styled.div`
  display: block;
  flex: 1;
  padding: 0 15px;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const Info = styled.div`
  display: block;
  flex: 1;
  padding: 0 15px;

  @media (max-width: 600px) {
    padding: 30px 0;
  }
`;

const CollapsibleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  margin-bottom: 25px;
  z-index: 0;
  border-radius: 25px;
  transition: all 0.5s;

  max-height: 100%;
  overflow: hidden;

  @media (max-width: 600px) {
    max-height: 220px;

    ${({ open }) =>
      open &&
      `
      max-height: 1000px;
    `}
  }

  &::before {
    z-index: -1;
    background: white;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.9;
    border-radius: 15px;

    @media (max-width: 600px) {
      border-radius: 0;
    }
  }
`;

const Title = styled.h2``;

const Subtitle = styled.h4``;

const Period = styled.h5`
  font-style: italic;
`;

const Description = styled.div`
  padding-bottom: 30px;
  white-space: pre-wrap;
  text-align: justify;
`;
