import { DefaultLayout } from "../../src/components/layout/DefaultLayout";
import { getAllFilesIds, getFileData } from "../../src/lib";
import { IFileData } from "../../src/interfaces";
import { FaChevronLeft, FaGithub, FaGlobeAmericas } from "react-icons/fa";
import { useRouter } from "next/router";
import Head from "next/head";
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
              <LinkContainer>
                <a href={site} title={site}>
                  <FaGlobeAmericas />
                </a>
                <a href={github} title={github}>
                  <FaGithub />
                </a>
              </LinkContainer>
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
  padding: 0 20px;
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

  background: white;
  cursor: pointer;

  @media (max-width: 600px) {
    size: 20px;
    width: 50px;
    height: 50px;
  }
`;

const FaChevronLeftStyled = styled(FaChevronLeft)`
  font-size: 35px;

  @media (max-width: 600px) {
    font-size: 20px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 30px;
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

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Title = styled.div`
  flex: 1;
`;
