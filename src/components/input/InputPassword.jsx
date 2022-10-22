import * as React from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Box, TextField, Typography } from "@mui/material";
import Iconify from "../Iconify";

export default function InputPassword({
  id,
  name,
  value,
  placeholder,
  size,
  confirmPassword,
  onChange,
  error,
  onBlur,
  ...props
}) {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Typography fontWeight="700" mb={0.5} alignItems="center">
        {confirmPassword ? "Confirm Password" : "Password"}
      </Typography>
      <TextField
        id={id}
        name={name}
        value={value}
        fullWidth
        onChange={onChange}
        error={error}
        type={values.showPassword ? "text" : "password"}
        placeholder={placeholder}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? (
                  <Iconify icon="gridicons:not-visible" />
                ) : (
                  <Iconify icon="gridicons:visible" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        size={size || "small"}
        {...props}
      />
    </Box>
  );
}
