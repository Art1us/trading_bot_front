import React from "react";
import useForm from "../../hooks/useForm/useForm";

function TestModeForm({ setShowGraphs }) {
  const inputs = [
    {
      id: 1,
      name: "dateFrom",
      type: "date",
      placeholder: "",
      className: "testMode__dateFormInput",
      inputClassName: "",
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

  const { inputComponents, isSubmitInvalid, formValues } = useForm(inputs);

  function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitInvalid()) return;

    console.log(formValues); //take dates

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
