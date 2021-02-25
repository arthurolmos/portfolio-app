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
        <Divisor>
          <Header>
            <Title>{title}</Title>
            <Subtitle>
              {subtitle}
              <span>{period && ` - ${period}`}</span>
            </Subtitle>
            <ButtonContainer>
              {open ? (
                <FaChevronUpStyled onClick={toggle} />
              ) : (
                <FaChevronDownStyled onClick={toggle} />
              )}
            </ButtonContainer>
          </Header>

          <LogoContainer>
            <img src={logo} width={200} />
          </LogoContainer>
        </Divisor>

        <h3>Resumo:</h3>
        <Description>{description.trim()}</Description>
      </Content>
    </CollapsibleContainer>
  );
}

const Divisor = styled.div`
  display: flex;
  flex-direction: row;
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1060px) {
    display: none;
  }
`;

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
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 10px;
`;

const Content = styled.div`
  padding: 15px;
  color: black;
  display: flex;
  min-height: 200px;
  flex-direction: column;

  text-overflow: ellipsis;
  word-wrap: break-word;
`;

const Header = styled.div`
  height: 200px;
  flex: 1;
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

  max-height: 200px;
  overflow: hidden;

  ${({ open }) =>
    open &&
    `
    max-height: 800px;
  `}

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

const Title = styled.h3``;

const Subtitle = styled.h4`
  & > span {
    font-style: italic;
  }
`;

const Description = styled.div`
  padding-bottom: 30px;
  white-space: pre-wrap;
  text-align: justify;
`;
