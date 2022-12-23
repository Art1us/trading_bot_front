import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiGlobalLine } from "react-icons/ri";
import botLogo from "../../assets/pictures/logo-bot.png";
import LanguageDropdown from "./LanguageDropdown/LanguageDropdown";

function Header() {
  const [displayDropdown, setDisplayDropdown] = useState(true);

  function languageClickHandler() {
    setDisplayDropdown((prev) => !prev);
  }

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
        <div className="header__elements ">
          <div className="header__elements--hover">
            <RiGlobalLine
              className="header__elments-item--right"
              onClick={languageClickHandler}
            />
            {displayDropdown ? <LanguageDropdown/> : ""}
          </div>
          <div className="header__elements--hover">
            <RxHamburgerMenu className="header__elments-item--right" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
