import * as React from "react";
import Card from "../../../components/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

function OrderHistory() {
  const tableHead = ["Tracking Id", "Recepient", "Status", "Payment Method"];
  function createData(trackingId, recepient, status, paymentMethod) {
    return { trackingId, recepient, status, paymentMethod };
  }

  const rows = [
    createData("ez3h&hll", "Jhon Doe", "Pending", "Bank"),
    createData("ez3h&h7l", "Tretan", "Pending", "Bank"),
    createData("Ui3h&hll", "Coki", "Pending", "Bank"),
    createData("el3h&hll", "Bossman m", "Pending", "Bank"),
    createData("mz3h&hll", "Putin", "Pending", "Bank"),
  ];

  const width = window.innerWidth - 64;

  return (
    <TableContainer
      component={Paper}
      style={{
        overflowX: "auto",
        borderRadius: 8,
        boxShadow: "none",
        border: "2px solid #fff",
      }}
    >
      <Box px={3} py={2}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "SFProText",
            color: "#263238",
          }}
        >
          Order History
        </Typography>
      </Box>
      <Table aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#F4F4FA" }}>
          <TableRow>
            {tableHead.map((item, idx) => {
              return (
                <TableCell
                  key={idx}
                  sx={{ fontWeight: "600", color: "#263238" }}
                >
                  {item}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.trackingId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.trackingId}
              </TableCell>
              <TableCell align="left">{row.recepient}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.paymentMethod}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrderHistory;
