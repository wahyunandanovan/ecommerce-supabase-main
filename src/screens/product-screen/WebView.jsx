import { Box, Checkbox, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import useFetch from "../../hooks/useFetch";
import List from "./List";

export default function WebView() {
  //get from api
  const { items, isLoading } = useFetch({
    module: "category",
  });

  const ratings = [1, 2, 3, 4, 5];

  return (
    <Box display="flex" gap={3}>
      <Box width="500px">
        <Typography variant="h3" mb={2}>
          Filter Product
        </Typography>
        <Stack spacing={3}>
          <Box py={2}>
            <Typography fontWeight="600">Category</Typography>
            {items?.map((item, idx) => {
              return (
                <Box key={idx} style={{ alignItems: "center", display: "flex" }}>
                  <Checkbox />
                  <Typography>{item.name}</Typography>
                </Box>
              );
            })}
          </Box>
          <Box py={2}>
            <Typography fontWeight="600">Rating</Typography>
            {ratings?.map((item, idx) => {
              return (
                <Box key={idx} style={{ alignItems: "center", display: "flex" }}>
                  <Checkbox />
                  <Rating readOnly value={item} />
                </Box>
              );
            })}
          </Box>
        </Stack>
      </Box>
      <List />
    </Box>
  );
}
