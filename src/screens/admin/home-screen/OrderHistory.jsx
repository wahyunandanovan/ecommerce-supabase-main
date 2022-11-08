import * as React from "react";
import Card from "../../../components/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
    <Card>
      <TableContainer
        component={Paper}
        style={{
          backgroundColor: "#FDFDFD",
          border: "1px solid #FFF",
          width: { xs: " width", sm: "100%" },
        }}
      >
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#F4F4FA" }}>
            <TableRow>
              {tableHead.map((item, idx) => {
                return <TableCell key={idx}>{item}</TableCell>;
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
    </Card>
  );
}

export default OrderHistory;
