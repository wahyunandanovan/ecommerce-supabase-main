import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const list = [
  {
    name: "FREE SHIPPING",
    uri: "/illustrations/shipping.svg",
  },
  {
    name: "100% REFUND",
    uri: "/illustrations/refund.svg",
  },
  {
    name: "SUPPORT 24/7",
    uri: "/illustrations/support.svg",
  },
];

export default function Bennefit() {
  return (
    <Box width="100" mt={8}>
      <Grid container spacing={4}>
        {list.map((item, idx) => {
          return (
            <Grid
              key={idx}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "grid", justifyContent: "center" }}
            >
              <Box textAlign="center" maxWidth={200}>
                <img src={item.uri} alt="logo-bennefit" />
                <Typography mt={4} variant="h4" fontWeight="600">
                  {item.name}
                </Typography>
                <Typography mt={1.5} color="#22262A">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
