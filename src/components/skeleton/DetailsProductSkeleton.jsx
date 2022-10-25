import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

export default function DetailsProductSkeleton() {
  return (
    <div>
      {/* <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rounded" width={210} height={60} /> */}
      <Box maxWidth="xl" margin="auto" p={3}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Skeleton
              variant="rectangular"
              height={460}
              width={300}
              sx={{ borderRadius: 1 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "block", justifyContent: "space-between" }}>
              <Skeleton
                variant="rectangular"
                height={30}
                width={"50%"}
                sx={{ borderRadius: 1 }}
              />
              <Skeleton
                variant="rectangular"
                height={20}
                width={"70%"}
                sx={{ mt: "10px", borderRadius: 1 }}
              />
              <Skeleton
                variant="rectangular"
                height={390}
                sx={{ mt: "10px", borderRadius: 1 }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Skeleton
                variant="rectangular"
                height={460}
                width={300}
                sx={{ borderRadius: 1 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Skeleton
              variant="rectangular"
              height={400}
              sx={{ borderRadius: 1 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Skeleton
              variant="rectangular"
              height={400}
              sx={{ borderRadius: 1 }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
