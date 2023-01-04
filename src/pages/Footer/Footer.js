import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"
import { ColorType } from "lightweight-charts"

function Footer() {
  const footerItems = [
    { id: 1, value: "Developers ", link: "#" },
    { id: 2, value: "Support", link: "#" },
    { id: 3, value: "Careers ", link: "#" },
    { id: 4, value: "Terms ", link: "#" },
    { id: 5, value: "Privacy", link: "#" },
  ]

  return (
    <div className="footer__container">
      <div className=" footer__item footer__title">© 2023 TradingBot Inc</div>
      <ul className="footer__list">
        {footerItems.map(item => (
          <Link
            to={item.link}
            key={item.id}
            style={{ textDecoration: "none", color: "var(--base-color)" }}
          >
            <li className="footer__item">{item.value}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Footer
