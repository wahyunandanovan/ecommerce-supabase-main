import { Typography } from "@mui/material";
import React from "react";

export default function TextError({ children }) {
  return (
    <div>
      <Typography fontSize={12} color="red">
        * {children}
      </Typography>
    </div>
  );
}
