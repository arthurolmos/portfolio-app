import React from "react";
import { DefaultLayout, TitleAndBodyLayout } from "../../src/components/layout";
import Head from "next/head";
import { educationItems, courseItems } from "../../src/data/items";
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
            <Title>Formação Academica</Title>

            {educationItems.map((item, index) => {
              return <CvItem item={item} key={index} />;
            })}

            <ListTitle>Cursos</ListTitle>
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

const ListTitle = styled.h2`
  text-transform: uppercase;
`;
