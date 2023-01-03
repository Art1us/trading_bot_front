import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
  const footerItems = [
    { id: 1, value: "Developers " },
    { id: 2, value: "Support" },
    { id: 3, value: "Careers " },
    { id: 4, value: "Terms " },
    { id: 5, value: "Privacy" },
  ]

  return (
    <div className="footer__container">
      <div className=" footer__item">© 2023 TradingBot Inc</div>
      <ul className="footer__list">
        {footerItems.map(item => (
          <Link to={item.link} key={item.id} style={{ textDecoration: "none" }}>
            <li className="footer__item">{item.value}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Footer
