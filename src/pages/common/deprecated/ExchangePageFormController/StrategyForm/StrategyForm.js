import React, { useState, useContext } from "react"
import { Context } from "../../../Context"
import "./StrategyForm.css"

function StrategyForm() {
  const { setSelectedBotSettings, BOT_OPTIONS } = useContext(Context)
  const [selected, setSelected] = useState(BOT_OPTIONS.strategy[0].name)

  const submit = () => {
    setSelectedBotSettings(prev => ({
      ...prev,
      strategy: BOT_OPTIONS.strategy.filter(item => item.name === selected)[0],
    }))
  }

  return (
    <div className="strategyForm">
      <div className="strategyForm__wrapper">
        <h3 className="strategyForm__title">Select trading strategy</h3>
        <select
          className="strategyForm__select"
          value={selected}
          onChange={e => setSelected(e.target.value)}
        >
          {BOT_OPTIONS.strategy.map(item => (
            <option value={item.name} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <button className="strategyForm__btn" type="button" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default StrategyForm
