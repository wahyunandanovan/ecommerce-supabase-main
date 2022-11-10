import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField, Stack, InputAdornment } from "@mui/material";
import Iconify from "../../../components/Iconify";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function AdminOrderScreen() {
  const height = window.innerHeight;

  return (
    <Box minHeight={height}>
      <Box
        p={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          backgroundColor: "#fff",
          border: "1px solid #e0e0e0",
          borderBottomWidth: 0,
          borderRadius: "4px 4px 0px 0px",
        }}
      >
        <TextField
          size="small"
          placeholder="Search..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Iconify icon="ant-design:search-outlined" />
              </InputAdornment>
            ),
          }}
        />
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            disableElevation
            startIcon={<Iconify icon="ant-design:filter-outlined" />}
            sx={{ backgroundColor: "#605bff", color: "#fff" }}
          >
            Filter
          </Button>
          <Button
            variant="contained"
            disableElevation
            startIcon={<Iconify icon="ant-design:export-outlined" />}
            sx={{ backgroundColor: "#5bd46f", color: "#fff" }}
          >
            Export
          </Button>
        </Stack>
      </Box>
      <Box sx={{ height: 400, width: "100%", backgroundColor: "#fff" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          sx={{ borderRadius: "0px 0px 4px 4px" }}
        />
      </Box>
    </Box>
  );
}
