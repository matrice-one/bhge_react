import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FCE6BE',
    },
    secondary: {
      main: '#0098FF',
    },
    tertiary: {
      main: '#000',
    },
  },
  typography: {
    fontFamily: "Staatliches",
    body1: {
      fontFamily: 'Mohave'
    },
    h6: {
      fontFamily: 'Mohave',
      fontSize: 32
    },
    // fontSize: 16,
    // h1: {
    //   fontSize: '2.3rem',
    // },
    // h2: {
    //   fontSize: '2rem',
    // },
    // h3: {
    // }
}
}
);

export default theme;
