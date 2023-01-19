import React from "react"
import "./TestModeDescription.css"

function testModeDescription({ onClick }) {
  return (
    <div className="testModeDescription">
      <h2 className="testModeDescription__title">Test Mode</h2>
      <div className="testModeDescription__description">
        <p>
          In test mode(backtesting) you can review how the bot would have traded
          over a period covering the past 2 years with any of the trading pairs.
        </p>
        <p>
          Try different bot settings and see how it would have performed on real
          price change charts over the past 2 years, with a virtual deposit.
        </p>
        <p>
          It should be noted that the results of the simulation mode bot may be
          inaccurate and differ from the bot's real performance.
        </p>
      </div>
      <button className="testModeDescription__button" onClick={onClick}>
        Select Test Mode
      </button>
    </div>
  )
}

export default testModeDescription
