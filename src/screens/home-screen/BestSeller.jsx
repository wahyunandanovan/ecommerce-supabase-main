import React from "react";
//contex
import { UserContext } from "../../core/UserContext";
//@MUI
import { Box, Grid, Link, Rating, Stack, Typography } from "@mui/material";
import SectionContainer from "../../layouts/containers/SectionContainer";
import FadeInBox from "../../components/FadeInBox";
import { useNavigate } from "react-router-dom";
import { formatDollar, setStorage } from "../../utils";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";
import usePost from "../../hooks/usePost";
import useUpdate from "../../hooks/useUpdate";

export default function BestSeller() {
  const { items } = useFetch({
    module: "products",
  });

  //category array
  const category = ["All", "Bags", "Sneakers", "Belt", "Sunglasses "];

  //state for category
  const [selected, setSelected] = React.useState(category[0]);

  //function to select category
  const _onSelect = (item) => {
    setSelected(item);
  };
  //state for selected card
  const [selectedCard, setSelectedCard] = React.useState(null);

  //get width screen
  const width = screen.width / 2 - 16;

  //on hover card
  const _onHover = (e) => {
    setSelectedCard(e);
  };

  //on detail product
  const navigate = useNavigate();
  const _onDetail = (item) => navigate("/product-details", { state: { item } });

  //push cart
  const { cartItems, setCartItems } = React.useContext(UserContext);
  const [productName, setProductName] = React.useState(null);
  const mutation = usePost({ module: "cart" });
  const update = useUpdate({ module: "cart", key: "name", value: productName });

  const _pushCart = async (item) => {
    await setProductName(item.name);
    const user_id = localStorage.getItem("sb-user-id");
    const body = {
      name: item.name,
      image: item.images,
      category_id: item.category_id,
      quantity: 1,
      price: item.price,
      amount_price: item.amount_price,
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
  };

  return (
    <SectionContainer title="BEST SELLER" mt={{ xs: 4, sm: 4, md: 40 }} pt={3}>
      <Loading visible={false} />
      <Stack direction="row" spacing={{ xs: 3, sm: 5, md: 7 }} justifyContent="center">
        {category.map((item, idx) => {
          return (
            <Box
              key={idx}
              component={Link}
              onClick={() => _onSelect(item)}
              underline="none"
              sx={{
                borderBottom: item === selected ? "2px solid #40BFFF" : "none",
                cursor: "pointer",
              }}
            >
              <Typography
                color={item === selected ? "#40BFFF" : ""}
                fontSize={{ xs: 16, sm: 18, md: 18 }}
                fontWeight="600"
              >
                {item}
              </Typography>
            </Box>
          );
        })}
      </Stack>
      <Box mt={{ xs: 1, sm: 3, md: 4 }} px={{ xs: 1, sm: 4, md: 6 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {items?.map((item, index) => (
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
                  onDetail={() => _onDetail(item)}
                  onCart={() => _pushCart(item)}
                />
                <img src={item.images} alt="best-seller" loading="lazy" style={{ maxHeight: 265, width: "inherit" }} />

                <Box py={1}>
                  <Typography variant="h5">{item.name}</Typography>
                  <Rating value={item.rating} sx={{ my: 1 }} />
                  <Stack direction="row" spacing={1} sx={{ justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h5" color="primary">
                      {formatDollar(item.price)}
                    </Typography>
                    <Typography color="#9098B1" fontSize={{ xs: "12px", sm: "16px" }}>
                      <s>{formatDollar(item.amount_price)}</s>{" "}
                      <span style={{ color: "#FB7181" }}>{item.discount}% Off</span>
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mt={{ xs: 1, sm: 3 }} textAlign="center">
        <Link
          sx={{
            fontSize: { xs: 16, sm: 18, md: 18 },
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          LOAD MORE
        </Link>
      </Box>
      <Loading visible={mutation.isLoading | update.isLoading} />
    </SectionContainer>
  );
}
