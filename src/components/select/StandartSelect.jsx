import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  Tooltip,
} from "@mui/material";
import React from "react";

function StandartSelect({ tooltip, data, value, onChange }) {
  return (
    <Box sx={{ minWidth: 50 }}>
      <Tooltip title={tooltip} placement="top" followCursor>
        <FormControl fullWidth variant="standard">
          <Select
            disableUnderline
            value={value}
            size="small"
            onChange={onChange}
            sx={{ backgroundColor: "#fff", mt: 0.8 }}
          >
            {data.map((item, index) => {
              return (
                <MenuItem key={index} value={item.value}>
                  <Box display="flex" alignItems="center">
                    <Typography fontWeight="400">{item.code}</Typography>
                  </Box>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Tooltip>
    </Box>
  );
}

export default StandartSelect;
