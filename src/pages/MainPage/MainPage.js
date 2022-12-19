import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import ExchangeCard from "../../components/ExchangeCards/ExchangeCard/ExchangeCard";
import AddExchangeCard from "../../components/ExchangeCards/AddExchangeCard/AddExchangeCard";
import EditExchangeModal from "../../components/ExchangeCardModals/EditExchangeModal/EditExchangeModal";
import NewExchangeModal from "../../components/ExchangeCardModals/NewExchangeModal/NewExchangeModal";
import "./MainPage.css";

function MainPage() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);

  const { userExchanges } = useContext(Context);

  return (
    <main className="main">
      {showEditModal && (
        <EditExchangeModal setShowEditModal={setShowEditModal} />
      )}
      {showNewModal && <NewExchangeModal setShowNewModal={setShowNewModal} />}
      <div className="main__container">
        <div className="main__titleContainer">
          <h2>Выбрать биржу</h2>
        </div>
        <div className="main__cardsContainer">
          {!!userExchanges.length &&
            userExchanges.map((exch, index) => {
              const { exchangeName, id } = exch;
              return (
                <ExchangeCard
                  key={index}
                  name={exchangeName}
                  id={id}
                  img="binance.png"
                  setShowEditModal={setShowEditModal}
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
