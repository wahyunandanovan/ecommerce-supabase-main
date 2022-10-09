import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import Banner from "./Banner";

export default function HomeScreen() {
  return (
    <Box mt={2} maxWidth="xl" marginX="auto">
      <Banner />
      <Box mt={{ xs: 2, sm: 2, md: 40 }}>
        <Typography variant="h5">Nike</Typography>
      </Box>
    </Box>
  );
}
