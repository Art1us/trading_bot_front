import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
  const footerItems = [
    { id: 1, value: "Welcome", link: "/" },
    { id: 2, value: "Login", link: "/login" },
    { id: 3, value: "Main", link: "/main" },
    { id: 4, value: "Exchange", link: "/exchange" },
    { id: 5, value: "Registration", link: "/register" },
  ]

  return (
    <div className="burgerMenu__content">
      <ul className="burgerMenu__list">
        {footerItems.map(item => (
          <Link to={item.link} key={item.id} style={{ textDecoration: "none" }}>
            <li className="burgerMenu__item">{item.value}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Footer
