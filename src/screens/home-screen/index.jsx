import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import Bennefit from "./Bennefit";
import BestSeller from "./BestSeller";
import Promo from "./Promo";

export default function HomeScreen() {
  return (
    <Box mt={2} maxWidth="xl" marginX="auto">
      <Banner />
      <BestSeller />
      <Promo />
      <Bennefit />
    </Box>
  );
}
