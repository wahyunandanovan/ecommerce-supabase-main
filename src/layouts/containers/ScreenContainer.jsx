import { Box, Typography } from "@mui/material";
import React from "react";

export default function ScreenContainer({ title, children }) {
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
          {title}
        </Typography>
      </Box>
      {children}
    </Box>
  );
}
