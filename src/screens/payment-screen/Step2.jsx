import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import BasicInput from "../../components/input/BasicInput";
import { palette } from "../../utils/palette";

export default function Step2({ handleNext }) {
  return (
    <Box sx={{ width: "100%", margin: "auto" }}>
      <Box
        sx={{
          p: { xs: 2, sm: 12 },
          border: { xs: "none", sm: "1px solid #ccc" },
          borderRadius: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            width="50%"
            margin="auto"
            display={{ xs: "none", sm: "none", md: "flex" }}
          >
            <img src="/images/credit-card.svg" alt="credit-card" />
          </Box>
          <Box width={{ xs: "100%", sm: "100%", md: "50%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <BasicInput
                  title="Card Number"
                  placeholder="Enter Your Card Number"
                />
              </Grid>
              <Grid item xs={6}>
                <BasicInput title="Expiry" placeholder="Enter Expiry" />
              </Grid>
              <Grid item xs={6}>
                <BasicInput title="CVV" placeholder="Enter CVV" />
              </Grid>
              <Grid item xs={12}>
                <BasicInput title="Holder Number" placeholder="Holder Number" />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Checkbox />
                  <Typography ml={2} color="#999999" fontSize="14px">
                    Save this credit card
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
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
              Confirm
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
