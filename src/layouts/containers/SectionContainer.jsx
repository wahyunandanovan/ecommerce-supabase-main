import { Box, Typography } from "@mui/material";
import React from "react";

export default function SectionContainer({ mt, pt, sx, title, children }) {
  return (
    <Box mt={mt ? mt : 14.5} sx={sx}>
      <Typography variant="h3" textAlign="center" color="#22262A">
        {title}
      </Typography>
      <Box pt={pt ? pt : 14.5}>{children}</Box>
    </Box>
  );
}
