import React, { useState } from "react";
import TestModeGraphs from "../TestModeGraphs/TestModeGraphs";
import TestModeForm from "./TestModeForm/TestModeForm";
import "./TestMode.css";
import StrategyForm from "./StrategyForm/StrategyForm";

function TestMode() {
  const [showGraphs, setShowGraphs] = useState(false);
  const [showDateForm, setShowDateForm] = useState(true);
  const [selectedDates, setSelectedDates] = useState({});

  return (
    <div className="testMode">
      <div className="testMode__container">
        <StrategyForm />
        {showDateForm ? (
          <TestModeForm
            setShowGraphs={setShowGraphs}
            setShowDateForm={setShowDateForm}
            setSelectedDates={setSelectedDates}
          />
        ) : (
          <p>
            From: {selectedDates.dateFrom} To: {selectedDates.dateTo}
          </p>
        )}
        {showGraphs && <TestModeGraphs />}
      </div>
    </div>
  );
}

export default TestMode;
