import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React from "react";

export default function InputWithButton({ buttonTitle, width, onClick }) {
  return (
    <Box py={16} display="flex" justifyContent="center">
      <Box display="flex">
        <TextField
          size="small"
          variant="outlined"
          sx={{
            width: width,
          }}
          inputProps={{
            style: {
              border: "1px solid #40BFFF",
              borderRadius: "4px 0px 0px 4px",
            },
          }}
        />
        <Box
          component={Link}
          onClick={onClick}
          backgroundColor="#40BFFF"
          alignItems="center"
          p={1}
          underline="none"
          sx={{ cursor: "pointer", borderRadius: "0px 4px 4px 0px" }}
        >
          <Typography color="white" fontWeight="500">
            {buttonTitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
