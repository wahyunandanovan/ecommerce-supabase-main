import { createTheme } from "@mui/material/styles";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

export const theme = createTheme({
  breakpoints,
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
      fontSize: "30px",
      fontWeight: "700",
    },
    h4: {
      fontFamily: "SFProDisplay",
      fontSize: "24px",
      fontWeight: "700",
    },
    h5: {
      fontFamily: "SFProDisplay",
      color: "#223263",
      fontSize: "20px",
      fontWeight: "700",
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: "18px",
      },
    },
    h6: {
      fontFamily: "SFProDisplay",
    },
  },
});
