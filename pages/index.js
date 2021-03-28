import Head from "next/head";
import ContentBlock from "../components/ContentBlock.js";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import projects from "../components/data/projects.js";
import news from "../components/data/news.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Nefiodovas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Michael Nefiodovas</h1>
          <address className={styles.contact}>
            michael at nef dot net dot au
          </address>
          <div className={styles.image}>
            <img
              className={styles.image}
              src="/face.jpg"
              alt="A photograph of Michael Nefiodovas"
            />
          </div>

          <div className={styles.bio}>
            <p>
              I am an undergraduate student undertaking the{" "}
              <a href="https://www.uwa.edu.au/study/courses/bachelor-of-philosophy">
                Bachelor of Philosophy (Honours)
              </a>{" "}
              degree with a major in{" "}
              <a href="https://www.uwa.edu.au/ems/schools/physics-mathematics-and-computing/mathematics-and-stats">
                Mathematics and Statistics
              </a>{" "}
              at{" "}
              <a href="https://www.uwa.edu.au/">
                The University of Western Australia
              </a>
              . I currently work as a Research Engineer at{" "}
              <a href="https://systemhealthlab.com/">System Health Lab</a>. In
              2019 I founded Steamhunt, a commercial data aggregation platform.{" "}
            </p>
            <p>
              {/* <em> */}
              {/*   I am interested in how we can use higher level mathematics to */}
              {/*   formalise and interpret agent based systems. */}
              {/* </em> */}
            </p>
            <p>
              In 2019 I graduated from{" "}
              <a href="https://www.duncraigshs.wa.edu.au/">
                Duncraig Senior High School
              </a>
              {". "}
            </p>
          </div>
          <div className={styles.links}>
            <a href="">CV</a> /{" "}
            <a href="https://github.com/MouseAndKeyboard">GitHub</a> /{" "}
            <a href="/grades">Grades</a>
            {/*  /{" "} */}
            {/* <a href="https://research-repository.uwa.edu.au/en/persons/michael-nefiodovas"> */}
            {/*   Research Profile */}
            {/* </a> */}
          </div>

          <div className={styles.info}>
            <ContentBlock heading="Projects" data={projects} />
            <ContentBlock heading="News" data={news} />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerlinks}>
          <p>
            Webpage design inspired by:{" "}
            <a href="https://jonbarron.info/">Jon Barron</a>
          </p>
          <p>
            View website stats:
            <a href="https://simpleanalytics.com/nefsite.vercel.app">
              Simple Analytics
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
