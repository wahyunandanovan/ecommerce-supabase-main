import React from "react";
import { Button as Touchabble, Typography } from "@mui/material";

export default function Button({ fullWidth, title, disabled, ...props }) {
  return (
    <Touchabble
      variant="outlined"
      fullWidth={fullWidth}
      disabled={disabled}
      sx={{
        backgroundColor: disabled ? "#ccc" : "#40BFFF",
        "&:hover": {
          background: "#40BFFF",
        },
        borderRadius: 2,
      }}
      {...props}
    >
      <Typography fontWeight="500" color="white">
        {title}
      </Typography>
    </Touchabble>
  );
}
