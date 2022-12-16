import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    color: {
      bgColor: string;
      bgColor2: string;
      primaryRed: string;
      primaryBlue: string;
      textColor: string;
    };
  }
}
