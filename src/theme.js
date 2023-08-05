import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FCE6BE",
    },
    secondary: {
      main: "#0098FF",
    },
    tertiary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: "Staatliches",
    body1: {
      fontFamily: "Roboto",
      fontSize: "18px",
      lineHeight: 1.5,
    },
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '3.5rem',
    },
    h3: {
      fontSize: '3rem',
    },
    h4: {
      fontSize: '2.5rem',
    },
    h5: {
      fontSize: '2rem',
    },
    h6: {
      fontFamily: "Mohave",
      fontSize: '1.5rem',
    },
  }
  
}
);

export default theme;
