import React from "react"
import { useAuth } from "../../hooks/useAuth/useAuth"
import { Link, useNavigate } from "react-router-dom"
import "./LoggedIn.css"

function LoggedIn() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  function logOutClickHandler() {
    logout()
    navigate("/")
  }

  return (
    <div className="loggedIn">
      <div className="loggedIn__container">
        <h2 className="loggedIn__title">Hey, you are already logged in!</h2>
        <p className="loggedIn__description">
          Go to your profile and start trading!🤑
        </p>
        <div className="loggedIn__btnContainer">
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <button className="loggedIn__profileBtn">Go to your profile</button>
          </Link>
          <button className="loggedIn__logOutBtn" onClick={logOutClickHandler}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoggedIn
