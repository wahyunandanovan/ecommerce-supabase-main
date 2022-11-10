import { Avatar, Box, Stack, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";
import React from "react";
import Card from "../../../components/Card";
import { formatDollar } from "../../../utils";

function NewCustomer() {
  const recentTransactionData = [
    {
      customer: "Maryline",
      avatar: "/illustrations/female.jpg",
      time: "2 minute ago",
      price: 123,
    },
    {
      customer: "Maryline",
      avatar: "/illustrations/female.jpg",
      time: "2 minute ago",
      price: 123,
    },
    {
      customer: "Maryline",
      avatar: "/illustrations/female.jpg",
      time: "2 minute ago",
      price: 123,
    },
    {
      customer: "Maryline",
      avatar: "/illustrations/female.jpg",
      time: "2 minute ago",
      price: 123,
    },
    {
      customer: "Maryline",
      avatar: "/illustrations/female.jpg",
      time: "2 minute ago",
      price: 123,
    },
  ];

  return (
    <Card title="New Customer">
      <Stack mt={2} spacing={2}>
        {recentTransactionData.map((item, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #FFF1E9",
                borderRadius: "16px",
                p: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Avatar src={item.avatar} />
                <Box ml={2}>
                  <Typography
                    sx={{ fontWeight: "700", fontSize: 14, color: "#292968" }}
                  >
                    {item.customer}
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: "#292968" }}>
                    {item.time}
                  </Typography>
                </Box>
              </Box>
              <Typography color="#5bd46f" fontWeight="500">
                {formatDollar(item.price)}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Card>
  );
}

export default NewCustomer;
