import React, { useState } from "react";
import ExchangeCard from "../../components/ExchangeCards/ExchangeCard/ExchangeCard";
import AddExchangeCard from "../../components/ExchangeCards/AddExchangeCard/AddExchangeCard";
import EditExchangeModal from "../../components/ExchangeCardModals/EditExchangeModal/EditExchangeModal";
import NewExchangeModal from "../../components/ExchangeCardModals/NewExchangeModal/NewExchangeModal";
import "./MainPage.css";

function MainPage() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);

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
          <ExchangeCard
            content={{ name: "Binance", id: 1, img: "binance.png" }}
            setShowEditModal={setShowEditModal}
          />
          <ExchangeCard
            content={{ name: "Binance", id: 2, img: "binance.png" }}
            setShowEditModal={setShowEditModal}
          />
          <ExchangeCard
            content={{ name: "Binance", id: 3, img: "binance.png" }}
            setShowEditModal={setShowEditModal}
          />
          <AddExchangeCard setShowNewModal={setShowNewModal} />
        </div>
      </div>
    </main>
  );
}

export default MainPage;
