import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login__wrapper">
      <form class="login__form">
        <div className="login__form__main-title">Sign-in</div>
        <div class="login__form__row">
          <label class="login__form__block">
            <div class="login__form__title">E-mail</div>
            <input type="text" class="login__form__input" />
          </label>
          <label class="login__form__block">
            <div class="login__form__title">Password</div>
            <input type="text" class="login__form__input" />
          </label>
        </div>
        <div className="btn__login btn__login__violet">Sign in</div>
        <div className="btn__login btn__login__grey">Create new account</div>
      </form>
    </div>
  );
}
