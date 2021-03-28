import styles from "./ContentBlock.module.css";
import React, { useState } from "react";

import ContentItem from "./ContentItem";

const ContentBlock = ({ heading, data }) => {
  const [showMore, setShowMore] = useState(false);

  const BULLET_COUNT = 20;

  let ContentItems = [];
  let expander = <></>;
  if (data.length >= BULLET_COUNT) {
    const toShow = showMore
      ? data
      : data.slice(0, BULLET_COUNT);

    ContentItems = toShow.map((record, idx) => <ContentItem key={idx} {...record} />);

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
    ContentItems = data.map((record, idx) => <ContentItem key={idx} {...record} />);
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
