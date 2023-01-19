import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { burgerMenuItems } from "./burgerMenuItems/burgerMenuItems"
import "./BurgerMenu.css"
import { AiOutlineClose } from "react-icons/ai"
import { useModalContext } from "hooks/contextHooks/useModalContext/useModalContext"

function BurgerMenu({ burgerMenuActive, setBurgerMenuActive }) {
  const { setShowLogoutModal } = useModalContext()
  const burgerMenuRef = useRef()

  useEffect(() => {
    function burgerMenuOutsideClose(e) {
      if (e.target !== burgerMenuRef.current) {
        setBurgerMenuActive(false)
      }
    }
    document.body.addEventListener("click", burgerMenuOutsideClose)
    return () =>
      document.body.removeEventListener("click", burgerMenuOutsideClose)
  }, [])

  function logoutClickHandler() {
    setBurgerMenuActive(false)
    setShowLogoutModal(true)
  }

  return (
    <div
      ref={burgerMenuRef}
      onClick={e => e.stopPropagation()}
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
          {burgerMenuItems.map(item => (
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
          <li className="burgerMenu__item" onClick={logoutClickHandler}>
            <p>Log Out</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BurgerMenu
