import Head from "next/head";
import GradesPage, { createData } from "../components/Grades";
import React from "react";
import styles from "../styles/Grades.module.css";
import uniGrades from "../components/data/grades";
import pf from '../components/data/pf';
import honsGrades from "../components/data/hons_grades";

const Grades = () => {
  const reducer = (total, cur) => total + cur.mark;

  const completedGrades = uniGrades
    .filter(grade => (grade.mark != "-") && (grade.grade != "Pass"));
  console.log(completedGrades);
  const wam = completedGrades.reduce(reducer, 0) / completedGrades.length;

  const honswam = honsGrades.reduce(reducer, 0) / honsGrades.length;

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
            First Class Honours in Mathematics and Statistics <br />
            Honours GPA: 7.0 <span className={styles.weak}>(/7.0)</span> <br /> Honours WAM:{" "}
            91.25 <span className={styles.weak}>(/100.00)</span>
          </p>
          <p>
            Undergraduate GPA: 6.9 <span className={styles.weak}>(/7.0)</span> <br /> Undergraduate WAM:{" "}
            {Math.round(wam)} <span className={styles.weak}>(/100.00)</span>
          </p>
          <GradesPage grades={uniGrades} pf={pf} hons={honsGrades} />
        </main>
      </div>
    </div>
  );
};

export default Grades;
