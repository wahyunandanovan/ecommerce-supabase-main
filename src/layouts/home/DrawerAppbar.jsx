import * as React from "react";
import PropTypes from "prop-types";
//@MUI
import {
  Link,
  Typography,
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

const drawerWidth = 240;
const navItems = ["HOME", "ABOUT", "CONTACT", "SETTING", "OTHER"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton sx={{ textAlign: "center", color: "blue" }}>
              <ListItemText primary={item} />
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
          <img src="./logo.png" />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "none", md: "flex", gap: 60 } }}>
          {navItems.map((item) => (
            <Link
              underline="none"
              key={item}
              sx={{
                color: "#000",
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "SFProDisplay",
                cursor: "pointer",
              }}
            >
              {item}
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
