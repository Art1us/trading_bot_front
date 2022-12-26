import React, { useContext } from "react";
import { Context } from "../../../Context";
import { AiOutlineClose } from "react-icons/ai";
import "./NewExchangeModal.css";
import { v4 as uuidv4 } from "uuid";
import useForm from "../../../hooks/useForm/useForm";
import formInputsData from "./formInputsData/formInputsData";

function NewExchangeModal({ setShowNewModal }) {
  const { exchangesList, setUserExchanges } = useContext(Context);

  formInputsData[0].list = [...exchangesList]

  const { inputComponents, isSubmitInvalid, formValues } = useForm(formInputsData);

  function submitHandler(e) {
    e.preventDefault();
    if (isSubmitInvalid()) return;
    setUserExchanges((prev) => [...prev, { ...formValues, id: uuidv4() }]);
    setShowNewModal(false);
  }

  return (
    <div className="newExchangeModal">
      <div className="newExchangeModal__inner">
        <AiOutlineClose
          className="newExchangeModal__cross"
          onClick={() => setShowNewModal(false)}
        />
        <form className="newExchangeModal__form" onSubmit={submitHandler}>
          <div className="newExchangeModal__formCol">{inputComponents}</div>
          <button className="newExchangeModal__saveBtn">Save</button>
        </form>
      </div>
    </div>
  );
}

export default NewExchangeModal;
