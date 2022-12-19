import React, { useContext, useState } from "react";
import "./EditExchangeModal.css";
import { AiOutlineClose } from "react-icons/ai";
import { Context } from "../../../Context";

function EditExchangeModal({ setShowEditModal, exchangeData }) {
  const { exchangeName } = exchangeData;

  const [editedExchange, setEditedExchange] = useState(exchangeData);
  const { setUserExchanges } = useContext(Context);

  function saveClickHandler() {
    setUserExchanges((prev) => {
      return [
        ...prev.filter((exch) => exch.id !== exchangeData.id),
        editedExchange,
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
            <h2>{exchangeName}</h2>
          </div>
          <div className="editExchangeModal__formContainer">
            <form className="editExchangeModal__keyForm" autoComplete="off">
              <div className="editExchangeModal__keyFormInput--publicKey">
                <label htmlFor="">Public Key</label>
                <input
                  type="text"
                  placeholder="Enter your public key"
                  value={editedExchange.publicKey}
                  onChange={(e) =>
                    setEditedExchange((prev) => ({
                      ...prev,
                      publicKey: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="editExchangeModal__keyFormInput--secretKey">
                <label htmlFor="">Secret Key</label>
                <input
                  type="password"
                  placeholder="Enter your Secret Key"
                  value={editedExchange.secretKey}
                  onChange={(e) =>
                    setEditedExchange((prev) => ({
                      ...prev,
                      secretKey: e.target.value,
                    }))
                  }
                />
              </div>
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
