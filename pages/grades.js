import Head from "next/head";
import GradesPage from "../components/Grades";
import React from "react";

const Grades = () => {
  return (
    <div>
      <Head>
        <title>Grades | Michael Nefiodovas</title>
      </Head>
      <GradesPage />
    </div>
  );
};

export default Grades;
