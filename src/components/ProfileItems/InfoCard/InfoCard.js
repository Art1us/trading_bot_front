import React from "react"
import "./InfoCard.css"

function InfoCard({ title, content }) {
  return (
    <div className="infoCard__wrapper">
      <h3 className="infoCard__title">{title}</h3>
      <div className="infoCard__content">{content}</div>
    </div>
  )
}

export default InfoCard
