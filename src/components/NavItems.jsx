import { Box, Link } from "@mui/material";
import React, { memo } from "react";

function NavItems({ height }) {
  //menu list
  const navItems = [
    {
      title: "HOME",
      pathName: "/home",
      action: null,
      hover: null,
    },
    {
      title: "PRODUCT",
      pathName: "/product",
      action: null,
      hover: null,
    },
    {
      title: "CONTACT",
      pathName: "/contact",
      action: null,
      hover: null,
    },
    {
      title: "SETTINGS",
      pathName: "/settings",
      action: null,
      hover: null,
    },
    {
      title: "OTHER",
      pathName: "/other",
      action: null,
      hover: null,
    },
  ];

  return (
    <Box
      style={{
        justifyContent: "start",
        transition: " height 0.5s ease 0s",
        height: height,
        overflow: "hidden",
        display: "flex",
        gap: "24px",
        alignItems: "center",
      }}
    >
      {navItems.map((item, idx) => {
        return (
          <Link
            key={idx}
            underline="none"
            sx={{ fontSize: 12, cursor: "pointer", color: "#262626", fontWeight: "400" }}
          >
            {item.title}
          </Link>
        );
      })}
    </Box>
  );
}
export default memo(NavItems);
