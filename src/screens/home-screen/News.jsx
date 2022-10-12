import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SectionContainer from "../../layouts/containers/SectionContainer";

const list = [
  {
    name: "Fashion Industry",
    uri: "/illustrations/nike.svg",
  },
  {
    name: "Best Design Tools",
    uri: "/illustrations/figma.svg",
  },
  {
    name: "HR Community",
    uri: "/illustrations/kronos.svg",
  },
];

export default function News() {
  return (
    <SectionContainer title="LATEST NEWS">
      <Grid container spacing={4}>
        {list.map((item, idx) => {
          return (
            <Grid
              key={idx}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "grid", justifyContent: "center" }}
            >
              <Box
                display={{ xs: "grid", sm: "flex" }}
                gap={3}
                textAlign={{ xs: "center", sm: "start" }}
                maxWidth={{ xs: 200, sm: 323 }}
                alignItems="center"
              >
                <img
                  src={item.uri}
                  alt="logo-bennefit"
                  width={112}
                  style={{ margin: "auto" }}
                />
                <Stack>
                  <Typography fontWeight="500" color="#C1C8CE">
                    01 Jan, 2015
                  </Typography>
                  <Typography variant="h5" fontWeight="600" my={0.5}>
                    {item.name}
                  </Typography>
                  <Typography color="#22262A">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </SectionContainer>
  );
}
