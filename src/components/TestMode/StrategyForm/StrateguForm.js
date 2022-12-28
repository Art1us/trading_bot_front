import React from "react";
import "./StrategyForm.css";

function StrategyForm() {
  return (
    <div className="strategyForm__wrapper">
      <div className="strategyForm__title">Select trading strategy</div>
      <label className="strategyForm__label">
        <input type="text" className="strategyForm__input" />
      </label>
      <div className="strategyForm__btn">
        <input
          type="submit"
          value="Заказать"
          className="strategyForm__btn--btn"
        />
      </div>
    </div>
  );
}

export default StrategyForm;
