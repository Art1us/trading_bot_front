import React from "react"
import "./LoggedIn.css"

function LoggedIn() {
  return (
    <div className="loggedIn">
      <div className="loggedIn__container">
        <h2 className="loggedIn__title">
          Hey, username, you are already logged in!
        </h2>
        <p className="loggedIn__description">
          Go to your profile and start trading!🤑
        </p>
        <div className="loggedIn__btnContainer">
          <button className="loggedIn__profileBtn">Go to your profile</button>
          <button className="loggedIn__logOutBtn">Log Out</button>
        </div>
      </div>
    </div>
  )
}

export default LoggedIn
