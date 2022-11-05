import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { palette } from "./palette";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "40px 0px 40px 0px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px 20px 0px",
  overflow: "hidden",
  background: palette.blue,
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  fontFamily: '"SFProText", "SFProDisplay"',
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  color: "white",
  fontSize: "1rem",
}));
