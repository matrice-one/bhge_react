import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FCE6BE',
    },
    secondary: {
      main: '#0098FF',
    },
  },
  customPalette: {
    tertiary: {
      main: 'black',
    },
  },
  typography: {
    fontFamily: "Staatliches",
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
