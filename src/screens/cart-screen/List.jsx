import {
  Box,
  Checkbox,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import CounterButton from "../../components/CounterButton";
import Iconify from "../../components/Iconify";
import { CartContext } from "../../core/cartContext";
import { formatDollar } from "../../utils";
import OrderCard from "./OrderCard";

export default function List() {
  const { selectedProduct, setSelectedProduct } = React.useContext(CartContext);
  const { order, setOrder } = React.useContext(CartContext);
  const [count, setCount] = React.useState(0);

  //increment
  const _addQty = async (item, idx) => {
    let initQty = item?.quantity + 1;
    let newItems = {
      ...item,
      quantity: item?.quantity + 1,
      total: item.price * initQty,
    };
    const checkIdx = order.findIndex((v) => {
      return v.id === item.id;
    });
    if (checkIdx != -1) {
      order[checkIdx] = newItems;
    }
    selectedProduct[idx] = newItems;
    setCount(count + 1);
  };
  //increment
  const _minQty = async (item, idx) => {
    let initQty = item?.quantity - 1;

    let newItems = {
      ...item,
      quantity: item?.quantity - 1,
      total: item.price * initQty,
    };
    const checkIdx = order.findIndex((v) => {
      return v.id === item.id;
    });
    if (checkIdx != -1) {
      order[checkIdx] = newItems;
    }

    selectedProduct[idx] = newItems;
    setCount(count - 1);
  };
  //checked product
  const _onChecked = (bool, item, idx) => {
    let newItems = {
      ...item,
      isOrder: bool,
    };
    selectedProduct[idx] = newItems;
    const filter = selectedProduct.filter((product) => {
      return product.isOrder === true;
    });
    setOrder(filter);
  };
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={8}>
          <Box mb={2}>
            <Typography variant="h5">Your Cart :</Typography>
            <Box mt={2} sx={{ borderTop: "2px solid #F6F7F8" }}>
              {selectedProduct.map((item, idx) => {
                return (
                  <Box
                    key={idx}
                    sx={{ py: 2, borderBottom: "2px solid #F6F7F8" }}
                  >
                    <Stack direction="row" spacing={2}>
                      <Box display="flex" alignItems="center">
                        <Checkbox
                          onChange={(e, i) => _onChecked(i, item, idx)}
                          color="success"
                          sx={{ mr: 1 }}
                        />
                        <img
                          width={69}
                          height={69}
                          src={item.uri}
                          alt="product"
                          style={{ borderRadius: 10 }}
                        />
                      </Box>
                      <Box>
                        <Typography mb={1}>{item.name}</Typography>
                        <Typography variant="h5" color="primary">
                          {formatDollar(item.price)}
                        </Typography>
                      </Box>
                    </Stack>
                    <Box
                      mt={1}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Link
                        ml={6}
                        underline="none"
                        color="green"
                        sx={{ cursor: "pointer", fontSize: 14 }}
                      >
                        Note
                      </Link>
                      <Stack direction="row" spacing={2}>
                        <Box display="flex" alignItems="center">
                          <IconButton>
                            <Iconify
                              icon="fluent:arrow-move-20-regular"
                              color="green"
                              sx={{
                                width: 18,
                                display: { xs: "flex", sm: "none" },
                              }}
                            />
                          </IconButton>
                          <Link
                            ml={6}
                            underline="none"
                            color="#8d96aa"
                            sx={{
                              cursor: "pointer",
                              fontSize: 14,
                              display: { xs: "none", sm: "flex" },
                            }}
                          >
                            Move to wishlist{" "}
                            <span style={{ marginLeft: 10 }}>|</span>
                          </Link>

                          <Tooltip title="Delete">
                            <IconButton>
                              <Iconify
                                icon="fluent:delete-12-regular"
                                color="#FC3E39"
                                sx={{ width: 18 }}
                              />
                            </IconButton>
                          </Tooltip>
                        </Box>
                        <CounterButton
                          variant="small"
                          count={item.quantity}
                          onAdd={() => _addQty(item, idx)}
                          onMin={() => _minQty(item, idx)}
                        />
                      </Stack>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <OrderCard />
        </Grid>
      </Grid>
    </div>
  );
}