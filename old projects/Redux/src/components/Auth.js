import { useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/slices/auth";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const emailReferans = useRef();
  const pwReferans = useRef();

  const onLogin = (e) => {
    e.preventDefault();
    if (
      emailReferans.current.value.includes("@") &&
      pwReferans.current.value.length > 7
    )
      dispatch(authActions.toggleAuthentication());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={emailReferans} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input ref={pwReferans} type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

