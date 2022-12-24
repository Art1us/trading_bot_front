import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiGlobalLine } from "react-icons/ri";
import botLogo from "../../assets/pictures/logo-bot.png";
import LanguageDropdown from "./LanguageDropdown/LanguageDropdown";

function Header() {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  function languageClickHandler() {
    setDisplayDropdown((prev) => !prev);
  }

  useEffect(() => {
    console.log('effect1 fired')
  
  } )  //Effect fires on every render or re-render (update)

  useEffect(() => {
    console.log('effect2 fired')
  
  }, [])//undefined //undefined //Effect fires on first render only

  useEffect(() => {
    console.log('effect3 fired')
  
  }, [displayDropdown]) //false //true  // Effect fires on first render and any time a variable in dependency array changes


  

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
