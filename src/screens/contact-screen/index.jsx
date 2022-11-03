import { Box, Grid } from "@mui/material";
import React from "react";
import ScreenContainer from "../../layouts/containers/ScreenContainer";
import Form from "./Form";
import emailjs from "@emailjs/browser";
import List from "./List";

export default function ContactScreen() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const _sendEmail = (e) => {
    emailjs.send("service_4nppgbj", "template_s21rb5j", e, "Q3UKu69YTbJpTuV--").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log("error", error.text);
      }
    );
  };

  return (
    <ScreenContainer title="Home/Contact Us">
      <Box maxWidth="xl" margin="auto" px={{ xs: 3, sm: 14 }}>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: { xs: "none", sm: "none", md: "flex" }, alignItems: "center" }}
          >
            <img src="/illustrations/contact-us.png" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box p={{ xs: 0, sm: 4, md: 6 }}>
              <Form onSubmit={(value) => _sendEmail(value)} />
            </Box>
          </Grid>
        </Grid>
        {/* <List /> */}
        <Box mb={4} />
      </Box>
    </ScreenContainer>
  );
}
