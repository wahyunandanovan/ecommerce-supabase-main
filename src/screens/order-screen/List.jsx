import { Typography, Box, Stack, Chip } from "@mui/material";
import React from "react";
import Iconify from "../../components/Iconify";
import { formatDollar } from "../../utils";
import { palette } from "../../utils/palette";

export default function List({ value }) {
  const stat = value.status;
  return (
    <Box>
      <Box
        px={2}
        py={0.5}
        sx={{
          borderRadius: "6px 6px 0px 0px",
          display: "flex",
          justifyContent: "end",
        }}
        backgroundColor={
          stat === "rejected" ? "red" : stat === "done" ? "green" : "#5bc0de"
        }
      >
        <Box gap={1} display="flex" alignItems="center">
          <Iconify
            icon="fluent:status-20-filled"
            style={{
              color: "white",
              width: 18,
              height: 18,
            }}
          />
          <Typography color="white">{value.status}</Typography>
        </Box>
      </Box>
      <Box sx={{ p: 2, borderBottom: "2px solid #F6F7F8" }}>
        {value?.items.map((item, idx) => {
          return (
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Stack key={idx} direction="row" spacing={2}>
                <Box display="flex" alignItems="center">
                  <img
                    width={69}
                    height={69}
                    src={item.image}
                    alt="product"
                    style={{ borderRadius: 10 }}
                  />
                </Box>
                <Box>
                  <Typography mb={1} color={palette.black} fontWeight="600">
                    {item.name}
                  </Typography>
                  <Typography color={palette.grey}>1x / black / 32</Typography>
                </Box>
              </Stack>

              <Box alignItems="end" display="grid" justifyContent="end">
                <Typography fontWeight="700" color={palette.black}>
                  {formatDollar(item.price * item.quantity)}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          p: 2,
          borderBottom: "2px solid #F6F7F8",
          backgroundColor: "#fafafb",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" gap={1} alignItems="center">
          <Iconify
            icon="fluent-emoji-flat:information"
            style={{
              width: 18,
              height: 18,
            }}
          />
          <Typography color="#00a6ed" fontSize={{ xs: 10, sm: 14 }}>
            More Info
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Iconify
            icon="cib:cashapp"
            style={{ color: palette.blue, width: 18, height: 18 }}
          />
          <Typography mx={1} color={palette.black}>
            Total Order :
          </Typography>
          <Typography variant="h4" color={palette.blue}>
            {formatDollar(value.total)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
