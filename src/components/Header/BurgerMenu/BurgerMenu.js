import React, { useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth/useAuth"
import { burgerMenuItems } from "./burgerMenuItems/burgerMenuItems"
import "./BurgerMenu.css"
import { AiOutlineClose } from "react-icons/ai"

function BurgerMenu({ burgerMenuActive, setBurgerMenuActive }) {
 const { logout } = useAuth()
  const navigate = useNavigate()
  
 /* const burgerMenuItems = [
    { id: 1, value: "Personal Profile", link: "/profile" },
    { id: 2, value: "Welcome", link: "/" },
    { id: 3, value: "Login", link: "/login" },
    { id: 4, value: "Main", link: "/main" },
    { id: 5, value: "Exchange", link: "/exchange" },
    { id: 6, value: "Registration", link: "/register" },
  ] */

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
    logout()
    navigate("/")
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
