import React from "react"
import "./InfoCard.css"

function InfoCard({ title, content }) {
  return (
    <div className="profileComponent__authentication">
      <h3 className="profileComponent__authentication--title">{title}</h3>
      <div className="content">{content}</div>
    </div>
  )
}

export default InfoCard
