import React, { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"

import "./Login.css"

import { LoggedIn } from "pages/common/components"

import { useApi, useAuth, useForm } from "hooks"
import { fetchLogin } from "api/auth/fetchLogin"
import { formInputsData } from "./data"

function Login() {
  const { auth, setAuth } = useAuth()
  const login = useApi(fetchLogin)
  const controller = new AbortController()
  const navigate = useNavigate()

  const { inputComponents, isSubmitInvalid, formValues, displayCustomError } =
    useForm(formInputsData)

  useEffect(() => {
    let mounted = true
    if (login.response?.status === 200 && mounted) {
      setAuth(login.response?.data?.data)
      navigate("/main")
    }
    return () => {
      mounted = false
      controller.abort()
    }
  }, [login.response?.data])

  useEffect(() => {
    let errorText
    if (login.error?.status === 404) {
      errorText = "Username doesn't exist"
    } else if (login.error?.status === 401) {
      errorText = "Password is not correct"
    } else {
      errorText = login.error?.message || "Unexpected error"
    }
    if (login.error?.message) {
      displayCustomError(errorText)
    }
  }, [login.error])

  function submitHandler(e) {
    e.preventDefault()
    if (isSubmitInvalid()) return
    login.request(formValues.email, formValues.password, controller)
  }

  return (
    <>
      {auth?.access_token ? (
        <LoggedIn />
      ) : (
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
      )}
    </>
  )
}

export default Login
