import { Box, Button, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import Image from "../../components/Image";
import { palette } from "../../utils/palette";

export default function DetailImages({ src, option }) {
  const [selected, setSelected] = React.useState(option[0]);

  return (
    <Box width="100%" sx={{ display: "grid", justifyContent: "center" }}>
      <Box position="relative" borderRadius="6px">
        <Image
          src={selected.image}
          width={295}
          height={273}
          alt="image-detail"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            p: 1,
            backgroundColor: palette.blue,
            borderRadius: "6px 0px 6px 0px",
          }}
        >
          <Typography color="white">{selected.name}</Typography>
        </Box>
      </Box>
      <Box mt={6} maxWidth={300}>
        <Grid container direction="row">
          {option?.map((item, idx) => {
            return (
              <Grid item key={idx}>
                <Grid item key={idx}>
                  <Tooltip title={item.name}>
                    <Button onClick={() => setSelected(item)}>
                      <Image src={item.image} width={80} alt={item.name} />
                    </Button>
                  </Tooltip>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
