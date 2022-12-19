import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import ExchangeCard from "../../components/ExchangeCards/ExchangeCard/ExchangeCard";
import AddExchangeCard from "../../components/ExchangeCards/AddExchangeCard/AddExchangeCard";
import NewExchangeModal from "../../components/ExchangeCardModals/NewExchangeModal/NewExchangeModal";
import "./MainPage.css";

function MainPage() {
  
  const [showNewModal, setShowNewModal] = useState(false);

  const { userExchanges } = useContext(Context);

  return (
    <main className="main">
      {showNewModal && <NewExchangeModal setShowNewModal={setShowNewModal} />}
      <div className="main__container">
        <div className="main__titleContainer">
          <h2>Выбрать биржу</h2>
        </div>
        <div className="main__cardsContainer">
          {!!userExchanges.length &&
            userExchanges.map((exch) => {
              const { exchangeName , secretKey, publicKey, id} = exch;
              return (
                <ExchangeCard
                  key={id}
                  exchangeName={exchangeName}
                  publicKey={publicKey}
                  secretKey={secretKey}
                  id={id}
                  img="binance.png"
                />
              );
            })}
          <AddExchangeCard setShowNewModal={setShowNewModal} />
        </div>
      </div>
    </main>
  );
}

export default MainPage;
