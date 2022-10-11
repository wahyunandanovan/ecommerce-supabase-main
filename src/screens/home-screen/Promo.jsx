import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export default function Promo() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "254px", sm: "500px" },
        backgroundColor: "#40BFFF",
        mt: 8,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ alignItems: "center" }}
      >
        <Box p={4}>
          <Typography variant="h1" color="white" fontWeight="500">
            Adidas Men Running Sneakers
          </Typography>
          <Typography mt={1.5} variant="h5" color="white" fontWeight="400">
            Performance and design. Taken right to the edge.
          </Typography>
          <Box mt={1.5} />
          <Typography
            variant="h5"
            color="white"
            component={Link}
            fontWeight="400"
          >
            SHOP NOW
          </Typography>
        </Box>
        <Box
          className="img-promo"
          component="img"
          src="/images/transparent-shoes.svg"
        />
      </Stack>
    </Box>
  );
}
