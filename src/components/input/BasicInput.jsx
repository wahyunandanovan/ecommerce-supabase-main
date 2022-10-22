import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import Iconify from "../Iconify";

export default function BasicInput({
  title,
  label,
  name,
  id,
  value,
  onChange,
  onBlur,
  error,
  type,
  size,
  helperText,
  placeholder,
  titleIcon,
  ...props
}) {
  return (
    <Box width="100%">
      {title && (
        <Typography fontWeight="700" mb={0.5} alignItems="center">
          {title} {titleIcon && <Iconify icon={titleIcon} />}
        </Typography>
      )}
      <TextField
        fullWidth
        id={id}
        name={name}
        label={label}
        value={value}
        type={type}
        onChange={onChange}
        error={error}
        placeholder={placeholder}
        size={size || "small"}
        InputLabelProps={{ style: { fontSize: 12 } }}
        {...props}
      />
    </Box>
  );
}
