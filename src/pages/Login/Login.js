import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login__wrapper">
      <form class="form">
        <div className="form__login__title">Sign-in</div>
        <div class="form__row">
          <label class="form__block">
            <div class="form__title">E-mail</div>
            <input type="text" class="form__input" />
          </label>
          <label class="form__block">
            <div class="form__title">Password</div>
            <input type="text" class="form__input" />
          </label>
        </div>
        <div className="btn__login btn__yellow">Sign in</div>
        <div className="btn__login btn__grey">Create new account</div>
      </form>
    </div>
  );
}
