import React, { useState, useContext, useEffect } from "react"
import { Context } from "../../Context"
import ExchangeCard from "../../components/ExchangeCards/ExchangeCard/ExchangeCard"
import AddExchangeCard from "../../components/ExchangeCards/AddExchangeCard/AddExchangeCard"
import NewExchangeModal from "../../components/ExchangeCardModals/NewExchangeModal/NewExchangeModal"
import "./MainPage.css"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import DeleteExchangeModal from "../../components/ExchangeCardModals/DeleteExchangeModal/DeleteExchangeModal"
import { ExchangeCardsContext } from "../../contexts/ExchangeCardsContext"
import { useApi } from "../../hooks/useApi/useApi"

import { getUserExchanges } from "../../api/userExchanges/getUserExchanges"
import { useAuth } from "../../hooks/useAuth/useAuth"

function MainPage() {
  const [showNewModal, setShowNewModal] = useState(false)

  const { showDeleteModal, setShowDeleteModal } =
    useContext(ExchangeCardsContext)

  const { auth } = useAuth()
  const userExchanges = useApi(getUserExchanges)

  useEffect(
    () => {
      let mounted = true
      const controller = new AbortController()
      if (mounted) {
        userExchanges.request(auth?.access_token, controller)
      }
      return () => {
        mounted = false
        controller.abort()
      }
    },
    [
      /* refersh */
    ]
  )

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
          {!!userExchanges.response?.data?.data?.length &&
            userExchanges.response?.data?.data.map(exch => {
              const { name, secretKey, publicKey, id } = exch
              return (
                <CSSTransition
                  key={id}
                  timeout={300}
                  classNames="exchangeAddDeleteAnimation"
                >
                  <ExchangeCard
                    name={name}
                    /* publicKey={publicKey}
                    secretKey={secretKey} */
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
