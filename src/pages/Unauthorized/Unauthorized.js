import React from "react"
import { Link } from "react-router-dom"

import "./Unauthorized.css"

function Unauthorized() {
  return (
    <div className="unauthorized">
      <div className="unauthorized__container">
        <h2 className="unauthorized__title">Unauthorized 😢</h2>
        <p className="unauthorized__description">
          You do not have access to the requested page
        </p>
        <div className="unauthorized__btnContainer">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="unauthorized__logInBtn">Log In</button>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <button className="unauthorized__signUpBtn">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Unauthorized
