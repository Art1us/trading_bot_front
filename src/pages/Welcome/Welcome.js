import React from "react"
import "./Welcome.css"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth/useAuth"
import imgWelcome from "../../assets/pictures/imgWelcome.png"
import Footer from "../Footer/Footer"

function Welcome() {
  const { auth } = useAuth()
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
            {auth?.access_token ? (
              <div className="welcome__btn">
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <button className="welcomeLogin__btnProfile">
                    My Profile
                  </button>
                </Link>
                <Link to="/main" style={{ textDecoration: "none" }}>
                  <button className="welcomeLogin__btnNewBot">
                    Create new bot
                  </button>
                </Link>
              </div>
            ) : (
              <div className="welcome__btn">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <button className="welcomeLogin__btnLog">Log In</button>
                </Link>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <button className="welcomeLogin__btnSign">Sign up</button>
                </Link>
              </div>
            )}
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
