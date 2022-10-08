import { Box } from "@mui/material";
import React from "react";
import Banner from "./Banner";

export default function HomeScreen() {
  return (
    <Box mt={4} maxWidth="xl" marginX="auto">
      <Banner />
    </Box>
  );
}
