import React from "react";
import "./ExchangePage.css";
import ExchangePageFormController from "../../components/ExchangePageFormController/ExchangePageFormController";

function ExchangePage() {
  return (
    <div className="exchangePage">
      <div className="exchangePage__container">
        <ExchangePageFormController />
      </div>
    </div>
  );
}

export default ExchangePage;
