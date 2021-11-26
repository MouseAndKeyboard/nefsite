import * as React from 'react';
import Head from "next/head";

import Main from "../components/game/main/index.js"

const game = (props) => {

  return (
    <>
    <Head>
      <title>Game | Michael Nefiodovas</title>
    </Head>
    <Main />
    </>
  );
}

export default game;
