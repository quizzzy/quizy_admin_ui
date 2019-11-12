import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
    marginTop: "20px"
  },
  table: {
    minWidth: 650
  }
});

function createData(profileId, scale1, scale2, scale3, scale4, scale5) {
  return { profileId, scale1, scale2, scale3, scale4, scale5 };
}

const rows = [
  createData("5dca7d7a719e994592cc1688", 1, 3, 4, 4, 5),
  createData("5dca7d7a719e994592cc1688", 237, 9.0, 37, 4.3, 5),
  createData("5dca7d7a719e994592cc1688", 262, 16.0, 24, 6.0, 5),
  createData("5dca7d7a719e994592cc1688", 305, 3.7, 67, 4.3, 5),
  createData("5dca7d7a719e994592cc1688", 356, 16.0, 49, 3.9, 5)
];

export default function ProfileList() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Profile id</TableCell>
            <TableCell align="right">Scale name 1</TableCell>
            <TableCell align="right">Scale name 2</TableCell>
            <TableCell align="right">Scale name 3</TableCell>
            <TableCell align="right">Scale name 4</TableCell>
            <TableCell align="right">Scale name 5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.profileId}>
              <TableCell component="th" scope="row">
                {row.profileId}
              </TableCell>
              <TableCell align="right">{row.scale1}</TableCell>
              <TableCell align="right">{row.scale2}</TableCell>
              <TableCell align="right">{row.scale3}</TableCell>
              <TableCell align="right">{row.scale4}</TableCell>
              <TableCell align="right">{row.scale5}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
