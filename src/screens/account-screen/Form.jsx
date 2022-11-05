import { Box } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Button from "../../components/Button";
import BasicInput from "../../components/input/BasicInput";
import TextError from "../../components/TextError";
import { updateAccountSchema } from "../../utils/validation";

export default function Form({ onSubmit, initialValues, disabled }) {
  return (
    <Box minWidth={{ xs: 200, sm: 320, md: 340 }}>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={updateAccountSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, getFieldProps, errors, touched }) => (
          <>
            <BasicInput
              title="Name"
              size="standart"
              disabled={disabled}
              placeholder="Enter Your Name"
              onChange={handleChange("name")}
              {...getFieldProps("name")}
            />
            <Box mb={3} />
            <BasicInput
              title="Email"
              size="standart"
              name="email"
              disabled={disabled}
              placeholder="Enter Your Email"
              onChange={handleChange("email")}
              type="email"
              {...getFieldProps("email")}
            />
            {errors.email && touched.email ? (
              <TextError>{errors.email}</TextError>
            ) : null}
            <Box mb={3} />
            <BasicInput
              title="Phone Number"
              size="standart"
              disabled={disabled}
              placeholder="Enter Your Phone Number"
              onChange={handleChange("phone")}
              type="number"
              {...getFieldProps("phone")}
            />
            <Box mb={3} />
            <BasicInput
              multiline
              rows={3}
              title="Address"
              size="standart"
              disabled={disabled}
              placeholder="Enter Your Address"
              onChange={handleChange("address")}
              {...getFieldProps("address")}
            />
            <Box mb={3} />

            {!disabled && (
              <Box mt={4} mb={2}>
                <Button
                  onClick={handleSubmit}
                  title="Update "
                  size="large"
                  fullWidth
                />
              </Box>
            )}
          </>
        )}
      </Formik>
    </Box>
  );
}
