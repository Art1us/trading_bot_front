import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__container">
        <Link to="/login" style={{textDecoration: 'none'}}>
          <div className="welcome__button">
            <h1 className="welcome__buttonText">Login</h1>
          </div>
        </Link>
        <Link to="/register" style={{textDecoration: 'none'}}>
          <div className="welcome__button">
            <h1 className="welcome__buttonText">Register</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
