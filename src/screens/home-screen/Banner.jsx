import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Link, Stack, Typography } from "@mui/material";

const saleProduct = [
  {
    name: "Nike Air Max 270 React",
    image: "./images/shoes1.svg",
    amountPrice: "$299,43",
    price: "$299,43",
    discount: "24%",
  },
  {
    name: "Nike Air Max 270 React",
    image: "./images/shoes2.svg",
    amountPrice: "$299,43",
    price: "$299,43",
    discount: "24%",
  },
  {
    name: "Nike Air Max 270 React",
    image: "./images/shoes3.svg",
    amountPrice: "$299,43",
    price: "$299,43",
    discount: "24%",
  },
];

export default function Banner() {
  return (
    <Box className="banner-wrapper" position="relative">
      <Carousel
        autoPlay
        infiniteLoop
        stopOnHover={false}
        swipeable
        emulateTouch
        transitionTime="2000"
        interval="7000"
        onSwipeEnd={() => console.log("onSwipeEnd")}
        onClickItem={(index) => console.log("click item", index)}
        showArrows={true}
        showThumbs={false}
      >
        <div>
          <img src="./images/banner2.jpg" />
        </div>
        <div>
          <img src="./images/banner3.jpg" />
        </div>
        <div>
          <img src="./images/banner1.jpg" />
        </div>
      </Carousel>
      <Stack
        display={{ xs: "none", sm: "none", md: "flex" }}
        spacing={0.5}
        direction="row"
        justifyContent="center"
        sx={{
          position: "absolute",
          top: "87%",
          left: { md: "3%", xl: "9%" },
          zIndex: 99,
        }}
      >
        {saleProduct.map((item, idx) => {
          return (
            <Box
              key={idx}
              className="zoom"
              component={Link}
              underline="none"
              p={3.5}
              width="417px"
              height="358px"
              textAlign="center"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              sx={{
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "transform .2s",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="start"
              >
                <Typography variant="h5" textAlign="left">
                  {item.name}
                </Typography>
                <Typography variant="h4" color="#40BFFF">
                  {item.price}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" color="#9098B1" mt={2}>
                  {item.amountPrice}
                  <span style={{ color: "#FB7181" }}> {item.discount} Off</span>
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
