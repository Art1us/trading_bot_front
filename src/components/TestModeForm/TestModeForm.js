import React from "react";
import useForm from "../../hooks/useForm/useForm";

function TestModeForm({ setShowGraphs }) {
  const todayDate = new Date().toISOString().split("T")[0];
  const twoYearsAgo = new Date(
    new Date().setFullYear(new Date().getFullYear() - 2)
  )
    .toISOString()
    .split("T")[0];

  function compareDates(from, to) {
    let date1 = new Date(from).getTime();
    let date2 = new Date(to).getTime();

    if (date1 > date2) return true;
  }

  const inputs = [
    {
      id: 1,
      name: "dateFrom",
      type: "date",
      placeholder: "",
      className: "testMode__dateFormInput",
      inputClassName: "",
      otherInputProps: { min: twoYearsAgo, max: todayDate },
      label: {
        className: "",
        text: "From:",
      },
      errors: [
        {
          condition: "^s*$",
          message: "Please enter date from!",
        },
      ],
    },
    {
      id: 2,
      name: "dateTo",
      type: "date",
      placeholder: "",
      className: "testMode__dateFormInput",
      inputClassName: "",
      otherInputProps: { min: twoYearsAgo, max: todayDate },
      label: {
        className: "",
        text: "To:",
      },
      errors: [
        {
          condition: "^s*$",
          message: "Please enter date to!",
        },
      ],
    },
  ];

  const { inputComponents, isSubmitInvalid, formValues, displayCustomError } =
    useForm(inputs);

  function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitInvalid()) return;

    if (compareDates(formValues.dateFrom, formValues.dateTo)) {
      displayCustomError("Please enter correct dates!");
      return;
    }

    console.log(formValues);

    setShowGraphs(true);
  }

  return (
    <div className="testMode__formContainer">
      <form className="testMode__dateForm" onSubmit={handleSubmit}>
        {inputComponents}
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
