import React from "react";
import "./CustomDateDropdown.css";
import useForm from "../../hooks/useForm/useForm";
import formInputsData from "./formInputsData/formInputsData";

function CustomDropdownList({ dropdownList, setDropdownList }) {
  function compareDates(from, to) {
    let date1 = new Date(from).getTime();
    let date2 = new Date(to).getTime();

    if (date1 > date2) return true;
  }

  const { inputComponents, isSubmitInvalid, formValues, displayCustomError } =
    useForm(formInputsData);

   function submitHandler(e) {
        e.preventDefault();
        /* if (isSubmitInvalid()) return;
    
        if (compareDates(formValues.dateFrom, formValues.dateTo)) {
          displayCustomError("Please enter correct dates!");
          return;
        } */
    
        setDropdownList(formValues)
    
      }

  return (
    <div className="customDateDropdown" onClick={(e) => e.stopPropagation()}>
      <form className="customDateDropdown__form" onSubmit={submitHandler}>
        <div className="customDateDropdown__inputsContainer">
          {inputComponents}
        </div>
        <input type="submit" className="customDateDropdown__startBtn" value="Change" />
      </form>
    </div>
  );
}

export default CustomDropdownList;
