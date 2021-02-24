import React from "react";
import { DefaultLayout, TitleAndBodyLayout } from "../../src/components/layout";
import Head from "next/head";
import { socialNetworkItems } from "../../src/data/items";
import { ISocialNetworkItem } from "../../src/interfaces";
import { ContactItem } from "../../src/components/contact/ContactItem";

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
          {socialNetworkItems.map((item: ISocialNetworkItem, index: number) => {
            return <ContactItem item={item} key={index} />;
          })}
        </TitleAndBodyLayout>
      </DefaultLayout>
    </>
  );
}
