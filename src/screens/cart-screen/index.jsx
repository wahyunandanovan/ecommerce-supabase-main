import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import List from "./List";

export default function CartScreen() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor="#F6F7F8"
        display="flex"
        justifyContent="center"
        p={1}
        mt={{ xs: 2.5, sm: 5 }}
        mb={8}
      >
        <Typography color="#33A0FF" fontWeight="400">
          Home/Cart
        </Typography>
      </Box>
      <Box maxWidth="xl" margin="auto" px={{ xs: 3, sm: 14 }}>
        <List />
      </Box>
    </Box>
  );
}
