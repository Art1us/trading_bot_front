import React, { useState, useContext } from "react"
import { Context } from "../../../Context"
import "./TradePairForm.css"

function TradePairForm() {
  const { setSelectedBotSettings, BOT_OPTIONS } = useContext(Context)
  const [selected, setSelected] = useState(BOT_OPTIONS.pair[0].name)

  function submitHandler() {
    setSelectedBotSettings(prev => ({
      ...prev,
      pair: BOT_OPTIONS.pair.filter(item => item.name === selected)[0],
    }))
  }

  return (
    <div className="tradePairForm">
      <div className="tradePairForm__wrapper">
        <h3 className="tradePairForm__title">Select trading pair</h3>
        <select
          className="tradePairForm__select"
          value={selected}
          onChange={e => setSelected(e.target.value)}
        >
          {BOT_OPTIONS.pair.map(item => (
            <option value={item.name} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <button
          className="tradePairForm__btn"
          type="button"
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default TradePairForm
