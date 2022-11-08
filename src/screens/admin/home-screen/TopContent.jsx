import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "../../../components/Card";
import Iconify from "../../../components/Iconify";

export default function TopContent() {
  const menus = [
    {
      title: "Today's sales",
      icon: "material-symbols:today",
      code: "#605BFF",
      value: 5000,
    },
    {
      title: "Today's Earn",
      icon: "fa6-solid:money-check-dollar",
      code: "#FFB700",
      value: 5000,
    },
    {
      title: "Our Client",
      icon: "ic:round-supervisor-account",
      code: "#5BD46F",
      value: 5000,
    },
  ];
  return (
    <Card>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {menus.map((item, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                display: { xs: "grid", sm: "flex" },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  borderRadius: 2,
                  backgroundColor: item.code,
                  width: "40px",
                  height: "40px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <Iconify icon={item.icon} sx={{ color: "#fff", height: 26, width: 26 }} />
              </Box>
              <Box ml={2} sx={{ display: "grid" }}>
                <Typography fontWeight="700" color="#292968">
                  {item.title}
                </Typography>
                <Typography fontWeight="900" color={item.code}>
                  {item.value}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Card>
  );
}
