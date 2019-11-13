import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Statistics from "../Statistics";

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

export default function ProfileList(props) {
  const classes = useStyles();
  const { profiles, scales } = props;

  return (
    <Fragment>
      <Statistics />
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Profile id</TableCell>
              {scales.map(scale => {
                return (
                  <TableCell key={scale._id} align="right">
                    {scale.title}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {profiles.map(profile => (
              <TableRow key={profile._id}>
                <TableCell component="th" scope="row">
                  {profile._id}
                </TableCell>
                {profile.scales.map(scale => {
                  return (
                    <TableCell key={scale._id} align="right">
                      {scale.value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Fragment>
  );
}
