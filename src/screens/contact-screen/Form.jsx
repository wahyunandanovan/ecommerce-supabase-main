import { Typography, Box } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Button from "../../components/Button";
import BasicInput from "../../components/input/BasicInput";
import TextError from "../../components/TextError";

export default function Form({ onSubmit }) {
  return (
    <Box minWidth={{ xs: 200, sm: 320, md: 340 }}>
      <Typography variant="h3" color="#22262A">
        Contact Us
      </Typography>
      <Box mb={3} />
      <Formik
        initialValues={{ email: "", name: "", message: "" }}
        validateOnChange={true}
        validateOnBlur={true}
        // validationSchema={signInSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, getFieldProps, errors, touched }) => (
          <>
            <BasicInput
              title="Name"
              size="standart"
              placeholder="Enter Your Name"
              onChange={handleChange("name")}
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
            <BasicInput
              multiline
              rows={4}
              title="Message"
              size="standart"
              placeholder="Enter Your Message"
              onChange={handleChange("message")}
              {...getFieldProps("message")}
            />
            {errors.message && touched.message ? <TextError>{errors.message}</TextError> : null}
            <Box mb={3} />

            <Box mt={4} mb={2}>
              <Button onClick={handleSubmit} title="Send Email" size="large" fullWidth />
            </Box>
          </>
        )}
      </Formik>
    </Box>
  );
}
