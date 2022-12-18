import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <form class="login__form">
          <div className="login__formTitle">Sign-in</div>
          <div class="login__formRow">
            <label class="login__formBlock">
              <input
                type="email"
                class="login__formInput"
                placeholder="Your Email"
              />
            </label>
            <label class="login__formBlock">
              <input
                type="password"
                class="login__formInput"
                placeholder="Password"
              />
            </label>
          </div>
          <button className="login__signInBtn">Sign in</button>
          <button className="login__createAccBtn">Create a new account</button>
        </form>
      </div>
    </div>
  );
}
