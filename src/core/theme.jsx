import { createTheme } from "@mui/material/styles";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
    mobile: 0,
    tablet: 640,
    laptop: 1024,
    desktop: 1200,
  },
};

export const theme = createTheme({
  breakpoints,
  palette: {
    primary: {
      main: "#40BFFF",
    },
    secondary: {
      main: "#FFD700",
    },
    warning: {
      main: "#ff9800",
    },
    error: {
      main: "#FB7181",
    },
    info: {
      main: "#03a9f4",
    },
    success: {
      main: "#2e7d32",
    },
  },
  typography: {
    fontFamily: "SFProText",
    body1: {
      color: "#262626",
      fontFamily: "SFProText",
    },
    h1: {
      fontFamily: "SFProDisplay",
      color: "#262626",
      fontSize: "50px",
      fontWeight: "700",
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: "26px",
      },
    },
    h2: {
      fontFamily: "SFProDisplay",
      color: "#262626",
      fontSize: "40px",
      fontWeight: "700",
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: "40px",
      },
    },
    h3: {
      fontFamily: "SFProDisplay",
      color: "#262626",
      fontSize: "28px",
      fontWeight: "700",
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: "26px",
      },
    },
    h4: {
      fontFamily: "SFProDisplay",
      color: "#262626",
      fontSize: "24px",
      fontWeight: "700",
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: "22px",
      },
    },
    h5: {
      fontFamily: "SFProDisplay",
      color: "#262626",
      fontSize: "18px",
      fontWeight: "700",
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: "16px",
      },
    },
    h6: {
      fontFamily: "SFProDisplay",
    },
  },
});
