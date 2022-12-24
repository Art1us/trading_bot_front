import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm/useForm";

function Login() {
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "Email",
      className: "login__formBlock",
      inputClassName: "login__formInput",
      errors: [
        {
          condition: "^s*$",
          message: "Please enter your email!",
        },
        {
          pattern:
            "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
            "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",
          message: "Please enter a valid email",
        },
      ],
    },
    {
      id: 2,
      name: "password",
      type: "text",
      placeholder: "Password",
      className: "login__formBlock",
      inputClassName: "login__formInput",
      errors: [
        {
          condition: "^s*$",
          message: "Please enter your password!",
        },
        {
          condition: "^(.{1,7})$",
          message: "Your password is too short!",
        },
        {
          condition: "^[A-Za-z0-9]*$",
          message: "Please include at least one special character",
        },
        {
          condition: "^[^A-Z]+$",
          message: "Please include an uppercase letter",
        },
        {
          condition: "^[^a-z]+$",
          message: "Please include an lowercase letter",
        },
        {
          condition: "^[^0-9]+$",
          message: "Please include a digit",
        },
      ],
    },
  ];

  const navigate = useNavigate();
  const { inputComponents, isSubmitInvalid } = useForm(inputs);

  function submitHandler(e) {
    e.preventDefault();
    if (isSubmitInvalid()) return;
    navigate("/main");
  }

  return (
    <div className="login">
      <div className="login__container">
        <form className="login__form" onSubmit={submitHandler}>
          <div className="login__formTitle">Sign-in</div>
          <div>{inputComponents}</div>
          <button className="login__signInBtn">Sign in</button>
          <button type="button" className="login__createAccBtn">
            Create a new account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
