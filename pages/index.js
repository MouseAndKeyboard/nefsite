import Head from "next/head";
import ContentBlock from "../components/ContentBlock.js";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [news, setNews] = useState([
    "I am thrilled to accept my invitation to join the University of Western Australia's System Health Lab research group.",
    "In November 2020 I founded an Abstract Algebra and Category Theory reading group. Book covered: Steve Awodey's Category Theory (2nd edition).",
    "In November 2020 I helped found a reading group on Information Theory and Bayesian Statistics. Books/Materials covered in the group: David MacKay's: Information Theory, Inference, and Learning, Stanford's Statistics 311/Electrical Engineering 377 lecture notes by John Duchi.",
    "I am thrilled to have acheived the highest mark overall and 100% in the final exam for CITS2002: Systems Programming, taught by Dr Chris McDonald.",
    "In November 2020, with a team of collegues, I completed Stanford's CS330: Deep Multi-Task and Meta Learning graduate course.",
    "I am honoured to have worked as a coordinator for Teach Learn Grow's eMentor program.",
    "I am honoured to be elected as the latest committee member at the Coders for Causes.",
    "In Summer 2019, I founded and ran a Reinforcement Learning research paper reading group.",
    "I am honoured to be awarded the Australia and New Zealand Chartered Accountants Most Outstanding Economics Student.",
  ]);

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
          <img
            className={styles.image}
            src="/face.png"
            alt="A photograph of Michael Nefiodovas"
          />
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
              <em>
                I am interested in how we can exploit statistics to practically
                improve decision making in highly complex and unpredictable
                environments.
              </em>
            </p>
            <p>
              Previously, I studied at{" "}
              <a href="https://www.duncraigshs.wa.edu.au/">
                Duncraig Senior High School
              </a>{" "}
              acheiving an ATAR score of 98.2.
            </p>
          </div>
          <div className={styles.links}>
            <a href="">CV</a> /{" "}
            <a href="https://github.com/MouseAndKeyboard">GitHub</a> /{" "}
            <a href="https://research-repository.uwa.edu.au/en/persons/michael-nefiodovas">
              Research Profile
            </a>
          </div>

          <div className={styles.info}>
            <ContentBlock heading="News" descriptions={news} />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Webpage design inspired by:{" "}
          <a href="https://jonbarron.info/">Jon Barron</a>
        </p>
      </footer>
    </div>
  );
}
