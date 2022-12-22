import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import inputs from "./inputsData";
import FormInput from "../../components/FormInput/FormInput";
import "./Login.css";

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [isIncorrect, setIsIncorrect] = useState({
    email: false,
    password: false,
  });

  const [isDirty, setIsDirty] = useState({
    email: false,
    password: false,
  });

  function onChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    const updatedFormErrors = {};

    inputs.forEach((item) => {
      if (
        !isDirty[item.name] ||
        new RegExp(item.pattern).test(formValues[item.name])
      ) {
        updatedFormErrors[item.name] = false;
      } else {
        updatedFormErrors[item.name] = true;
      }
    });

    setIsIncorrect(updatedFormErrors);
  }, [formValues, isDirty]);

  function submitHandler(e) {
    e.preventDefault();

    setIsDirty({ email: true, password: true });

    if (isIncorrect.email || isIncorrect.password) return;

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
                isIncorrect={isIncorrect}
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
