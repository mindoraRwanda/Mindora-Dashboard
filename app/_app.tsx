  import TranslationProvider from './dashboard/translationProvider';
  import { AppProps } from 'next/app';

  function MyApp({ Component, pageProps }: AppProps) {
    return (
      <TranslationProvider>
        <Component {...pageProps} />
      </TranslationProvider>
    );
  }

  export default MyApp;
