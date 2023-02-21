import * as React from "react";
import { Outlet } from "react-router-dom";
import { Box, Card, useMediaQuery } from "@mui/material";

export default function AuthLayout() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Box p={2}>
      {matches ? (
        <Box pt={4} px={1}>
          <Outlet />
        </Box>
      ) : (
        <>
          <Box
            component="img"
            src="/logo.png"
            sx={{ width: { xs: 100, sm: 160 } }}
            alt="logo"
          />
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: { xs: 2, sm: 4, md: 6 },
              backgroundImage: `url('/images/blob.svg')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <Card
              sx={{
                p: 4,
                borderRadius: 2,
                border: `1px solid #efefef`,
              }}
            >
              <Outlet />
            </Card>
          </Box>
        </>
      )}
    </Box>
  );
}
