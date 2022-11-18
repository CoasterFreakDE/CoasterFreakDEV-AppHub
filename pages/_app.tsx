import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import {useEffect} from "react";
import TagManager from 'react-gtm-module';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KKTWZBG' });
  }, []);

  return <>
    <Head>
      <title>CoasterFreakDEV</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@coasterfreakde" />
      <meta name="twitter:title" content="CoasterFreakDEV" />
      <meta name="twitter:description" content="AppHub / Portfolio ~ All your favourite services" />
      <meta name="twitter:image" content="/android-chrome-512x512.png" />

      <script async={false} src={'https://icons.flawcra.cc/get.js'} />
    </Head>
    <Component {...pageProps} />
  </>
}
