import React from "react";
//@MUI
import { Box, Grid, Link, Rating, Stack, Typography } from "@mui/material";
import SectionContainer from "../../layouts/containers/SectionContainer";
import { bestSellerProduct } from "../../utils/data";
import FadeInBox from "../../components/FadeInBox";

export default function BestSeller() {
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

  return (
    <SectionContainer title="BEST SELLER" mt={{ xs: 4, sm: 4, md: 40 }} pt={3}>
      <Stack
        direction="row"
        spacing={{ xs: 3, sm: 5, md: 7 }}
        justifyContent="center"
      >
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
          {bestSellerProduct.map((item, index) => (
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
                <FadeInBox fadein={item === selectedCard ? true : false} />
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
    </SectionContainer>
  );
}
