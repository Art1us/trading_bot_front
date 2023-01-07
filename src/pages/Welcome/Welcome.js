import React from "react"
import "./Welcome.css"
import { Link } from "react-router-dom"
import imgWelcome from "../../assets/pictures/imgWelcome.png"
import Footer from "../Footer/Footer"

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__container">
        <div className="welcome__wrapper ">
          <div className="welcome__title-section">
            <h1 className="welcome__main-title">
              Start your awesome trading experience with us
            </h1>
            <h3 className="welcome__title-desc">
              Join now and relax while our bot works
            </h3>
            <div className="welcome__btn">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button className="welcomeLogin__btnLog">Log In</button>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <button className="welcomeLogin__btnSign">Sign up</button>
              </Link>
            </div>
          </div>
          <div className="welcome__img">
            <img src={imgWelcome} alt="bot" className="welcomeImg__img" />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Welcome
