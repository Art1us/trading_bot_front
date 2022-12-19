import React from "react";
import {Link} from 'react-router-dom'
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <form className="login__form">
          <div className="login__formTitle">Sign-in</div>
          <div className="login__formRow">
            <label className="login__formBlock">
              <input
                type="email"
                className="login__formInput"
                placeholder="Your Email"
              />
            </label>
            <label className="login__formBlock">
              <input
                type="password"
                className="login__formInput"
                placeholder="Password"
              />
            </label>
          </div>
          <Link to="/main" style={{ textDecoration: "none" }}>
            <button className="login__signInBtn">Sign in</button>
          </Link>
          <button className="login__createAccBtn">Create a new account</button>
        </form>
      </div>
    </div>
  );
}
