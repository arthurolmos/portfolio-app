import React from "react";
import { DefaultLayout, TitleAndBodyLayout } from "../../src/components/layout";
import Head from "next/head";
import Link from "next/link";
import {
  educationItems,
  courseItems,
  professionalItems,
  technologyItems,
  languageItems,
} from "../../src/data/items";
import { CvItem, TechonologyItem, LanguageItem } from "../../src/components/cv";
import styled from "styled-components";

interface Props {}

export default function Index(props: Props) {
  const {} = props;

  return (
    <>
      <Head>
        <title>Arthur Wosniaki - CV</title>
      </Head>

      <DefaultLayout>
        <TitleAndBodyLayout title="Curriculum Vitae">
          <Content>
            <Title>Resumo</Title>
            <div style={{ marginBottom: "60px" }}>
              Sou o Arthur, tenho 32 anos e sou morador de Santo André - SP. Sou
              desenvolvedor fullstack JS, especializado nos frameworks React e
              React Native para frontend e Express para backend.
              <br />
              <br />
              Me formei em Análise e Desenvolvimento de sistemas pela FATEC São
              Caetano do Sul. Em meados de 2018, durante o período do TCC,
              comecei a me aprofundar no desenvolvimento web e mobile para
              produzir meu TCC. Desde então, venho estudando, praticando e
              desenvolvendo projetos pessoais e freelancer no meu precioso tempo
              livre.
              <br />
              <br />
              Em setembro/20 lancei o app{" "}
              <Link href="/portfolio/licativo-app">
                <LinkStyled>Licativo</LinkStyled>
              </Link>
              , desenvolvido para a{" "}
              <LinkStyled href="https://lojasanguinaria.com.br" target="_blank">
                Loja Sanguinária
              </LinkStyled>
              , a qual também fiz o{" "}
              <Link href="/portfolio/loja-sanguinaria">
                <LinkStyled>layout do site.</LinkStyled>
              </Link>
              <br />
              Logo após esse projeto, em janeiro/21, lancei o app{" "}
              <Link href="/portfolio/rolezator-app">
                <LinkStyled>Rolezator</LinkStyled>
              </Link>{" "}
              , um projeto pessoal em constante atualização.
              <br />
              <br />
            </div>
            <Title>Experiencia Profissional</Title>
            {professionalItems.map((item, index) => {
              return <CvItem item={item} key={index} />;
            })}
            <Title>Formação Academica</Title>
            {educationItems.map((item, index) => {
              return <CvItem item={item} key={index} />;
            })}
            <Title>Cursos</Title>
            {courseItems.map((item, index) => {
              return <CvItem item={item} key={index} />;
            })}
            <Title>Tecnologias</Title>
            {technologyItems.map((item, index) => {
              return <TechonologyItem item={item} key={index} />;
            })}
            <Title>Idiomas</Title>
            <LanguageItem items={languageItems} />
          </Content>
        </TitleAndBodyLayout>
      </DefaultLayout>
    </>
  );
}

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  text-transform: uppercase;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

const LinkStyled = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
