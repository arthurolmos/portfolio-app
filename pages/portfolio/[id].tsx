import { getAllFilesIds, getFileData } from "../../src/lib";
import { IFileData } from "../../src/interfaces";
import { FaChevronLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Head from "next/head";
import { DefaultLayout } from "../../src/components/layout";
import { LinkContainer } from "../../src/components/portfolio/LinkContainer";
import styled from "styled-components";

export function getStaticPaths() {
  const paths = getAllFilesIds("portfolio");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fileData = await getFileData(params.id, "portfolio");
  return {
    props: {
      fileData,
    },
  };
}

export default function Portfolio({ fileData }: { fileData: IFileData }) {
  const { backgroundImage, title, contentHtml, site, github } = fileData;

  const router = useRouter();
  const back = () => router.back();

  return (
    <>
      <Head>
        <title>Arthur Wosniaki - Portfolio - {title}</title>
      </Head>

      <DefaultLayout backgroundColor="white" color="black">
        <Content>
          <Header background={backgroundImage} />

          <Body>
            <TitleContainer>
              <Title>
                <h1>{title}</h1>
              </Title>
              <LinkContainer site={site} github={github} />
            </TitleContainer>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </Body>
        </Content>

        <BackButton onClick={back}>
          <FaChevronLeftStyled />
        </BackButton>
      </DefaultLayout>
    </>
  );
}

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const Header = styled.div`
  width: 100%;
  height: 300px;

  ${({ background }) =>
    background &&
    `
    background: url(${background}) 50%/ cover
                  border-box
                  padding-box;
  `}

  @media(max-width: 600px) {
    height: 200px;
  }
`;

const Body = styled.div`
  padding: 40px 80px;
  text-align: justify;
  text-justify: inter-word;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const FaChevronLeftStyled = styled(FaChevronLeft)`
  font-size: 35px;
  transition: all 1s ease;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const BackButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 999;
  position: fixed;
  bottom: 50px;
  right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px gray;
  transition: all 0.5s ease;

  background: white;
  cursor: pointer;

  @media (max-width: 600px) {
    size: 20px;
    width: 50px;
    height: 50px;
  }

  &:hover {
    ${FaChevronLeftStyled} {
      color: white;
    }

    background: black;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  flex: 1;
`;
