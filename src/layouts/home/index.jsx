import React from "react";
import { Outlet } from "react-router-dom";
//component
import Appbar from "./Appbar";
import DrawerAppBar from "./DrawerAppbar";
//@MUI
import { Box } from "@mui/material";
import Footer from "./Footer";
//utility

export default function HomeLayout() {
  return (
    <Box>
      <Appbar />
      <Box mb={{ xs: 6, sm: 8 }}></Box>
      <DrawerAppBar />
      <Outlet />
      <Footer />
    </Box>
  );
}
