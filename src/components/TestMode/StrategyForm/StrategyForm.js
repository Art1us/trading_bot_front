import React from "react";
import "./StrategyForm.css";
import { useState } from "react";

const options = ["Standard", "Advanced", "Preliminary", "Intermediate"];

function StrategyForm() {
  const [selected, setSelected] = useState(options[0]);

  const submit = () => {
    console.log(selected);
  };

  return (
    <div className="strategyForm__wrapper">
      <h1 className="strategyForm__title">Select trading strategy</h1>
      <select
        className="strategyForm__select"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
      <button className="strategyForm__btn--btn" type="button" onClick={submit}>
        Submit
      </button>
    </div>
  );
}

export default StrategyForm;
