import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BsChatLeftDots } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import botLogo from "../../assets/pictures/logo-bot.png";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header__logo">
            <img src={botLogo} alt="Logo" />
          </div>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>Trading Bot</h2>
        </Link>
        <div className="header__help">
          <BsChatLeftDots />
        </div>
      </div>
    </header>
  );
}

export default Header;
