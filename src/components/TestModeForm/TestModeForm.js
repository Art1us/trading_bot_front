import React from "react";
import useForm from "../../hooks/useForm/useForm";
import formInputsData from "./formInputsData/formInputsData";

function TestModeForm({ setShowGraphs, setShowDateForm, setSelectedDates }) {
  function compareDates(from, to) {
    let date1 = new Date(from).getTime();
    let date2 = new Date(to).getTime();

    if (date1 > date2) return true;
  }

  const { inputComponents, isSubmitInvalid, formValues, displayCustomError } =
    useForm(formInputsData);

  function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitInvalid()) return;

    if (compareDates(formValues.dateFrom, formValues.dateTo)) {
      displayCustomError("Please enter correct dates!");
      return;
    }

    /* console.log(formValues); */

    setShowDateForm(false);
    setShowGraphs(true);
    setSelectedDates(formValues);
  }

  return (
    <div className="testMode__formContainer">
      <form className="testMode__dateForm" onSubmit={handleSubmit}>
        <h2>Select date range</h2>
        <div className="testMode__dateFormContainer">
          {inputComponents}
          <input type="submit" className="testMode__startBtn" value="Test" />
        </div>
      </form>
      <p className="testMode__description">
        *When you push Start Button, you will see how bot would act if it was
        working during selected date period.
      </p>
    </div>
  );
}

export default TestModeForm;
