import { Box, Typography } from "@mui/material";
import React from "react";

export default function Card({ children, title, ...props }) {
  return (
    <Box
      sx={{ backgroundColor: "white", width: "100%", p: 2, borderRadius: 2 }}
      {...props}
    >
      {title && (
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "SFProText",
            color: "#263238",
          }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
}
