import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function VerifyEmailScreen() {
  return (
    <Box p={3} maxWidth="xl" margin="auto" textAlign="center">
      <Box
        component="img"
        src="illustrations/email-verifycation.svg"
        alt="img-verify"
        sx={{ width: { xs: 250, sm: 400 }, height: { xs: 250, sm: 400 } }}
      />
      <Typography variant="h3" fontWeight="500" fontFamily="SFProText">
        Verify Your Email
      </Typography>
      <Box maxWidth={600} textAlign="center" margin="auto" mt={3}>
        <Typography color="#3C4858">
          We've sent an email to 909090 to verify your email address and
          activated your account.The link in the email will expire in 24 hours.
        </Typography>
        <Typography color="#3C4858" mt={1}>
          Please{" "}
          <Link
            to="/auth/signin"
            style={{ textDecoration: "none", fontWeight: "500", color: "blue" }}
          >
            {" "}
            SIGN IN{" "}
          </Link>{" "}
          in when you have verified your email.
        </Typography>
      </Box>
    </Box>
  );
}
