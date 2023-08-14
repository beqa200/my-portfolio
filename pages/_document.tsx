import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="./assets/fav-icon.svg" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
