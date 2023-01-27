import React, { useState } from "react"
import { Link } from "react-router-dom"

import "./Header.css"
import { RiGlobalLine } from "react-icons/ri"
import botLogo from "assets/pictures/logo-bot.png"

import {
  BurgerMenu,
  Greeting,
  HeaderLogin,
  LanguageDropdown,
  ThemeToggle,
} from "./components"

import { useAuth } from "hooks"

function Header() {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false)
  const [displayDropdownActive, setDisplayDropdownActive] = useState(false)
  const { auth } = useAuth()

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
        <div className="headerLogo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={botLogo} alt="Logo" className="headerLogo__img" />
          </Link>
        </div>
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
            {auth?.access_token ? (
              <Greeting onClick={burgerMenuClickHandler} />
            ) : (
              <HeaderLogin />
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
