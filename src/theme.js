import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f1d8b2",
    },
    secondary: {
      main: "#14213d",
    },
    tertiary: {
      main: "#0098fe",
      contrastText: "#fff"
    },
  },
  typography: {
    fontFamily: "Roboto",
    body1: {
      fontFamily: "Roboto",
      fontSize: "19px",
      lineHeight: 1.4,
      fontWeight: 400,
    },    
    h1: {
      fontFamily: "Staatliches",
      fontSize: '4rem',
    },
    h2: {
      fontFamily: "Staatliches",
      fontSize: '3.5rem',
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

      fontSize: '1.6rem',
    },
    h6: {
      fontFamily: "Staatliches",
      fontSize: '1.2rem',
      // fontWeight: "bolder"
    },
  }
  
}
);

export default theme;
