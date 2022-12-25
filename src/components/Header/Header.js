import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiGlobalLine } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import botLogo from "../../assets/pictures/logo-bot.png";
import LanguageDropdown from "./LanguageDropdown/LanguageDropdown";
import ReactSwitch from "react-switch";

function Header() {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [theme, setTheme] = useState(false);

  function toggleTheme() {
    setTheme((curr) => !curr);
    console.log("he's alive!");
  }

  function languageClickHandler(e) {
    e.stopPropagation();
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
          <div className="themeToggle">
            <ReactSwitch
              checked={theme}
              onChange={toggleTheme}
              offColor="#fff"
              onColor="#000"
              onHandleColor="#fff"
              offHandleColor="#000"
              handleDiameter={17}
              uncheckedIcon={<BsFillSunFill className="header__toggle--day" />}
              checkedIcon={<BsFillMoonFill className="header__toggle--night" />}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0"
              height={20}
              width={40}
              className="react-switch"
              id="material-switch"
            />
          </div>
          <div
            className="header__elements--hover"
            onClick={languageClickHandler}
          >
            <RiGlobalLine className="header__elments-item--right" />
            {displayDropdown ? (
              <LanguageDropdown
                displayDropdown={displayDropdown}
                setDisplayDropdown={setDisplayDropdown}
              />
            ) : (
              ""
            )}
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
