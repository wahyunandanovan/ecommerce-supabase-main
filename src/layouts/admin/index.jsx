import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ListItemIcon } from "@mui/material";
import Iconify from "../../components/Iconify";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

const dashboardMenus = [
  {
    title: "Dashboard",
    pathName: "/home",
    icon: "ic:round-dashboard",
  },
  {
    title: "Order",
    pathName: "/order",
    icon: "ic:baseline-shopping-cart",
  },
  {
    title: "Product",
    pathName: "/product",
    icon: "ic:baseline-featured-play-list",
  },
  {
    title: "User",
    pathName: "/user",
    icon: "ic:baseline-account-box",
  },
];

function AdminDashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <img src="logo.png" />
      </Toolbar>
      <List>
        {dashboardMenus.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "#F4F4FA",
                },
                borderRadius: "22px 0px 0px 22px",
                marginLeft: 2,
                marginBottom: 1,
              }}
            >
              <ListItemIcon sx={{ minWidth: 32, marginLeft: "24px" }}>
                <Iconify
                  icon={text.icon}
                  sx={{ width: 16, color: "#70708C" }}
                />
              </ListItemIcon>
              <ListItemText
                primary={text.title}
                sx={{ color: "#70708C", fontWeight: "900" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "#F4F4FA" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <p>menu</p>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRadius: "0px 46px 0px 0px !important",
              // boxShadow: "box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.75)",
              border: "none",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              // boxShadow: "3px 1px 4px 0px rgba(239,239,239,0.48)",
              borderRadius: "0px 46px 0px 0px !important",
              border: "none",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

AdminDashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminDashboard;
