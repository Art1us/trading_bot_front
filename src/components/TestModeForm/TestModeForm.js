import React from "react";

function TestModeForm() {

   
    
  return (
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
        *When you push Start Button, you will see how bot would act if it was
        working during selected date period.
      </p>
    </div>
  );
}

export default TestModeForm;
