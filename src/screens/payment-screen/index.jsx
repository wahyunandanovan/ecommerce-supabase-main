import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function Payment() {
  const steps = [
    {
      code: 0,
      title: "Make Payment",
      component: <Step1 />,
    },
    {
      code: 1,
      title: "Payment",
      component: <Step2 />,
    },
    {
      code: 2,
      title: "Payment Success",
      component: <Step3 />,
    },
  ];

  const [progress, setProgress] = React.useState(steps[0]);

  return (
    <Box sx={{ width: "100%", margin: "auto", maxWidth: "xl", py: 8 }}>
      <Box display="flex" justifyContent="center" mb={6}>
        <Typography variant="h3" color="primary">
          Make Payment
        </Typography>
      </Box>
      <Box sx={{ width: 300, margin: "auto" }}>
        <Stepper activeStep={progress.code} alternativeLabel>
          {steps.map((label, idx) => (
            <Step
              key={idx}
              sx={{
                "& .MuiStepLabel-root .Mui-active": {
                  color: "primary", // circle color (ACTIVE)
                },
                "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                  fill: "white", // circle's number (ACTIVE)
                },
                "& .MuiStepLabel-root .MuiStepIcon-text": {
                  fill: "white", // circle's number (ACTIVE)
                },
              }}
            >
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box mt={{ xs: 3, sm: 4, md: 4 }} p={{ xs: 1, sm: 4, md: 6 }}>
        {progress.component}
      </Box>
    </Box>
  );
}
