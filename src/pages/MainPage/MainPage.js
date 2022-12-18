import React, { useState, useContext } from "react";
import ExchangeCard from "../../components/ExchangeCards/ExchangeCard/ExchangeCard";
import ExchangeCardEdit from "../../components/ExchangeCards/ExchangeCardEdit/ExchangeCardEdit";
import NewExchangeCard from "../../components/ExchangeCards/NewExchangeCard/NewExchangeCard";
import "./MainPage.css";

import {Context} from "../../Context";

function MainPage() {

  const [showModal, setShowModal] = useState(false);

  const {exchangesList} = useContext(Context)

  console.log(exchangesList)


  return (
    <main className="main">
      {showModal && <ExchangeCardEdit setShowModal={setShowModal}/>}
      <div className="main__container">
        <div className="main__titleContainer">
          <h2>Выбрать биржу</h2>
        </div>
        <div className="main__cardsContainer">
          <ExchangeCard
            content={{ name: "Binance", id: 1, img: "binance.png" }}
            setShowModal={setShowModal}
          />
          <ExchangeCard
            content={{ name: "Binance", id: 2, img: "binance.png" }}
            setShowModal={setShowModal}
          />
          <ExchangeCard
            content={{ name: "Binance", id: 3, img: "binance.png" }}
            setShowModal={setShowModal}
          />
          <NewExchangeCard setShowModal={setShowModal} />
        </div>
      </div>
    </main>
  );
}

export default MainPage;
