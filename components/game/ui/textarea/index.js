import * as React from 'react';
import { useState } from 'react';

import useHover from "../../utils/hooks/useHover.js"

import styles from "./index.module.css";

const TextArea = ({title, body}) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div ref={hoverRef} className={isHovered ? styles.textAreaHover : styles.textArea}>
      <div className={styles.inner}>
        <h1 className={styles.header}>{title}</h1>
        <p className={styles.text}>{body}</p>
      </div>
    </div>
  );
}

const useTextArea = () => {
  const [content, setContent] = useState({"title": "An Unknown Place", "body": "Something awaits..."})
  return [<TextArea title={content.title} body={content.body} />, setContent];
}

export { useTextArea };
