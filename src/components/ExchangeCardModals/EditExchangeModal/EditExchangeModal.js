import React from "react";
import "./EditExchangeModal.css";
import { AiOutlineClose } from "react-icons/ai";

function EditExchangeModal({ setShowEditModal }) {
  return (
    <div className="editExchangeModal">
      <div className="editExchangeModal__inner">
        <AiOutlineClose
          className="editExchangeModal__cross"
          onClick={() => setShowEditModal(false)}
        />
        <div className="editExchangeModal__container">
          <div className="editExchangeModal__title">
            <h2>Binance</h2>
          </div>
          <div className="editExchangeModal__formContainer">
            <form className="editExchangeModal__keyForm">
              <div className="editExchangeModal__keyFormInput--publicKey">
                <label htmlFor="">Public Key</label>
                <input type="text" placeholder="Enter your public key" />
              </div>
              <div className="editExchangeModal__keyFormInput--secretKey">
                <label htmlFor="">Secret Key</label>
                <input type="text" placeholder="Enter your Secret Key"/>
              </div>
              <div className="editExchangeModal_formBtn">
                <button className="editExchangeModal__saveBtn">Save</button>
                <button className="editExchangeModal__deleteBtn">Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditExchangeModal;
