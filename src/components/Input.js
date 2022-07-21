import React from "react";

import styles from "./Input.module.scss";

const Input = () => {
  return (
    <form action="" className={styles.container}>
      <div className={styles.control}>
        <label htmlFor="">Your name:</label>
        <input type="text" />
      </div>
      <div className={styles.actions}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Input;
