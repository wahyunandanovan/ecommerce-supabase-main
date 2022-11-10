import { Box, Grid } from "@mui/material";
import React from "react";
import OrderHistory from "./OrderHistory";
import RecentTransaction from "./RecentTransaction";
import Statistic from "./Statistic";
import NewCustomer from "./NewCustomer";
import TopContent from "./TopContent";

export default function HomeScreen() {
  return (
    <Box>
      <Grid container spacing={{ xs: 2, sm: 4 }}>
        <Grid item xs={12} sm={12} md={7}>
          <TopContent />
          <Box mb={{ xs: 2, sm: 4 }} />
          <Statistic />
          <Box mb={{ xs: 2, sm: 4 }} />
          <OrderHistory />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <RecentTransaction />
          <Box mb={{ xs: 2, sm: 4 }} />
          <NewCustomer />
        </Grid>
      </Grid>
      <Box mb={3} />
    </Box>
  );
}
