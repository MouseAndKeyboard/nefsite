import Head from "next/head";
import GradesPage, { createData } from "../components/Grades";
import React from "react";
import styles from "../styles/Grades.module.css";

const uniGrades = [
  createData("Software Engineering With Java", "CITS1001", 91, "HD"),
  createData("Microeconomics: Prices and Markets", "ECON1101", 94, "HD"),
  createData(
    "Global Challenges, Research and Leadership",
    "GCRL1000",
    96,
    "HD"
  ),
  createData("Mathematics Foundations: Specialist", "MATH1722", 90, "HD"),
  createData("Systems Programming", "CITS2002", 98, "HD"),
  createData("Discrete Structures", "CITS2211", 87, "HD"),
  createData("Multivariable Calculus", "MATH1011", 85, "HD"),
  createData("Mathematical Theory and Methods", "MATH1012", 93, "HD"),
];

const Grades = () => {
  const reducer = (total, cur) => total + cur.mark;
  const wam = uniGrades.reduce(reducer, 0) / uniGrades.length;

  return (
    <div>
      <Head>
        <title>Grades | Michael Nefiodovas</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Michael Nefiodovas's Grades</h1>
        <h2 className={styles.subtitle}>
          Grades from The University of Western Australia
        </h2>
        <p>
          GPA: 7.0 <span className={styles.weak}>(/7.0)</span> <br /> WAM: {wam}{" "}
          <span className={styles.weak}>(/100.00)</span>
        </p>
        <GradesPage grades={uniGrades} />
      </main>
    </div>
  );
};

export default Grades;
