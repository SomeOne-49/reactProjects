import {
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { useState, useRef } from "react";
import { Form } from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const actionData = useActionData();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  const [isMatch, setIsMatch] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const password = useRef();
  const confirmPassword = useRef();

  const passwordHandler = () => {
    if (!isLogin) {
      if (password.current.value === confirmPassword.current.value) {
        setIsMatch(true);
      } else setIsMatch(false);
    } else setIsMatch(true);
  };

  const onConfirm = () => {
    setIsTouch(true);
    if (password.current.value === confirmPassword.current.value) {
      setIsMatch(true);
    } else setIsMatch(false);
  };

  const showPassword = (input) => {
    const passwordType =
      password.current.type === "password" ? "text" : "password";
    if (!isLogin) {
      password.current.type = passwordType;
      confirmPassword.current.type = passwordType;
    } else {
      password.current.type = passwordType;
    }
  };

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {actionData && actionData.errors && (
          <ul>
            {Object.values(actionData.errors).map((el) => (
              <li style={{ color: "#00BCD4" }} key={el}>
                {el}
              </li>
            ))}
          </ul>
        )}
        {actionData && actionData.message && (
          <p style={{ color: "#e91e63" }}>{actionData.message}</p>
        )}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input
            ref={password}
            id="password"
            type="password"
            name="password"
            onInput={passwordHandler}
            required
          />
          <img
            src={process.env.PUBLIC_URL + "img/eye.png"}
            alt="eye"
            onClick={showPassword}
            width="24px"
          />
        </p>
        {!isLogin && (
          <>
            <p>
              <label htmlFor="image">Confirm Password</label>
              <input
                ref={confirmPassword}
                id="confirmpassword"
                type="password"
                name="password"
                onInput={onConfirm}
                required
              />
              <img
                src={process.env.PUBLIC_URL + "img/eye.png"}
                alt="eye"
                onClick={showPassword}
                width="24px"
              />
            </p>
            {!isMatch && isTouch && (
              <p style={{ color: "rgb(233, 30, 99)" }}>
                The Password Doesn't Match!
              </p>
            )}
          </>
        )}

        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            <button>{isLogin ? "Create new user" : "Login"}</button>
          </Link>
          <button disabled={!isMatch || isSubmitting}>
            {isSubmitting ? "Submitting" : isLogin ? "Login" : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;

