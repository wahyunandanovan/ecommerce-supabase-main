import React from "react";
import { Button as Touchabble, Typography } from "@mui/material";

export default function Button({ fullWidth, title, disabled, size, onClick, ...props }) {
  return (
    <Touchabble
      variant="outlined"
      onClick={onClick}
      fullWidth={fullWidth}
      size={size}
      disabled={disabled}
      sx={{
        backgroundColor: disabled ? "#ccc" : "#40BFFF",
        border: "1px solid #40BFFF",
        "&:hover": {
          background: "#7bd0fb",
        },
        borderRadius: "5px",
      }}
      {...props}
    >
      <Typography fontWeight="500" color="white">
        {title}
      </Typography>
    </Touchabble>
  );
}
