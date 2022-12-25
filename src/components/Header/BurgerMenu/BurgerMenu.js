import React from "react";
import "./BurgerMenu.css";
import { AiOutlineClose } from "react-icons/ai";


const BurgerMenu = ({ items, active, setActive }) => {
  return (
    <div className={active ? "menu active" : "menu"}>
      <div className="menu__content" >
        <div className="menu__header"onClick = {() => setActive(false)}> <AiOutlineClose/></div>
        <ul>
          {items.map((item) => (
            <li>
              <a href= {item.href}>{item.value}</a>
            </li>
          ))}
        </ul>
      </div>
      </div>
    
  );
};

export default BurgerMenu;
