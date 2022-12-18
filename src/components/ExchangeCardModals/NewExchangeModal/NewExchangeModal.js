import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./NewExchangeModal.css";

function NewExchangeModal({ setShowNewModal }) {
  return (
    <div className="newExchangeModal">
      <div className="newExchangeModal__inner">
        <AiOutlineClose
          className="newExchangeModal__cross"
          onClick={() => setShowNewModal(false)}
        />
        NewExchangeModal
      </div>
    </div>
  );
}

export default NewExchangeModal;
