import styles from "./ContentBlock.module.css";
import React, { useState } from "react";

const ContentBlock = ({ heading, descriptions }) => {
  const [showMore, setShowMore] = useState(false);

  const BULLET_COUNT = 5;

  let ContentItems = [];
  let expander = <></>;
  if (descriptions.length >= BULLET_COUNT) {
    const toShow = showMore
      ? descriptions
      : descriptions.slice(0, BULLET_COUNT);

    ContentItems = toShow.map((desc, idx) => <li key={idx}>{desc}</li>);

    const word = showMore ? <>Show Less ▴</> : <>Show More ▾</>;
    expander = (
      <div className={styles.center}>
        <button
          className={styles.expander}
          onClick={() => setShowMore((prior) => !prior)}
        >
          {word}
        </button>
      </div>
    );
  } else {
    ContentItems = descriptions.map((desc, idx) => <li key={idx}>{desc}</li>);
  }

  return (
    <div className={styles.contentBlock}>
      <h2 className={styles.subheading}>{heading}</h2>
      <ul className={styles.bullets}>{ContentItems}</ul>
      {expander}
    </div>
  );
};

export default ContentBlock;
