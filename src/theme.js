// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // ou "dark" selon ton site
    primary: { main: "#f1f5f9" },
    secondary: { main: "#14213d" },
    tertiary: { main: "#0098fe", contrastText: "#fff" },
    quaternary: { main: "#fbe6be" },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: { fontFamily: "Staatliches, sans-serif", fontSize: "4rem" },
    h2: { fontFamily: "Staatliches, sans-serif", fontSize: "40px" },
    h3: { fontFamily: "Staatliches, sans-serif", fontSize: "3rem" },
    h4: { fontFamily: "Staatliches, sans-serif", fontSize: "2.5rem" },
    h5: { fontFamily: "Staatliches, sans-serif", fontSize: "24px" },
    h6: { fontFamily: "Roboto, sans-serif", fontSize: "15px", fontWeight: 400 },
    body1: { fontSize: "18px", lineHeight: 1.8, fontWeight: 400 },
    mini: { fontSize: "10px", lineHeight: 1.8, fontWeight: 400 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, textTransform: "none" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 10, backdropFilter: "blur(4px)" },
      },
    },
  },
});

export default theme;
