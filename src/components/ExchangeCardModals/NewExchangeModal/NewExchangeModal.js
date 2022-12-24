import React, { useContext } from "react";
import { Context } from "../../../Context";
import { AiOutlineClose } from "react-icons/ai";
import "./NewExchangeModal.css";
import { v4 as uuidv4 } from "uuid";
import useForm from "../../../hooks/useForm/useForm";

function NewExchangeModal({ setShowNewModal }) {
  const { exchangesList, setUserExchanges } = useContext(Context);

  const inputs = [
    {
      id: 1,
      name: "exchange",
      type: "select",
      list: exchangesList,
      placeholder: "",
      className: "login__formBlock",
      inputClassName: "newExchangeModal__formInput",
      label: {
        className: "newExchangeModal__formTitle",
        text: "Select Exchanges",
      },
      errors: [
        {
          condition: "^s*$",
          message: "Please select your exchange!",
        },
      ],
    },
    {
      id: 2,
      name: "publicKey",
      type: "text",
      placeholder: "Enter your public key",
      className: "login__formBlock",
      inputClassName: "newExchangeModal__formInput",
      label: {
        className: "newExchangeModal__formTitle",
        text: "Public key",
      },
      errors: [
        {
          condition: "^s*$",
          message: "Please enter your public key!",
        },
        {
          condition: "^(.{1,7})$",
          message: "Please enter a valid public key!",
        },
      ],
    },
    {
      id: 3,
      name: "secretKey",
      type: "password",
      placeholder: "Enter your secret key",
      className: "login__formBlock",
      inputClassName: "newExchangeModal__formInput",
      label: {
        className: "newExchangeModal__formTitle",
        text: "Secret key",
      },
      errors: [
        {
          condition: "^s*$",
          message: "Please enter your secret key!",
        },
        {
          condition: "^(.{1,7})$",
          message: "Please enter a valid secret key!",
        },
      ],
    },
  ];

  const { inputComponents, isSubmitInvalid, formValues } = useForm(inputs);

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
