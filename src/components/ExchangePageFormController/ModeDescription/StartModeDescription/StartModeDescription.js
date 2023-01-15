import React from "react"
import "./StartModeDescription.css"

function StartModeDescription({ onClick }) {
  return (
    <div className="StartModeDescription">
      <h2 className="StartModeDescription__title">Start Mode</h2>
      <div className="StartModeDescription__description">
        <p>
          In the start mode you will set up a bot, choosing pair and strategy,
          and fill in manual settings.
        </p>
        <p>
          You should have a non-zero deposit to start a bot. You are free to
          experiment with settings and strategies.
        </p>
        <p>
          It's strongly recommended to have multiple bots for different
          strategies.
        </p>
      </div>
      <button className="StartModeDescription__button" onClick={onClick}>
        Select Start Mode
      </button>
    </div>
  )
}

export default StartModeDescription
