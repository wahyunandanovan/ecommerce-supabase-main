import React from "react";
//COMPONENTS & MUI
import { Avatar, Grid, Box, Button as MuiButton } from "@mui/material";
import Button from "../../components/Button";
import Form from "./Form";
//UTILITY
import { UserContext } from "../../core/userContext";
import ScreenContainer from "../../layouts/containers/ScreenContainer";
import supabase from "../../core/supabase";

export default function AccountScreen() {
  const [isUpdate, setIsUpdate] = React.useState(false);
  const { user, setUser } = React.useContext(UserContext);
  const metaData = user?.user_metadata;

  const _onUpdate = () => setIsUpdate(true);
  const _onCancel = () => setIsUpdate(false);

  //ON UPDATE
  const _onSubmit = async (value) => {
    const { error } = await supabase.auth.updateUser({
      email: value?.email,
      data: { name: value?.name, phone: value?.phone, address: value?.address },
    });
    if (error != null) {
      console.log(error);
    } else if (error === null) {
      window.location.reload();
    }
  };

  console.log(user);

  return (
    <ScreenContainer title="Home/Account">
      <Box maxWidth="xl" margin="auto" mb={4} px={{ xs: 3, sm: 14 }}>
        <Box display="flex" justifyContent="end" mb={2} gap={2}>
          <MuiButton
            disabled={!isUpdate}
            onClick={_onCancel}
            variant="outlined"
            color="info"
            size="medium"
          >
            Cancel
          </MuiButton>
          <Button
            onClick={_onUpdate}
            title="Update Account"
            disabled={isUpdate}
          />
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box width="100%" display="grid" justifyContent="center">
              <Avatar
                alt="avatar"
                src="/vite.svg"
                sx={{
                  width: { xs: 200, sm: 300 },
                  height: { xs: 200, sm: 300 },
                  border: "1px solid #ccc",
                }}
              />

              <Box mt={2} display="flex" justifyContent="center">
                <MuiButton
                  disabled={!isUpdate}
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ color: "white" }}
                >
                  Change Photo
                </MuiButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form
              onSubmit={_onSubmit}
              disabled={!isUpdate}
              initialValues={{
                name: metaData?.name,
                email: user?.email,
                phone: metaData?.phone,
                address: metaData?.address,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </ScreenContainer>
  );
}
