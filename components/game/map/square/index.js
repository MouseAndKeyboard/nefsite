import * as React from 'react';
import { useState, useContext } from 'react';
import styles from "./index.module.css";

import { ContentContext } from "../../ui/index.js";

const Square = ({row, col}) => {
  const setContent = useContext(ContentContext);

  const handleClick = async () => {
    const resp = await fetch(`/api/game/cell?r=${row}&c=${col}`);
    const content = await resp.json();
    setContent(content);
  }

  return (
    <div onClick={handleClick} className={styles.darkness}>
    </div>
  );
}

export default Square;
