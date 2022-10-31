import { Box, Button, Checkbox, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import BasicInput from "../../components/input/BasicInput";
import Loading from "../../components/Loading";
import usePost from "../../hooks/usePost";
import { palette } from "../../utils/palette";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../core/userContext";

export default function Step2({ handleNext }) {
  const { order, setOrder } = React.useContext(UserContext);

  const location = useLocation();
  console.log("locaa", location);

  const mutation = usePost({ module: "order" });

  const totalPrice = order.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  const _handleOrder = () => {
    const body = {
      total: totalPrice,
      items: "lll",
      note: "haiii",
    };
    mutation.mutateAsync(body);
  };

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
          <Box width="50%" margin="auto" display={{ xs: "none", sm: "none", md: "flex" }}>
            <img src="/images/credit-card.svg" alt="credit-card" />
          </Box>
          <Box width={{ xs: "100%", sm: "100%", md: "50%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <BasicInput title="Card Number" placeholder="Enter Your Card Number" defaultValue="123 456 789 1011" />
              </Grid>
              <Grid item xs={6}>
                <BasicInput title="Expiry" placeholder="Enter Expiry" defaultValue="12/22" />
              </Grid>
              <Grid item xs={6}>
                <BasicInput title="CVV" placeholder="Enter CVV" defaultValue="192" />
              </Grid>
              <Grid item xs={12}>
                <BasicInput title="Holder Number" placeholder="Holder Number" defaultValue="123" />
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
            onClick={_handleOrder}
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
      <Loading visible={mutation.isLoading} />
    </Box>
  );
}
