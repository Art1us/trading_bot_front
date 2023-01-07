import React, { useEffect } from "react"
import "./Login.css"
import { useNavigate, Link } from "react-router-dom"
import useForm from "../../hooks/useForm/useForm"
import formInputsData from "./formInputsData/formInputsData"

import { useApi } from "../../hooks/useApi/useApi"
import { fetchLogin } from "../../api/auth/fetchLogin"
import { useAuth } from "../../hooks/useAuth/useAuth"

function Login() {
  const { setAuth } = useAuth()
  const login = useApi(fetchLogin)
  const controller = new AbortController()
  const navigate = useNavigate()
  const { inputComponents, isSubmitInvalid, formValues } =
    useForm(formInputsData)

  useEffect(() => {
    let mounted = true

    if (login.response?.status === 200 && mounted) {
      setAuth(login.response?.data?.data)
      navigate("/main")
    }
    //404 - username doesn't exist
    //401 - correct email with incorrect password
    //server timeout
    //unexpected error
    return () => {
      mounted = false
      controller.abort()
    }
  }, [login.response?.data])

  function submitHandler(e) {
    e.preventDefault()
    if (isSubmitInvalid()) return
    login.request(formValues.email, formValues.password, controller)
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
