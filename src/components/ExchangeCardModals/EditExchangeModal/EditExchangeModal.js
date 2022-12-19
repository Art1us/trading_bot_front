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
        EditExchangeModal
      </div>
    </div>
  );
} 

export default EditExchangeModal;
