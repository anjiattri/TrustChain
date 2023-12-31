import Button from '@mui/material/Button';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import * as React from "react";

// Generate Order Data
function createData(id, date, name) {
  return { id, date, name };
}

const rows = [
  createData(0, "16 Mar, 2022", "BLANKET DISTRIBUTION" ),
  createData(1, "11 Jan, 2023", "FLOOD REFLIEF" ),
  createData(2, "23 Apr, 2020", "ASSAM"),
  createData(3, "24 Mar, 2020", "Food Distrubution"),
  createData(4, "12 Mar, 2021", "Construction")
];

function preventDefault(event) {
  event.preventDefault();
}

export default function AvailablePrograms() {
  return (
    <React.Fragment>
      <h1>Available Programs</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Available Program's Name</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                  <Button variant='contained' color='success'>Sign Up</Button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
