import React, { useState } from "react";
import "./TestMode.css";

function TestMode() {
  const [date, setDate] = useState({
    from: "",
    to: "",
  });

  function sumbitHandler(e) {
    e.preventDefault();
    console.log(date)
    setDate({
      from: "",
      to: "",
    })
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
            </div>
            <input type="submit" className="testMode__startBtn" value="Test" />
          </form>
          <p className="testMode__description">
            *When you push Start Button, you will see how bot would act if it
            was working during selected date period.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestMode;
