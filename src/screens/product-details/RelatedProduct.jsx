import React from "react";
//contex
import { CartContext } from "../../core/cartContext";
//@MUI
import { Box, Grid, Link, Rating, Stack, Typography } from "@mui/material";
import SectionContainer from "../../layouts/containers/SectionContainer";
import { relateProduct } from "../../utils/data";
import FadeInBox from "../../components/FadeInBox";
import { useNavigate } from "react-router-dom";

export default function RelatedProduct() {
  const { selectedProduct, setSelectedProduct } = React.useContext(CartContext);
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

  const navigate = useNavigate();
  const _onDetail = async (item) => {
    await navigate("/product-details", { state: { item } });
    window.scrollTo(0, 0);
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
          {relateProduct.map((item, index) => (
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
                />
                <Box component="img" width="inherit" src={item.uri} />

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
    </SectionContainer>
  );
}
