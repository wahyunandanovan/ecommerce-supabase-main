import React from "react";
//contex
import { UserContext } from "../../core/userContext";
//@MUI
import { Box, Grid, Link, Rating, Stack, Typography } from "@mui/material";
//component
import SectionContainer from "../../layouts/containers/SectionContainer";
import Loading from "../../components/Loading";
import FadeInBox from "../../components/FadeInBox";
//utility
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import usePost from "../../hooks/usePost";
import useUpdate from "../../hooks/useUpdate";

export default function RelatedProduct() {
  //get from api
  const { items: product } = useFetch({
    module: "products",
  });

  const relateProduct = product?.slice(0, 4);

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
        color: item.colors[0],
        size: item.sizes[0],
        description: item.description,
        user_id: user_id,
      };
      const find = await cartItems.find((v) => {
        return v.name === item.name;
      });
      if (find) {
        const initQty = find.quantity + 1;
        update.mutate({
          ...find,
          quantity: initQty,
          total: find.price * initQty,
        });
      } else {
        mutation.mutate(body);
      }
    } else {
      navigate("/auth/signin");
    }
  };

  return (
    <SectionContainer
      title="RELATED PRODUCT"
      pt={3}
      sx={{ mb: 8 }}
      mt={{ xs: 2, sm: 8 }}
    >
      <Stack
        direction="row"
        spacing={{ xs: 3, sm: 5, md: 7 }}
        justifyContent="center"
      ></Stack>
      <Box mt={{ xs: 1, sm: 3, md: 4 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {relateProduct?.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
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
                <Box component="img" width="inherit" src={item.images} />

                <Box py={1}>
                  <Typography variant="h5">{item.name}</Typography>
                  <Rating value={item.rating} sx={{ my: 1 }} />
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Typography variant="h5" color="primary">
                      {item.price}
                    </Typography>
                    <Typography
                      color="#9098B1"
                      fontSize={{ xs: "12px", sm: "16px" }}
                    >
                      <s> $534,33</s>{" "}
                      <span style={{ color: "#FB7181" }}>24% Off</span>
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Loading visible={mutation.isLoading || update.isLoading} />
    </SectionContainer>
  );
}
