import React from "react"
import "./ProfileComponent.css"
import ProfileHeader from "../ProfileHeader/ProfileHeader"
import EditPencil from "../../EditPencil/EditPencil"

function ProfileComponent() {
  return (
    <div className="profileComponent">
      <ProfileHeader title="Profile" />
      <div className="profileComponent__wrapper">
        <div className="profileComponent__generalInfo">
          <h3 className="profileComponent__generalInfo--title">General Info</h3>
          <div className="profileComponent__generalInfo--fullName">
            <p>Full name: Vasya Bulkin</p>
            <EditPencil />
          </div>
          <div className="profileComponent__generalInfo--userName">
            <p>User name: Bulka228</p>
            <EditPencil />
          </div>

          <p className="profileComponent__generalInfo--balance">
            Balance: 228 BTC
          </p>
        </div>
        <div className="profileComponent__authentication">
          <h3 className="profileComponent__authentication--title">
            Authentication
          </h3>
          <p className="profileComponent__authentication--email">
            Email: 1488@228.37
          </p>
          <p className="profileComponent__authentication--password">
            Password: *******
          </p>
          <button className="profileComponent__authentication--btnChange">
            Change
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileComponent
