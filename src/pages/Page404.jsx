// @mui
import { styled } from "@mui/material/styles";
import { Typography, Container, Box, Button } from "@mui/material";
// components
import Page from "../components/Page";

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <Page title="404 Page Not Found">
      <Container>
        <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
          {/* <Typography variant="h3" paragraph>
            Sorry, page not found!
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </Typography> */}
          <Typography variant="h3" paragraph>
            Oopss.. this page is not available.
          </Typography>
          <Box component="img" src="/illustrations/404.svg" sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }} />
        </ContentStyle>
      </Container>
    </Page>
  );
}
