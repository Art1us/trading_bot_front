import React from "react"
import "./Welcome.css"
import { Link } from "react-router-dom"
import imgWelcome from "../../assets/pictures/imgWelcome.png"
import Footer from "../Footer/Footer"

function Welcome() {
  return (
    <div className="welcome__container">
      <div className="welcome__wrapper ">
        <div class="welcome__title-section">
          <h1 class="welcome__main-title">
            Start your awesome trading experience with us
          </h1>
          <h3 class="welcome__title-desc">
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
      </div>

      <Footer />
      {/* <footer className="welcome__footer">
        <ul className="footer__list">
          <li className="footer__item footer__title">© 2023 TradingBot Inc</li>
          <li className="footer__item">Developers</li>
          <li className="footer__item">Developers</li>
          <li className="footer__item">Developers</li>
          <li className="footer__item">Developers</li>
          <li className="footer__item">Developers</li>
        </ul>
      </footer> */}
    </div>
  )
}

export default Welcome
