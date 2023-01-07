import React, { useEffect } from "react"
import "./Register.css"
import { useNavigate, Link } from "react-router-dom"
import useForm from "../../hooks/useForm/useForm"
import formInputsData from "./formInputsData/formInputsData"

import { useApi } from "../../hooks/useApi/useApi"
import { fetchRegistration } from "../../api/auth/fetchRegistration"
import RegistrationSuccess from "../../components/RegistrationSuccess/RegistrationSuccess"

function Register() {
  const registration = useApi(fetchRegistration)
  const controller = new AbortController()

  useEffect(() => {
    let mounted = true
    if (registration.data && mounted) {
      navigate("/login")
    }
    return () => {
      mounted = false
      controller.abort()
    }
  }, [registration.data])

  const navigate = useNavigate()
  const { inputComponents, isSubmitInvalid, formValues } =
    useForm(formInputsData)

  function submitHandler(e) {
    e.preventDefault()
    if (isSubmitInvalid()) return

    registration.request(formValues.email, formValues.password)
  }

  //show loading circle when loading
  return (
    <>
      {false ? (
        <RegistrationSuccess />
      ) : (
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
      )}
    </>
  )
}

export default Register
