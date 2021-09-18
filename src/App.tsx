import { FC } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { Routes } from './routes';
import ALSHaussRegularWoff from './fonts/als-hauss/ALSHauss-Regular.woff'
import ALSHaussRegularWoff2 from './fonts/als-hauss/ALSHauss-Regular.woff2'
import ALSHaussMediumWoff from './fonts/als-hauss/ALSHauss-Medium.woff'
import ALSHaussMediumWoff2 from './fonts/als-hauss/ALSHauss-Medium.woff2'

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
};

const theme = createTheme({
  typography: {
    fontFamily:
      'ALS Hauss, Open Sans, Cantarell, Helvetica, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'ALS Hauss';
          font-display: swap;
          font-style: normal;
          font-weight: 400;
          src: local('ALS Hauss'),
            url(${ALSHaussRegularWoff}) format('woff'),
            url(${ALSHaussRegularWoff2}) format('woff2');
        }
        
        @font-face {
          font-family: 'ALS Hauss';
          font-display: swap;
          font-style: normal;
          font-weight: 500;
          src: local('ALS Hauss'),
            url(${ALSHaussMediumWoff}) format('woff'),
            url(${ALSHaussMediumWoff2}) format('woff2');
        }
      `,
    },
  },
  palette: {
    primary: {
      main: '#e62b25',
    },
    secondary: {
      main: '#f90043',
    },
    error: {
      main: '#ff0000',
    },
    info: {
      main: '#a2a2ae',
      light: '#b2b2b2',
      dark: '#a2a2ae',
    },
  },
});
