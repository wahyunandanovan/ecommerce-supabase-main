import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function BestSeller() {
  const category = ["All", "Bags", "Sneakers", "Belt", "Sunglasses "];
  const [selected, setSelected] = React.useState(category[0]);

  const _onSelect = (item) => {
    setSelected(item);
  };

  return (
    <Box maxWidth="xl" margin="auto" p={16} mt={{ xs: -4, sm: 2, md: 26 }}>
      <Typography variant="h3" textAlign="center">
        Best Seller
      </Typography>
      <Stack
        mt={4}
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
    </Box>
  );
}
