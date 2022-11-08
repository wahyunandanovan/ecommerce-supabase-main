import React from "react";
//COMPONENTS & MUI
import { Avatar, Grid, Box, Button as MuiButton } from "@mui/material";
import Button from "../../components/Button";
import Form from "./Form";
import Loading from "../../components/Loading";
import ImageUploading from "react-images-uploading";
//UTILITY
import ScreenContainer from "../../layouts/containers/ScreenContainer";
import useUpdate from "../../hooks/useUpdate";
import getImageUrl from "../../hooks/getImageUrl";
import supabase from "../../core/supabase";
import useFetchBy from "../../hooks/useFetchBy";

export default function AccountScreen() {
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [user, setUser] = React.useState(null);

  const _onUpdate = () => setIsUpdate(true);
  const _onCancel = () => setIsUpdate(false);

  //UPLOAD IMAGE
  const [images, setImages] = React.useState([]);
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  //ON UPDATE
  const userId = localStorage.getItem("sb-user-id");
  const update = useUpdate({ module: "users", key: "id", value: userId });

  const { items } = useFetchBy({
    module: "users",
    filter: "id",
    params: userId,
  });

  React.useEffect(() => {
    items?.map((val) => {
      return setUser(val);
    });
  }, [items]);

  const _onSubmit = async (value) => {
    const generateKey = new Date().getTime();
    const imageName = `profile/${generateKey}`;
    if (user?.avatar === null) {
      const { data, error } = await supabase.storage
        .from("avatar")
        .upload(imageName, images[0]?.file, {
          cacheControl: "0",
          upsert: false,
        })
        .then(update.mutate({ ...value, avatar: imageName }));
    } else {
      const { data, error } = await supabase.storage
        .from("avatar")
        .update(user?.avatar, images[0]?.file, {
          cacheControl: "0",
          upsert: false,
        })
        .then(update.mutate(value));
    }
    setIsUpdate(false);
  };

  const getAvatar = () => {
    if (images.length === 0) {
      if (user?.avatar) {
        return getImageUrl("avatar", user?.avatar);
      } else {
        return null;
      }
    } else {
      return images[0]?.data_url;
    }
  };

  return (
    <ScreenContainer title="Home/Account">
      <Box maxWidth="xl" margin="auto" mb={4} px={{ xs: 3, sm: 14 }}>
        <Box display="flex" justifyContent="end" mb={2} gap={2}>
          {!isUpdate ? (
            <Button onClick={_onUpdate} title="Update" disabled={isUpdate} />
          ) : (
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
          )}
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
                  <Box display="flex" gap={4} alignItems="start">
                    <Avatar
                      alt="avatar"
                      src={getAvatar()}
                      sx={{
                        width: { xs: 200, sm: 300 },
                        height: { xs: 200, sm: 300 },
                        border: "1px solid #ccc",
                      }}
                    />

                    {isUpdate && (
                      <Box mt={2} display="grid" gap={2}>
                        <Button
                          title="Change Photo"
                          onClick={onImageUpload}
                          disabled={!isUpdate}
                          variant="contained"
                          size="small"
                          sx={{ color: "white", maxHeight: 40 }}
                        />
                        <MuiButton
                          onClick={() => onImageRemove(0)}
                          disabled={Boolean(images.length === 0)}
                          variant="outlined"
                          color="error"
                          size="medium"
                          sx={{
                            borderRadius: "5px",
                            maxHeight: 40,
                          }}
                        >
                          Remove Image
                        </MuiButton>
                      </Box>
                    )}
                  </Box>
                )}
              </ImageUploading>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form
              onSubmit={_onSubmit}
              disabled={!isUpdate}
              initialValues={{
                name: user?.name || "",
                email: user?.email || "",
                phone: user?.phone || "",
                address: user?.address || "",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Loading visible={update.isLoading} />
    </ScreenContainer>
  );
}
