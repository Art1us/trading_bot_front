import React from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";
import { AiOutlineClose } from "react-icons/ai";

const BurgerMenu = ({ items, burgerMenuActive, setBurgerMenuActive }) => {
  return (
    <div className={burgerMenuActive ?  "BurgerMenu active" : "BurgerMenu"}>
      <div className="BurgerMenu__content">
        <div
          className="BurgerMenu__header"
          onClick={() => setBurgerMenuActive(false)}>
          <AiOutlineClose />
        </div>
        <ul className="BurgerMenu__list" >
          {items.map((item) => (
            <li className="BurgerMenu__item" key={items.id} >
              <Link className="BurgerMenu__link" link={item.link}> {item.value} </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
