import React from "react";
//COMPONENTS & MUI
import { Avatar, Grid, Box, Button as MuiButton } from "@mui/material";
import Button from "../../components/Button";
import Form from "./Form";
import Loading from "../../components/Loading";
import ImageUploading from "react-images-uploading";
//UTILITY
import ScreenContainer from "../../layouts/containers/ScreenContainer";
import { useLocation, useParams } from "react-router-dom";
import useUpdate from "../../hooks/useUpdate";
import getImageUrl from "../../hooks/getImageUrl";
import supabase from "../../core/supabase";

export default function AccountScreen() {
  const [isUpdate, setIsUpdate] = React.useState(false);

  const _onUpdate = () => setIsUpdate(true);
  const _onCancel = () => setIsUpdate(false);

  //GET USER
  const route = useLocation();
  const user = route?.state;

  //UPLOAD IMAGE
  const [images, setImages] = React.useState([]);
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  //ON UPDATE
  const userId = localStorage.getItem("sb-user-id");
  const update = useUpdate({ module: "users", key: "id", value: userId });

  const _onSubmit = async (value) => {
    const generateKey = new Date().getTime();
    const imageName = `profile/${generateKey}`;
    if (user[0].avatar === null) {
      const { data, error } = await supabase.storage
        .from("avatar")
        .upload(imageName, images[0]?.file, {
          cacheControl: "3600",
          upsert: false,
        })
        .then(update.mutate({ ...value, avatar: imageName }));
    } else {
      const { data, error } = await supabase.storage
        .from("avatar")
        .update(user[0]?.avatar, images[0]?.file, {
          cacheControl: "3600",
          upsert: false,
        })
        .then(update.mutate({ ...value, avatar: imageName }));
    }
  };

  const getAvatar = () => {
    if (images.length === 0) {
      if (user[0]?.avatar) {
        return getImageUrl("avatar", user[0]?.avatar);
      } else {
        if (user[0]?.gender === "male") {
          return "illustrations/male.webp";
        } else {
          return "illustrations/female.jpg";
        }
      }
    } else {
      return images[0]?.data_url;
    }
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
                {({ onImageUpload, onImageRemove }) => (
                  <>
                    <Avatar
                      alt="avatar"
                      src={getAvatar()}
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
                name: user[0]?.name,
                email: user[0]?.email,
                phone: user[0]?.phone,
                address: user[0]?.address,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </ScreenContainer>
  );
}
