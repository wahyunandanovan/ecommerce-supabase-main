import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import BestSeller from "./BestSeller";
import DetailImages from "./DetailImages";
import Informations from "./Informations";
import Options from "./Options";
import RelatedProduct from "./RelatedProduct";

function ProductDetailsScreens() {
  const params = useLocation();
  const product = params?.state?.item;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
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
      <Box maxWidth="xl" margin="auto" p={3}>
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
          >
            <BestSeller
              name={product.name}
              rating={product.rating}
              price={product.price}
              src={product.uri}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Informations />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <RelatedProduct />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ProductDetailsScreens;
