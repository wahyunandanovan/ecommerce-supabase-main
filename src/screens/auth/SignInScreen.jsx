import React from "react";
//component
import { Box, Typography, Link, Snackbar } from "@mui/material";
import BasicInput from "../../components/input/BasicInput";
import InputPassword from "../../components/input/InputPassword";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import TextError from "../../components/TextError";
import GoogleButton from "../../components/GoogleButton";
//hooks and utility
import { palette } from "../../utils/palette";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import supabase from "../../core/supabase";
import { signInSchema } from "../../utils/validation";

export default function SignInScreen() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  //navigate to sign up page
  const _toSignUp = () => navigate("/auth/signup");

  //on submit
  const mutation = useMutation(
    ({ email, password }) => {
      return supabase.auth.signInWithPassword({ email, password });
    },
    {
      onSuccess: async (res) => {
        if (res.error) {
          setOpen(true);
        } else {
          const userId = res.data.user.id;
          localStorage.setItem("sb-user-id", userId);
          navigate("/");
        }
      },
    }
  );

  const onSubmit = (values) => {
    mutation.mutate(values);
  };

  return (
    <Box minWidth={{ xs: 200, sm: 320, md: 340 }}>
      <Typography variant="h3" color="#22262A">
        Sign In
      </Typography>
      <Box mb={3} />
      <Formik
        initialValues={{ email: "", password: "" }}
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={signInSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, getFieldProps, errors, touched }) => (
          <>
            <BasicInput
              title="Email"
              size="standart"
              placeholder="Enter Your Email"
              onChange={handleChange("email")}
              type="email"
              {...getFieldProps("email")}
            />
            {errors.email && touched.email ? (
              <TextError>{errors.email}</TextError>
            ) : null}
            <Box mb={3} />
            <InputPassword
              onChange={handleChange("password")}
              size="standart"
              placeholder="Enter Your Password"
              {...getFieldProps("password")}
            />
            {errors.password && touched.password ? (
              <TextError>{errors.password}</TextError>
            ) : null}
            <Box style={{ textAlign: "end", fontSize: 12 }}>
              <Link underline="none" sx={{ cursor: "pointer" }}>
                Forgot Password?
              </Link>
            </Box>
            <Box mt={4} mb={2}>
              <Button
                onClick={handleSubmit}
                title="Sign In"
                size="large"
                fullWidth
              />
            </Box>
          </>
        )}
      </Formik>
      <Box display="flex" alignItems="center" gap={1}>
        <Box
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: palette.blue,
          }}
        />
        <span>OR</span>
        <Box
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: palette.blue,
          }}
        />
      </Box>
      <Typography
        to="/auth/signup"
        fontSize={12}
        color={palette.grey}
        my={3}
        textAlign="end"
      >
        Don't have an account yet?
        <Link
          onClick={_toSignUp}
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: palette.blue,
            fontWeight: "500",
          }}
        >
          Sign Up
        </Link>
      </Typography>
      <GoogleButton title="Sign in with Google" />
      <Loading visible={mutation.isLoading} />
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        message="Enter the correct email and password"
        ContentProps={{ style: { backgroundColor: "#d32f2f" } }}
      />
    </Box>
  );
}
