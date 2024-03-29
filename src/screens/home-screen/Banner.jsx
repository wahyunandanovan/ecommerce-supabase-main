import React from "react";
//component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Link, Stack, Typography } from "@mui/material";
//utility and hook
import { formatDollar, percentage } from "../../utils";
import useFetch from "../../hooks/useFetch";

export default function Banner() {
  const { items: thumbnail } = useFetch({
    module: "thumbnails",
  });

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
          <img src="./images/banner1.jpg" loading="lazy" />
        </div>
        <div>
          <img src="./images/banner2.jpg" loading="lazy" />
        </div>
        <div>
          <img src="./images/banner3.jpg" loading="lazy" />
        </div>
      </Carousel>
      <Box display="flex" justifyContent="center">
        <Stack
          display={{ xs: "none", sm: "none", md: "flex" }}
          spacing={0.5}
          direction="row"
          justifyContent="center"
          sx={{
            position: "absolute",
            top: "87%",
            zIndex: 99,
          }}
        >
          {thumbnail?.map((item, idx) => {
            return (
              <Box
                key={idx}
                className="zoom"
                component={Link}
                underline="none"
                p={3.5}
                width="382px"
                height="332px"
                textAlign="center"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                sx={{
                  backgroundImage: `url(${item.images})`,
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
                  <Typography variant="h3" color="#40BFFF">
                    {formatDollar(item?.price)}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" color="#9098B1" mt={2}>
                    <s>{formatDollar(item?.starting_price)}</s>
                    <span style={{ color: "#FB7181" }}>
                      {" "}
                      {item.discount}% Off
                    </span>
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}
