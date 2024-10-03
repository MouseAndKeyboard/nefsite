import React, { useState, useEffect } from "react";
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

const Grades = ({ grades, pf, hons }) => {
  const [isClient, setIsClient] = useState(false);

  // this effect will only run once
  useEffect(() => {
    setIsClient(true);
  }, []); // empty dependency array means this effect will only run once


  grades.sort((a, b) => {
    if (a.mark == b.mark) {
      return 0;
    } else if (a.mark == "-") {
      return -1;
    } else if (b.mark == "-") {
      return 1;
    } else if (a.mark == "Pass") {
      return -1;
    } else if (b.mark == "Pass") {
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

  const makeGradeList = (g) => {
    const rows = g.map((row) => {
      const handleClick = () => {
        if(row.url !== "") {
          console.log(row.url);
          window.open(row.url, '_blank');
        }
      };
      
      return (
      <TableRow key={row.code} 
                style={row.topgrade ? {backgroundColor: '#F5F5F5', cursor: 'pointer'} : {}} 
                onClick={handleClick}
                >
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.code}</TableCell>
        <TableCell align="right">
          {row.mark}{row.topgrade && "*"}{row.code == "MATH4001" && <sup>†</sup>}
        </TableCell>
        <TableCell align="right">{row.grade}</TableCell>
      </TableRow>
    )});

    return rows;
  }

  hons.sort((a, b) => { 
    if (a.mark < b.mark) {
      return 1;
    } else if (a.mark > b.mark) {
      return -1;
    } else {
      return 0;
    }
  });

  const rows = makeGradeList(grades);
  const honsrows = makeGradeList(hons);

  const pfrows = pf.map((row) => (
    <TableRow key={row.code}>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.code}</TableCell>
      <TableCell align="right">{row.grade}</TableCell>
    </TableRow>
  ));

  return (
    <>
    <h2>Honours</h2>
    *Top grade
    <p><sup>†</sup>Course taken through the Australian Mathematical Sciences Institute. Topic was Mathematical Optimisation.</p>
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
        <TableBody>{honsrows}</TableBody>
      </Table>
    </TableContainer>
    <h2>Undergraduate</h2>
    *Top grade
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
    <h2>Pass/Fail Units</h2>
    <TableContainer>
      <Table className={styles.table} aria-label="university grades table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Code</TableCell>
            <TableCell align="right">Pass/Fail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{pfrows}</TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default Grades;
