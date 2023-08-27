import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

// Generate Order Data
function createData(id, date, name, status) {
  return { id, date, name, status };
}

const rows = [
  createData(0, "16 Mar, 2022", "UDAAN" , "Pending"),
  createData(1, "11 Jan, 2023", "MUSKAN" , "Pending"),
  createData(2, "23 Apr, 2020", "Program Pluto" , "Completed"),
  createData(3, "24 Mar, 2020", "Food Distrubution" , "Rejected"),
  createData(4, "12 Mar, 2021", "Construction" , "Pending")
];

function preventDefault(event) {
  event.preventDefault();
}

export default function ExistingPrograms() {
  return (
    <React.Fragment>
      <h1>Existing Programs</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Existing Program's Name</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.status}</TableCell>  
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
