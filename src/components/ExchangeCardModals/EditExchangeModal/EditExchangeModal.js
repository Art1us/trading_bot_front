import React, { useContext } from "react";
import "./EditExchangeModal.css";
import { AiOutlineClose } from "react-icons/ai";
import { Context } from "../../../Context";
import useForm from "../../../hooks/useForm/useForm";

function EditExchangeModal({ setShowEditModal, exchangeData }) {
  const inputs = [
    {
      id: 1,
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
      id: 2,
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

  const { setUserExchanges } = useContext(Context);
  const { exchange } = exchangeData;
  const { inputComponents, isSubmitInvalid, formValues } = useForm(
    inputs,
    exchangeData
  );

  function saveClickHandler() {
    if (isSubmitInvalid()) return;
    setUserExchanges((prev) => {
      return [
        ...prev.filter((exch) => exch.id !== exchangeData.id),
        formValues,
      ];
    });
    setShowEditModal(false);
  }

  function deleteClickHandler() {
    setUserExchanges((prev) => [
      ...prev.filter((exch) => exch.id !== exchangeData.id),
    ]);
    setShowEditModal(false);
  }

  function closeHandler(e) {
    e.preventDefault();
    setShowEditModal(false);
  }

  return (
    <div className="editExchangeModal">
      <div className="editExchangeModal__inner">
        <AiOutlineClose
          className="editExchangeModal__cross"
          onClick={(e) => closeHandler(e)}
        />
        <div className="editExchangeModal__container">
          <div className="editExchangeModal__title">
            <h2>{exchange}</h2>
          </div>
          <div className="editExchangeModal__formContainer">
            <form className="editExchangeModal__keyForm" autoComplete="off">
              {inputComponents}
              <div className="editExchangeModal_formBtn">
                <button
                  type="button"
                  className="editExchangeModal__saveBtn"
                  onClick={saveClickHandler}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="editExchangeModal__deleteBtn"
                  onClick={deleteClickHandler}
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditExchangeModal;
