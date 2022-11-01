import { Typography, Box, Stack, Chip } from "@mui/material";
import React from "react";
import Iconify from "../../components/Iconify";
import { formatDollar } from "../../utils";
import { palette } from "../../utils/palette";

export default function List() {
  return (
    <Box>
      <Box sx={{ p: 2, borderBottom: "2px solid #F6F7F8" }}>
        <Box display="flex" justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            <Box display="flex" alignItems="center">
              <img width={69} height={69} src={"vite.svg"} alt="product" style={{ borderRadius: 10 }} />
            </Box>
            <Box>
              <Typography mb={1} color={palette.black} fontWeight="600">
                {"Nuike Ardila"}
              </Typography>
              <Typography color={palette.grey}>1x / black / 32</Typography>
            </Box>
          </Stack>
          <Box textAlign="end">
            <Chip label="Pending" color="info" sx={{ color: "white" }} />
            <Typography mt={1} fontWeight="700" color={palette.black}>
              {formatDollar(123)}
            </Typography>
          </Box>
        </Box>
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
        <Box></Box>
        <Box display="flex" alignItems="center">
          <Iconify icon="cib:cashapp" style={{ color: palette.blue, width: 18, height: 18 }} />
          <Typography mx={1} color={palette.black}>
            Total Order :
          </Typography>
          <Typography variant="h4" color={palette.blue}>
            {formatDollar(123)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
