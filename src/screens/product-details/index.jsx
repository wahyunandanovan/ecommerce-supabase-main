import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import DetailImages from "./DetailImages";
import Options from "./Options";

function ProductDetailsScreens() {
  const params = useLocation();
  const product = params?.state?.item;
  console.log(params);

  return (
    <Box maxWidth="xl" margin="auto" p={3}>
      <Box
        width="100%"
        backgroundColor="#F6F7F8"
        display="flex"
        justifyContent="center"
        p={1}
        mt={{ xs: 2.5, sm: 5 }}
        mb={8}
      >
        <Typography color="#33A0FF" fontWeight="400">
          Home/Detail/
        </Typography>
        <Typography fontWeight="400">{product.name}</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <DetailImages src={product.uri} option={product.uri} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Options
            name={product.name}
            price={product.price}
            rating={product.rating}
          />
        </Grid>
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
