import Header from '@components/Header';
import Head from 'next/head';

import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <>
      <Head>
        <title>Next YardSale</title>
      </Head>
      <AppContext.Provider value={initialState}>
        <Header />
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
