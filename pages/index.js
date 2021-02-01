import Head from "next/head";
import ContentBlock from "../components/ContentBlock.js";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [news, setNews] = useState([
    <>
      In December 2020, I accepted an offer to join the{" "}
      <a href="https://systemhealthlab.com/">
        University of Western Australia's System Health Lab
      </a>
      .
    </>,
    <>
      In November 2020, I founded an Abstract Algebra and Category Theory
      reading group. Book covered:{" "}
      <a href="https://global.oup.com/ukhe/product/category-theory-9780199237180?cc=gb&lang=en&">
        Steve Awodey's Category Theory (2nd edition)
      </a>
      .
    </>,
    <>
      In November 2020, I helped found a reading group on Information Theory and
      Bayesian Statistics. Books/Materials covered in the group:{" "}
      <a href="https://www.cambridge.org/au/academic/subjects/computer-science/pattern-recognition-and-machine-learning/information-theory-inference-and-learning-algorithms?format=HB&isbn=9780521642989">
        David MacKay's: Information Theory, Inference, and Learning
      </a>
      , Stanford's{" "}
      <a href="http://web.stanford.edu/class/stats311/">
        statistics 311/electrical engineering 377 lecture notes by John Duchi
      </a>
      .
    </>,
    <>
      In Semester 2 2020, I received the highest mark overall and 100% in the
      final exam for{" "}
      <a href="https://handbooks.uwa.edu.au/unitdetails?code=CITS2002">
        CITS2002: Systems Programming
      </a>
      , taught by Dr Chris McDonald.
    </>,
    <>
      In November 2020, with a team of collegues, we worked through Stanford's{" "}
      <a href="https://cs330.stanford.edu/">
        CS330: Deep Multi-Task and Meta Learning
      </a>{" "}
      course material.
    </>,
    <>
      In March 2020, I worked as a coordinator for{" "}
      <a href="https://www.teachlearngrow.org.au/">Teach Learn Grow</a>'s{" "}
      <a href="https://www.teachlearngrow.org.au/ementor">eMentor program</a>.
    </>,
    <>
      In March 2020, I worked with 9 other students to foster the largest
      University Computer Science and Data Science online community during
      Covid-19.
    </>,
    <>
      In February 2020, I was elected as the latest committee member at the{" "}
      <a href="https://codersforcauses.org/">Coders for Causes</a>.
    </>,
    <>
      In November 2019, I founded and ran a Reinforcement Learning research
      paper reading group. You can find some of my{" "}
      <a href="https://github.com/MouseAndKeyboard/rg-generative">
        notes on github
      </a>
      .
    </>,
    <>
      In November 2019, I recieved the Australia and New Zealand Chartered
      Accountants Most Outstanding Economics Student award.
    </>,
  ]);

  const [projects, setProjects] = useState([
    <>
      <a href="https://github.com/MouseAndKeyboard/GAN/blob/master/gan.org">
        Implemented a Generative Adversarial Network (GAN)
      </a>{" "}
      to generate hand drawn digits.
    </>,
    <>
      Founded Steamhunt, an online scraping and data-aggregation business. The
      site has two primary features: A{" "}
      <a href="https://www.youtube.com/watch?v=3PMlZw_JsZE">
        Steam avatar reverse image searcher
      </a>{" "}
      and a{" "}
      <a href="https://www.youtube.com/watch?v=tByvaRQgQzg">
        Steam Community Market scraper
      </a>
      .
    </>,
    <>
      Developed a{" "}
      <a href="https://github.com/MouseAndKeyboard/gym-spoof">
        OpenAI Gym environment
      </a>{" "}
      for reinforcement learning:
    </>,
    <>
      Performed a{" "}
      <a href="https://github.com/MouseAndKeyboard/mammogram-analysis">
        statistical analysis on mammogram data
      </a>
      .
    </>,
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
              <em>
                I am interested in how we can use higher level mathematics to
                formalise and interpret agent based systems.
              </em>
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
            <ContentBlock heading="Projects" descriptions={projects} />
            <ContentBlock heading="News" descriptions={news} />
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
