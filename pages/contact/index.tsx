import React from "react";
import { DefaultLayout, TitleAndBodyLayout } from "../../src/components/layout";
import Head from "next/head";
import { socialNetworkItems } from "../../src/data/items";
import { ISocialNetworkItem } from "../../src/interfaces";
import { ContactItem } from "../../src/components/contact/ContactItem";
import styled from "styled-components";

interface Props {}

export default function Index(props: Props) {
  const {} = props;

  return (
    <>
      <Head>
        <title>Arthur Wosniaki - Contato</title>
      </Head>

      <DefaultLayout>
        <TitleAndBodyLayout title="Contato">
          <Content>
            <Name>Arthur Olmos Wosniaki</Name>
            <Email>arthur.olmos@gmail.com</Email>
            <Address>São Caetano do Sul - SP</Address>

            <LinksContainer>
              {socialNetworkItems.map(
                (item: ISocialNetworkItem, index: number) => {
                  return <ContactItem item={item} key={index} />;
                }
              )}
            </LinksContainer>
          </Content>
        </TitleAndBodyLayout>
      </DefaultLayout>
    </>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Name = styled.span`
  text-transform: uppercase;
  font-size: 40px;
  padding: 10px 0;

  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

const Email = styled.span`
  font-size: 24px;
  padding: 10px 0;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Address = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
`;
