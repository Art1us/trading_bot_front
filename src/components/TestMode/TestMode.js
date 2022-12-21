import React, { useState } from "react";
import TestModeGraphs from "../TestModeGraphs/TestModeGraphs";

import "./TestMode.css";

function TestMode() {
  const [showGraphs, setShowGraphs] = useState(false);
  const [date, setDate] = useState({
    from: "",
    to: "",
  });

  function sumbitHandler(e) {
    e.preventDefault();
    
    if (!date.from || !date.to) return;

    console.log(date);
    /* Take this date and set up the chart with it */
    setDate({
      from: "",
      to: "",
    });
    setShowGraphs(true);
  }

  return (
    <div className="testMode" onSubmit={sumbitHandler}>
      <div className="testMode__container">
        <div className="testMode__title">
          <h2>Select date range</h2>
        </div>
        <div className="testMode__formContainer">
          <form className="testMode__dateForm">
            <div className="testMode__dateFormInput--from">
              <label htmlFor="">From:</label>
              <input
                type="date"
                value={date.from}
                onChange={(e) =>
                  setDate((prev) => ({ ...prev, from: e.target.value }))
                }
              />
              <p className="incorrectInputMsg">*Select date</p>
            </div>
            <div className="testMode__dateFormInput--to">
              <label htmlFor="">To:</label>
              <input
                type="date"
                value={date.to}
                onChange={(e) =>
                  setDate((prev) => ({ ...prev, to: e.target.value }))
                }
              />
              <p className="incorrectInputMsg">*Select date</p>
            </div>
            <input type="submit" className="testMode__startBtn" value="Test" />
          </form>
          <p className="testMode__description">
            *When you push Start Button, you will see how bot would act if it
            was working during selected date period.
          </p>
        </div>
        {showGraphs && <TestModeGraphs />}
      </div>
    </div>
  );
}

export default TestMode;
