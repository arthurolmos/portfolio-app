import Head from "next/head";
import Link from "next/link";
import { DefaultLayout } from "../../src/layout/DefaultLayout";

export default function FirstPost() {
  return (
    <DefaultLayout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </DefaultLayout>
  );
}
