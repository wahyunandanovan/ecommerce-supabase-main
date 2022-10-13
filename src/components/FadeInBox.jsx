import React from "react";
import { Fade, IconButton, Stack, Box, Tooltip } from "@mui/material";
import Iconify from "./Iconify";
const FadeInBox = ({ fadein }) => {
  return (
    <Fade in={fadein} timeout={900}>
      <Box
        sx={{
          background: "rgba(38, 38, 38, 0.4)",
          position: "absolute",
          zIndex: 99,
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          margin: "auto",
        }}
      >
        <Box
          className="ini"
          height="100%"
          alignItems="center"
          display="inline-flex"
        >
          <Stack direction="row" spacing={2}>
            <Tooltip title="Detail">
              <IconButton>
                <Iconify
                  icon="clarity:details-solid"
                  color="white"
                  sx={{ width: { xs: 32, sm: 40 }, height: { xs: 32, sm: 40 } }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add to Cart">
              <IconButton>
                <Iconify
                  icon="eva:shopping-cart-fill"
                  color="white"
                  sx={{ width: { xs: 32, sm: 40 }, height: { xs: 32, sm: 40 } }}
                />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>
      </Box>
    </Fade>
  );
};

export default FadeInBox;
