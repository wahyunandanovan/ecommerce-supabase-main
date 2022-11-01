import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grow } from "@mui/material";
import List from "./List";
import { palette } from "../../utils/palette";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function OrderScreen() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor="#F6F7F8"
        display="flex"
        justifyContent="center"
        p={1}
        mt={{ xs: 2.5, sm: 5 }}
        mb={{ xs: 2, sm: 4 }}
      >
        <Typography color="#33A0FF" fontWeight="400">
          Home/Order
        </Typography>
      </Box>
      <Box maxWidth="xl" margin="auto" px={{ xs: 1, sm: 14 }} py={{ xs: 3, sm: 8 }}>
        <Box
          sx={{
            width: "100%",
            borderRadius: 2,
            border: "1px solid #e0e0e0",
            minHeight: 400,
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} variant="scrollable">
              <Tab label="Waiting for payment" {...a11yProps(0)} sx={{ fontWeight: "500", color: palette.black }} />
              <Tab
                label="Waiting for confirmation"
                {...a11yProps(1)}
                sx={{ fontWeight: "500", color: palette.black }}
              />
              <Tab label="Packed" {...a11yProps(2)} sx={{ fontWeight: "500", color: palette.black }} />
              <Tab label="Sent" {...a11yProps(3)} sx={{ fontWeight: "500", color: palette.black }} />
              <Tab label="Done" {...a11yProps(4)} sx={{ fontWeight: "500", color: palette.black }} />
              <Tab label="Rejected" {...a11yProps(5)} sx={{ fontWeight: "500", color: palette.black }} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <List />
          </TabPanel>
          <TabPanel value={value} index={1}>
            {caption2}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {caption1}
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}

let caption1 =
  "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.";
let caption2 =
  "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.";
