import { Grid, Skeleton } from "@mui/material";
import React from "react";

export default function BestSellerSkeleton() {
  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Skeleton variant="rectangular" height={380} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
