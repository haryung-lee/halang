import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
  margin: 0;
  padding: 0;
  }

  html, body {
    width: 100%;
    font-family: IBMPlexSansKRRegular, sans-serif;

    -ms-overflow-style: none;
    scrollbar-width: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bgColor2};
    color: ${({ theme }) => theme.colors.textColor};
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};
  }

  @font-face {
    font-family: 'IBMPlexSansKR';
    src: url('assets/fonts/IBMPlexSansKR-Regular.ttf');
    src: url('assets/fonts/IBMPlexSansKR-Bold.ttf'),
  }
`;
