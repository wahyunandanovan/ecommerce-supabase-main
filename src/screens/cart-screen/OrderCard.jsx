import React from "react";
//@MUI
import { Card, Typography, Box, Stack } from "@mui/material";
//components
import Button from "../../components/Button";
import Iconify from "../../components/Iconify";
//utility
import { formatDollar } from "../../utils";
import { UserContext } from "../../core/userContext";
import { useNavigate } from "react-router-dom";
import usePost from "../../hooks/usePost";
import useDelete from "../../hooks/useDelete";
import supabase from "../../core/supabase";

export default function OrderCard() {
  const { order, setOrder } = React.useContext(UserContext);

  const getId = order.map((v) => {
    return v.id;
  });

  //get total price logic
  const totalPrice = order?.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  //set initial order
  React.useEffect(() => {
    setOrder([]);
  }, []);

  //go to payment
  const navigate = useNavigate();
  const mutation = usePost({ module: "order" });
  const deleteMutation = (id) => useDelete({ module: "cart", key: "id", value: id }).mutate;

  const _hadleCheckout = async () => {
    const body = {
      total: totalPrice,
      items: order,
    };
    for (let i = 0; i < getId.length; i++) {
      const el = getId[i];
      const { data, error } = await supabase.from("cart").delete().eq("id", el);
    }
    mutation.mutateAsync(body).then(navigate("/payment", { state: order }));
  };

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
            <Iconify icon="ps:promo" color="#03ac0e" sx={{ width: 30, height: 30 }} />
            <Typography fontSize={18}>Using Promos</Typography>
          </Box>
          <Iconify icon="fluent:chevron-circle-right-28-regular" color="#03ac0e" sx={{ width: 30, height: 30 }} />
        </Box>
        <Typography variant="h5">Detail Order :</Typography>
        <Stack spacing={0.5} sx={{ my: 2, pb: 2, borderBottom: "2px solid #F6F7F8" }}>
          {order?.length < 1 && (
            <Box textAlign="center" py={2}>
              <Iconify color="#ccc" icon="carbon:document-blank" sx={{ width: 32, height: 32 }} />
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
          <Button onClick={_hadleCheckout} size="large" disabled={order?.length < 1} fullWidth title="Checkout" />
        </Box>
      </Card>
    </Box>
  );
}
