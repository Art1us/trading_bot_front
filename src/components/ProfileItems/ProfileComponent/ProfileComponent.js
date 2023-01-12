import React from "react"
import "./ProfileComponent.css"
import NewBotBtn from "../NewBotBtn/NewBotBtn"

function ProfileComponent() {
  return (
    <div className="profileComponent">
      <div className="profileComponent__header">
        Profile <NewBotBtn />
      </div>
      <div className="profileComponent__wrapper">
        <div className="profileComponent__generalInfo">
          <h3 className="profileComponent__generalInfo--title">General Info</h3>
          <p className="profileComponent__generalInfo--fullName">
            Full name: Vasya Bulkin
          </p>
          <p className="profileComponent__generalInfo--userName">
            User name: Bulka228
          </p>
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
