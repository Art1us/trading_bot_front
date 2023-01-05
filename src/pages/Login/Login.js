import React, { useContext, useState } from "react"
import "./Login.css"
import { useNavigate, Link } from "react-router-dom"
import useForm from "../../hooks/useForm/useForm"
import formInputsData from "./formInputsData/formInputsData"
import AuthContext from "../../contexts/AuthProvider"

import useApi from "../../hooks/useApi/useApi"
import postLogin from "../../api/login"
import postRefreshToken from "../../api/refreshToken"

function Login() {
  const login = useApi(postLogin)

  const refreshToken = useApi(postRefreshToken)

  const navigate = useNavigate()
  const { inputComponents, isSubmitInvalid, formValues } =
    useForm(formInputsData)

  const { auth, setAuth } = useContext(AuthContext)

  function submitHandler(e) {
    e.preventDefault()
    //if (isSubmitInvalid()) return

    const { data, error, loading, request } = login

    request(formValues.email, formValues.password)
    if (!error && !loading && data) {
      setAuth(data.data)
    }
  }

  function refreshHandler(e) {
    e.preventDefault()

    const { data, error, loading, request } = refreshToken
    request(auth.access_token, auth.refresh_token)
    if (!error && !loading && data) {
      console.log(data.data)
    }
  }

  return (
    <div className="login">
      <div className="login__container">
        <form className="login__form" onSubmit={submitHandler}>
          <div className="login__formTitle">Sign-in</div>
          <div>{inputComponents}</div>
          <button className="login__signInBtn">Sign in</button>
          {/* <Link to="/register" style={{ textDecoration: "none" }}> */}
          <button
            type="button"
            className="login__createAccBtn"
            onClick={refreshHandler}
          >
            Create a new account
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  )
}

export default Login
