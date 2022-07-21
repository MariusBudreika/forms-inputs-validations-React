import React, { useState } from "react";

import styles from "./Input.module.scss";

const Input = () => {
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmisionHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmisionHandler} className={styles.container}>
      <div className={styles.control}>
        <label htmlFor="">Your name:</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className={styles.actions}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Input;
