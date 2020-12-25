import styles from "./ContentBlock.module.css";
import React, { useState } from "react";

const Description = ({ description }) => {
  const [truncated, setTruncated] = useState(true);

  if (description.length >= 90) {
    if (truncated) {
      const shortDesc = description.slice(0, 90);
      return (
        <p>
          {shortDesc}{" "}
          <button
            className={styles.expander}
            onClick={() => setTruncated(false)}
          >
            ...Expand
          </button>{" "}
        </p>
      );
    } else {
      return (
        <p>
          {description}{" "}
          <button
            className={styles.expander}
            onClick={() => setTruncated(true)}
          >
            Collapse
          </button>
        </p>
      );
    }
  }
  return <p>{description}</p>;
};

const ContentBlock = ({ heading, descriptions }) => {
  const ContentItems = descriptions.map((desc, idx) => (
    <li key={idx}>{desc}</li>
  ));

  return (
    <>
      <h2 className={styles.subheading}>{heading}</h2>
      <ul>{ContentItems}</ul>
    </>
  );
};

export default ContentBlock;
