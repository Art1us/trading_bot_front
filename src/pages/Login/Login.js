import React, { useContext, useEffect } from "react"
import "./Login.css"
import { useNavigate, Link } from "react-router-dom"
import useForm from "../../hooks/useForm/useForm"
import formInputsData from "./formInputsData/formInputsData"
import { AuthContext } from "../../contexts/AuthContext"

import { useApi } from "../../hooks/useApi/useApi"
import { fetchLogin } from "../../api/auth/fetchLogin"

function Login() {
  const login = useApi(fetchLogin)
  const navigate = useNavigate()
  const { inputComponents, isSubmitInvalid, formValues } =
    useForm(formInputsData)

  const { setAuth } = useContext(AuthContext)

  useEffect(() => {
    if (login.data) {
      setAuth(login.data.data)
      navigate("/main")
    }
  }, [login.data])

  function submitHandler(e) {
    e.preventDefault()
    if (isSubmitInvalid()) return
    login.request(formValues.email, formValues.password)
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
  )
}

export default Login
