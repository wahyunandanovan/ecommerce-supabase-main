import * as React from "react";
//components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, ListItemIcon } from "@mui/material";
import Iconify from "../../components/Iconify";
//utility
import { Outlet, useNavigate } from "react-router-dom";
import { dashboardMenus } from "../../utils/data";

const drawerWidth = 240;

function AdminDashboard(props) {
  const { screen } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [path, setPath] = React.useState(dashboardMenus[0]?.pathName);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/admin/home");
  }, []);

  const drawer = (
    <div>
      <Toolbar sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <img width={165} src="/petani-code.svg" />
      </Toolbar>
      <List>
        {dashboardMenus.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setPath(text.pathName);
                navigate(text.pathName);
              }}
              sx={{
                "&:hover": {
                  backgroundColor: "#F4F4FA",
                },
                backgroundColor: path === text.pathName ? "#F4F4FA" : "#fff",
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
    screen !== undefined ? () => screen().document.body : undefined;

  //event when scrolling
  const [scrolling, setScrolling] = React.useState(false);
  const [scrollTop, setScrollTop] = React.useState(0);
  const [bgNav, setBgNav] = React.useState("transparent");

  //opening navbar
  React.useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
      if (scrollTop >= 100) {
        setBgNav("rgb(255 255 255 / 80%)");
      } else if (scrollTop <= 100) {
        setBgNav("transparent");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <Box sx={{ display: "flex", backgroundColor: "#F4F4FA" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          pl: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          backgroundColor: bgNav,
          transition: "background-color 1.5s ease 0s",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Iconify
              icon="heroicons-solid:menu-alt-2"
              sx={{ width: 22, color: "#70708C" }}
            />
          </IconButton>
          <Typography
            variant="h4"
            color="#292968"
            fontWeight="600"
            fontFamily="SFProText"
          >
            Dashboard
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              px: { xs: 0.8, sm: 2 },
              py: 0.8,
              borderRadius: 2,
            }}
          >
            <Avatar />
            <Typography
              sx={{
                color: "#292968",
                fontWeight: "700",
                ml: 1.5,
                display: { xs: "none", sm: "block" },
              }}
            >
              Mark
            </Typography>
          </Box>
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
          // p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box p={{ xs: 2, sm: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
