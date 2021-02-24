import { IPortfolioItem } from "../../interfaces/IPortfolioItem";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { FaChevronLeft, FaGithub, FaGlobeAmericas } from "react-icons/fa";

interface PortfolioItemProps {
  item: IPortfolioItem;
}

export function PortfolioListItem({ item }: PortfolioItemProps) {
  const { thumbnail, title, text, logos, site, github } = item;

  return (
    <ItemContainer>
      <Content>
        <UpperRow>
          <Body>
            <Header>
              <h1>{title}</h1>

              <LinkContainer>
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
              </LinkContainer>
            </Header>

            <div>{text}</div>
          </Body>

          <ThumbnailContainer>
            <Thumbnail src={thumbnail} />
          </ThumbnailContainer>
        </UpperRow>

        <LowerRow>
          <LogosContainer>
            {logos.map((logo) => {
              return <Logo src={logo} />;
            })}
          </LogosContainer>
        </LowerRow>

        <Row>
          <ButtonContainer>
            <Link href={`/portfolio/${title.toLowerCase()}`}>
              <Button>Ver Mais</Button>
            </Link>
          </ButtonContainer>
        </Row>
      </Content>
    </ItemContainer>
  );
}

const Header = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

const LogosContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15px;

  display: table;
  text-align: center;
`;

const Logo = styled.img`
  height: 30px;
  margin: 0 10px;
`;

const Body = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  margin-right: 50px;
  margin-left: 150px;
  text-align: justify;
  text-justify: inter-word;

  @media (max-width: 1200px) {
    margin: 0;
    align-items: center;
    justify-content: center;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;

  flex: 1;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 100%;

  @media (max-width: 600px) {
    height: 140px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const UpperRow = styled(Row)`
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

const LowerRow = styled(Row)`
  margin-top: 30px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  padding: 15px;
  color: white;
  display: flex;
  min-height: 200px;
  flex-direction: column;

  text-overflow: ellipsis;
  word-wrap: break-word;
`;

const ItemContainer = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  margin-bottom: 25px;
`;

const Button = styled.button`
  background: black;
  color: white;
  border: none;
  border-radius: 15px;
  text-transform: uppercase;
  cursor: pointer;
  width: 100px;
  height: 40px;
  transition: all 0.3s ease;
  font-weight: bold;

  &:hover {
    background: white;
    color: black;
  }

  &:focus {
    decoration: none;
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const LinkContainer = styled.div`
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
