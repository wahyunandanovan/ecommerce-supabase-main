import * as React from "react";
//@MUI
import {
  Badge,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

//component
import StandartSelect from "../../components/select/StandartSelect";
import Iconify from "../../components/Iconify";

const language = [
  {
    code: "UK",
    value: 1,
  },
  {
    code: "DEU",
    value: 2,
  },
  {
    code: "AUS",
    value: 3,
  },
];

const currency = [
  {
    code: "USD",
    value: 1,
  },
  {
    code: "EUR",
    value: 2,
  },
  {
    code: "AUD",
    value: 3,
  },
];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 0,
    border: `2px solid #FB7181`,
    backgroundColor: "#FB7181",
    color: "#fff",
    padding: "0 4px",
  },
}));

export default function Appbar() {
  const [lang, setLang] = React.useState(1);
  const [curr, setCurr] = React.useState(1);

  const _changeLanguage = (event) => {
    setLang(event.target.value);
  };
  const _changeCurrency = (event) => {
    setCurr(event.target.value);
  };

  return (
    <Box sx={{ px: { xs: 1, sm: "104px" }, py: { xs: 1, sm: 3 } }}>
      <Box display="flex" justifyContent="space-between">
        <Stack direction="row" spacing={1} alignItems="center">
          <StandartSelect
            data={language}
            value={lang}
            onChange={_changeLanguage}
            tooltip="Language"
          />
          <StandartSelect
            data={currency}
            value={curr}
            onChange={_changeCurrency}
            tooltip="Currency"
          />
        </Stack>
        <Stack direction="row" spacing={3} alignItems="center">
          <Box display="flex" alignItems="center" gap={1}>
            <Iconify icon="akar-icons:person" sx={{ width: 20, height: 20 }} />
            <Typography fontSize={20}>My Account</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <Iconify
                  icon="akar-icons:cart"
                  sx={{ width: 20, height: 20 }}
                />
              </StyledBadge>
            </IconButton>
            <Typography fontSize={20}>Items</Typography>
          </Box>
          <Box>
            <TextField
              variant="standard"
              placeholder="$0.00"
              sx={{ width: "80px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Iconify
                      icon="mdi:magnify"
                      sx={{ width: 22, height: 22, color: "#262626" }}
                    />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
