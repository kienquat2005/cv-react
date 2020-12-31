import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
function Admin() {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const [state, setState] = useState(JSON.parse(localStorage.getItem("allCV")));
var rows =[];
  for (let i in state) {
      rows.push(state[i].header)
    console.log(rows);
  }
  const classes = useStyles();
   const View = (id) => {
    const cv = state[id];
    console.log(id);
      localStorage.setItem('viewCV' , JSON.stringify(cv))
  window.location.href = `/admin/viewCV/${id}`
   }
   const Delete = (id) => {
     const a = state;
     a.splice(id, 1)
    console.log(a);
      localStorage.setItem('allCV' , JSON.stringify(a))
      alert('Delete Cv Success')
  window.location.href = `/admin/`
   }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell align="right">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right"><button type="button" onClick={(e) =>View(index)}>View</button></TableCell>
              <TableCell align="right"><button type="button" onClick={(e) =>Delete(index)}>X</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Admin;
