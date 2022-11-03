import React from "react";
// @mui
import { styled } from "@mui/material/styles";
import { Typography, Container, Box, Button } from "@mui/material";
// components
import Page from "../components/Page";

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <Page title="404 Page Not Found">
      <Container>
        <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
          <img src="/illustrations/404.svg" alt="404" />
        </ContentStyle>
      </Container>
    </Page>
  );
}
