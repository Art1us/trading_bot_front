import React, { useContext } from "react";
import { Context } from "../../../Context";
import { AiOutlineClose } from "react-icons/ai";
import "./NewExchangeModal.css";

function NewExchangeModal({ setShowNewModal }) {
  const { exchangesList } = useContext(Context);

  return (
    <div className="newExchangeModal">
      <div className="newExchangeModal__inner">
        <AiOutlineClose
          className="newExchangeModal__cross"
          onClick={() => setShowNewModal(false)}
        />
        <select>
          {exchangesList.map((item) => {
            return <option key={item.id}>{item.name}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default NewExchangeModal;
