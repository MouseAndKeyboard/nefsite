import Head from "next/head";
import GradesPage, { createData } from "../components/Grades";
import React from "react";
import styles from "../styles/Grades.module.css";
import uniGrades from "../components/data/grades";

const Grades = () => {
  const reducer = (total, cur) => total + cur.mark;
  const wam = uniGrades.reduce(reducer, 0) / uniGrades.length;

  return (
    <div>
      <Head>
        <title>Grades | Michael Nefiodovas</title>
      </Head>
      <div className={styles.content}>
        <div className={styles.gohome}>
          <a href="/">◂ Home</a>
        </div>

        <main className={styles.main}>
          <h1 className={styles.title}>Michael Nefiodovas's Grades</h1>
          <h2 className={styles.subtitle}>
            Grades from The University of Western Australia
          </h2>
          <p>
            GPA: 7.0 <span className={styles.weak}>(/7.0)</span> <br /> WAM:{" "}
            {wam} <span className={styles.weak}>(/100.00)</span>
          </p>
          <GradesPage grades={uniGrades} />
        </main>
      </div>
    </div>
  );
};

export default Grades;
