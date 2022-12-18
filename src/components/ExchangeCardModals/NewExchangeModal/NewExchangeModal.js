import React, { useContext, useState } from "react";
import { Context } from "../../../Context";
import { AiOutlineClose } from "react-icons/ai";
import "./NewExchangeModal.css";

function NewExchangeModal({ setShowNewModal }) {
  const { exchangesList, userExchanges, setUserExchanges } =
    useContext(Context);
  const [newExchange, setNewExchange] = useState({
    exchangeName: "",
    publicKey: "",
    secretKey: "",
  });

  function clickHandler() {
    setUserExchanges((prev) => [...prev, newExchange]);
    setShowNewModal(false);
    console.log(userExchanges);
  }

  return (
    <div className="newExchangeModal">
      <div className="newExchangeModal__inner">
        <AiOutlineClose
          className="newExchangeModal__cross"
          onClick={() => setShowNewModal(false)}
        />
        <select
          value={newExchange.exchangeName}
          onChange={(e) =>
            setNewExchange({ ...newExchange, exchangeName: e.target.value })
          }
        >
          <option>---</option>
          {exchangesList.map((item) => {
            return <option key={item.id}>{item.name}</option>;
          })}
        </select>
        <form class="form">
          <div class="form__col">
            <div class="form__row">
              <label class="form__block">
                <div class="form__title">Имя</div>
                <input
                  type="text"
                  class="form__input"
                  value={newExchange.public}
                  onChange={(e) =>
                    setNewExchange({ ...newExchange, public: e.target.value })
                  }
                />
              </label>
              <label class="form__block">
                <div class="form__title">Телефон</div>
                <input type="text" class="form__input" />
              </label>
            </div>
          </div>
          <button onClick={clickHandler}>Save</button>
        </form>
      </div>
    </div>
  );
}

export default NewExchangeModal;
