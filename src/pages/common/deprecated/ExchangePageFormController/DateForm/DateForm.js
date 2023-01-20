import React, { useContext } from "react";
import "./DateForm.css";
import { Context } from "../../../Context";
import useForm from "../../../hooks/useForm/useForm";
import formInputsData from "./formInputsData/formInputsData";

function DateForm() {
  function compareDates(from, to) {
    let date1 = new Date(from).getTime();
    let date2 = new Date(to).getTime();

    if (date1 > date2) return true;
  }

  const { setSelectedBotSettings } = useContext(Context);

  const { inputComponents, isSubmitInvalid, formValues, displayCustomError } =
    useForm(formInputsData);

  function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitInvalid()) return;

    if (compareDates(formValues.dateFrom, formValues.dateTo)) {
      displayCustomError("Please enter correct dates!");
      return;
    }
    setSelectedBotSettings((prev) => ({
      ...prev,
      date: { from: formValues.dateFrom, to: formValues.dateTo },
    }));
  }

  return (
    <div className="dateForm">
      <div className="dateForm__formContainer">
        <form className="dateForm__form" onSubmit={handleSubmit}>
          <h2 className="dateForm__title">Select date range</h2>
          <div className="dateForm__inputsContainer">
            {inputComponents}
            <input type="submit" className="dateForm__btn" value="Test" />
          </div>
        </form>
        <p className="dateForm__description">
          *When you push Start Button, you will see how bot would act if it was
          working during selected date period.
        </p>
      </div>
    </div>
  );
}

export default DateForm;
