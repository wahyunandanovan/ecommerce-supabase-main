import React from "react";
import { Outlet } from "react-router-dom";
//component
import Appbar from "./Appbar";
import DrawerAppBar from "./DrawerAppbar";
//@MUI
import { Box } from "@mui/material";

export default function HomeLayout() {
  return (
    <Box>
      <Appbar />
      <DrawerAppBar />
      <Outlet />
    </Box>
  );
}
