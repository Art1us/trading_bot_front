import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome_wrapper">
      <div className="welcome__section">
        <div className="section">
          <div className="login__text text">
            <h1>Login</h1>
          </div>
        </div>
        <div className="section">
          <div className="register__text text">
            <h1>Register</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
