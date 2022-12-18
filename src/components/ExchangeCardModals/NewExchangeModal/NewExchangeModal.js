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
        <form class="form">
        <div class="form__col">
          <div class="form__row">
            <label class="form__block">
              <div class="form__title">Имя</div>
              <input type="text" class="form__input" />
            </label>
            <label class="form__block">
              <div class="form__title">Телефон</div>
              <input type="text" class="form__input" />
            </label>
          </div>
        </div>
        <button>Save</button>
      </form>

      </div>
   
    </div>
  );
}

export default NewExchangeModal;
