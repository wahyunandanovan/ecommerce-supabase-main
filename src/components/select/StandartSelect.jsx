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
            onChange={onChange}
            sx={{ backgroundColor: "#fff" }}
          >
            {data.map((item, index) => {
              return (
                <MenuItem key={index} value={item.value}>
                  <Box display="flex" alignItems="center">
                    <Typography
                      color="#262626"
                      fontSize="20px"
                      fontWeight="500"
                      fontStyle="SFProText"
                    >
                      {item.code}
                    </Typography>
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
