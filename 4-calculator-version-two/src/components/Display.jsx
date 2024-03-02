// import React from 'react'
import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      type="text"
      className={styles.display}
      value={displayValue}
      readOnly // now we can't enter anything here
    />
  );
};

export default Display;
