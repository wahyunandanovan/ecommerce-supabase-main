import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { palette } from "../../utils/palette";

export default function Step3({ onClick }) {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Box width="100%" display="grid" justifyContent="center" textAlign="center" gap={4.5}>
      {matches ? (
        <img src="/illustrations/payment-success.svg" alt="success" />
      ) : (
        <img src="/illustrations/payment-success.svg" alt="success" height={500} width={500} />
      )}
      <Typography variant="h3" color="#40bfff" sx={{ lineHeigth: 3, fontFamily: "unset" }}>
        PAYMENT SUCCESS
      </Typography>
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
