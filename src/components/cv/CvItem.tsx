import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ICvItem } from "../../interfaces";
import { CollapsibleItemLayout } from "../layout";
import styled from "styled-components";

interface CvItemProps {
  item: ICvItem;
}

export function CvItem({ item }: CvItemProps) {
  const { title, institution, period, description, logo } = item;

  const [open, setOpen] = React.useState(false);

  const toggle = () => setOpen(!open);

  return (
    <CollapsibleItemLayout open={open}>
      <Content>
        <Header>
          <Title>{title}</Title>
          <Institution>{institution}</Institution>
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
    </CollapsibleItemLayout>
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

  @media (max-width: 700px) {
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

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Header = styled.div`
  display: block;
  flex: 1;
  padding: 0 15px;

  @media (max-width: 700px) {
    padding: 0;
  }
`;

const Info = styled.div`
  display: block;
  flex: 1;
  padding: 0 15px;

  @media (max-width: 700px) {
    padding: 30px 0;
  }
`;

const Title = styled.h2`
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const Institution = styled.h4`
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const Period = styled.h5`
  font-style: italic;
`;

const Description = styled.div`
  padding-bottom: 30px;
  white-space: pre-wrap;
  text-align: justify;
`;
