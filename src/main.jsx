import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./routes";
import { theme } from "./utils/theme";
//@Provider
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CssBaseline, ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  </HelmetProvider>
);
