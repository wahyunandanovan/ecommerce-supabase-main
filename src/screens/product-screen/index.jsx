import { Box, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import ScreenContainer from "../../layouts/containers/ScreenContainer";
import List from "./List";

export default function ProductScreen() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <ScreenContainer title="Home/Product">
      <Box maxWidth="xl" margin="auto" px={{ xs: 1.5, sm: 14 }}>
        <List />
      </Box>
    </ScreenContainer>
  );
}
