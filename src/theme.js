import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f1f5f9",
    },
    secondary: {
      main: "#14213d",
    },
    tertiary: {
      main: "#0098fe",
      contrastText: "#fff"
    },
    quaternary: {
      main: "#fbe6be",
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    body1: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      fontSize: "17px",
      lineHeight: 1.4,
      fontWeight: 400,
    },    
    h1: {
      fontFamily: "Staatliches",
      fontSize: '4rem',
    },
    h2: {
      fontFamily: "Staatliches",
      fontSize: '40px',
    },
    h3: {
      fontFamily: "Staatliches",
      fontSize: '3rem',
    },
    h4: {
      fontFamily: "Staatliches",

      fontSize: '2.5rem',
    },
    h5: {
      fontFamily: "Staatliches",

      fontSize: '24px',
    },
    h6: {
      fontFamily: "Roboto",
      fontSize: '15px',
      fontWeight: 400,
      // fontWeight: "bolder"
    },
  }
  
}
);

export default theme;
