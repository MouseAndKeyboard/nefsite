import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "./Grades.module.css";

export const createData = (name, code, mark, grade) => ({
  name,
  code,
  mark,
  grade,
});

const Grades = ({ grades }) => {
  grades.sort((a, b) => {
    if (a.mark == b.mark) {
      return 0;
    } else if (a.mark == "-") {
      return -1;
    } else if (b.mark == "-") {
      return 1;
    }

    if (a.mark < b.mark) {
      return 1;
    } else if (a.mark > b.mark) {
      return -1;
    } else {
      return 0;
    }
  });

  const rows = grades.map((row) => (
    <TableRow key={row.code}>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.code}</TableCell>
      <TableCell align="right">{row.mark}</TableCell>
      <TableCell align="right">{row.grade}</TableCell>
    </TableRow>
  ));

  return (
    <TableContainer>
      <Table className={styles.table} aria-label="university grades table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Code</TableCell>
            <TableCell align="right">Mark</TableCell>
            <TableCell align="right">Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default Grades;
