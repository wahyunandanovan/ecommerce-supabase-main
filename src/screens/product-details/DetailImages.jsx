import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Image from "../../components/Image";

export default function DetailImages({ src, option }) {
  const uri = [option, option, option];
  return (
    <Box width="100%" sx={{ display: "grid", justifyContent: "center" }}>
      <Image src={src} width={295} height={273} alt="image-detail" />
      <Box mt={6} maxWidth={300}>
        <Grid container direction="row">
          {uri?.map((item, idx) => {
            return (
              <Grid item key={idx}>
                <Button>
                  <Image src={option} width={80} alt="option" />
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
