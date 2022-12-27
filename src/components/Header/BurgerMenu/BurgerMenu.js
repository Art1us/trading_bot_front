import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";
import { AiOutlineClose } from "react-icons/ai";

const BurgerMenu = ({
  burgerMenuItems,
  burgerMenuActive,
  setBurgerMenuActive,
}) => {

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
        <div
          className="burgerMenu__header"
          onClick={() => setBurgerMenuActive(false)}
        >
          <AiOutlineClose />
        </div>
        <ul className="burgerMenu__list">
          {burgerMenuItems.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              style={{ textDecoration: "none" }}
            >
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
