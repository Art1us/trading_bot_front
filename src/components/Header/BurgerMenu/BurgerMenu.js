import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";
import { AiOutlineClose } from "react-icons/ai";

function BurgerMenu({ burgerMenuActive, setBurgerMenuActive }) {
  const burgerMenuItems = [
    { id: 1, value: "Welcome", link: "/" },
    { id: 2, value: "Login", link: "/login" },
    { id: 3, value: "Main", link: "/main" },
    { id: 4, value: "Exchange", link: "/exchange" },
    { id: 5, value: "Registration", link: "/register" },
  ];

  const burgerMenuRef = useRef();

  useEffect(() => {
    function burgerMenuOutsideClose(e) {
      if (e.target !== burgerMenuRef.current) {
        setBurgerMenuActive(false);
      }
    }

    document.body.addEventListener("click", burgerMenuOutsideClose);
    return () =>
      document.body.removeEventListener("click", burgerMenuOutsideClose);
  }, []);

  return (
    <div
      ref={burgerMenuRef}
      onClick={(e) => e.stopPropagation()}
      className={`burgerMenu ${burgerMenuActive ? "activeMenu" : ""}`}
    >
      <div className="burgerMenu__content">
        <div className="burgerMenu__header">
          <AiOutlineClose
            onClick={() => setBurgerMenuActive(false)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <ul className="burgerMenu__list">
          {burgerMenuItems.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              style={{ textDecoration: "none" }}
              onClick={() => setBurgerMenuActive(false)}
            >
              <li className="burgerMenu__item">
                <p>{item.value}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
