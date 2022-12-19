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
        <form class="newExchangeModal__form">
          <label class="newExchangeModal__formBlock">
            <div class="newExchangeModal__formTitle">Select Exchanges</div>
            <select className="newExchangeModal__formInput">
              {exchangesList.map((item) => {
                return <option key={item.id}>{item.name}</option>;
              })}
            </select>
          </label>
          <div class="newExchangeModal__formCol">
            <div class="newExchangeModal__formRow">
              <label class="newExchangeModal__formBlock">
                <div class="newExchangeModal__formTitle">Public Key</div>
                <input type="text" class="newExchangeModal__formInput" />
              </label>
              <label class="newExchangeModal__formBlock">
                <div class="newExchangeModal__formTitle">Secret Key</div>
                <input type="text" class="newExchangeModal__formInput" />
              </label>
            </div>
          </div>
          <button className="newExchangeModal__btn">Save</button>
        </form>
      </div>
    </div>
  );
}

export default NewExchangeModal;
