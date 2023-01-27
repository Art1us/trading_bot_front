import React from "react"
import { Link } from "react-router-dom"

import "./PageNotFound.css"

function PageNotFound() {
  return (
    <div className="pageNotFound">
      <div className="pageNotFound__container">
        <h2 className="pageNotFound__title">Oops...😱</h2>
        <p className="pageNotFound__description">
          Something went wrong... <br /> Page not found!
        </p>
        <div className="pageNotFound__btnContainer">
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="pageNotFound__pageBtn">
              Visit our main page
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
