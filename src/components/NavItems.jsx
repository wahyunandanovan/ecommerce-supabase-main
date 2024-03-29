import { Box, Link, Typography } from "@mui/material";
import React, { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { palette } from "../utils/palette";
import Iconify from "./Iconify";

function NavItems({ height }) {
  const location = useLocation();
  const navigate = useNavigate();

  //menu list
  const navItems = [
    {
      title: "HOME",
      pathName: "/home",
      action: null,
      hover: null,
      icon: "akar-icons:home",
    },
    {
      title: "PRODUCT",
      pathName: "/product",
      action: null,
      hover: null,
      icon: "eos-icons:product-subscriptions-outlined",
    },
    {
      title: "CONTACT",
      pathName: "/contact",
      action: null,
      hover: null,
      icon: "fluent:contact-card-16-regular",
    },
    {
      title: "SETTINGS",
      pathName: "/settings",
      action: null,
      hover: null,
      icon: "ant-design:setting-outlined",
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
        alignItems: "end",
      }}
    >
      {navItems.map((item, idx) => {
        return (
          <Box
            key={idx}
            onClick={() => {
              navigate(item.pathName);
              window.scrollTo(0, 0);
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              cursor: "pointer",
            }}
          >
            <Iconify
              icon={item.icon}
              color={
                location.pathname === item.pathName
                  ? palette.blue
                  : palette.newturalDark
              }
              sx={{ width: 12, height: 12 }}
            />
            <Typography
              sx={{
                fontSize: 12,
                cursor: "pointer",
                color:
                  location.pathname === item.pathName
                    ? palette.blue
                    : palette.newturalDark,
                fontWeight: "400",
              }}
            >
              {item.title}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
export default memo(NavItems);
