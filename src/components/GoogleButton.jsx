import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { palette } from "../utils/palette";

export default function GoogleButton({ title, onClick }) {
  return (
    <Box
      component={Link}
      onClick={onClick}
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        textDecoration: "none",
        cursor: "pointer",
        border: "1px solid #ccc",
        py: 0.5,
        px: 2,
        borderRadius: 1,
        boxShadow: "0px 0px 4px 1px rgb(204 204 204 / 24%) inset",
        "&:hover": {
          border: `1px solid ${palette.blue}`,
        },
      }}
    >
      <img
        src="/images/google.svg"
        alt="sign-in-google"
        style={{ height: 30, width: 30 }}
      />
      <Typography fontWeight="500">{title}</Typography>
      <Typography></Typography>
    </Box>
  );
}
