import React, { useState } from "react";

import styles from "./Input.module.scss";

const Input = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmisionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    console.log(enteredName);
    setEnteredName("");
  };

  const nameInputClasses = enteredNameIsValid ? "" : styles.controlInvalid;

  return (
    <form onSubmit={formSubmisionHandler} className={styles.container}>
      <div className={styles.control}>
        <label htmlFor="">Your name:</label>
        <input
          className={nameInputClasses}
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
        {!enteredNameIsValid && (
          <p className={styles.error}>Name must not be emty.</p>
        )}
      </div>
      <div className={styles.actions}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Input;
