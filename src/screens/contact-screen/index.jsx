import { Box } from "@mui/material";
import React from "react";
import ScreenContainer from "../../layouts/containers/ScreenContainer";

export default function ContactScreen() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ScreenContainer title="Home/Contact Us">
      <Box maxWidth="xl" margin="auto" px={{ xs: 3, sm: 14 }}></Box>
    </ScreenContainer>
  );
}
