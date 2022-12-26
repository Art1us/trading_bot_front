import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiGlobalLine } from "react-icons/ri";
import botLogo from "../../assets/pictures/logo-bot.png";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

function Header() {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const burgerMenuitems = [
    { id: 1, value: "Main", link: "#" },
    { id: 2, value: "Service", link: "#" },
    { id: 3, value: "Shop", link: "#" },
    { id: 4, value: "About us", link: "#" },
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
              className="header__elments-item--right"
              onClick={() => setBurgerMenuActive((prev) => !prev)}
            />
          </div>
        </div>
      </div>
      <BurgerMenu
        burgerMenuActive={burgerMenuActive}
        setBurgerMenuActive={setBurgerMenuActive}
        burgerMenuitems={burgerMenuitems}
      />
    </header>
  );
}

export default Header;
