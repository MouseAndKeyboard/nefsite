import * as React from 'react';
import styles from "./index.module.css";

import Square from "./square"

const Map = ({rows, cols}) => {

  const grid = [...Array(rows).keys()].map(
    row => {
      return (<div key={row} className={styles.row} >
        {[...Array(cols).keys()].map(
            col => <Square key={col} row={row} col={col} />
        )}
      </div>)
    }
  )

  return (
    <div>
      {grid}
    </div>
  );
}

export default Map;
