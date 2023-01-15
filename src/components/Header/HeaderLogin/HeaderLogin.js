import React from "react"
import { Link } from "react-router-dom"
import "./HeaderLogin.css"

function HeaderLogin() {
  return (
    <div className="headerLogin__wrapper">
      <Link to="/login" style={{ textDecoration: "none" }}>
        <button className="headerLogin__btnLog">Log In</button>
      </Link>
      <Link to="/register" style={{ textDecoration: "none" }}>
        <button className="headerLogin__btnSign">Sign up</button>
      </Link>
    </div>
  )
}

export default HeaderLogin
