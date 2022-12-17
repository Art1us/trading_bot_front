import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome__container">
      <div className="welcome__button">
        <h1 className="text">Login</h1>
      </div>
      <div className="welcome__button">
        <h1 className="text">Register</h1>
      </div>
    </div>
  );
}

export default Welcome;
