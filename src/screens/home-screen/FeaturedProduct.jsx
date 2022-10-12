import { Box, Grid, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import SectionContainer from "../../layouts/containers/SectionContainer";

const list = [
  {
    name: "Blue Swade Nike Sneakers",
    uri: "/images/transparent-shoes.svg",
  },
  {
    name: "Blue Swade Nike Sneakers",
    uri: "/images/transparent-shoes.svg",
  },
  {
    name: "Blue Swade Nike Sneakers",
    uri: "/images/transparent-shoes.svg",
  },
];

export default function FeaturedProduct() {
  return (
    <SectionContainer title="FEATURED PRODUCT">
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
              <Box
                display={{ xs: "grid", sm: "flex" }}
                gap={3}
                textAlign={{ xs: "center", sm: "start" }}
                maxWidth={{ xs: 200, sm: 323 }}
                alignItems="center"
              >
                <img
                  src={item.uri}
                  alt="logo-bennefit"
                  width={112}
                  style={{ margin: "auto" }}
                />
                <Stack>
                  <Typography variant="h5" fontWeight="600" my={0.5}>
                    {item.name}
                  </Typography>
                  <Rating
                    value={5}
                    // onChange={(event, newValue) => {
                    //   setRating(newValue);
                    // }}
                    sx={{ my: 1, margin: { xs: "auto", sm: "0px" } }}
                  />
                  <Typography
                    variant="h5"
                    color="#9098B1"
                    mt={2}
                    fontWeight="500"
                  >
                    <span style={{ color: "#FB7181" }}>$499 </span>
                    <s>$599</s>
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </SectionContainer>
  );
}
