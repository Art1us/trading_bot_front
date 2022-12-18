import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__container">
        <div className="welcome__button">
          <h1 className="welcome__buttonText">Login</h1>
        </div>
        <div className="welcome__button">
          <h1 className="welcome__buttonText">Register</h1>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
