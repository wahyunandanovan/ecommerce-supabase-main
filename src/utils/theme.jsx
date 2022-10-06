import { createTheme } from "@mui/material/styles";
import SFProText from "/fonts/SFProText.ttf";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FD7113",
    },
    secondary: {
      main: "#FFD700",
    },
    error: {
      main: "#F44336",
    },
  },
  typography: {
    fontFamily: "SFProText",
    h1: {
      fontFamily: "SFProDisplay",
    },
    h2: {
      fontFamily: "SFProDisplay",
    },
    h3: {
      fontFamily: "SFProDisplay",
    },
    h4: {
      fontFamily: "SFProDisplay",
    },
    h5: {
      fontFamily: "SFProDisplay",
    },
    h6: {
      fontFamily: "SFProDisplay",
    },
  },
});
