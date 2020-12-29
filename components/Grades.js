import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "./Grades.module.css";

const createData = (name, code, mark, grade) => {
  return {
    name: name,
    code: code,
    mark: mark,
    grade: grade,
  };
};

const Grades = () => {
  const [grades, setGrades] = useState([
    createData("Software Engineering with Java", "CITS1001", 91, "HD"),
    createData("Microeconomics: Prices and Markets", "ECON1101", 94, "HD"),
    createData("Microeconomics: Prices and Markets", "ECON1101", 94, "HD"),
    createData("Microeconomics: Prices and Markets", "ECON1101", 94, "HD"),
    createData("Microeconomics: Prices and Markets", "ECON1101", 94, "HD"),
    createData("Microeconomics: Prices and Markets", "ECON1101", 94, "HD"),
    createData("Microeconomics: Prices and Markets", "ECON1101", 94, "HD"),
    createData("Microeconomics: Prices and Markets", "ECON1101", 94, "HD"),
    createData("Microeconomics: Prices and Markets", "ECON1101", 94, "HD"),
  ]);

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
    <TableContainer component={Paper}>
      <Table className={styles.table} aria-label="university grades table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Code</TableCell>
            <TableCell align="right">Mark (/100)</TableCell>
            <TableCell align="right">Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default Grades;
