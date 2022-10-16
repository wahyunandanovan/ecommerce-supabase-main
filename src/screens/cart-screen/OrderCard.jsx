import { Card, Typography, Box, Stack, Link } from "@mui/material";
import Button from "../../components/Button";
import { formatDollar } from "../../utils";
import React from "react";
import Iconify from "../../components/Iconify";
import { CartContext } from "../../core/cartContext";

export default function OrderCard() {
  const { order, setOrder } = React.useContext(CartContext);

  //get total price logic
  const totalPrice = order?.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  React.useEffect(() => {
    setOrder([]);
  }, []);

  return (
    <Box mt={5} mb={8} display="block" justifyContent="center">
      <Card
        sx={{
          p: 2,
          boxShadow: "0 1px 6px 0 var(--color-shadow,rgba(49,53,59,0.12))",
          borderRadius: "12px",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            p: 1,
            mb: 4,
            width: "100%",
            border: "2px solid #F6F7F8",
            alignItems: "center",
            borderRadius: 2,
            backgroundColor: "ghostwhite",
            cursor: "pointer",
          }}
        >
          <Box display="flex" gap={1} alignItems="center">
            <Iconify
              icon="ps:promo"
              color="#03ac0e"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontSize={18}>Using Promos</Typography>
          </Box>

          <Iconify
            icon="fluent:chevron-circle-right-28-regular"
            color="#03ac0e"
            sx={{ width: 30, height: 30 }}
          />
        </Box>
        <Typography variant="h5">Detail Order :</Typography>
        <Stack
          spacing={0.5}
          sx={{ my: 2, pb: 2, borderBottom: "2px solid #F6F7F8" }}
        >
          {order?.length < 1 && (
            <Box textAlign="center" py={2}>
              <Iconify
                color="#ccc"
                icon="carbon:document-blank"
                sx={{ width: 32, height: 32 }}
              />
              <Typography variant="h5" color="#ccc">
                No Product Selected
              </Typography>
            </Box>
          )}
          {order?.map((item, idx) => {
            return (
              <Box key={idx} display="flex" justifyContent="space-between">
                <Typography color="#8d96aa" fontSize={15}>
                  {`Total Price(${item.quantity} items)`}
                </Typography>
                <Typography key={idx} color="#8d96aa" fontSize={15}>
                  {formatDollar(item.price * item.quantity)}
                </Typography>
              </Box>
            );
          })}
        </Stack>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5">Total Price :</Typography>
          <Typography variant="h5">{formatDollar(totalPrice)}</Typography>
        </Box>
        <Box mt={2}>
          <Button
            size="large"
            disabled={order?.length < 1}
            fullWidth
            title="Checkout"
          />
        </Box>
      </Card>
    </Box>
  );
}
