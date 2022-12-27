import React, { useState } from "react";
import "./Header.css";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiGlobalLine } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import botLogo from "../../assets/pictures/logo-bot.png";
import LanguageDropdown from "./LanguageDropdown/LanguageDropdown";
import ReactSwitch from "react-switch";

function Header() {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const [displayDropdownActive, setDisplayDropdownActive] = useState(false);
  const [theme, setTheme] = useState(false);

  function toggleTheme() {
    setTheme((curr) => !curr);
    console.log("he's alive!");
  }

  function languageClickHandler(e) {
    e.stopPropagation();
    setDisplayDropdownActive((prev) => !prev);
  }

  function burgerMenuClickHandler(e) {
    e.stopPropagation();
    setBurgerMenuActive((prev) => !prev);
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
              offColor="#000"
              onColor="#fff"
              onHandleColor="#000"
              offHandleColor="#fff"
              handleDiameter={20}
              uncheckedIcon={
                <BsFillMoonFill className="header__toggleIcon--night" />
              }
              checkedIcon={
                <BsFillSunFill className="header__toggleIcon--day" />
              }
              uncheckedHandleIcon={
                <BsFillSunFill className="header__handleIcon--day" />
              }
              checkedHandleIcon={
                <BsFillMoonFill className="header__handleIcon--night" />
              }
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0"
              height={23}
              width={45}
              className="react-switch"
              id="material-switch"
            />
          </div>
          <div
            className="header__elements--hover"
            onClick={languageClickHandler}
          >
            <RiGlobalLine className="header__elments-item--right" />
            {displayDropdownActive ? (
              <LanguageDropdown
                setDisplayDropdownActive={setDisplayDropdownActive}
              />
            ) : (
              ""
            )}
          </div>
          <div className="header__elements--hover">
            <RxHamburgerMenu
              className="header__elments-item--right"
              onClick={burgerMenuClickHandler}
            />
          </div>
        </div>
      </div>

      <BurgerMenu
        burgerMenuActive={burgerMenuActive}
        setBurgerMenuActive={setBurgerMenuActive}
      />
    </header>
  );
}

export default Header;
