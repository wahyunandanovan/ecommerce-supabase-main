import * as React from "react";
//@MUI
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { IconButton, Typography } from "@mui/material";
//component
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Iconify from "../../components/Iconify";
//utility
import { palette } from "../../utils/palette";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [progress, setProgress] = React.useState(0);

  const navigate = useNavigate();

  const _handleNext = () => setProgress(progress + 1);

  const _handleBack = () => setProgress(progress - 1);

  const _onSuccess = () => navigate("/");

  return (
    <Box sx={{ width: "100%", margin: "auto", maxWidth: "xl", py: 8 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        px={{ xs: 2, sm: 12 }}
        mb={6}
      >
        <IconButton onClick={_handleBack} disabled={Boolean(progress === 0)}>
          <Iconify
            icon="akar-icons:arrow-left"
            sx={{ color: progress === 0 ? "#ccc" : palette.blue }}
          />
        </IconButton>
        <Typography variant="h3" color="primary">
          Make Payment
        </Typography>
        <IconButton disableRipple sx={{ cursor: "inherit" }}>
          <Iconify icon="akar-icons:arrow-left" sx={{ color: "transparent" }} />
        </IconButton>
      </Box>
      <Box sx={{ width: 300, margin: "auto" }}>
        <Stepper activeStep={progress} alternativeLabel>
          {[1, 2, 3].map((label, idx) => (
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
        {progress === 0 ? (
          <Step1 handleNext={_handleNext} />
        ) : progress === 1 ? (
          <Step2 handleNext={_handleNext} />
        ) : progress === 2 ? (
          <Step3 onClick={_onSuccess} />
        ) : null}
      </Box>
    </Box>
  );
}
