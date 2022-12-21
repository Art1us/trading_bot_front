import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiGlobalLine } from "react-icons/ri";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div>
          <RiGlobalLine className="header__elements-item--left" />
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 className="header__title">Trading Bot</h2>
        </Link>
        <div className="header__elements ">
          <div className="header__elements--hover">
          <RiGlobalLine className="header__elments-item--right" />
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
