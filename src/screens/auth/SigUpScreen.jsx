import React from "react";
//component
import { Box, Typography, Link, Snackbar } from "@mui/material";
import BasicInput from "../../components/input/BasicInput";
import InputPassword from "../../components/input/InputPassword";
import Button from "../../components/Button";
import TextError from "../../components/TextError";
import GoogleButton from "../../components/GoogleButton";
import Loading from "../../components/Loading";
//hooks and utility
import { palette } from "../../utils/palette";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import supabase from "../../core/supabase";
import { signUpSchema } from "../../utils/validation";

export default function SignUpScreen() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  const navigate = useNavigate();

  //navigate to sign up page
  const _toSignIn = () => navigate("/auth/signin");

  //on submit
  const mutation = useMutation(
    ({ email, password }) => {
      return supabase.auth.signUp({ email, password });
    },
    {
      onSuccess: async (res) => {
        console.log(res);
        if (res.error) {
          setOpen(true);
        } else {
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
        Sign Up
      </Typography>
      <Box mb={3} />
      <Formik
        initialValues={{ email: "", password: "" }}
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={signUpSchema}
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

            <Box mt={4} mb={2}>
              <Button
                onClick={handleSubmit}
                title="Sign Up"
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
        Have an account ?{" "}
        <Link
          onClick={_toSignIn}
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: palette.blue,
            fontWeight: "500",
          }}
        >
          Sign In
        </Link>
      </Typography>
      <GoogleButton title="Sign up with Google" />
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
