import * as React from "react";
//@MUI
import { Badge, Box, Grid, IconButton, InputAdornment, Link, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

//component
import StandartSelect from "../../components/select/StandartSelect";
import Iconify from "../../components/Iconify";

//utility
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../core/cartContext";
import NavItems from "../../components/NavItems";

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
  //context cart
  const { helper, setHelper } = React.useContext(CartContext);

  //select langage
  const [lang, setLang] = React.useState(1);
  const _changeLanguage = (event) => {
    setLang(event.target.value);
  };

  //go to cart
  const navigate = useNavigate();
  const _gotoCart = () => navigate("cart");

  //event when scrolling
  const [scrolling, setScrolling] = React.useState(false);
  const [scrollTop, setScrollTop] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  //opening navbar
  React.useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
      if (scrollTop >= 100) {
        setHeight(28);
      } else if (scrollTop <= 100) {
        setHeight(0);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <Box
      margin="auto"
      sx={{
        px: { xs: 1, sm: "104px" },
        py: { xs: 1, sm: 1.5 },
        borderBottom: "2px solid #FAFAFB",
        backgroundColor: "#fff",
        position: "fixed",
        zIndex: 100,
        top: 0,
        width: "100%",
        // boxShadow: "0px 2px 2px 0px rgb(0 0 0 / 12%)",
      }}
    >
      <Box display="flex" justifyContent="space-between" className="opop">
        <Grid container direction="row" alignItems="center" spacing={1.5}>
          <Grid item xs={8} sm={8} md={8}>
            <Box>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search Product"
                InputProps={{
                  style: {
                    borderRadius: 5,
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <Iconify icon="mdi:magnify" sx={{ width: 18, height: 18, color: "#262626" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: { xs: "90%", sm: "90%", md: "65%" },
                  "& .MuiInputLabel-root": { color: "green" }, //styles the label
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      borderColor: "#C1C8CE",
                      borderWidth: 0.5,
                    },
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Stack direction="row" spacing={{ xs: 1, sm: 1, md: 1.5 }} justifyContent="end">
              <Box display="flex" alignItems="center" gap={1}>
                <Iconify icon="akar-icons:person" sx={{ width: 16, height: 16 }} />
                <Typography variant="h5" fontWeight="400" display={{ xs: "none", sm: "none", md: "flex" }}>
                  My Account
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <IconButton aria-label="cart" onClick={_gotoCart}>
                  <StyledBadge badgeContent={Number(helper)} color="secondary">
                    <Iconify icon="akar-icons:cart" sx={{ width: 18, height: 18 }} />
                  </StyledBadge>
                </IconButton>
                <Typography variant="h5" fontWeight="400" display={{ xs: "none", sm: "none", md: "flex" }}>
                  Items
                </Typography>
              </Box>
              <StandartSelect data={language} value={lang} onChange={_changeLanguage} tooltip="Language" />
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box width="100%" display={{ xs: "none", sm: "block" }}>
        {scrollTop >= 100 ? <NavItems height={height} /> : <NavItems height={height} />}
      </Box>
    </Box>
  );
}
