import useValidation from "../hooks/useValidation";

import "./BasicForm.css";

const BasicForm = (props) => {
  const {
    inputVal: name,
    inputValidate: nameValidate,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
  } = useValidation((value) => value.trim().length > 2);
  const agePattern = /^[1-9][0-9]{1,2}$/;
  const {
    inputVal: age,
    inputValidate: ageValidate,
    hasError: ageHasError,
    changeHandler: ageChangeHandler,
    blurHandler: ageBlurHandler,
  } = useValidation((value) => agePattern.test(value));
  const emailPattern = /^\w{4,}@gmail.com$/;
  const {
    inputVal: email,
    inputValidate: emailValidate,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = useValidation((value) => emailPattern.test(value));

  const formValidate = nameValidate && ageValidate && emailValidate;

  return (
    <div className="card">
      <form>
        <div className="form-group">
          <div className="input-group">
            <input
              placeholder="Name"
              className={nameHasError && "wrong"}
              value={name}
              onInput={(e) => nameChangeHandler(e.target.value)}
              onBlur={nameBlurHandler}
            />
            {nameHasError && <p>Name must be at least 3 characters.</p>}
          </div>
          <div className="input-group">
            <input
              placeholder="Age"
              className={ageHasError && "wrong"}
              value={age}
              onInput={(e) => ageChangeHandler(e.target.value)}
              onBlur={ageBlurHandler}
            />
            {ageHasError && <p>Age must be at least 10 years old.</p>}
          </div>
          <div className="input-group">
            <input
              placeholder="Email"
              className={emailHasError && "wrong"}
              value={email}
              onInput={(e) => emailChangeHandler(e.target.value)}
              onBlur={emailBlurHandler}
            />
            {emailHasError && <p>Email Ex : example@gmail.com</p>}
          </div>
        </div>
        <button type="submit" disabled={!formValidate}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default BasicForm;
