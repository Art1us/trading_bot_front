import React, { useState } from "react";
import TestModeGraphs from "../TestModeGraphs/TestModeGraphs";
import TestModeForm from "../TestModeForm/TestModeForm";
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
        <TestModeForm date={date} setDate={setDate} />
        {showGraphs && <TestModeGraphs />}
      </div>
    </div>
  );
}

export default TestMode;
