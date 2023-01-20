import React from "react"
import { Link } from "react-router-dom"
import "./RegistrationSuccess.css"

function RegistrationSuccess() {
  return (
    <div className="registrationSuccess">
      <div className="registrationSuccess__container">
        <h2 className="registrationSuccess__title">Hooray! 😎</h2>
        <p className="registrationSuccess__description">
          Your registration has been successfully completed!
        </p>
        <div className="registrationSuccess__btnContainer">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="registrationSuccess__logInBtn">Log In</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegistrationSuccess
