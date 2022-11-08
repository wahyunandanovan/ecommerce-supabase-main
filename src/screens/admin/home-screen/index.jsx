import { Box, Grid } from "@mui/material";
import React from "react";
import TopContent from "./TopContent";

export default function HomeScreen() {
  return (
    <Box>
      <Grid container spacing={{ xs: 2, sm: 4 }}>
        <Grid item xs={12} sm={12} md={7}>
          <TopContent />
          <Box mb={{ xs: 2, sm: 4 }} />
          <TopContent />
          <Box mb={{ xs: 2, sm: 4 }} />
          <TopContent />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <TopContent />
          <Box mb={{ xs: 2, sm: 4 }} />
          <TopContent />
        </Grid>
      </Grid>
    </Box>
  );
}
