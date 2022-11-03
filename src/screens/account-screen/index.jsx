import React from "react";
//COMPONENTS & MUI
import { Avatar, Grid, Box, Button as MuiButton } from "@mui/material";
import Button from "../../components/Button";
import Form from "./Form";
import ImageUploading from "react-images-uploading";
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

  //UPLOAD IMAGE
  const [images, setImages] = React.useState([]);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
  };

  //ON UPDATE
  const _onSubmit = async (value) => {
    const generateKey = new Date().getTime();
    console.log(images[0]);
    const { data, error: kkk } = await supabase.storage
      .from("avatar")
      .upload("public/avatar1.png", images[0].file);
    console.log(kkk);
    // const { error } = await supabase.auth.updateUser({
    //   email: value?.email,
    //   data: {
    //     name: value?.name,
    //     phone: value?.phone,
    //     address: value?.address,
    //   },
    // });
    // if (error != null) {
    //   console.log(error);
    // } else if (error === null) {
    //   window.location.reload();
    // }
  };

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
            sx={{ borderRadius: "5px" }}
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
              <ImageUploading
                value={images}
                onChange={onChange}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageUpdate,
                  onImageRemove,
                }) => (
                  <>
                    <Avatar
                      alt="avatar"
                      src={images[0]?.data_url}
                      sx={{
                        width: { xs: 200, sm: 300 },
                        height: { xs: 200, sm: 300 },
                        border: "1px solid #ccc",
                      }}
                    />

                    <Box mt={2} display="flex" justifyContent="center" gap={2}>
                      <MuiButton
                        disabled={!isUpdate}
                        onClick={() => onImageRemove(0)}
                        variant="contained"
                        color="error"
                        size="medium"
                        sx={{ borderRadius: "5px", color: "white" }}
                      >
                        Remove Image
                      </MuiButton>
                      <Button
                        title="Change Photo"
                        onClick={onImageUpload}
                        disabled={!isUpdate}
                        variant="contained"
                        size="small"
                        sx={{ color: "white" }}
                      />
                    </Box>
                  </>
                )}
              </ImageUploading>
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
