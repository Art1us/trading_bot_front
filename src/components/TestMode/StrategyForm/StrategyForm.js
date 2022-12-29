import React, {useState} from "react";
import "./StrategyForm.css";

const options = ["Standard", "Advanced", "Preliminary", "Intermediate"];

function StrategyForm() {
  const [selected, setSelected] = useState(options[0]);

  const submit = () => {
    console.log(selected);
  };

  return (
    <div className="strategyForm__wrapper">
      <h3 className="strategyForm__title">Select trading strategy</h3>
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
      <button className="strategyForm__btn" type="button" onClick={submit}>
        Submit
      </button>
    </div>
  );
};

export default StrategyForm;
