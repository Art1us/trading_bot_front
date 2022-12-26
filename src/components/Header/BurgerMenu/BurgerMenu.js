import React from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";
import { AiOutlineClose } from "react-icons/ai";

const BurgerMenu = ({
  burgerMenuitems,
  burgerMenuActive,
  setBurgerMenuActive,
}) => {
  return (
    <div className={burgerMenuActive ? `burgerMenu active` : `burgerMenu`}>
      <div className="burgerMenu__content">
        <div
          className="burgerMenu__header"
          onClick={() => setBurgerMenuActive(false)}
        >
          <AiOutlineClose />
        </div>
        <ul className="burgerMenu__list">
          {burgerMenuitems.map((item) => (
            <Link to={item.link} key={item.id} className="burgerMenu__link">
              <li className="burgerMenu__item">
                <p className="burgerMenu__paragraph">{item.value}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
