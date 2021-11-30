import * as React from 'react';
import { useState } from 'react';

import useHover from "../../utils/hooks/useHover.js"

import styles from "./index.module.css";

const TextArea = ({title, body, buttons, row, col}) => {
  const [hoverRef, isHovered] = useHover();

  const buttonList = buttons.map(buttonName => {
    const buttonEvent = async (e) => {
      const resp = await fetch(`/api/game/cell?r=${row}&c=${col}`, {
        "method": "POST",
        "body": JSON.stringify({
          "clicked": buttonName
        })
      });
    }

    return (
      <button key={buttonName} onClick={buttonEvent}>{buttonName}</button>
    )
  });

  return (
    <div ref={hoverRef} className={isHovered ? styles.textAreaHover : styles.textArea}>
      <div className={styles.inner}>
        <h1 className={styles.header}>{title}</h1>
        <p className={styles.text}>{body}</p>
        {buttonList}
      </div>
    </div>
  );
}

const useTextArea = () => {
  const [content, setContent] = useState({
    "title": "An Unknown Place",
    "body": "Something awaits...",
    "buttons": [],
    "row": -1,
    "col": -1})
  return [<TextArea {...content} />, setContent];
}

export { useTextArea };
