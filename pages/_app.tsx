import { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/globalsStyle';
import { lightTheme, darkTheme } from 'styles/theme';
import LayoutWrapper from 'components/LayoutWrapper';
import { siteMetadata } from 'data/siteMetadata';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(siteMetadata.theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Head>
        <title>Halang</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <GlobalStyle />
      <LayoutWrapper toggleTheme={toggleTheme} theme={theme}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
