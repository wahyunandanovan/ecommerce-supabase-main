import React from "react";
//@MUI
import {
  Box,
  Grid,
  Typography,
  Checkbox,
  Button,
  Divider,
} from "@mui/material";
//Component
import BasicInput from "../../components/input/BasicInput";
import Iconify from "../../components/Iconify";
import { palette } from "../../utils/palette";

const options = [
  {
    title: "E-Wallet",
    icon: "entypo:wallet",
  },
  {
    title: "Paypal",
    icon: "logos:paypal",
  },
  { title: "Transfer Bank", icon: "fluent:building-bank-20-regular" },
];

export default function Step1({ handleNext }) {
  const [paymentType, setPaymentType] = React.useState(options[0]);

  return (
    <Box sx={{ width: "100%", margin: "auto" }}>
      <Box
        sx={{
          p: { xs: 2, sm: 12 },
          border: { xs: "none", sm: "1px solid #ccc" },
          borderRadius: 1,
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 6 }}>
          <Grid item xs={12} sm={12} md={6}>
            <BasicInput
              title="First Name"
              placeholder="Enter Your First Name"
              defaultValue="wahyu nanda"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <BasicInput
              title="Last Name"
              placeholder="Enter Your Last Name"
              defaultValue="novan"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <BasicInput
              title="Email"
              type="email"
              placeholder="Enter Your Email"
              defaultValue="wahyunandanovan@gmail.com"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <BasicInput
              title="Phone Number"
              placeholder="Enter Your Phone Number"
              type="number"
              defaultValue="087756775084"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <BasicInput
              title="Address for Delivery"
              placeholder="Enter Your Address"
              defaultValue="dsn meikarta,kec antartika,tokyo,japan"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography mb={1} variant="h4" fontWeight="400" color="primary">
              Select Payment Method
            </Typography>
            {options.map((item, idx) => {
              return (
                <Box
                  key={idx}
                  p={1}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    backgroundColor: item === paymentType ? "#EBF0FF" : "white",
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <Iconify
                      icon={item.icon}
                      color={palette.blue}
                      sx={{ width: 20, height: 20 }}
                    />
                    <Typography ml={2} fontSize={14} fontWeight="600">
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography>
                    <Checkbox
                      checked={item === paymentType ? true : false}
                      onChange={() => setPaymentType(item)}
                    />
                  </Typography>
                </Box>
              );
            })}
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Box display="flex" justifyContent="center">
          <Button
            onClick={handleNext}
            color="primary"
            title=""
            sx={{
              backgroundColor: palette.blue,
              px: 4,
              py: 2,
              borderRadius: 2,
              "&:hover": {
                background: "#7bd0fb",
              },
            }}
          >
            <Typography variant="h5" color="white">
              Go to Payment
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
