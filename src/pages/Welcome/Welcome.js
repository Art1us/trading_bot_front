import React from "react"
import "./Welcome.css"
import { Link } from "react-router-dom"
<<<<<<< Updated upstream
import imgWelcome from "../../assets/pictures/imgWelcome.png"

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
      <footer className="welcome__footer">
        <div className="footerText">© 2023 TradingBot Inc</div>
        <div className="footer__bullet"></div>
        <Link href="" className="footer__link">
          Developers
        </Link>
        <div className="footer__bullet"></div>
        <Link to={""} className="footer__link">
          Support
        </Link>
        <div className="footer__bullet"></div>
        <Link to={""} className="footer__link">
          Careers
        </Link>
        <div className="footer__bullet"></div>
        <Link to={""} className="footer__link">
          Terms
        </Link>
        <div className="footer__bullet"></div>
        <Link to={""} className="footer__link">
          Privacy
        </Link>
      </footer>
=======

function Welcome() {
  return (
    <div className="welcome">
      <div class="welcome__title-section">
        <h1 class="welcome__main-title">Беспроводные наушники Beats Solo 3</h1>
        <div class="welcome__title-desc">
          Встречайте новую версию наушников из линейки Powerbeats.
        </div>
        <a href="#" class="welcome v--theme--red">
          Заказать
        </a>
      </div>
>>>>>>> Stashed changes
    </div>
  )
}

export default Welcome
<<<<<<< Updated upstream
=======

{
  /* <div className="welcome__container">
<Link to="/login" style={{ textDecoration: "none" }}>
  <div className="welcome__button">
    <h1 className="welcome__buttonText">Login</h1>
  </div>
</Link>
<Link to="/register" style={{ textDecoration: "none" }}>
  <div className="welcome__button">
    <h1 className="welcome__buttonText">Register</h1>
  </div>
</Link>
</div> */
}
>>>>>>> Stashed changes
