import React from "react";
import { Outlet } from "react-router-dom";
//component
import Appbar from "./Appbar";
import DrawerAppBar from "./DrawerAppbar";
//@MUI
import { Box } from "@mui/material";
import Footer from "./Footer";
//utility
import supabase from "../../core/supabase";
import { UserContext } from "../../core/userContext";

export default function HomeLayout() {
  const { user, setUser } = React.useContext(UserContext);

  //GET USER
  const getUser = async () => {
    const user = await supabase.auth.getUser();
    return setUser(user.data.user);
  };
  React.useEffect(() => {
    getUser();
  }, []);

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
