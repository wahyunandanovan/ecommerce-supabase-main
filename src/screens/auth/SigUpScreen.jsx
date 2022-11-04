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
import usePost from "../../hooks/usePost";
import { palette } from "../../utils/palette";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import supabase from "../../core/supabase";
import { signUpSchema } from "../../utils/validation";

export default function SignUpScreen() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  //navigate to sign up page
  const _toSignIn = () => navigate("/auth/signin");

  //on submit
  const postUser = usePost({ module: "users" });

  const onSubmit = async (values) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({ email: values.email, password: values.password });
    console.log("pppppppppppp", data);
    if (error !== null) {
      console.log(error);
      setLoading(false);
    } else {
      const userData = data?.user;
      await postUser.mutate({
        id: userData.id,
        name: values.name,
        email: values.email,
      });
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <Box minWidth={{ xs: 200, sm: 320, md: 340 }}>
      <Typography variant="h3" color="#22262A">
        Sign Up
      </Typography>
      <Box mb={3} />
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={signUpSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, getFieldProps, errors, touched }) => (
          <>
            <BasicInput
              title="Name"
              size="standart"
              placeholder="Enter Your Name"
              onChange={handleChange("name")}
              type="name"
              {...getFieldProps("name")}
            />
            {errors.name && touched.name ? <TextError>{errors.name}</TextError> : null}
            <Box mb={3} />
            <BasicInput
              title="Email"
              size="standart"
              placeholder="Enter Your Email"
              onChange={handleChange("email")}
              type="email"
              {...getFieldProps("email")}
            />
            {errors.email && touched.email ? <TextError>{errors.email}</TextError> : null}
            <Box mb={3} />
            <InputPassword
              onChange={handleChange("password")}
              size="standart"
              placeholder="Enter Your Password"
              {...getFieldProps("password")}
            />
            {errors.password && touched.password ? <TextError>{errors.password}</TextError> : null}

            <Box mt={4} mb={2}>
              <Button onClick={handleSubmit} title="Sign Up" size="large" fullWidth />
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
      <Typography to="/auth/signup" fontSize={12} color={palette.grey} my={3} textAlign="end">
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
      <Loading visible={loading | postUser.isLoading} />
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
