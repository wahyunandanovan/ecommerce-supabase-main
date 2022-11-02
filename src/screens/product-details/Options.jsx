import React from "react";
//@MUI
import {
  Box,
  Rating,
  Stack,
  Typography,
  Link,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
//component
import CounterButton from "../../components/CounterButton";
import Iconify from "../../components/Iconify";
//utility
import { formatDollar } from "../../utils";
import { UserContext } from "../../core/userContext";

const Container = ({ children }) => {
  return (
    <Stack spacing={2} sx={{ py: 2, borderBottom: "2px solid #F6F7F8" }}>
      {children}
    </Stack>
  );
};

export default function Options({
  name,
  price,
  startingPrice,
  discount,
  rating,
  addTocart,
  onAdd,
  onMin,
  color,
  count,
  sizes,
}) {
  //select color
  const { selectedColor, setSelectedColor } = React.useContext(UserContext);

  //select size
  const { selectedSize, setSelectedSize } = React.useContext(UserContext);
  const [size, setSize] = React.useState(0);
  const handleChange = (event, value) => {
    setSize(event.target.value);
    setSelectedSize(value.props.children);
  };

  //set like
  const [isLiked, setIsLiked] = React.useState(false);
  const _onLiked = () => {
    setIsLiked(!isLiked);
  };

  React.useEffect(() => {
    setSelectedColor(color[0].name);
    setSelectedSize(sizes[0]);
  }, []);

  return (
    <Box>
      <Container>
        <Typography mt={-2} variant="h4">
          {name}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Rating value={rating} size="small" sx={{ alignItems: "center" }} />
          <Typography color="#C1C8CE">0 reviews</Typography>
          <Typography component={Link} underline="none" color="#33A0FF">
            Submit a review
          </Typography>
        </Stack>
      </Container>
      <Container>
        <Stack direction="row" spacing={2}>
          <Typography variant="h5" color="primary">
            {formatDollar(price)}
          </Typography>
          <Typography color="#9098B1" fontSize={{ xs: "12px", sm: "16px" }}>
            <s>{formatDollar(startingPrice)}</s>{" "}
            <span style={{ color: "#FB7181", fontWeight: "700" }}>
              {discount}% Off
            </span>
          </Typography>
        </Stack>
        <Box display="flex" justifyContent="space-between" maxWidth={260}>
          <Stack spacing={1}>
            <Typography fontWeight="400">Availability:</Typography>
            <Typography fontWeight="400">Category:</Typography>
            <Typography fontWeight="400">Free Shiping:</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography fontWeight="400">In stock</Typography>
            <Typography fontWeight="400">Casual</Typography>
            <Typography fontWeight="400"></Typography>
          </Stack>
        </Box>
      </Container>
      <Container>
        <Box display="flex" justifyContent="space-between" maxWidth={260}>
          <Stack spacing={1}>
            <Typography fontWeight="400">Select Color:</Typography>
            <Typography fontWeight="400">Size:</Typography>
          </Stack>
          <Stack spacing={1}>
            <Stack direction="row" spacing={1}>
              {color.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    onClick={() => setSelectedColor(item.name)}
                    sx={{
                      borderRadius: "50%",
                      border:
                        item.name === selectedColor
                          ? `2px solid #385c8e`
                          : "1px solid #ccc",
                      padding: "1px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        height: item.name === selectedColor ? 15 : 16,
                        width: item.name === selectedColor ? 15 : 16,
                        borderRadius: "50%",
                        backgroundColor: item.name,
                      }}
                    />
                  </Link>
                );
              })}
            </Stack>
            <Select size="small" value={size} onChange={handleChange}>
              {sizes?.map((item, idx) => {
                return (
                  <MenuItem key={idx} value={idx}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </Stack>
        </Box>
      </Container>
      <Container>
        <Box display="flex" justifyContent="space-between">
          <CounterButton onMin={onMin} onAdd={onAdd} count={count} />
          <Box display="flex" gap={2} alignItems="center">
            <Box
              onClick={addTocart}
              height="46px"
              backgroundColor="#F6F7F8"
              display="flex"
              borderRadius="4px"
              alignItems="center"
              component={Button}
              gap={1}
              px={2}
            >
              <Iconify icon="akar-icons:cart" sx={{ width: 18, height: 18 }} />
              <Typography
                fontSize={14}
                color="#33A0FF"
                fontWeight="500"
                fontFamily="SFProDisplay"
              >
                Add To Cart
              </Typography>
            </Box>
            <Box
              height="46px"
              backgroundColor="#F6F7F8"
              borderRadius="4px"
              alignItems="center"
              component={Button}
              onClick={_onLiked}
              sx={{ p: "-4px !important", m: 0 }}
            >
              {!isLiked ? (
                <Iconify
                  icon="ant-design:heart-outlined"
                  sx={{ width: 18, height: 18 }}
                />
              ) : (
                <Iconify
                  icon="ant-design:heart-filled"
                  color="#FC3E39"
                  sx={{ width: 18, height: 18 }}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Container>
      <Box display="flex" py={2} justifyContent="space-between">
        <Button sx={{ p: 0, m: 0 }}>
          <img
            src="/images/share-fb.svg"
            className="img-share"
            alt="share-fb"
          />
        </Button>
        <Button sx={{ p: 0, m: 0 }}>
          <img
            src="/images/share-twiter.svg"
            className="img-share"
            alt="share-tw"
          />
        </Button>
      </Box>
    </Box>
  );
}
