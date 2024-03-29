import { Box } from "@mui/material";
import React from "react";
import ScreenContainer from "../../layouts/containers/ScreenContainer";
import List from "./List";

export default function CartScreen() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ScreenContainer title="Home/Cart">
      <Box maxWidth="xl" margin="auto" px={{ xs: 3, sm: 14 }}>
        <List />
      </Box>
    </ScreenContainer>
  );
}
