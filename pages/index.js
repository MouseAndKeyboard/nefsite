import ContentBlock from "../components/ContentBlock.js";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import projects from "../components/data/projects.js";
import teaching from "../components/data/teaching.js";
import research from "../components/data/research.js";
import news from "../components/data/news.js";
import books from '../components/data/books.js';
import Eye from "../components/Eye.js";
import Layout from "../components/Layout.js";

export default function Home() {
  return (
    <Layout title={"Michael Nef"}>
      <div className={styles.container}>
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
                First class honours (7/7 GPA) in <a href="https://www.uwa.edu.au/ems/schools/physics-mathematics-and-computing/mathematics-and-stats">
                Mathematics and Statistics
              </a>{" "} under the <a href="https://www.uwa.edu.au/study/courses/bachelor-of-philosophy">
                Bachelor of Philosophy (Honours)
              </a>{" "}
              degree at the {" "}
              <a href="https://www.uwa.edu.au/">
                The University of Western Australia
              </a>.
            
            </p>
            My dissertation was titled "Inverse Problems in Lagrangian and Hamiltonian Mechanics". I conducted this research under the supervision of Professor Lyle Noakes. My research focused on applying aspects of Hodge theory to the inverse problem in Hamiltonian mechanics, we also discuss many inverse problems in the calculus of variations. I developed a new algorithms for solving the inverse problem in Hamiltonian mechanics by applying ideas from Hodge theory.
            <br/>
            <br/>
            One simple idea for an application of my research: If we observe a collection of timeseries measurements of a system which we believe is governed by a Hamiltonian system, our algorithm can efficiently determine the Hamiltonian function which governs the system, hence allowing us to make future predictions and understand symmetries inherent in our timeseries. This has applications in many areas of science and engineering, such as in the study of fluid dynamics, quantum mechanics, and celestial mechanics.
          </div>
          <div className={styles.links}>
            <a href="/resume.pdf">Resume</a> /{" "}
            <a href="https://github.com/MouseAndKeyboard">GitHub</a> /{" "}
            <a href="/grades">Grades</a>
            {/*  /{" "} */}
            {/* <a href="https://research-repository.uwa.edu.au/en/persons/michael-nefiodovas"> */}
            {/*   Research Profile */}
            {/* </a> */}
          </div>

          <div className={styles.info}>
            <ContentBlock heading="Research Projects" data={research} />
            <ContentBlock heading="Tutoring/Teaching" data={teaching} />
            <ContentBlock heading="Major Projects" data={projects} />
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
    </Layout>
  );
}
