import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "./List";
import { palette } from "../../utils/palette";
import { UserContext } from "../../core/userContext";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: { xs: 1, sm: 3 } }}>{children}</Box>}
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
  const { orderItems, setOrderItems } = React.useContext(UserContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const newOrderItems = orderItems?.map((item, idx) => {
    const stat = item.status;
    return {
      ...item,
      index:
        stat === "pending"
          ? 0
          : stat === "waiting_for_confirmation"
          ? 1
          : stat === "packed"
          ? 2
          : stat === "sent"
          ? 3
          : stat === "done"
          ? 4
          : 5,
    };
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setValue(0);
  }, []);

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

          {newOrderItems?.map((item, idx) => {
            return (
              <TabPanel key={idx} value={value} index={item.index}>
                <List value={item} />
              </TabPanel>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
