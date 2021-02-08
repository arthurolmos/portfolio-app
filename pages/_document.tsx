import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />

          <style global jsx>{`
            @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap");

            html,
            body {
              color: white;
              background-color: black;
              font-family: "Roboto", sans-serif;
              box-sizing: border-box;
              margin: 0;
              padding: 0;
              line-height: 1.6;
              height: 100%;
            }

            ::selection {
              color: black;
              background: white;
            }

            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div {
              height: 100%;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}
