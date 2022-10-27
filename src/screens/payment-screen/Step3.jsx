import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { palette } from "../../utils/palette";

export default function Step3({ onClick }) {
  return (
    <Box
      width="100%"
      display="grid"
      justifyContent="center"
      textAlign="center"
      gap={3.5}
    >
      <img src="/illustrations/success.svg" alt="success" />
      <Typography variant="h3">SUCCESS</Typography>
      <Box display="flex" justifyContent="center">
        <Button
          onClick={onClick}
          color="primary"
          title=""
          sx={{
            backgroundColor: palette.blue,
            px: 4,
            py: 2,
            borderRadius: 2,
            "&:hover": {
              background: "#7bd0fb",
            },
          }}
        >
          <Typography variant="h5" color="white">
            Complete
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
