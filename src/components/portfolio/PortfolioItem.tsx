import { IPortfolioItem } from "../../interfaces";
import Link from "next/link";
import { ItemLayout } from "../screen-layouts";
import styled from "styled-components";
import { DefaultButton } from "../buttons";
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";

interface PortfolioItemProps {
  item: IPortfolioItem;
}

interface Props {
  site?: string;
  github?: string;
}

export function LinkItems(props: Props) {
  const { site, github } = props;

  return (
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
  );
}

export function PortfolioItem({ item }: PortfolioItemProps) {
  const { thumbnail, title, text, logos, site, github, url } = item;

  return (
    <Container>
      <ItemLayout>
        <Row>
          <Column>
            <Body>
              <Header>
                <h1>{title}</h1>
                <LinkItems site={site} github={github} />
              </Header>

              <Description>{text}</Description>
              <LogosContainer>
                {logos.map((logo, index) => {
                  return <Logo src={logo} key={index} />;
                })}
              </LogosContainer>
              <ButtonContainer>
                <DefaultButton link={`/portfolio/${url}`} title="Ver Mais" />
              </ButtonContainer>
            </Body>
          </Column>

          <Column>
            <ThumbnailContainer>
              <Thumbnail src={thumbnail} />
            </ThumbnailContainer>
          </Column>
        </Row>
      </ItemLayout>
    </Container>
  );
}

const Header = styled.div`
  display: flex;
  width: 100%;
`;

const Container = styled.div`
  display: block;
  margin-bottom: 5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const LogosContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15px;

  display: table;
  text-align: center;
`;

const Logo = styled.img`
  height: 20px;
  margin: 0 10px;
`;

const Body = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  padding: 0 40px;
  gap: 1rem;

  @media (max-width: 1200px) {
    padding: 0;
  }

  @media (max-width: 800px) {
    padding: 0 15px;
  }

  @media (max-width: 400px) {
    padding: 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex: 1;
`;

const Description = styled.div`
  text-align: justify;
  text-justify: inter-word;
  white-space: pre-wrap;
`;

const ThumbnailContainer = styled.div`
  display: flex;

  flex: 1;
  margin: auto;
  justify-content: center;
  align-items: center;
  border: 0.25rem solid lightgray;
`;

const Thumbnail = styled.img`
  width: 100%;

  @media (max-width: 800px) {
    height: 140px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
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

  a:last-child {
    margin-left: 30px;
  }

  a:hover {
    opacity: 0.6;
  }
`;
