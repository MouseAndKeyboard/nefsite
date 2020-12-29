import Head from "next/head";
import GradesPage, { createData } from "../components/Grades";
import React from "react";

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
  return (
    <div>
      <Head>
        <title>Grades | Michael Nefiodovas</title>
      </Head>
      <GradesPage grades={uniGrades} />
    </div>
  );
};

export default Grades;
