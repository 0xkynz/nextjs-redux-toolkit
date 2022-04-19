import Head from 'next/head';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import store from '@/store';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Demo</title>
        <link rel="shortcut icon" href="/img/chakra-logo.png" />
        <link rel="apple-touch-icon" href="/img/chakra-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Project" />
      </Head>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default MyApp;
