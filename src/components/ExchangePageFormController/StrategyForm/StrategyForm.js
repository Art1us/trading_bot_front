import React, { useState, useContext } from "react";
import { Context } from "../../../Context";
import "./StrategyForm.css";

function StrategyForm() {
  const { setSelectedBotSettings, BOT_OPTIONS } =
    useContext(Context);
  const [selected, setSelected] = useState(BOT_OPTIONS.strategy[0]);

  const submit = () => {
    setSelectedBotSettings((prev) => ({ ...prev, strategy: selected }));
  };

  return (
    <div className="strategyForm__wrapper">
      <h3 className="strategyForm__title">Select trading strategy</h3>
      <select
        className="strategyForm__select"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {BOT_OPTIONS.strategy.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <button className="strategyForm__btn" type="button" onClick={submit}>
        Submit
      </button>
    </div>
  );
}

export default StrategyForm;
