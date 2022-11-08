import { Box } from "@mui/material";
import React from "react";

export default function Card({ children, ...props }) {
  return (
    <Box sx={{ backgroundColor: "white", width: "100%", p: 2, borderRadius: 2 }} {...props}>
      {children}
    </Box>
  );
}
