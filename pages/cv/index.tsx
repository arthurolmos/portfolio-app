import React from "react";
import { DefaultLayout, TitleAndBodyLayout } from "../../src/components/layout";
import Head from "next/head";
import Link from "next/link";
import {
  educationItems,
  courseItems,
  professionalItems,
} from "../../src/data/items";
import { CvItem } from "../../src/components/cv/CvItem";
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
              Sou o Arthur, tenho 32 anos e sou morador de São Caetano do Sul -
              SP. Sou desenvolvedor fullstack JS freelancer, especializado nos
              frameworks React e React Native.
              <br />
              <br />
              Inicialmente me formei em produção gráfica pelo SENAI, e após
              algum tempo atuando na área gráfica, comecei a ter contato com a
              área de TI e programação, caminho que acabei me identificando e
              escolhendo como carreira.
              <br />
              <br />
              Me formei em Análise e Desenvolvimento de sistemas pela FATEC São
              Caetano do Sul, e pouco após a conclusão do curso comecei a
              estudar as linguagens que mais me interessaram: React, Node e
              Python.
              <br />
              <br />O meu primeiro projeto finalizado foi o{" "}
              <Link href="/portfolio">
                <LinkStyled>Controlador de Pedidos</LinkStyled>
              </Link>{" "}
              , desenvolvido para a{" "}
              <LinkStyled href="https://lojasanguinaria.com.br" target="_blank">
                Loja Sanguinária
              </LinkStyled>
              , a qual também fiz o{" "}
              <Link href="/portfolio/loja-sanguinaria">
                <LinkStyled>layout do site.</LinkStyled>
              </Link>
              <br />
              <br />
              Mais recentemente, lancei o app{" "}
              <Link href="/portfolio/rolezator-app">
                <LinkStyled>Rolezator</LinkStyled>
              </Link>
              , um projeto pessoal em constante atualização.
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

  @media (max-width: 600px) {
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
