import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiGlobalLine } from "react-icons/ri";
import botLogo from "../../assets/pictures/logo-bot.png";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

function Header() {
  const [BurgerMenuActive, setBurgerMenuActive] = useState(false);
  const items = [
    { value: "Main", href: "/main" },
    { value: "Service", href: "/service" },
    { value: "Shop", href: "/shop" },
    { value: "About us", href: "/about" },
  ];
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
            <RiGlobalLine className="header__elments-item--right" />
          </div>
          <div className="header__elements--hover">
            <RxHamburgerMenu
              className="header__elments-item--right burgerBtn"
              onClick={() => setBurgerMenuActive(!BurgerMenuActive)}
            />
          </div>
        </div>
      </div>
      <BurgerMenu
        active={BurgerMenuActive}
        setActive={setBurgerMenuActive}
        items={items}
      />
    </header>
  );
}

export default Header;
