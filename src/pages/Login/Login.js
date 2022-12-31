import React from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import useForm from "../../hooks/useForm/useForm";
import formInputsData from "./formInputsData/formInputsData";

function Login() {
  const navigate = useNavigate();
  const { inputComponents, isSubmitInvalid } = useForm(formInputsData);

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
          <Link to="/register" style={{ textDecoration: "none" }}>
            <button type="button" className="login__createAccBtn">
              Create a new account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
