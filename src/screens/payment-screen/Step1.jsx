import React from "react";
//@MUI
import { Box, Grid, Card } from "@mui/material";
//Component
import BasicInput from "../../components/input/BasicInput";

export default function Step1() {
  return (
    <Box sx={{ width: "100%", margin: "auto" }}>
      <Card sx={{ p: { xs: 2, sm: 4 } }}>
        <Grid container spacing={{ xs: 1, sm: 6 }}>
          <Grid item xs={12} sm={12} md={6}>
            <BasicInput
              title="First Name"
              placeholder="Enter Your First Name"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <BasicInput title="Last Name" placeholder="Enter Your Last Name" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <BasicInput
              title="Email"
              type="email"
              placeholder="Enter Your Email"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <BasicInput
              title="Address for Delivery"
              placeholder="Enter Your Address"
              multiline
              maxRows={4}
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <BasicInput />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <BasicInput />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
