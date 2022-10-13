import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function ProductDetailsScreens() {
  return (
    <Box maxWidth="xl" margin="auto">
      <Box
        width="100%"
        backgroundColor="#F6F7F8"
        display="flex"
        justifyContent="center"
        p={1}
        my={8}
      >
        <Typography color="#33A0FF" fontWeight="400">
          Home/ Detail /{" "}
        </Typography>
        <Typography fontWeight="400">Nike Airmax 270 React</Typography>
      </Box>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "grid", justifyContent: "center" }}
        >
          <img src="/images/shoes1.svg" width={295} height={273} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}></Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        ></Grid>
      </Grid>
    </Box>
  );
}

export default ProductDetailsScreens;
