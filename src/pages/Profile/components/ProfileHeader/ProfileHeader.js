import React from "react"
import { Link } from "react-router-dom"

import "./ProfileHeader.css"

function ProfileHeader({ title }) {
  return (
    <div className="profileHeader">
      <p className="profileHeader__title">{title}</p>
      <Link to="/main" style={{ textDecoration: "none" }}>
        <button className="profileHeader__creatBot">Create new bot</button>
      </Link>
    </div>
  )
}

export default ProfileHeader
