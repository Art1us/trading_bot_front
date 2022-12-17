import React from "react";
import "./Header.css";

import {BsChatLeftDots} from 'react-icons/bs'
import {RxHamburgerMenu} from 'react-icons/rx'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__burger"><RxHamburgerMenu/></div>
        <h2>Trading Bot</h2>
        <div className="header__help"><BsChatLeftDots/></div>
      </div>
    </header>
  );
}

export default Header;
