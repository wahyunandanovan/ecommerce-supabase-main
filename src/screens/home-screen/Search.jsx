import { Box } from "@mui/material";
import React from "react";
import InputWithButton from "../../components/InputWithButton";

export default function Search() {
  return (
    <Box py={16} display="flex" justifyContent="center">
      <InputWithButton
        width={{ xs: 200, sm: 350, md: 600 }}
        buttonTitle="Search"
      />
    </Box>
  );
}
