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
    font-family: 'IBMPlexSansKRRegular', sans-serif;

    -ms-overflow-style: none;
    scrollbar-width: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  body {
    background-color: ${({ theme }) => theme.color.bgColor2};
    color: ${({ theme }) => theme.color.textColor};
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
  }

  input {
    border: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.textColor};
  }

  @font-face {
  font-family: 'Pacifico';
  src: url('/fonts/Pacifico-Regular.ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'IBMPlexSansKR';
  src: url('/fonts/IBMPlexSansKR-Regular.ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'IBMPlexSansKR';
  src: url('/fonts/IBMPlexSansKR-Bold.ttf');
  font-weight: 700;
}

`;
