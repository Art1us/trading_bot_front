import React from "react";
import "./TestMode.css";

function TestMode() {
  return (
    <div className="testMode">
      <div className="testMode__container">
        <div className="testMode__title">
          <h2>Select date range</h2>
        </div>
        <div className="testMode__formContainer">
          <form className="testMode__dateForm">
            <div className="testMode__dateFormInput--from">
              <label htmlFor="">From:</label>
              <input type="date" />
            </div>
            <div className="testMode__dateFormInput--to">
              <label htmlFor="">To:</label>
              <input type="date" />
            </div>
            <input type="submit" className="testMode__startBtn" value="Start" />
          </form>
          <p className="testMode__description">
            *When you push Start Button, you will see how bot would act if it was
            working during selected date period.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestMode;
