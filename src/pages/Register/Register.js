import React from "react"
import "./Register.css"
import { useNavigate, Link } from "react-router-dom"
import useForm from "../../hooks/useForm/useForm"
import formInputsData from "./formInputsData/formInputsData"

function Register() {
  const navigate = useNavigate()
  const { inputComponents, isSubmitInvalid } = useForm(formInputsData)

  function submitHandler(e) {
    e.preventDefault()
    if (isSubmitInvalid()) return
    navigate("/main")
  }

  return (
    <div className="register">
      <div className="register__container">
        <form className="register__form" onSubmit={submitHandler}>
          <div className="register__formTitle">Register</div>
          <div>{inputComponents}</div>
          <button className="register__signInBtn">Register</button>
          <Link to="/login">
            <button type="button" className="register__createAccBtn">
              Back to Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Register
