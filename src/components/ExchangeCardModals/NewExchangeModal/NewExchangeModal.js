import React, { useContext, useState } from "react";
import { Context } from "../../../Context";
import { AiOutlineClose } from "react-icons/ai";
import "./NewExchangeModal.css";
import { v4 as uuidv4 } from "uuid";

function NewExchangeModal({ setShowNewModal }) {
  const { exchangesList, setUserExchanges } = useContext(Context);
  const [newExchange, setNewExchange] = useState({
    exchangeName: "",
    publicKey: "",
    secretKey: "",
    id: uuidv4(),
  });

  function clickHandler(e) {
    e.preventDefault();
    if (!newExchange.exchangeName) return;
    setUserExchanges((prev) => [...prev, newExchange]);
    setShowNewModal(false);
  }

  return (
    <div className="newExchangeModal">
      <div className="newExchangeModal__inner">
        <AiOutlineClose
          className="newExchangeModal__cross"
          onClick={() => setShowNewModal(false)}
        />

        <form className="newExchangeModal__form" autocomplete="off">
          <div className="newExchangeModal__formCol">
            <label className="newExchangeModal__formBlock">
              <div className="newExchangeModal__formTitle">
                Select Exchanges
              </div>
              <select
                className="newExchangeModal__formInput"
                value={newExchange.exchangeName}
                onChange={(e) =>
                  setNewExchange({
                    ...newExchange,
                    exchangeName: e.target.value,
                  })
                }
              >
                <option></option>
                {exchangesList.map((item) => {
                  return <option key={item.id}>{item.name}</option>;
                })}
              </select>
            </label>

            <label className="newExchangeModal__formBlock">
              <div className="newExchangeModal__formTitle">Public Key</div>
              <input
                placeholder="Enter your public key"
                type="text"
                autocomplete="off"
                className="newExchangeModal__formInput"
                value={newExchange.publicKey}
                onChange={(e) =>
                  setNewExchange({ ...newExchange, publicKey: e.target.value })
                }
              />
            </label>
            <label className="newExchangeModal__formBlock">
              <div className="newExchangeModal__formTitle">Secret Key</div>
              <input
                placeholder="Enter your secret key"
                type="password"
                autocomplete="off"
                className="newExchangeModal__formInput"
                value={newExchange.secretKey}
                onChange={(e) =>
                  setNewExchange({ ...newExchange, secretKey: e.target.value })
                }
              />
            </label>
          </div>
          <button className="newExchangeModal__saveBtn" onClick={clickHandler}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewExchangeModal;
