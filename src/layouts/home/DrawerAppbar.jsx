import * as React from "react";
import PropTypes from "prop-types";
//@MUI
import {
  Link,
  ListItem,
  List,
  ListItemText,
  ListItemButton,
  Drawer,
  Divider,
  Box,
  IconButton,
} from "@mui/material";
import Iconify from "../../components/Iconify";
import { useNavigate, useLocation } from "react-router-dom";
import { palette } from "../../utils/palette";

const drawerWidth = 240;

function DrawerAppBar(props) {
  //get pathname
  const location = useLocation();

  //responsive drawer
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //open drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //navigate to  /
  const navigate = useNavigate();
  const _gotoHome = () => navigate("/");

  //menu list
  const navItems = [
    {
      title: "HOME",
      pathName: "/home",
      action: _gotoHome,
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
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box mt={2} mb={1}>
        <Link onClick={_gotoHome} sx={{ cursor: "pointer" }}>
          <img width={165} src="./petani-code.svg" />
        </Link>
      </Box>
      <Divider />
      <List>
        {navItems.map((item, idx) => (
          <ListItem key={idx}>
            <ListItemButton
              onClick={() => navigate(item.pathName)}
              sx={{ textAlign: "center", color: "blue" }}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        py: { xs: 1, sm: 2, md: 3 },
        marginBottom: -3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white",
          px: { xs: 1, sm: "104px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: { sm: "none" },
            position: "fixed",
            zIndex: 99,
            top: "50%",
            backgroundColor: "#40BFFF",
            opacity: 0.5,
            borderRadius: "0px 4px 4px 0px",
          }}
        >
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ marginLeft: 0.1, opacity: 1 }}
          >
            <Iconify icon="heroicons-solid:menu-alt-2" color="white" />
          </IconButton>
        </Box>

        <Box
          component="div"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <Link onClick={_gotoHome} sx={{ cursor: "pointer" }}>
            <img width={165} src="./petani-code.svg" />
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "none", md: "flex", gap: 60 } }}>
          {navItems.map((item, idx) => (
            <Link
              onClick={() => navigate(item.pathName)}
              underline="none"
              key={idx}
              sx={{
                color:
                  item.pathName === location.pathname
                    ? palette.blue
                    : palette.black,
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "SFProDisplay",
                cursor: "pointer",
                "&:hover": {
                  color: "#40BFFF",
                },
              }}
            >
              {item.title}
            </Link>
          ))}
        </Box>
      </Box>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
