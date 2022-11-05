import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "must be at least 6 characters long")
    .required("can not be empty"),
  email: Yup.string()
    .email("must be a valid email")
    .required("can not be empty"),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "must be at least 4 characters long")
    .required("can not be empty"),
  password: Yup.string()
    .min(6, "must be at least 6 characters long")
    .required("can not be empty"),
  email: Yup.string()
    .email("must be a valid email")
    .required("can not be empty"),
});

export const updateAccountSchema = Yup.object().shape({
  email: Yup.string()
    .email("must be a valid email")
    .required("can not be empty"),
});
