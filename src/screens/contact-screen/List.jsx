import { Card, Grid, Typography, Box } from "@mui/material";
import React from "react";
const items = [
  {
    name: "Facebook",
    icon: "/logos/facebook.svg",
    path: "facebook.com",
  },
  {
    name: "Instagram",
    icon: "/logos/instagram.svg",
    path: "instagram.com",
  },
  {
    name: "Email",
    icon: "/logos/email.svg",
    path: "email.com",
  },
  {
    name: "Whatsapp",
    icon: "/logos/whatsapp.svg",
    path: "whatsapp.com",
  },
];
export default function List() {
  return (
    <Box my={4}>
      <Grid container spacing={{ xs: 2, sm: 4 }}>
        {items.map((item, idx) => {
          return (
            <Grid key={idx} item xs={12} sm={6}>
              <Card sx={{ display: "flex", width: "100%", alignItems: "center", gap: 2 }}>
                <img src={item.icon} alt={item.name} />
                <Typography>{item.name}</Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
