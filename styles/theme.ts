import { siteMetadata } from 'data/siteMetadata';
import { DefaultTheme } from 'styled-components';

const pixelToRem = (size: number) => `${size / 16}rem`;

const fontSize = {
  xxs: pixelToRem(12),
  xs: pixelToRem(14),
  sm: pixelToRem(16),
  md: pixelToRem(18),
  lg: pixelToRem(20),
  xl: pixelToRem(24),
  xxl: pixelToRem(32),
  xxxl: pixelToRem(48),
};

export const darkTheme: DefaultTheme = {
  fontSize,
  color: {
    bgColor: '#27272A',
    bgColor2: '#18181B',
    primaryRed: '#F05454',
    primaryBlue: '#30475E',
    textColor: '#EEEEEE',
  },
};

export const lightTheme: DefaultTheme = {
  fontSize,
  color: {
    bgColor: '#F4F4F5',
    bgColor2: '#E4E4E7',
    primaryRed: '#F05454',
    primaryBlue: '#30475E',
    textColor: '#000000',
  },
};
