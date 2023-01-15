import React from "react"
import "./BotSettings.css"

function BotSettings() {
  return (
    <>
      <div className="botSettings__container">
        <h3 className="botSettings__title">Bot settings</h3>
        <div className="botSettings__content">
          <p>Bot's name: C-3PO</p>
          <p>Strategy: professional</p>
          <p>Bot's balance: 3b$</p>
          <p>Your earns: 21b$</p>
          <div className="botSettings__btnContainer">
            <button className="botSettings__btn">Edit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BotSettings
