import { Box, Rating, Stack, Typography } from "@mui/material";
import React from "react";

export default function BestSeller({ src, name, rating, price }) {
  return (
    <Box display="grid" justifyContent="center" width="100%">
      <Typography variant="h5" color="#C1C8CE" fontWeight="400">
        Best Seller
      </Typography>
      <Box
        sx={{
          border: "3px solid #F6F7F8",
          borderRadius: "8px",
          overflow: "hidden",
          textAlign: "center",
          width: "220px",
          mt: 4,
        }}
      >
        <Box component="img" width="inherit" src={src} />
        <Box py={1}>
          <Typography fontSize="14px" fontWeight="600">
            {name}
          </Typography>
          <Rating size="small" value={rating} sx={{ my: 0.5 }} />
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Typography fontSize="16px" color="primary">
              {price}
            </Typography>
            <Typography color="#9098B1" fontSize="14px" fontWeight="400">
              <s> $534,33</s> <span style={{ color: "#FB7181" }}>24% Off</span>
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
