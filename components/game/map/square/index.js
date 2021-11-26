import * as React from 'react';
import { useState, useContext } from 'react';
import styles from "./index.module.css";

import Loader from "react-loader-spinner";

import { ContentContext } from "../../ui/index.js";

const Square = ({row, col}) => {
  const setContent = useContext(ContentContext);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const resp = await fetch(`/api/game/cell?r=${row}&c=${col}`);
    const content = await resp.json();
    setContent(content);
    setLoading(false);
  }

  return (
    <div onClick={handleClick} className={styles.darkness}>
    {loading && <Loader
                    className={styles.loader}
                    type="Puff"
                    color="#a1c6c7"
                    height={70}
                    width={70} />}
    </div>
  );
}

export default Square;
