import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      backgroundColor="#BCDDFE"
      p={{ xs: 2, sm: 4, md: 8 }}
      width="100%"
      maxWidth="xl"
      margin="auto"
    >
      <Grid container spacing={4}>
        {topList.map((item, idx) => {
          return (
            <Grid
              key={idx}
              item
              xs={4}
              sm={4}
              md={4}
              sx={{ display: "grid", justifyContent: "center" }}
            >
              <Box maxWidth={300}>
                <Typography variant="h5" fontWeight="600" my={0.5}>
                  {item.title}
                </Typography>
                <Typography
                  color="#22262A"
                  fontSize={{ xs: 12, sm: 14, md: 16 }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Grid container spacing={4} mt={{ xs: 2, sm: 4 }}>
        {bottomList.map((item, idx) => {
          return (
            <Grid
              key={idx}
              item
              xs={3}
              sm={3}
              md={3}
              sx={{ display: "grid", justifyContent: "center" }}
            >
              <Box maxWidth={300}>
                <Typography variant="h5" fontWeight="600" my={0.5}>
                  {item.title}
                </Typography>
                <Typography
                  color="#22262A"
                  fontSize={{ xs: 12, sm: 14, md: 16 }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box mt={{ xs: 2, sm: 8 }}>
        <Box sx={{ backgroundColor: "#F6F7F8", height: 1.5 }} />
        <Stack
          p={2}
          direction="row"
          spacing={{ xs: 1, sm: 3 }}
          justifyContent="end"
        >
          {card.map((item, idx) => {
            return (
              <img
                key={idx}
                src={item}
                alt="logos"
                width={{ xs: 22, sm: 40 }}
              />
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}

const topList = [
  {
    title: "E-Comm",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "E-Comm",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "E-Comm",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
];
const bottomList = [
  {
    title: "E-Comm",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "E-Comm",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "E-Comm",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "E-Comm",
    description: "Lorem Ipsum is simply dummy text of the printing.",
  },
];

const card = [
  "/logos/visa.svg",
  "/logos/paypal.svg",
  "/logos/master-card.svg",
  "/logos/western-union.svg",
];
