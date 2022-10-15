import { IconButton, Stack, Typography, Box } from "@mui/material";
import React from "react";

export default function CounterButton({ onMin, onAdd, count, variant }) {
  return (
    <>
      {variant === "small" ? (
        <Box
          height="36px"
          backgroundColor="#F6F7F8"
          width="fit-content"
          px={1}
          borderRadius="4px"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton onClick={onMin} disabled={count <= 1}>
              <Typography color="#33A0FF">-</Typography>
            </IconButton>
            <Typography fontWeight="500">{count}</Typography>
            <IconButton onClick={onAdd}>
              <Typography color="#33A0FF">+</Typography>
            </IconButton>
          </Stack>
        </Box>
      ) : variant === "large" ? (
        <Box
          height="46px"
          backgroundColor="#F6F7F8"
          width="fit-content"
          px={1}
          borderRadius="4px"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton onClick={onMin} disabled={count <= 1}>
              <Typography variant="h5" color="#33A0FF">
                -
              </Typography>
            </IconButton>
            <Typography variant="h5" fontWeight="500">
              {count}
            </Typography>
            <IconButton onClick={onAdd}>
              <Typography variant="h5" color="#33A0FF">
                +
              </Typography>
            </IconButton>
          </Stack>
        </Box>
      ) : (
        <Box
          height="46px"
          backgroundColor="#F6F7F8"
          width="fit-content"
          px={1}
          borderRadius="4px"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton onClick={onMin} disabled={count <= 1}>
              <Typography variant="h5" color="#33A0FF">
                -
              </Typography>
            </IconButton>
            <Typography variant="h5" fontWeight="500">
              {count}
            </Typography>
            <IconButton onClick={onAdd}>
              <Typography variant="h5" color="#33A0FF">
                +
              </Typography>
            </IconButton>
          </Stack>
        </Box>
      )}
    </>
  );
}
