import React from "react";
import "./Register.css";
import { useNavigate, Link } from "react-router-dom";
import useForm from "../../hooks/useForm/useForm";
import formInputsData from "./formInputsData/formInputsData";

function Register() {
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
          <div className="login__formTitle">Register</div>
          <div>{inputComponents}</div>
          <button className="login__signInBtn">Register</button>
          <Link to="/login">
            <button type="button" className="login__createAccBtn">
              Back to Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
