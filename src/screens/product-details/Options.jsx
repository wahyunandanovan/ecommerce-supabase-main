import {
  Box,
  Rating,
  Stack,
  Typography,
  Link,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

const Container = ({ children }) => {
  return (
    <Stack spacing={2} sx={{ py: 2, borderBottom: "2px solid #F6F7F8" }}>
      {children}
    </Stack>
  );
};

export default function Options({ name, price, rating }) {
  const color = ["#006CFF", "#FC3E39", "#171717", "#FFF600"];
  const [selectedColor, setSelectedColor] = React.useState(color[0]);

  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
            {price}
          </Typography>
          <Typography color="#9098B1" fontSize={{ xs: "12px", sm: "16px" }}>
            <s> $534,33</s>{" "}
            <span style={{ color: "#FB7181", fontWeight: "700" }}>24% Off</span>
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
            <Typography fontWeight="400">Accessories</Typography>
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
                    onClick={() => setSelectedColor(item)}
                    sx={{
                      borderRadius: "50%",
                      border:
                        item === selectedColor ? `2px solid ${item}` : "none",
                      padding: "1px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        height: item === selectedColor ? 15 : 16,
                        width: item === selectedColor ? 15 : 16,
                        borderRadius: "50%",
                        backgroundColor: item,
                      }}
                    />
                  </Link>
                );
              })}
            </Stack>
            <Select size="small" value={age} onChange={handleChange}>
              <MenuItem value={10}>XS</MenuItem>
              <MenuItem value={20}>S</MenuItem>
              <MenuItem value={30}>L</MenuItem>
              <MenuItem value={40}>XL</MenuItem>
              <MenuItem value={50}>XXL</MenuItem>
            </Select>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
