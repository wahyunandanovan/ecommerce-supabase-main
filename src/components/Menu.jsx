import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import * as React from "react";
import Iconify from "./Iconify";

export default function CustomMenu({ menuTitle }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box display="flex" alignItems="center">
      <Typography
        color="#262626"
        fontSize={20}
        fontWeight="500"
        fontStyle="Proxima Nova"
      >
        {menuTitle}
      </Typography>
      <IconButton onClick={handleClick}>
        <Iconify icon="gridicons:dropdown" color="#22262A" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
