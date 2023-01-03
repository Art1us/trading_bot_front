import React, { useState } from "react"
import "./Header.css"
import BurgerMenu from "./BurgerMenu/BurgerMenu"
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"
import { RiGlobalLine } from "react-icons/ri"
import botLogo from "../../assets/pictures/logo-bot.png"
import LanguageDropdown from "./LanguageDropdown/LanguageDropdown"
import ThemeToggle from "./ThemeToggle/ThemeToggle"

function Header() {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false)
  const [displayDropdownActive, setDisplayDropdownActive] = useState(false)

  function languageClickHandler(e) {
    e.stopPropagation()
    setDisplayDropdownActive(prev => !prev)
  }

  function burgerMenuClickHandler(e) {
    e.stopPropagation()
    setBurgerMenuActive(prev => !prev)
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
          <h2 className="header__title">Trading Bot</h2>
        </Link>
        <div className="header__elements ">
          <ThemeToggle />
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
          <div className="headerUser__signIn">
            {isLoggedIn ? (
              <>
                <p className="header__userName">Hello username</p>
                <div className="header__elements--hover">
                  <RxHamburgerMenu
                    className="header__elments-item--right"
                    onClick={burgerMenuClickHandler}
                  />
                </div>
              </>
            ) : (
              <HeaderLogin setIsLoggedIn={setIsLoggedIn} />
            )}
          </div>
        </div>
      </div>
      <BurgerMenu
        burgerMenuActive={burgerMenuActive}
        setBurgerMenuActive={setBurgerMenuActive}
      />
    </header>
  )
}

export default Header
