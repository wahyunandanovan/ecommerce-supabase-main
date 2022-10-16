import { Box, Typography } from "@mui/material";
import React from "react";

export default function NotFound({ title }) {
  return (
    <Box width="100%" textAlign="center">
      <img width={300} src="illustrations/not-found.svg" />
      <Typography variant="h3" color="#40bfff" fontFamily="SFProText">
        {title}
      </Typography>
    </Box>
  );
}
