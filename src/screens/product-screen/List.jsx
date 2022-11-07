import React from "react";
//contex
import { UserContext } from "../../core/userContext";
//@MUI
import { Box, Checkbox, Grid, Rating, Stack, Typography, useMediaQuery } from "@mui/material";
//component
import Loading from "../../components/Loading";
import FadeInBox from "../../components/FadeInBox";
import Promotions from "./Promotions";
import BestSellerSkeleton from "../../components/skeleton/BestSellerSkeleton";
//utility
import { formatDollar } from "../../utils";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import usePost from "../../hooks/usePost";
import useUpdate from "../../hooks/useUpdate";

function List() {
  const matches = useMediaQuery("(max-width:600px)");

  //get from api
  const { items: product, isLoading } = useFetch({
    module: "products",
  });

  const { items: category } = useFetch({
    module: "category",
  });

  const ratings = [1, 2, 3, 4, 5];

  //state for selected card
  const [selectedCard, setSelectedCard] = React.useState(null);

  //get width screen
  const width = screen.width / 2 - 24;

  //on hover card
  const _onHover = (e) => {
    setSelectedCard(e);
  };

  //navigation
  const navigate = useNavigate();

  //get storage
  const user = localStorage.getItem("sb-user-id");

  //push cart
  const { cartItems, setCartItems } = React.useContext(UserContext);

  const [productName, setProductName] = React.useState(null);

  const mutation = usePost({ module: "cart" });

  const update = useUpdate({ module: "cart", key: "name", value: productName });

  const _pushCart = async (item) => {
    if (user) {
      await setProductName(item.name);
      const user_id = localStorage.getItem("sb-user-id");
      const body = {
        name: item.name,
        image: item.images,
        category_id: item.category_id,
        quantity: 1,
        price: item.price,
        starting_price: item.starting_price,
        discount: item.discount,
        total: item.price,
        color: item.colors[0].name,
        size: item.sizes[0],
        description: item.description,
        user_id: user_id,
      };
      mutation.mutate(body);
    } else {
      navigate("/auth/signin");
    }
  };

  return (
    <>
      <Box display={matches ? "block" : "flex"} gap={3}>
        {!matches && (
          <Box width="500px" pt={3}>
            <Typography variant="h3" mb={2}>
              Filter Product
            </Typography>
            <Stack spacing={3}>
              <Box py={2}>
                <Typography fontWeight="600">Category</Typography>
                {category?.map((item, idx) => {
                  return (
                    <Box key={idx} style={{ alignItems: "center", display: "flex" }}>
                      <Checkbox />
                      <Typography>{item.name}</Typography>
                    </Box>
                  );
                })}
              </Box>
              <Box py={2}>
                <Typography fontWeight="600">Rating</Typography>
                {ratings?.map((item, idx) => {
                  return (
                    <Box key={idx} style={{ alignItems: "center", display: "flex" }}>
                      <Checkbox />
                      <Rating readOnly value={item} />
                    </Box>
                  );
                })}
              </Box>
            </Stack>
          </Box>
        )}

        <Box pt={{ xs: 0, sm: 3 }} sx={{ mb: 8 }}>
          <Promotions />
          <Box mt={2} textAlign="-webkit-center">
            {isLoading && matches && <BestSellerSkeleton />}
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {product?.map((item, index) => (
                <Grid item xs={6} sm={4} md={4} key={index}>
                  <Box
                    onMouseEnter={() => _onHover(item)}
                    onMouseLeave={() => setSelectedCard(null)}
                    sx={{
                      height: { xs: "296px", sm: "392px" },
                      width: { xs: width, sm: "293px" },
                      border: "3px solid #F6F7F8",
                      borderRadius: "8px",
                      overflow: "hidden",
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <FadeInBox
                      fadein={item === selectedCard ? true : false}
                      onCart={() => _pushCart(item)}
                      to={`/product-details?product_id=${item.id}`}
                    />
                    <Box
                      component="img"
                      width="inherit"
                      src={item.images}
                      loading="lazy"
                      alt="relatte-product"
                      style={{ maxHeight: 265, width: "inherit" }}
                    />

                    <Box py={1}>
                      <Typography variant="h5">{item.name}</Typography>
                      <Rating value={item.rating} sx={{ my: 1 }} />
                      <Stack direction="row" spacing={1} sx={{ justifyContent: "center", alignItems: "center" }}>
                        <Typography variant="h5" color="primary">
                          {formatDollar(item.price)}
                        </Typography>
                        <Typography color="#9098B1" fontSize={{ xs: "12px", sm: "16px" }}>
                          <s>{formatDollar(item.starting_price)}</s>{" "}
                          <span style={{ color: "#FB7181" }}> {item.discount}% Off</span>
                        </Typography>
                      </Stack>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Loading visible={mutation.isLoading || update.isLoading} />
        </Box>
      </Box>
    </>
  );
}

export default React.memo(List);
