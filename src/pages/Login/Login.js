import React, { useEffect, useState } from "react";
import inputs from "./inputsData";
import FormInput from "../../components/FormInput/FormInput";
import "./Login.css";

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  });

  const [isDirty, setIsDirty] = useState({
    email: false,
    password: false,
  });

  function onChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    inputs.forEach((item) => {
      function getError() {
        for (let error of item.errors) {
          if (
            error.condition &&
            new RegExp(error.condition).test(formValues[item.name])
          ) {
            return error.message;
          }

          if (
            error.pattern &&
            !new RegExp(error.pattern).test(formValues[item.name])
          ) {
            return error.message;
          }
        }
      }

      if (isDirty[item.name] && getError()) {
        setErrorMessages((prev) => ({ ...prev, [item.name]: getError() }));
      } else {
        setErrorMessages((prev) => ({ ...prev, [item.name]: "" }));
      }
    });
  }, [formValues, isDirty]);

  function submitHandler(e) {
    e.preventDefault();

    setIsDirty({ email: true, password: true });

    if (errorMessages.email || errorMessages.password) return;

    console.log(formValues);
  }

  return (
    <div className="login">
      <div className="login__container">
        <form className="login__form" onSubmit={submitHandler}>
          <div className="login__formTitle">Sign-in</div>
          <div>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                onChange={onChange}
                errorMessage={errorMessages[input.name]}
                setIsDirty={setIsDirty}
                value={formValues[input.name]}
              />
            ))}
          </div>
          <button className="login__signInBtn">Sign in</button>
          <button type="button" className="login__createAccBtn">
            Create a new account
          </button>
        </form>
      </div>
    </div>
  );
}
