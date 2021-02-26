import { IPortfolioItem } from "../../interfaces";
import Link from "next/link";
import styled from "styled-components";
import { LinkContainer } from "./LinkContainer";

interface PortfolioItemProps {
  item: IPortfolioItem;
}

export function PortfolioItem({ item }: PortfolioItemProps) {
  const { thumbnail, title, text, logos, site, github, url } = item;

  return (
    <ItemContainer>
      <Content>
        <UpperRow>
          <Body>
            <Header>
              <h1>{title}</h1>

              <LinkContainer site={site} github={github} />
            </Header>

            <Description>{text}</Description>
          </Body>

          <ThumbnailContainer>
            <Thumbnail src={thumbnail} />
          </ThumbnailContainer>
        </UpperRow>

        <LowerRow>
          <LogosContainer>
            {logos.map((logo, index) => {
              return <Logo src={logo} key={index} />;
            })}
          </LogosContainer>
        </LowerRow>

        <Row>
          <ButtonContainer>
            <Link href={`/portfolio/${url}`}>
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

  @media (max-width: 1200px) {
    padding: 0;
  }
`;

const Description = styled.div`
  text-align: justify;
  text-justify: inter-word;
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
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  margin-bottom: 25px;
  z-index: 0;
  border-radius: 25px;

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
      // border-radius: 0;
    }
  }
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
