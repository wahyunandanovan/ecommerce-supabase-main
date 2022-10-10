import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import BestSeller from "./BestSeller";

export default function HomeScreen() {
  return (
    <Box mt={2} maxWidth="xl" marginX="auto">
      <Banner />
      <BestSeller />
    </Box>
  );
}
