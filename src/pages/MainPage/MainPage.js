import React, { useState, useContext } from "react"
import { Context } from "../../Context"
import ExchangeCard from "../../components/ExchangeCards/ExchangeCard/ExchangeCard"
import AddExchangeCard from "../../components/ExchangeCards/AddExchangeCard/AddExchangeCard"
import NewExchangeModal from "../../components/ExchangeCardModals/NewExchangeModal/NewExchangeModal"
import "./MainPage.css"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import DeleteExchangeModal from "../../components/ExchangeCardModals/DeleteExchangeModal/DeleteExchangeModal"
import { ExchangeCardsContext } from "../../contexts/ExchangeCardsContext"

function MainPage() {
  const [showNewModal, setShowNewModal] = useState(false)

  const { userExchanges } = useContext(Context)
  const { showDeleteModal, setShowDeleteModal } =
    useContext(ExchangeCardsContext)

  return (
    <main className="main">
      <NewExchangeModal
        showNewModal={showNewModal}
        setShowNewModal={setShowNewModal}
      />
      <DeleteExchangeModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
      />
      <div className="main__container">
        <div className="main__titleContainer">
          <h2>Select your exchange</h2>
        </div>
        <TransitionGroup className="main__cardsContainer">
          {!!userExchanges.length &&
            userExchanges.map(exch => {
              const { exchange, secretKey, publicKey, id } = exch
              return (
                <CSSTransition
                  key={id}
                  timeout={300}
                  classNames="exchangeAddDeleteAnimation"
                >
                  <ExchangeCard
                    exchange={exchange}
                    publicKey={publicKey}
                    secretKey={secretKey}
                    id={id}
                    img="binance.png"
                    setShowDeleteModal={setShowDeleteModal}
                  />
                </CSSTransition>
              )
            })}
          <AddExchangeCard setShowNewModal={setShowNewModal} />
        </TransitionGroup>
      </div>
    </main>
  )
}

export default MainPage
