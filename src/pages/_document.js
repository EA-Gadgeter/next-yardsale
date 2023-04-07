/* eslint-disable prettier/prettier */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet='utf-8'/>
          <link rel='manifest' href='/manifest.json'/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}
