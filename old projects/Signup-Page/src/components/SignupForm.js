import { useState, useRef } from "react";
import styles from "./Signup.module.css";

const SignupForm = (props) => {
  const [validPW, setValidPW] = useState(false);
  const password = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    props.setLocalStorage("1")
    if (password.current.value.trim().length < 8) {
      setValidPW(true);
      return;
    }
    setValidPW(false);
    props.onLogin()
  };

  return (
    <div className={styles.card}>
      {!props.isLogged && (
        <form onSubmit={submitHandler}>
          <div className={styles["form-group"]}>
            <label>E-Mail:</label>
            <input type="email" required></input>
          </div>
          <div className={styles["form-group"]}>
            <label>Password:</label>
            <input type="password" required ref={password}></input>
          </div>
          {validPW && (
            <p className={styles.alert}>
              Password must be at least 8 characters.
            </p>
          )}
          <button type="submit" className={styles.login}>
            Login
          </button>
        </form>
      )}
      {props.isLogged && <h2 className={styles.welcome}>Welcome Again!</h2>}
    </div>
  );
};

export default SignupForm;
