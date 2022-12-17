import React from "react";
import "./ExchangeCardEdit.css";
import { AiOutlineClose } from "react-icons/ai";

function ExchangeCardEdit({ setShowModal }) {
  return (
    <div className="exchangeCardEdit">
      <div className="exchangeCardEdit__inner">
        <AiOutlineClose
          className="exchangeCardEdit__cross"
          onClick={() => setShowModal(false)}
        />
      </div>
    </div>
  );
}

export default ExchangeCardEdit;
