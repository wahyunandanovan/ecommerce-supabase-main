import * as React from "react";
//@MUI
import { Badge, Box, Grid, InputAdornment, Stack, TextField, Typography, Button, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

//component
import StandartSelect from "../../components/select/StandartSelect";
import Iconify from "../../components/Iconify";

//utility
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../core/UserContext";
import NavItems from "../../components/NavItems";
import useFetchBy from "../../hooks/useFetchBy";
import { palette } from "../../utils/palette";

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

function Appbar() {
  //context cart
  const { cartItems, setCartItems } = React.useContext(UserContext);
  const { helper, setHelper } = React.useContext(UserContext);
  const user = localStorage.getItem("sb-user-id");

  //get data from api
  const userId = localStorage.getItem("sb-user-id");
  const { items, isLoading, isFetching } = useFetchBy({
    module: "cart",
    filter: "user_id",
    params: userId,
  });

  React.useEffect(() => {
    setCartItems(items);
  }, [isFetching, helper]);

  //select langage
  const [lang, setLang] = React.useState(1);
  const _changeLanguage = (event) => {
    setLang(event.target.value);
  };

  //go to cart
  const navigate = useNavigate();
  const _gotoCart = () => (user ? navigate("/cart") : navigate("/auth/signin"));
  const _gotoSignIn = () => navigate("/auth/signin");
  const _gotoSignUp = () => navigate("/auth/signup");

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
            <Stack direction="row" spacing={2} justifyContent="end">
              <Box
                component={Link}
                display="flex"
                alignItems="center"
                gap={1.5}
                sx={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Iconify icon="akar-icons:person" sx={{ width: 16, height: 16, color: palette.black }} />
                <Typography variant="h5" fontWeight="400" display={{ xs: "none", sm: "none", md: "flex" }}>
                  My Account
                </Typography>
              </Box>
              <Box
                onClick={_gotoCart}
                component={Link}
                display="flex"
                alignItems="center"
                gap={1.5}
                sx={{ textDecoration: "none", cursor: "pointer" }}
              >
                <StyledBadge badgeContent={Number(cartItems?.length | null)} color="secondary">
                  <Iconify icon="akar-icons:cart" sx={{ width: 18, height: 18, color: palette.black }} />
                </StyledBadge>
                <Typography variant="h5" fontWeight="400" display={{ xs: "none", sm: "none", md: "flex" }}>
                  Cart
                </Typography>
              </Box>
              {/* <StandartSelect data={language} value={lang} onChange={_changeLanguage} tooltip="Language" /> */}
              {Boolean(user) ? null : (
                <Box
                  display={{ xs: "none", sm: "none", md: "flex" }}
                  gap={1}
                  sx={{ borderLeft: "1px solid #9098B1", paddingLeft: 2 }}
                >
                  <Button variant="outlined" onClick={_gotoSignIn}>
                    Sign In
                  </Button>
                  <Button variant="contained" onClick={_gotoSignUp} sx={{ color: "white" }}>
                    Sign Up
                  </Button>
                </Box>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box width="100%" display={{ xs: "none", sm: "block" }}>
        {scrollTop >= 100 && <NavItems height={height} />}
      </Box>
    </Box>
  );
}
export default React.memo(Appbar);
